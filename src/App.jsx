import { motion } from "framer-motion";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

// Google Drive preview links for videos
const tsfDemo =
  "https://drive.google.com/file/d/1CmWcLYrw4X9ZyAoz0W12StYPgk_zFVqN/preview";

const panoramaDemo =
  "https://drive.google.com/file/d/1ChRa-ZzzG_jYmEJiZqmbsdLc8CwWb86k/preview";

const processDemo =
  "https://drive.google.com/file/d/1vV6rsre3v27DEa-JU9MC0J57bd2SFrXi/preview";

function SkillCard({ title, items }) {
  return (
    <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
      <CardContent>
        <h3 className="text-xl font-bold text-orange-700 mb-3">{title}</h3>
        <p className="text-gray-700 leading-relaxed">{items}</p>
      </CardContent>
    </Card>
  );
}

export default function App() {
  const professionalProjects = [
    {
      title: "TSF Analyzer",
      desc: "Django-based backend application for processing and analyzing large-scale technical support data, with automated data-processing and analysis workflows that significantly reduced manual effort.",
      video: tsfDemo,
    },
    {
      title: "Panorama Characterization Tool",
      desc: "Python-based CLI and API automation framework for executing large-scale validation workflows, integrating Paramiko, REST APIs, Jira APIs, and automated reporting.",
      video: panoramaDemo,
    },
    {
      title: "Automation Tracker",
      desc: "Web-based automation analytics tool that processes TestRail data and provides visibility into automation coverage and execution health across multiple test profiles.",
      video: processDemo,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 text-gray-900 font-sans">

      {/* ==================== HERO ==================== */}
      <section className="text-center py-20">
        <motion.img
          src="/profile.jpg"
          alt="Ramyalakshmi R S"
          className="w-36 h-36 rounded-full mx-auto border-4 border-orange-300 shadow-lg mb-6"
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

        <p className="text-xl mt-3 font-semibold">
          Software Engineer | Backend & Automation
        </p>

        <p className="mt-3 text-gray-600 text-lg">
          Python · Backend Development · REST APIs · CLI Automation · UI
          Automation · Azure · CI/CD
        </p>

        <p className="mt-2 text-gray-600 text-lg">
          📍 Coimbatore, Tamil Nadu, India
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

      {/* ==================== ABOUT ==================== */}
      <motion.section
        className="max-w-4xl mx-auto text-center py-16 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-semibold mb-6 text-orange-600">
          About Me
        </h2>

        <p className="text-lg leading-relaxed text-gray-700">
          I’m a Software Engineer with experience building backend
          applications, REST APIs, automation frameworks, and developer tools
          using Python. I have worked with Django, FastAPI, databases, CLI
          automation, API automation, UI automation, and CI/CD pipelines.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mt-5">
          I’m interested in opportunities across Backend Engineering,
          Software Engineering, and Automation Engineering, where I can build
          reliable applications, developer tools, and scalable automation
          systems.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mt-5">
          I’m also currently exploring Generative AI, LLMs, RAG, embeddings,
          vector databases, and AI application development.
        </p>
      </motion.section>

      {/* ==================== CORE EXPERTISE ==================== */}
      <motion.section
        className="py-16 px-6 bg-orange-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-semibold text-center mb-12 text-orange-600">
          Core Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          <SkillCard
            title="Backend Engineering"
            items="Python, Django, FastAPI, Flask, REST APIs, MySQL, MongoDB"
          />

          <SkillCard
            title="CLI Automation"
            items="Python, Paramiko, SSH, Linux, Bash, REST APIs"
          />

          <SkillCard
            title="UI Automation"
            items="Python, Playwright, End-to-End Testing, Browser Automation"
          />

          <SkillCard
            title="Cloud & DevOps"
            items="Microsoft Azure, Docker, Jenkins, CI/CD, Git, Linux"
          />

        </div>
      </motion.section>

      {/* ==================== EXPERIENCE ==================== */}
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

            <p className="text-gray-500 mt-1 text-lg">
              2023 – Present
            </p>

            <ul className="list-disc list-inside mt-6 space-y-4 text-left text-gray-700 text-lg">

              <li>
                Developed Python-based automation and software tools for
                validating complex cloud and software workflows, reducing
                repetitive manual effort and improving engineering
                productivity.
              </li>

              <li>
                Built and maintained backend applications and REST APIs using
                Python, Django, and FastAPI, working with relational and NoSQL
                databases.
              </li>

              <li>
                Developed CLI automation using Python, Paramiko, SSH, Linux,
                and REST APIs for distributed environments.
              </li>

              <li>
                Built automated UI and end-to-end workflows using Playwright
                with Python, covering functional, integration, and regression
                scenarios.
              </li>

              <li>
                Integrated automation into CI/CD workflows using Jenkins and
                Docker, enabling repeatable testing and validation across
                cloud environments.
              </li>

              <li>
                Worked with Microsoft Azure environments to deploy, validate,
                and troubleshoot cloud-based software workflows.
              </li>

              <li>
                Collaborated with development, QA, SRE, and cross-functional
                engineering teams in an Agile environment to investigate
                issues, develop automation, and improve software quality.
              </li>

            </ul>
          </CardContent>
        </Card>
      </motion.section>

      {/* ==================== PROFESSIONAL PROJECTS ==================== */}
      <motion.section
        className="py-16 px-6 bg-orange-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-semibold text-center mb-4 text-orange-600">
          Professional Projects
        </h2>

        <p className="text-center text-gray-600 mb-12 text-lg">
          Selected engineering projects developed as part of my professional
          experience.
        </p>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {professionalProjects.map((project) => (
            <Card
              key={project.title}
              className="rounded-2xl shadow-lg overflow-hidden bg-white hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              <CardContent className="p-6">

                <h3 className="font-semibold text-xl text-orange-700 mb-3">
                  {project.title}
                </h3>

                <p className="text-md text-gray-600 mb-5">
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

      {/* ==================== PERSONAL PROJECTS ==================== */}
      <motion.section
        className="py-16 px-6 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-semibold text-center mb-4 text-orange-600">
          Personal Projects
        </h2>

        <p className="text-center text-gray-600 mb-12 text-lg">
          Projects I’m building to deepen my backend and AI engineering
          experience.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <Card className="rounded-2xl shadow-lg bg-orange-50 hover:shadow-2xl transition-all">
            <CardContent>
              <h3 className="text-2xl font-bold text-orange-700 mb-3">
                AI PDF Assistant
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                An AI-powered application that allows users to upload PDF
                documents and ask questions using document retrieval and
                language models.
              </p>

              <p className="text-gray-600 font-medium">
                Python · FastAPI · RAG · ChromaDB · LLMs · Embeddings
              </p>

              <p className="mt-4 text-sm text-orange-700 font-semibold">
                Currently Building
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-lg bg-orange-50 hover:shadow-2xl transition-all">
            <CardContent>
              <h3 className="text-2xl font-bold text-orange-700 mb-3">
                Job Application Tracker API
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                A backend API for managing job applications with
                authentication, CRUD operations, filtering, pagination,
                automated testing, and API documentation.
              </p>

              <p className="text-gray-600 font-medium">
                FastAPI · PostgreSQL · JWT · PyTest · Docker · Swagger
              </p>

              <p className="mt-4 text-sm text-orange-700 font-semibold">
                Currently Building
              </p>
            </CardContent>
          </Card>

        </div>
      </motion.section>

      {/* ==================== TECHNICAL SKILLS ==================== */}
      <motion.section
        className="bg-white py-16 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-semibold text-center mb-10 text-orange-600">
          Technical Skills
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

          <SkillCard
            title="Programming"
            items="Python, JavaScript, SQL, Bash"
          />

          <SkillCard
            title="Backend Development"
            items="Django, FastAPI, Flask, REST APIs, API Development"
          />

          <SkillCard
            title="Databases"
            items="MySQL, MongoDB"
          />

          <SkillCard
            title="Automation"
            items="CLI Automation — Python, Paramiko | UI Automation — Python, Playwright"
          />

          <SkillCard
            title="Cloud & DevOps"
            items="Microsoft Azure, Docker, Jenkins, CI/CD, Git, Linux"
          />

          <SkillCard
            title="Tools"
            items="Postman, Jira, GitHub, Swagger/OpenAPI"
          />

        </div>
      </motion.section>

      {/* ==================== CURRENTLY EXPLORING ==================== */}
      <motion.section
        className="py-16 px-6 bg-orange-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-semibold text-center mb-6 text-orange-600">
          Currently Exploring
        </h2>

        <p className="max-w-4xl mx-auto text-center text-lg leading-relaxed text-gray-700">
          Generative AI · LLMs · RAG · Embeddings · Vector Databases ·
          AI Application Development · LangChain · LangGraph
        </p>
      </motion.section>

      {/* ==================== HIGHLIGHTS ==================== */}
      <motion.section
        className="py-16 px-6 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-semibold text-center mb-10 text-orange-600">
          Highlights
        </h2>

        <div className="max-w-4xl mx-auto space-y-5 text-lg text-gray-700">

          <div className="bg-orange-50 rounded-2xl p-6 shadow-md">
            🏆 TSF Analyzer was selected among the top 10 projects out of
            150 submissions.
          </div>

          <div className="bg-orange-50 rounded-2xl p-6 shadow-md">
            🎤 Selected to showcase the project during an All Hands session.
          </div>

          <div className="bg-orange-50 rounded-2xl p-6 shadow-md">
            ⚡ Built automation workflows that significantly reduced
            repetitive manual effort and improved engineering efficiency.
          </div>

        </div>
      </motion.section>

      {/* ==================== WHAT I'M LOOKING FOR ==================== */}
      <motion.section
        className="py-16 px-6 bg-orange-50 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-semibold mb-6 text-orange-600">
          What I’m Looking For
        </h2>

        <p className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-700">
          I’m open to Software Engineering opportunities focused on{" "}
          <strong>Backend Development</strong>,{" "}
          <strong>Automation Engineering</strong>,{" "}
          <strong>CLI Automation</strong>, and{" "}
          <strong>UI/API Automation</strong>.
          I’m particularly interested in roles where I can build software,
          automation frameworks, developer tools, and reliable backend
          systems.
        </p>
      </motion.section>

      {/* ==================== FOOTER ==================== */}
      <footer className="text-center py-10 bg-orange-600 text-white mt-10">

        <p className="text-2xl font-semibold">
          Let’s Connect
        </p>

        <p className="mt-3 text-lg">
          Open to Software Engineering & Automation Opportunities
        </p>

        <p className="mt-3 text-lg">
          📧 rscsramya@gmail.com
        </p>

        <p className="mt-3 text-sm opacity-90">
          © 2026 Ramyalakshmi R S — Built with React & Tailwind CSS
        </p>

      </footer>

    </div>
  );
}