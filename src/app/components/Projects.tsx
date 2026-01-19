import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      name: "FactTrack – News Categorization & Bias Detection",
      description:
        "Machine learning–based application to classify news articles and detect potential bias using NLP techniques.",
      techStack: [
        "Python",
        "Machine Learning",
        "NLP",
        "Scikit-learn",
      ],
      liveDemo: "#",
      github: "#",
      hasLiveDemo: true,
    },
    {
      name: "Crop Prediction & Advisory System",
      description:
        "End-to-end ML system that predicts suitable crops based on soil and environmental parameters and provides advisory recommendations.",
      techStack: [
        "Python",
        "Machine Learning",
        "Data Analysis",
        "Pandas",
        "NumPy",
      ],
      liveDemo: "#",
      github: "#",
      hasLiveDemo: false,
    },
    {
      name: "Food Discovery Full-Stack Application",
      description:
        "Full-stack platform where users post food reviews with ratings, images, and locations to discover cafes and food spots.",
      techStack: ["React", "Spring Boot", "MySQL", "REST APIs"],
      liveDemo: "#",
      github: "#",
      hasLiveDemo: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Projects
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {project.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className={`flex gap-3 pt-4 border-t border-gray-100 ${project.hasLiveDemo ? "" : "justify-center"}`}
              >
                {project.hasLiveDemo && (
                  <a
                    href={project.liveDemo}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
                <a
                  href={project.github}
                  className={`${project.hasLiveDemo ? "flex-1" : "w-full"} px-4 py-2 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors flex items-center justify-center gap-2`}
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}