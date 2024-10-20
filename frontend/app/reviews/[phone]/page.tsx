// app/reviews/[phone]/page.tsx
import React from "react";
import { Metadata } from "next";

interface Phone {
  title: string;
  description: string;
  image: string;
  releaseDate: string;
  keywords: string;
  author: string;
}

const samplePhones: Record<string, Phone> = {
  "iphone-14": {
    title: "iPhone 14",
    description:
      "The iPhone 14 features an advanced camera system, exceptional battery life, and A15 Bionic chip for peak performance.",
    image: "/images/iphone-14.jpg",
    releaseDate: "2023-09-16",
    keywords: "iPhone 14, smartphone, Apple, mobile technology",
    author: "Kevin Wanyonyi",
  },
  "samsung-galaxy-s22": {
    title: "Samsung Galaxy S22",
    description:
      "The Samsung Galaxy S22 offers a stunning display, powerful camera features, and fast performance for the ultimate smartphone experience.",
    image: "/images/samsung-galaxy-s22.jpg",
    releaseDate: "2022-02-25",
    keywords: "Samsung Galaxy S22, smartphone, Android, mobile technology",
    author: "Kevin Wanyonyi",
  },
};

export const generateMetadata = ({
  params,
}: {
  params: { phone: string };
}): Metadata => {
  const phoneData = samplePhones[params.phone];
  return {
    title: phoneData ? `${phoneData.title} | Phone Reviews` : "Phone Review",
    description: phoneData
      ? phoneData.description
      : "Discover detailed phone reviews.",
    keywords: phoneData
      ? phoneData.keywords
      : "phone reviews, smartphone reviews",
  };
};

const PhoneDetails: React.FC<{ params: { phone: string } }> = ({ params }) => {
  const phone = samplePhones[params.phone];

  if (!phone) {
    return <div>Phone not found</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{phone.title}</h1>
      <img src={phone.image} alt={phone.title} className="w-full h-auto mb-4" />
      <p className="text-lg">{phone.description}</p>
      <p className="text-sm text-gray-600">
        Release Date: {new Date(phone.releaseDate).toLocaleDateString()}
      </p>
      <p className="text-sm text-gray-600">Reviewed by: {phone.author}</p>
    </div>
  );
};

// Function to generate static paths
export const generateStaticParams = async () => {
  return Object.keys(samplePhones).map((key) => ({
    phone: key,
  }));
};

export default PhoneDetails;
