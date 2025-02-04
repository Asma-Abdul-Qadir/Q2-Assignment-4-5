import { FC } from 'react';

const About: FC = () => {
  return (
    <div className="bg-blue-50 py-16 px-8 sm:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        
        {/* About Section */}
        <section className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-700 leading-tight">
            About Me
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            A passionate Web Developer and UI/UX Designer, here to help you create meaningful digital experiences.
          </p>
        </section>

        {/* Profile Image and Introduction */}
        <section className="mt-12 flex flex-col items-center sm:flex-row sm:justify-between sm:items-start">
          <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-indigo-200 mb-6 sm:mb-0">
            <img
              src="/profile.jpg" 
              alt="Your Profile"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="sm:w-3/4 sm:ml-12 mt-6 sm:mt-0">
            <p className="text-lg text-gray-700 leading-relaxed">
              Hello! I’m Asma, a passionate web developer and UI/UX designer with a keen interest in creating seamless digital experiences. With a strong foundation in frontend development, my goal is to craft user-centric websites that are not only visually appealing but also functional and intuitive.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Over the past few years, I’ve worked on numerous projects, blending my creative instincts with technical expertise to deliver stunning websites and applications. I’m always on the lookout for new challenges, and I strive to stay ahead of industry trends to create cutting-edge web experiences.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-indigo-700">Key Skills & Expertise</h2>
          <ul className="mt-4 space-y-2 text-lg text-gray-700">
            <li>Frontend Development (React, Next.js, HTML, CSS, JavaScript)</li>
            <li>UI/UX Design (Wireframing, Prototyping, Figma, Adobe XD)</li>
            <li>Responsive Web Design</li>
            <li>Version Control (Git, GitHub)</li>
            <li>SEO Best Practices</li>
          </ul>
        </section>

        {/* Certifications Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-indigo-700">Certifications</h2>
          <ul className="mt-4 space-y-4 text-lg text-gray-700">
            <li>WordPress Development (Certified)</li>
            <li>Advanced SEO Techniques (Certified)</li>
            <li>Digital Marketing (Certified)</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-indigo-700">Let’s Connect</h2>
          <p className="mt-4 text-lg text-gray-700">
            Have a project in mind or just want to chat? Feel free to reach out to me through the contact form on my website.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block px-6 py-3 text-white bg-indigo-600 rounded-lg text-lg font-medium hover:bg-indigo-700 transition-all"
          >
            Get In Touch
          </a>
        </section>
      </div>
    </div>
  );
};

export default About;
