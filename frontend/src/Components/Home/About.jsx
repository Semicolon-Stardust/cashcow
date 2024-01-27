import React from "react";
import AboutCards from "../Utilities/Cards/AboutCards";

function About() {

    const AboutDetails = [
        {
            id: 0,
            name: "Aryan Gulati",
            image: "https://media.licdn.com/dms/image/D4D35AQEvnMryQnU6RA/profile-framedphoto-shrink_200_200/0/1650471128383?e=1706896800&v=beta&t=PqpNpPP8SqPlJJ1vlmNu_ozfkjDdUrDqo8pii-kOGrY",
            position: "Team Leader",
            // description: "I am an ambitious workaholic, but apart from that, pretty simple person.",
            linkedin: "https://www.linkedin.com/in/vehehgito/",
            github: "https://github.com/vehehgito",
        },
        {
            id: 1,
            name: "Neelanjan Mukherji",
            image: "https://avatars.githubusercontent.com/u/58321614?v=4",
            position: "React Developer",
            description: "I am an ambitious workaholic, but apart from that, pretty simple person.",
            linkedin: "https://www.linkedin.com/in/neelanjan-mukherji/",
            github: "https://github.com/Maverick7274",
        },
        {
            id: 2,
            name: "Muteen Nabi Kundangar",
            image: "https://media.licdn.com/dms/image/D4D35AQFagnSUV7ZtgQ/profile-framedphoto-shrink_200_200/0/1652689835622?e=1706896800&v=beta&t=xfIGX70dDiUXnyoZcYAn8gWKRe4T72F9BX316UBkhs4",
            position: "Backend Developer",
            description: "I am an ambitious workaholic, but apart from that, pretty simple person.",
            linkedin: "https://www.linkedin.com/in/muteen-nabi-kundangar-79a27a187/",
            github: "https://github.com/muteenk",
        },
        {
            id: 2,
            name: "Rishit Jain",
            image: "https://media.licdn.com/dms/image/C4D03AQGP99HXASEEAQ/profile-displayphoto-shrink_200_200/0/1650382506341?e=1711584000&v=beta&t=wkUlD04RMFwe_jl2iDWZiU243elae8iM25y7dME2wrE",
            position: "Something",
            description: "I am an ambitious workaholic, but apart from that, pretty simple person.",
            linkedin: "https://www.linkedin.com/in/rishitjain48/",
            github: "https://github.com/Rishitjain4874",
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
                />
            ))}
        </div>
      </div>
    </div>
  );
}

export default About;
