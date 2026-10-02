import { motion } from "framer-motion";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

// Google Drive preview links
const tsfDemo =
  "https://drive.google.com/file/d/1CmWcLYrw4X9ZyAoz0W12StYPgk_zFVqN/preview";

const panoramaDemo =
  "https://drive.google.com/file/d/1ChRa-ZzzG_jYmEJiZqmbsdLc8CwWb86k/preview";

const processDemo =
  "https://drive.google.com/file/d/1vV6rsre3v27DEa-JU9MC0J57bd2SFrXi/preview";

export default function App() {
  const projects = [
    {
      title: "TSF Analyzer",
      desc: "Python and Django-based application for analyzing large technical support files and automating configuration analysis, reducing manual effort by 70%.",
      video: tsfDemo,
    },
    {
      title: "Panorama Characterization Tool",
      desc: "Python-based automation framework for configuration validation, CLI/API testing, and generating test reports for enterprise software workflows.",
      video: panoramaDemo,
    },
    {
      title: "Automation Tracker",
      desc: "Web-based tool for tracking automation coverage across TestRail profiles and providing visibility into automation health.",
      video: processDemo,
    },
  ];

  const skills = {
    languages: ["Python", "Java", "JavaScript", "SQL"],
    backend: ["Django", "FastAPI", "Flask", "REST APIs"],
    databases: ["MySQL", "PostgreSQL", "MongoDB"],
    cloudDevOps: [
      "AWS",
      "Azure",
      "Docker",
      "Jenkins",
      "CI/CD",
      "Linux",
    ],
    testingTools: ["PyTest", "Git", "GitHub", "Jira"],
    data: ["Pandas", "NumPy", "Matplotlib"],
    frontend: ["HTML", "CSS", "React"],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 text-gray-900 font-sans">

      {/* ================= HERO ================= */}
      <section className="text-center py-20 px-6">
        <motion.img
          src="/profile.jpg"
          alt="Ramyalakshmi R S"
          className="w-36 h-36 rounded-full mx-auto border-4 border-orange-300 shadow-lg mb-6 object-cover"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-orange-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ramyalakshmi R S
        </motion.h1>

        <p className="text-xl mt-3 font-medium">
          Software Engineer
        </p>

        <p className="mt-2 text-gray-600 text-lg">
          Python · Backend Development · REST APIs · Databases
        </p>

        <p className="mt-2 text-gray-500">
          📍 India
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="mailto:rscsramya@gmail.com"
            className="hover:scale-125 transition-transform"
            aria-label="Email"
          >
            <Mail className="text-orange-600" size={30} />
          </a>

          <a
            href="https://www.linkedin.com/in/ramyalakshmi-r-s"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-125 transition-transform"
            aria-label="LinkedIn"
          >
            <Linkedin className="text-orange-600" size={30} />
          </a>

          <a
            href="https://github.com/ramya01mar"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-125 transition-transform"
            aria-label="GitHub"
          >
            <Github className="text-orange-600" size={30} />
          </a>
        </div>

        <Button className="mt-8 bg-orange-600 hover:bg-orange-700 text-white text-lg rounded-xl px-8 py-3 shadow-md">
          <a href="/Ramyalakshmi_Resume.pdf" download>
            Download Resume
          </a>
        </Button>
      </section>


      {/* ================= ABOUT ================= */}
      <motion.section
        className="max-w-3xl mx-auto text-center py-16 px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-semibold mb-6 text-orange-600">
          About Me
        </h2>

        <p className="text-lg leading-relaxed text-gray-700">
          I’m a Software Engineer with experience building backend
          applications, REST APIs, automation solutions, and data-processing
          workflows using Python. I have worked with Django, databases,
          CI/CD pipelines, cloud environments, and automated testing.
          I enjoy solving engineering problems, improving application
          workflows, and building reliable software solutions.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mt-5">
          I’m currently learning{" "}
          <strong>Generative AI, LLMs, RAG, embeddings, and AI application development</strong>{" "}
          and exploring how AI can be integrated into practical software
          applications.
        </p>
      </motion.section>


      {/* ================= EXPERIENCE ================= */}
      <motion.section
        className="bg-white py-16 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-semibold text-center mb-10 text-orange-600">
          Professional Experience
        </h2>

        <Card className="max-w-4xl mx-auto shadow-xl rounded-2xl border border-orange-100 hover:shadow-2xl transition">
          <CardContent>
            <h3 className="text-2xl font-bold text-gray-900">
              Software Engineer – Palo Alto Networks
            </h3>

            <p className="text-orange-600 font-medium mt-1">
              2023 – Present
            </p>

            <ul className="list-disc list-inside mt-5 space-y-3 text-left text-gray-700 text-lg">

              <li>
                Developed Python-based backend applications and automation
                solutions for enterprise software workflows.
              </li>

              <li>
                Built and maintained REST API integrations and
                data-processing workflows using Python and Django.
              </li>

              <li>
                Worked with MySQL, MongoDB, Azure services, and
                large configuration and log datasets.
              </li>

              <li>
                Developed automated testing and validation workflows using
                Python and PyTest.
              </li>

              <li>
                Worked with Jenkins, Docker, Git, and CI/CD pipelines to
                support software development and validation.
              </li>

              <li>
                Investigated failures, performed root-cause analysis,
                and collaborated with engineering teams to resolve issues.
              </li>

            </ul>
          </CardContent>
        </Card>
      </motion.section>


      {/* ================= PROJECTS ================= */}
      <motion.section
        className="py-16 px-6 bg-orange-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-semibold text-center mb-12 text-orange-600">
          Professional Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {projects.map((project) => (
            <Card
              key={project.title}
              className="rounded-2xl shadow-lg overflow-hidden bg-white hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              <CardContent className="p-6">

                <h3 className="font-semibold text-xl text-orange-700 mb-3">
                  {project.title}
                </h3>

                <p className="text-md text-gray-600 mb-4">
                  {project.desc}
                </p>

                <div className="relative w-full h-56">
                  <iframe
                    src={project.video}
                    title={project.title}
                    className="w-full h-full rounded-xl shadow-md"
                    allow="autoplay"
                  ></iframe>
                </div>

              </CardContent>
            </Card>
          ))}

        </div>
      </motion.section>


      {/* ================= SKILLS ================= */}
      <motion.section
        className="bg-white py-16 px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-semibold mb-10 text-center text-orange-600">
          Technical Skills
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">

          <SkillCard
            title="Programming Languages"
            skills={skills.languages}
          />

          <SkillCard
            title="Backend Development"
            skills={skills.backend}
          />

          <SkillCard
            title="Databases"
            skills={skills.databases}
          />

          <SkillCard
            title="Cloud & DevOps"
            skills={skills.cloudDevOps}
          />

          <SkillCard
            title="Testing & Tools"
            skills={skills.testingTools}
          />

          <SkillCard
            title="Data & Analytics"
            skills={skills.data}
          />

          <SkillCard
            title="Frontend"
            skills={skills.frontend}
          />

        </div>
      </motion.section>


      {/* ================= CURRENTLY LEARNING ================= */}
      <motion.section
        className="py-16 px-6 bg-orange-50"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-semibold text-center mb-8 text-orange-600">
          Currently Learning
        </h2>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">

          <p className="text-lg text-gray-700 leading-relaxed">
            <span className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full m-2 font-medium">
              Generative AI
            </span>

            <span className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full m-2 font-medium">
              LLMs
            </span>

            <span className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full m-2 font-medium">
              RAG
            </span>

            <span className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full m-2 font-medium">
              Embeddings
            </span>

            <span className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full m-2 font-medium">
              Vector Databases
            </span>

            <span className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full m-2 font-medium">
              AI Application Development
            </span>
          </p>

        </div>
      </motion.section>


      {/* ================= ACHIEVEMENTS ================= */}
      <motion.section
        className="bg-white py-16 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-semibold text-center mb-10 text-orange-600">
          Achievements
        </h2>

        <div className="max-w-4xl mx-auto">

          <Card className="shadow-lg">
            <CardContent>

              <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">

                <li>
                  <strong>TSF Analyzer</strong> was recognized among the
                  top 10 innovations out of 150 submissions.
                </li>

                <li>
                  The TSF Analyzer was showcased at the company
                  All Hands.
                </li>

                <li>
                  Automated workflows helped reduce manual analysis
                  effort by approximately <strong>70%</strong>.
                </li>

              </ul>

            </CardContent>
          </Card>

        </div>
      </motion.section>


      {/* ================= FOOTER ================= */}
      <footer className="text-center py-10 bg-orange-600 text-white mt-10">

        <p className="text-2xl font-semibold">
          Let’s Connect
        </p>

        <p className="mt-3 text-lg">
          📧 rscsramya@gmail.com
        </p>

        <div className="flex justify-center gap-5 mt-5">

          <a
            href="https://github.com/ramya01mar"
            target="_blank"
            rel="noreferrer"
            className="hover:text-orange-200 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ramyalakshmi-r-s"
            target="_blank"
            rel="noreferrer"
            className="hover:text-orange-200 transition"
          >
            LinkedIn
          </a>

        </div>

        <p className="mt-5 text-sm opacity-90">
          © 2026 Ramyalakshmi R S — Built with React & Tailwind CSS
        </p>

      </footer>

    </div>
  );
}


/* ================= SKILL CARD ================= */

function SkillCard({ title, skills }) {
  return (
    <Card className="hover:-translate-y-1 transition-transform">

      <CardContent>

        <h3 className="text-xl font-bold text-orange-700 mb-4">
          {title}
        </h3>

        <div className="flex flex-wrap gap-2">

          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 bg-orange-50 text-orange-700 border border-orange-100 rounded-lg text-sm font-medium"
            >
              {skill}
            </span>
          ))}

        </div>

      </CardContent>

    </Card>
  );
}