import os
import re
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

# List of URLs to scrape
urls = [
    "https://www.apple.com/ke/newsroom/topics/iphone/",
    "https://www.apple.com/ke/newsroom/2024/09/the-iphone-16-lineup-airpods-4-apple-watch-series-10-arrive-around-the-world/",
    "https://www.apple.com/ke/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
    "https://www.apple.com/ke/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/",
    "https://www.apple.com/ke/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
    "https://www.apple.com/ke/newsroom/2024/09/ios-18-is-available-today-making-iphone-more-personal-and-capable-than-ever/",
    "https://www.apple.com/ke/newsroom/2024/09/apple-introduces-iphone-16-iphone-16-plus/",
    "https://www.apple.com/ke/newsroom/2024/09/apple-debuts-iphone-16-pro-iphone-16-pro-max/"
]

output_image_folder = "iphone_images"
output_video_folder = "iphone_videos"
os.makedirs(output_image_folder, exist_ok=True)
os.makedirs(output_video_folder, exist_ok=True)

background_url_pattern = re.compile(r'url\((\'|")?(https?://[^\s\'")]+)(\'|")?\)')

# Function to download media content
def download_content(url, output_folder, content_type="image"):
    response = requests.get(url)
    if response.status_code == 200:
        filename = os.path.join(output_folder, os.path.basename(url))
        with open(filename, "wb") as f:
            f.write(response.content)
        print(f"Downloaded {filename}")
    else:
        print(f"Failed to download {content_type} from {url}")

# Loop through each URL to scrape content
for url in urls:
    response = requests.get(url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, "html.parser")

        # Download images from <img> tags
        img_tags = soup.find_all("img")
        for img in img_tags:
            img_url = img.get("src")
            if img_url:
                img_url = urljoin(url, img_url)
                download_content(img_url, output_image_folder, "image")

        # Download background images from <style> tags
        style_tags = soup.find_all("style")
        for style in style_tags:
            style_content = style.string
            if style_content:
                # Find all background image URLs in the style content
                urls = background_url_pattern.findall(style_content)
                for match in urls:
                    img_url = match[1]
                    img_url = urljoin(url, img_url)
                    download_content(img_url, output_image_folder, "image")

        # Download videos from <video> and <source> tags
        video_tags = soup.find_all(["video", "source"])
        for video in video_tags:
            video_url = video.get("src")
            if video_url:
                video_url = urljoin(url, video_url)
                download_content(video_url, output_video_folder, "video")

    else:
        print(f"Failed to retrieve the page at {url}. Status code: {response.status_code}")
