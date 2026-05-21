"use client";

import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      title: "Air Quality Visualizer & Forecast App",
      tech: "Python • XGBoost • REST APIs • Machine Learning",
      description:
        "Built a real-time AQI prediction platform using XGBoost and live weather APIs with personalized health advisory recommendations.",
    },
    {
      title: "TRI-ARM NLP System – RAD-SAGE",
      tech: "ClinicalBERT • ChromaDB • RAG • NegEx",
      description:
        "Designed a three-arm radiology report classifier combining transformer models, retrieval pipelines, and rule-based reasoning.",
    },
    {
      title: "Multimodal AI Workload Scheduler",
      tech: "Docker • REST APIs • Scheduling Systems",
      description:
        "Created a resource-aware AI job scheduler supporting image, text, and audio workloads using containerized execution.",
    },
    {
      title: "FedResilient",
      tech: "Federated Learning • FedProx • Distributed AI",
      description:
        "Developed a resilient federated learning framework handling non-IID data, client dropouts, and asynchronous updates.",
    },
  ];

  const skills = [
    "Python",
    "Java",
    "Machine Learning",
    "Deep Learning",
    "Federated Learning",
    "ClinicalBERT",
    "RAG",
    "XGBoost",
    "Docker",
    "REST APIs",
    "Kubernetes",
    "Blockchain",
    "IoT",
    "GitHub",
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-16 py-10 overflow-hidden relative">
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>

<div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>

      <section className="max-w-6xl mx-auto relative z-10">
        <motion.nav
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-20"
        >
          <h1 className="text-2xl font-bold tracking-tight">
            Rohith G
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-zinc-400">
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </motion.nav>

        <section className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-zinc-400 mb-4 uppercase tracking-[0.2em] text-sm">
              AI/ML Engineer • Full Stack Developer
            </p>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-zinc-300 to-cyan-400 bg-clip-text text-transparent">
  Building intelligent systems and scalable AI applications.
</h2>

            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Information Technology student focused on machine learning,
              distributed systems, NLP pipelines, federated learning, and
              modern software engineering.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="px-6 py-3 rounded-2xl bg-white text-black font-medium hover:scale-105 transition"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 rounded-2xl border border-zinc-700 hover:border-white transition hover:scale-105"
              >
                Download Resume
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-2xl border border-zinc-700 hover:border-white transition hover:scale-105"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="rounded-3xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-xl p-8 shadow-2xl"
          >
            <div className="space-y-5">
              <div>
                <p className="text-zinc-500 text-sm">Current Focus</p>
                <p className="text-xl font-semibold mt-1">
                  AI Systems • RAG • Federated Learning
                </p>
              </div>

              <div>
                <p className="text-zinc-500 text-sm">Education</p>
                <p className="text-lg mt-1">
                  B.Tech Information Technology
                </p>
                <p className="text-zinc-400 text-sm">
                  Dr. N.G.P Institute of Technology
                </p>
              </div>

              <div>
                <p className="text-zinc-500 text-sm">Achievements</p>

                <ul className="text-zinc-300 mt-2 space-y-2 text-sm">
                  <li>• 2nd Place — 24 Hour Hackathon</li>
                  <li>• NPTEL Java Certification (Elite + Gold)</li>
                  <li>• Vishwakarma Awards — Round 3</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h3 className="text-3xl font-bold mb-10">
            Featured Projects
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                whileHover={{ y: -8 }}
                key={index}
                className="rounded-3xl border border-zinc-800 bg-zinc-950/70 backdrop-blur-xl p-8 hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] transition duration-300"
              >
                <p className="text-zinc-500 text-sm mb-3">
                  {project.tech}
                </p>

                <h4 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h4>

                <p className="text-zinc-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  <button className="px-5 py-2 rounded-xl bg-white text-black font-medium">
                    GitHub
                  </button>

                  <button className="px-5 py-2 rounded-xl border border-zinc-700">
                    Live Demo
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h3 className="text-3xl font-bold mb-10">
            Technical Skills
          </h3>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <motion.div
                whileHover={{ scale: 1.08 }}
                key={index}
                className="px-5 py-3 rounded-2xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-xl text-zinc-300"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-xl p-10 text-center"
        >
          <p className="text-zinc-500 uppercase tracking-[0.2em] text-sm mb-4">
            Let’s Build Something Great
          </p>

          <h3 className="text-4xl font-bold mb-6">
            Open to internships, collaborations, and AI engineering projects.
          </h3>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:rgm117783@gmail.com"
              className="px-6 py-3 rounded-2xl bg-white text-black font-medium hover:scale-105 transition"
            >
              Email Me
            </a>

            <a
              href="https://github.com/rgm-2006"
              className="px-6 py-3 rounded-2xl border border-zinc-700 hover:border-white transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/rohith-g-12a58230a"
              className="px-6 py-3 rounded-2xl border border-zinc-700 hover:border-white transition"
            >
              LinkedIn
            </a>
          </div>
        </motion.section>
      </section>
    </main>
  );
}