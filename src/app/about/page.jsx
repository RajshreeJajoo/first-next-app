import React from "react";
import Image from "next/image";
const AboutPage = () => {
  return (
    <>
      <div className="items-center justify-items-center  bg-green-300 min-h-screen w-full">
        <section className="max-w-2xl mx-auto text-center  px-4">
          <p className="text-gray-700 text-lg mb-4 pt-20">
            Hi, I'm Rajshree — a frontend developer who enjoys building
            beautiful and high-performance applications using React and Next.js.
            I specialize in responsive design, API integration, and creating
            SEO-friendly websites.
          </p>
          <p className="text-gray-600">
            Frontend Engineer with 5+ years of experience building scalable,
            high-performance web and mobile apps using React.js, Next.js,
            TypeScript, and React Native. Skilled in building modern UI/UX with
            Tailwind CSS, Material UI, and Fluent UI. Experienced in REST APIs,
            testing, CI/CD, Agile, and component-driven architecture. Passionate
            about performance optimisation, clean code, and cross- platform
            consistency.
          </p>
        </section>

        <Image
          className="mt-10"
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220416200936/Top-10-Front-End-Developer-Skills-That-You-Need-in-2022.png"
          alt="Top Skills"
          width={600}
          height={400}
        />
      </div>
    </>
  );
};

export default AboutPage;
