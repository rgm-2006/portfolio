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
    <main className="min-h-screen bg-black text-white px-6 md:px-16 py-10">
      <section className="max-w-6xl mx-auto">
        <nav className="flex items-center justify-between mb-20">
          <h1 className="text-2xl font-bold tracking-tight">Rohith G</h1>

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
        </nav>

        <section className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <div>
            <p className="text-zinc-400 mb-4 uppercase tracking-[0.2em] text-sm">
              AI/ML Engineer • Full Stack Developer
            </p>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
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
                className="px-6 py-3 rounded-2xl border border-zinc-700 hover:border-white transition"
              >
                Download Resume
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-2xl border border-zinc-700 hover:border-white transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 shadow-2xl">
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
          </div>
        </section>

        <section id="about" className="mb-32">
          <h3 className="text-3xl font-bold mb-8">About Me</h3>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-3xl border border-zinc-800 p-8 bg-zinc-950">
              <p className="text-zinc-300 leading-relaxed text-lg">
                I am passionate about designing intelligent systems that combine
                machine learning, scalable infrastructure, and modern software
                engineering.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 p-8 bg-zinc-950">
              <p className="text-zinc-300 leading-relaxed text-lg">
                I enjoy building projects that move beyond basic CRUD
                applications integrating deep learning, RAG pipelines,
                federated learning, blockchain concepts, and infrastructure
                aware system design.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="mb-32">
          <h3 className="text-3xl font-bold mb-10">
            Featured Projects
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 hover:border-zinc-600 transition"
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
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="mb-32">
          <h3 className="text-3xl font-bold mb-10">
            Technical Skills
          </h3>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-5 py-3 rounded-2xl border border-zinc-800 bg-zinc-950 text-zinc-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="rounded-3xl border border-zinc-800 bg-zinc-950 p-10 text-center"
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
              className="px-6 py-3 rounded-2xl bg-white text-black font-medium"
            >
              Email Me
            </a>

            <a
              href="https://github.com/rgm-2006"
              className="px-6 py-3 rounded-2xl border border-zinc-700"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/rohith-g-12a58230a"
              className="px-6 py-3 rounded-2xl border border-zinc-700"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}