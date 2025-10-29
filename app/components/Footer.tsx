export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 border-t border-neon-purple/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent mb-4">
              Attrition Studios
            </h3>
            <p className="text-gray-400 text-sm">
              Building custom digital solutions that drive business growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#projects" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Featured Projects */}
          <div>
            <h4 className="font-semibold text-white mb-4">Featured Projects</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.echovalleywine.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  Echo Valley Winery →
                </a>
              </li>
              <li>
                <a
                  href="https://www.attritiongame.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  Attrition Game →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neon-purple/10 text-center text-sm text-gray-500">
          <p>© {currentYear} Attrition Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
