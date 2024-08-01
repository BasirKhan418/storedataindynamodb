import React from 'react';

const Portfolio = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section id="hero" className="bg-blue-600 text-white flex flex-col items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Partha Sarathi</h1>
          <p className="text-lg md:text-2xl mb-8">Cloud Engineer & Infrastructure Specialist</p>
          <a href="#projects" className="bg-yellow-500 text-gray-800 py-2 px-6 rounded-lg hover:bg-yellow-600 transition duration-300">Explore My Work</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg max-w-2xl mx-auto">
            I am a Cloud Engineer with a strong background in designing, deploying, and managing cloud-based infrastructure. My expertise includes working with AWS, Azure, Google Cloud, and implementing robust, scalable solutions for various business needs. I am passionate about optimizing cloud resources and ensuring high availability and security for applications.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">AWS</h3>
              <p className="text-gray-700">Expert in AWS services including EC2, S3, RDS, Lambda, and CloudFormation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Azure</h3>
              <p className="text-gray-700">Proficient in Azure services like Virtual Machines, Azure Storage, and Azure DevOps.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Google Cloud</h3>
              <p className="text-gray-700">Experienced with Google Cloud Platform services including Compute Engine, Cloud Storage, and BigQuery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Project  1</h3>
              <p className="text-gray-700">Designed a scalable cloud architecture for a high-traffic application, leveraging AWS services for load balancing and auto-scaling.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Project  2</h3>
              <p className="text-gray-700">Implemented a CI/CD pipeline using Azure DevOps, automating the deployment of applications to multiple environments.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Project 3</h3>
              <p className="text-gray-700">Developed a disaster recovery plan using Google Cloud's storage solutions to ensure data integrity and business continuity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg mb-8">Feel free to reach out to me for any cloud-related consultations, job opportunities, or collaborations.</p>
          <a href="mailto:parthsarthi@gmail.com" className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">Contact Me</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Partha Sarathi by Deploylite. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
