export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent">
            About Attrition Studios
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Story */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Built on Real Experience</h3>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Attrition Studios was born from a simple truth: small businesses need software that actually works for them, not against them.
              </p>
              <p>
                As a restaurant owner, I experienced firsthand the frustration of expensive, overcomplicated software that didn't fit how real businesses operate. So I learned to code and started building better solutions.
              </p>
              <p>
                What started with a website for my own restaurant has grown into a full suite of custom applications—from inventory management to point-of-sale systems. Each project taught me more about solving real business problems with clean, effective code.
              </p>
              <p>
                Today, Attrition Studios brings that same practical approach to businesses across industries. We don't just write code—we build tools that make your work easier.
              </p>
            </div>
          </div>

          {/* Right: Expertise */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">What We Do Best</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-neon-cyan pl-6">
                <h4 className="text-xl font-semibold text-neon-cyan mb-2">Custom Web Applications</h4>
                <p className="text-gray-400">
                  Modern, responsive websites and web apps built with the latest technologies. Fast, secure, and designed to grow with your business.
                </p>
              </div>

              <div className="border-l-4 border-neon-purple pl-6">
                <h4 className="text-xl font-semibold text-neon-purple mb-2">Business Software</h4>
                <p className="text-gray-400">
                  Custom solutions tailored to your workflow—whether it's inventory management, financial tools, or process automation.
                </p>
              </div>

              <div className="border-l-4 border-neon-pink pl-6">
                <h4 className="text-xl font-semibold text-neon-pink mb-2">Restaurant Technology</h4>
                <p className="text-gray-400">
                  Specialized expertise in hospitality tech—POS systems, food costing, online ordering, and reservation management.
                </p>
              </div>

              <div className="border-l-4 border-neon-cyan pl-6">
                <h4 className="text-xl font-semibold text-neon-cyan mb-2">Game Development</h4>
                <p className="text-gray-400">
                  Browser-based games and interactive experiences with real-time features and engaging gameplay.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats or highlights */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-neon-cyan mb-2">4+</div>
            <div className="text-gray-400">Projects Launched</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-neon-purple mb-2">100%</div>
            <div className="text-gray-400">Custom Built</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-neon-pink mb-2">2+</div>
            <div className="text-gray-400">Industries Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-neon-cyan mb-2">Real</div>
            <div className="text-gray-400">Business Impact</div>
          </div>
        </div>
      </div>
    </section>
  );
}
