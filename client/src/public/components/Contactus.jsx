import React from "react";

const  ContactSection = () => {
const offices = [
  {
    title: "Global Headquarters",
    location: "Bengaluru, Karnataka",
    email: "connect@borcella.com",
    hours: "Mon - Fri, 9:00 AM - 6:00 PM IST",
    description:
      "Our innovation hub where the core of Borcella LMS is crafted. Connect with us for partnerships and enterprise solutions.",
  },
  {
    title: "Client Engagement Center",
    location: "Mumbai, Maharashtra",
    email: "engage@borcella.com",
    hours: "Mon - Fri, 10:00 AM - 7:00 PM IST",
    description:
      "Talk to our sales and onboarding specialists. Perfect for institutions looking to transform learning digitally.",
  },
  {
    title: "Technology & R&D Lab",
    location: "Hyderabad, Telangana",
    email: "techlab@borcella.com",
    hours: "Mon - Sat, 10:00 AM - 6:00 PM IST",
    description:
      "Where innovation meets education. Collaborate with our dev team or explore technical integrations with Borcella LMS.",
  },
  {
    title: "North India Support Hub",
    location: "Delhi NCR",
    email: "support@borcella.com",
    hours: "Mon - Fri, 9:00 AM - 5:00 PM IST",
    description:
      "Assisting our northern region clients with dedicated onboarding, support, and customer success services.",
  },
];


  return (
    <div className=" px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offices.map((office, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 border border-indigo-100 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-mont-alt capitalize font-semibold text-indigo-700 mb-2">
                {office.title}
              </h3>
              <p className="text-gray-700 mb-1">
                📍 <span className="font-medium font-mont">{office.location}</span>
              </p>
              <p className="text-gray-600 mb-1">
                ✉️ <span className="text-sm font-mont">{office.email}</span>
              </p>
              <p className="text-gray-600 font-mont text-sm">
                🕒 {office.hours}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
