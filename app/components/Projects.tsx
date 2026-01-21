"use client";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  status: string;
  category: string;
}

const projects: Project[] = [
  {
    title: "Word Search Puzzle",
    description: "A clean, modern web application for playing and generating word search puzzles. Features interactive gameplay, a custom puzzle generator, and optimized printable layouts for educational use.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Interactive UI"],
    link: "https://word-search-puzzle.com/",
    status: "Live",
    category: "Web Development"
  },
  {
    title: "Echo Valley Winery Website",
    description: "A modern, responsive website for a Kentucky winery and restaurant featuring online reservations, menu showcase, and event management. Built to increase online visibility and streamline customer bookings.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
    link: "https://www.echovalleywine.com",
    status: "Live",
    category: "Web Development"
  },
  {
    title: "Attrition Game",
    description: "An immersive browser-based empire-building strategy game. Players manage resources, expand territories, and compete in a persistent online world. Features real-time gameplay and strategic depth.",
    tech: ["Game Development", "Real-time Systems", "User Authentication"],
    link: "https://www.attritiongame.dev",
    status: "Live",
    category: "Game Development"
  },
  {
    title: "Food Costing Software",
    description: "Specialized restaurant management software that calculates recipe costs, manages inventory, and optimizes pricing strategies. Helps restaurants maintain profitable margins and reduce waste.",
    tech: ["Business Logic", "Database Design", "Financial Calculations"],
    link: undefined,
    status: "Completed",
    category: "Business Software"
  },
  {
    title: "Point of Sale System",
    description: "Custom POS system tailored for restaurant operations with order management, payment processing, and real-time reporting. Streamlines front-of-house operations and improves customer service speed.",
    tech: ["Payment Integration", "Real-time Data", "UI/UX Design"],
    link: undefined,
    status: "In Development",
    category: "Enterprise Software"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a14] via-space-blue to-[#0a0a14] opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
            Our Work
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real solutions for real businesses. From web development to custom software, we build tools that work.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-space-blue/30 backdrop-blur-sm border border-neon-purple/20 rounded-xl p-8 hover:border-neon-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-neon-cyan/20"
            >
              {/* Status badge */}
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${project.status === 'Live'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : project.status === 'In Development'
                      ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  }`}>
                  {project.status}
                </span>
              </div>

              {/* Category */}
              <div className="mb-3">
                <span className="text-neon-purple text-sm font-semibold uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-neon-cyan transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-neon-purple/10 text-neon-purple border border-neon-purple/30 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-neon-cyan hover:text-neon-pink transition-colors font-semibold group"
                >
                  View Project
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
