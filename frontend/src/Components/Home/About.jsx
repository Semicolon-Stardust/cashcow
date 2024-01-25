import React from "react";
import AboutCards from "../Utilities/Cards/AboutCards";

function About() {

    const AboutDetails = [
        {
            id: 0,
            name: "Aryan Gulati",
            image: "https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
            position: "Founder / CEO",
            description: "I am an ambitious workaholic, but apart from that, pretty simple person.",
            linkedin: "https://www.linkedin.com/",
            github: "",
        },
        {
            id: 1,
            name: "Neelanjan Mukherji",
            image: "https://images.unsplash.com/photo-1520409364224-63400afe26e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
            position: "Founder / CEO",
            description: "I am an ambitious workaholic, but apart from that, pretty simple person.",
            linkedin: "https://www.linkedin.com/",
            github: "",
        },
        {
            id: 2,
            name: "Muteen Nabi Kundangar",
            image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
            position: "Founder / CEO",
            description: "I am an ambitious workaholic, but apart from that, pretty simple person.",
            linkedin: "https://www.linkedin.com/",
            github: "",
        },
        {
            id: 2,
            name: "Rishit Jain",
            image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
            position: "Founder / CEO",
            description: "I am an ambitious workaholic, but apart from that, pretty simple person.",
            linkedin: "https://www.linkedin.com/",
            github: "",
        },
    ];
  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Our leadership
          </h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Creative people
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AboutDetails.map((AboutDetail) => (
                <AboutCards
                    key={AboutDetail.id}
                    name={AboutDetail.name}
                    image={AboutDetail.image}
                    position={AboutDetail.position}
                    description={AboutDetail.description}
                    linkedin={AboutDetail.linkedin}
                    github={AboutDetail.github}
                />
            ))}
        </div>
      </div>
    </div>
  );
}

export default About;
