import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

# URL to scrape
url = "https://www.samsung.com/africa_en/mobile/"

# Directory to save images
img_dir = 'sms_images'
os.makedirs(img_dir, exist_ok=True)

# Send a GET request to the URL
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

# Find all image tags
img_tags = soup.find_all('img')

# Loop through image tags and download images
for index, img in enumerate(img_tags, start=1):
    img_url = urljoin(url, img.get('src'))
    img_name = os.path.join(img_dir, f'image_{index}.jpg')  # Change extension as needed
    
    # Download image
    try:
        img_data = requests.get(img_url).content
        with open(img_name, 'wb') as f:
            f.write(img_data)
    except Exception as e:
        print(f"Could not download {img_url}: {e}")

print("Images downloaded and renamed successfully.")
