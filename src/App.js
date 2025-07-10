import React from "react";
<img src="/assets/profile.jpg" alt="Lokesh Kumar" className="rounded-full w-40 h-40 mb-6 mt-20" />


// Navbar Component
function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 fixed w-full z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Lokesh Kumar</h1>
        <ul className="flex gap-6">
          <li><a href="#home" className="hover:text-gray-300">Home</a></li>
          <li><a href="#about" className="hover:text-gray-300">About</a></li>
          <li><a href="#education" className="hover:text-gray-300">Education</a></li>
          <li><a href="#skills" className="hover:text-gray-300">Skills</a></li>
          <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-12">
      <p>&copy; 2025 Lokesh Kumar. All rights reserved.</p>
    </footer>
  );
}

// Pages
function Home() {
  return (
    <section id="home">
      <img
        src="/lokesh.jpg"
        alt="Lokesh Profile"
        className="profile-pic"
      />
      <h1>Hello, I'm Lokesh</h1>
      <p>Welcome to my portfolio website!</p>
    </section>
  );
}




function About() {
  return (
    <section id="about" className="py-16 px-6 bg-white dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-center">About Me</h2>
      <p className="max-w-3xl mx-auto text-center text-gray-700 dark:text-gray-300">
        I am Lokesh Kumar, an enthusiastic aspiring developer with a strong interest in web technologies and software engineering. My career objective is to work in a dynamic and challenging environment where I can contribute to innovative projects and continuously improve my skills. I am a quick learner, good communicator, and a team player.
      </p>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-2xl font-bold mb-4 text-center">Education</h2>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow mb-4">
          <h3 className="text-xl font-semibold">B.Tech in Computer Science</h3>
          <p className="text-gray-600 dark:text-gray-400">XYZ University, 2021 - 2025</p>
          <p className="text-gray-700 dark:text-gray-300">CGPA: 8.5</p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Git", "GitHub"];

  return (
    <section id="skills" className="py-16 px-6 bg-white dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-center">Technical Skills</h2>
      <ul className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <li key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

function Projects() {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built using React.js and Tailwind CSS.",
      tech: "React, Tailwind",
      link: "https://github.com/yourusername/portfolio",
    },
    {
      title: "Weather App",
      description: "Fetches weather data using an API.",
      tech: "HTML, CSS, JavaScript",
      link: "https://github.com/yourusername/weather-app",
    },
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-2xl font-bold mb-4 text-center">Projects</h2>
      <div className="grid gap-6 max-w-5xl mx-auto md:grid-cols-2">
        {projectList.map((project, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-2 text-gray-600 dark:text-gray-300">{project.description}</p>
            <p className="text-sm text-gray-500 mb-2">{project.tech}</p>
            <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="py-16 px-6 bg-white dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-center">Certifications</h2>
      <ul className="list-disc max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
        <li>React Basics – Coursera</li>
        <li>JavaScript Fundamentals – Udemy</li>
        <li>Git & GitHub – freeCodeCamp</li>
      </ul>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-2xl font-bold mb-4 text-center">Internship / Work Experience</h2>
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-4 rounded shadow">
        <h3 className="text-xl font-semibold">Frontend Intern - NRKS Skill Development Pvt. Ltd.</h3>
        <p className="text-gray-600 dark:text-gray-400">June 2025 - July 2025</p>
        <p className="text-gray-700 dark:text-gray-300 mt-2">Worked on building a portfolio website using React.js. Learned best practices in UI/UX and code structure.</p>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="py-16 px-6 bg-white dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-center">Achievements / Awards</h2>
      <ul className="list-disc max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
        <li>Top Performer in Web Development Bootcamp</li>
        <li>Completed 100 Days of Code Challenge</li>
        <li>Hackathon Finalist - CodeSprint 2024</li>
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact</h2>
      <div className="text-center text-gray-700 dark:text-gray-300">
        <p>Email: <a href="mailto:lokesh@example.com" className="text-blue-500">lokesh@example.com</a></p>
        <p>Phone: +91 98765 43210</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/lokeshkumar" target="_blank" rel="noreferrer" className="text-blue-500">linkedin.com/in/lokeshkumar</a></p>
        <p>GitHub: <a href="https://github.com/lokeshkumar" target="_blank" rel="noreferrer" className="text-blue-500">github.com/lokeshkumar</a></p>
      </div>
    </section>
  );
}

// Main App Component
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
