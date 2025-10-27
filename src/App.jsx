import { motion } from "framer-motion";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

// ✅ Google Drive preview links for videos
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
      desc: "Django-based SaaS app automating log analysis and scaling metrics for PAN-OS devices, reducing manual effort by 70%.",
      video: tsfDemo,
    },
    {
      title: "Panorama Characterization Tool",
      desc: "Automated CLI and API testing framework using Python (Paramiko) and Jira APIs with reporting via Matplotlib.",
      video: panoramaDemo,
    },
    {
      title: "Automation Tracker",
      desc: "Web tool to display automation coverage from TestRail across various profiles. Managers use this to track automation health efficiently.",
      video: processDemo,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 text-gray-900 font-sans">
      {/* Hero Section */}
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
        <p className="text-xl mt-3 font-medium">
          Software Development Engineer in Test (SDET)
        </p>
        <p className="mt-2 text-gray-600 text-lg">
          📍 Coimbatore, Tamil Nadu, India
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="mailto:rscsramya@gmail.com"
            className="hover:scale-125 transition-transform"
          >
            <Mail className="text-orange-600" size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/ramyalakshmi-r-s"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-125 transition-transform"
          >
            <Linkedin className="text-orange-600" size={30} />
          </a>
          <a
            href="https://github.com/ramya01mar"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-125 transition-transform"
          >
            <Github className="text-orange-600" size={30} />
          </a>
        </div>

        <Button className="mt-8 bg-orange-600 hover:bg-orange-700 text-white text-lg rounded-xl px-8 py-3 shadow-md transition">
          <a href="/Ramyalakshmi_Resume_SDET.pdf" download>
            Download Resume
          </a>
        </Button>
      </section>

      {/* About Section */}
      <motion.section
        className="max-w-3xl mx-auto text-center py-16 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-semibold mb-6 text-orange-600">
          About Me
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          I’m a passionate <strong>SDET</strong> experienced in backend automation,
          distributed systems testing, and cloud-based validation. Skilled in Python,
          REST APIs, and Django with strong networking knowledge in TCP/IP, HTTP, and DNS.
          I enjoy transforming manual testing into scalable automation pipelines and
          continuously improving test frameworks for efficiency.
        </p>
      </motion.section>

      {/* Experience Section */}
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
              Apprentice Engineer – Palo Alto Networks (2023 – Present)
            </h3>
            <ul className="list-disc list-inside mt-4 space-y-3 text-left text-gray-700 text-lg">
              <li>
                 Validated customer use cases by designing and executing manual and automated test cases for PAN-OS features
                 (L2 and L3).
              </li>
              <li>
                Built PyTest automation frameworks and automation scripts for large-scale configuration testing.
                Conducted REST API testing and CLI automation using Python (Paramiko).
              </li>
              
              <li>
                Enhanced CI/CD test pipelines using <strong>Jenkins</strong> and{" "}
                <strong>Docker</strong> for distributed environments.
              </li>
              <li>
                Collaborated with cross-functional teams (Dev, QA, Support) in an Agile/Scrum environment, logging and tracking defects in Jira.
              </li>
            </ul>
          </CardContent>
        </Card>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="py-16 px-6 bg-orange-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-semibold text-center mb-12 text-orange-600">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {projects.map((p) => (
            <Card
              key={p.title}
              className="rounded-2xl shadow-lg overflow-hidden bg-white hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl text-orange-700 mb-2">
                  {p.title}
                </h3>
                <p className="text-md text-gray-600 mb-4">{p.desc}</p>
                <div className="relative w-full h-56">
                  <iframe
                    src={p.video}
                    title={p.title}
                    className="w-full h-full rounded-xl shadow-md"
                    allow="autoplay"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="bg-white py-16 px-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-semibold mb-6 text-orange-600">
          Technical Skills
        </h2>
        <p className="max-w-5xl mx-auto text-lg leading-relaxed text-gray-700">
          <strong>Programming & Automation:</strong> Python, JavaScript, Django, PyTest,
          REST APIs, Postman, Paramiko
          <br />
          <strong>Testing & QA:</strong> Functional, Integration, Performance, API, UI
          Testing
          <br />
          <strong>Cloud & DevOps:</strong> AWS, Docker, Jenkins, Kubernetes (Basics), Git,
          CI/CD Pipelines
          <br />
          <strong>Networking:</strong> TCP/IP, HTTP, DNS, SSL, VLANs
          <br />
          <strong>Tools & Platforms:</strong> Linux, Bash, MySQL, MongoDB, Jira,
          Confluence, Ixia/Spirent
        </p>
      </motion.section>

      {/* Footer */}
      <footer className="text-center py-10 bg-orange-600 text-white mt-10">
        <p className="text-2xl font-semibold">Let’s Connect</p>
        <p className="mt-3 text-lg">📧 rscsramya@gmail.com</p>
        <p className="mt-3 text-sm opacity-90">
          © 2025 Ramyalakshmi R S — Built with ❤️ using React & Tailwind CSS
        </p>
      </footer>
    </div>
  );
}
