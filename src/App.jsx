import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Sun, Moon } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import tsfDemo from "./assets/tsf_demo.mp4";
import panoramaDemo from "./assets/panorama_demo.mp4";
import processDemo from "./assets/process_demo.mp4";

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const projects = [
    {
      title: "TSF Analyzer",
      desc: "Django-based SaaS app automating log analysis and scaling metrics for PAN-OS devices — reduced manual effort by 70% through structured parsing and anomaly detection.",
      video: tsfDemo,
    },
    {
      title: "Panorama Characterization Tool",
      desc: "Automated CLI and API testing framework using Python (Paramiko) and REST APIs; integrated with Jira for test tracking and reporting.",
      video: panoramaDemo,
    },
    {
      title: "Automation Tracker",
      desc: "React + Django dashboard showing automation coverage (TestRail integration) and CI/CD health metrics for multiple profiles.",
      video: processDemo,
    },
  ];

  const skills = [
    "Python", "PyTest", "Paramiko", "Django", "REST API Testing", "Postman",
    "Bash", "Linux", "Docker", "Jenkins", "CI/CD", "AWS",
    "Kubernetes", "MySQL", "MongoDB", "TCP/IP", "HTTP", "DNS",
    "Automation Framework Design", "Integration Testing",
    "Performance Validation", "Git", "Jira", "Confluence"
  ];

  return (
    <div
      className={`min-h-screen font-inter transition-colors duration-300 text-[17px] ${
        dark ? "bg-slate-900 text-slate-100" : "bg-orange-50 text-slate-900"
      }`}
    >
      {/* NAVBAR */}
      <nav className="fixed left-1/2 -translate-x-1/2 top-6 z-50 w-[92%] max-w-5xl">
        <div
          className={`backdrop-blur-md ${
            dark ? "bg-slate-800/60 border-slate-700" : "bg-white/60 border-white"
          } border rounded-2xl shadow-md px-5 py-3 flex items-center justify-between`}
        >
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToId("hero")}
          >
            <img
              src="/profile.jpg"
              alt="profile"
              className="w-10 h-10 rounded-full border-2 border-orange-500 object-cover"
            />
            <div>
              <div className="text-base font-semibold">Ramyalakshmi R S</div>
              <div className="text-xs opacity-80">SDET • Coimbatore, TN</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 font-medium text-[15px]">
            <button onClick={() => scrollToId("about")}>About</button>
            <button onClick={() => scrollToId("experience")}>Experience</button>
            <button onClick={() => scrollToId("projects")}>Projects</button>
            <button onClick={() => scrollToId("skills")}>Skills</button>
            <a
              href="/Ramyalakshmi_Resume_SDET.pdf"
              download
              className="bg-orange-600 text-white px-4 py-2 rounded-full shadow hover:bg-orange-700"
            >
              Resume
            </a>
            <button
              onClick={() => setDark((d) => !d)}
              title="Toggle dark mode"
              className="p-2 rounded-full hover:scale-110 transition-transform"
            >
              {dark ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5 text-orange-600" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header
        id="hero"
        className="pt-28 pb-16 text-center flex flex-col items-center"
      >
        <motion.img
          src="/profile.jpg"
          alt="Ramyalakshmi"
          className="w-44 h-44 rounded-full border-4 border-orange-500 shadow-lg object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className="mt-6 text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Ramyalakshmi R S
        </motion.h1>
        <p className="mt-3 text-lg sm:text-xl text-gray-700 dark:text-slate-300">
          Software Development Engineer in Test (SDET)
        </p>
        <p className="text-gray-600 dark:text-slate-400">
          📍 Coimbatore, Tamil Nadu, India
        </p>

        <div className="flex gap-5 mt-5">
          <a href="mailto:rscsramya@gmail.com">
            <Mail className="w-6 h-6 text-orange-600 dark:text-yellow-400 hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://www.linkedin.com/in/ramyalakshmi-r-s"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="w-6 h-6 text-orange-600 dark:text-yellow-400 hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://github.com/ramya01mar"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="w-6 h-6 text-orange-600 dark:text-yellow-400 hover:scale-110 transition-transform" />
          </a>
        </div>

        <div className="mt-8 flex gap-4">
          <a href="/Ramyalakshmi_Resume_SDET.pdf" download>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full text-base shadow-md hover:shadow-lg">
              Download Resume
            </Button>
          </a>
          <Button
            onClick={() => scrollToId("projects")}
            className="border border-orange-400 px-8 py-3 rounded-full text-base hover:bg-orange-100 dark:hover:bg-slate-800"
          >
            View Projects
          </Button>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-orange-600 mb-6">About</h2>
        <p className="leading-relaxed text-lg text-gray-700 dark:text-slate-300">
          I am an Apprentice Engineer at Palo Alto Networks (2023–Present),
          specializing in test automation, system validation, and log analytics
          for PAN-OS environments. My role involves designing automation
          frameworks in Python using PyTest and Paramiko, performing REST and
          CLI validation, and executing distributed system testing in real-world
          conditions. I focus on building efficient automation pipelines that
          improve quality and reduce manual efforts.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="bg-white/70 dark:bg-slate-800/60 py-16 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-orange-600 mb-10">
            Experience
          </h2>

          <Card className="rounded-2xl border border-orange-100 shadow-lg">
            <CardContent>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Apprentice Engineer — Palo Alto Networks
              </h3>
              <p className="text-sm mb-4 text-gray-600 dark:text-slate-400">
                2023 – Present
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-slate-300 space-y-3">
                <li>Validated customer use cases by designing and executing manual and automated test cases for PAN-OS features
                (L2/L3, Security Policies).</li>
                <li>Built PyTest automation frameworks and automation scripts for large-scale configuration testing. Conducted REST API testing and CLI automation using Python (Paramiko).</li>
                <li>Hands-on with AWS, Docker, Jenkins, Kubernetes (basic) for deployment and CI/CD validation.</li>
                <li>Performed integration, regression, and performance testing, ensuring product stability across releases.</li>
                <li>Collaborated with cross-functional teams (Dev, QA, Support) in an Agile/Scrum environment, logging and tracking defects in Jira.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-10">
          Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-orange-100 hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <video
                src={p.video}
                controls
                className="w-full h-44 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-orange-700">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-700 mt-2">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="bg-white/70 dark:bg-slate-800/60 py-16 px-6 text-center"
      >
        <h2 className="text-3xl font-bold text-orange-600 mb-8">
          Technical Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {skills.map((s) => (
            <motion.div
              key={s}
              whileHover={{ scale: 1.05 }}
              className={`px-5 py-2 rounded-full text-sm font-medium ${
                dark
                  ? "bg-slate-700 text-white"
                  : "bg-gradient-to-r from-orange-200 to-yellow-100 text-orange-800 shadow-sm"
              }`}
            >
              {s}
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center">
        <p className="text-lg font-semibold">Let’s Connect</p>
        <p className="text-sm mt-2">
          📧 rscsramya@gmail.com | 📞 +91 9789189228
        </p>
        <p className="text-sm">📍 Coimbatore, Tamil Nadu, India</p>
        <p className="text-xs mt-4 opacity-70">
          © 2025 Ramyalakshmi R S — Built with ❤️ React + TailwindCSS
        </p>
      </footer>
    </div>
  );
}
