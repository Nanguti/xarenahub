import React from "react";
import Head from "next/head";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      title: "iPhone 14 Review",
      summary:
        "The iPhone 14 offers an improved camera system and longer battery life, making it a great choice for users.",
      image: "/images/iphone-14.jpg",
      datePublished: "2024-10-19",
      author: "Kevin Wanyonyi",
    },
    {
      id: 2,
      title: "Samsung Galaxy S22 Review",
      summary:
        "The Galaxy S22 combines a powerful processor with a stunning display, perfect for multimedia consumption.",
      image: "/images/galaxy-s22.jpg",
      datePublished: "2024-10-18",
      author: "Kevin Wanyonyi",
    },
  ];

  return (
    <div>
      <Head>
        <title>Latest Smartphone Reviews | Your Trusted Source</title>
        <meta
          name="description"
          content="Explore the latest smartphone reviews, insights, and recommendations to help you choose the best phone for your needs."
        />
        <meta
          name="keywords"
          content="smartphone reviews, iPhone reviews, Samsung reviews, technology insights"
        />
        <meta property="og:title" content="Latest Smartphone Reviews" />
        <meta
          property="og:description"
          content="Discover in-depth reviews of the latest smartphones including iPhone, Samsung, and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/reviews" />
        <meta property="og:image" content="/images/og-image.jpg" />{" "}
      </Head>

      <h2 className="text-2xl font-bold mb-4">Latest Smartphone Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review) => (
          <article
            key={review.id}
            itemScope
            itemType="http://schema.org/Review"
            className="p-4 border rounded-md shadow-md"
          >
            <h3 itemProp="itemReviewed" className="text-xl font-semibold">
              {review.title}
            </h3>
            <p itemProp="description" className="mb-2">
              {review.summary}
            </p>
            <img
              itemProp="image"
              src={review.image}
              alt={review.title}
              className="w-full h-auto rounded-md"
            />
            <p className="text-sm text-gray-600">
              <span itemProp="author">Reviewed by: {review.author}</span> |
              <time itemProp="datePublished" dateTime={review.datePublished}>
                {" "}
                {new Date(review.datePublished).toLocaleDateString()}
              </time>
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
