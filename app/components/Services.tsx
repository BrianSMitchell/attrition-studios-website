export default function Services() {
  const services = [
    {
      icon: "🌐",
      title: "Website Development",
      description: "Professional websites that represent your brand and drive results. From simple landing pages to complex web applications.",
      features: [
        "Responsive design for all devices",
        "SEO optimization",
        "Fast loading speeds",
        "Easy content management"
      ]
    },
    {
      icon: "💼",
      title: "Custom Business Software",
      description: "Software tailored to your specific needs. We build tools that fit your workflow, not the other way around.",
      features: [
        "Process automation",
        "Data management systems",
        "Integration with existing tools",
        "Scalable architecture"
      ]
    },
    {
      icon: "🍽️",
      title: "Restaurant Solutions",
      description: "Specialized technology for hospitality businesses. Built by someone who understands restaurant operations.",
      features: [
        "POS systems",
        "Food costing & inventory",
        "Online ordering",
        "Reservation management"
      ]
    },
    {
      icon: "🔧",
      title: "Consulting & Support",
      description: "Not sure what you need? We'll help you figure it out. Ongoing support available for all our projects.",
      features: [
        "Technology planning",
        "System architecture advice",
        "Code reviews",
        "Training & documentation"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-blue/20 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-neon-cyan to-neon-pink bg-clip-text text-transparent">
            Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Flexible solutions for businesses of all sizes. Whether you need a simple website or complex enterprise software, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-space-blue/20 backdrop-blur-sm border border-neon-purple/20 rounded-xl p-8 hover:border-neon-cyan/40 transition-all duration-300 hover:shadow-xl hover:shadow-neon-cyan/10"
            >
              {/* Icon */}
              <div className="text-6xl mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-300">
                    <svg className="w-5 h-5 text-neon-cyan mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-400 mb-6">
            Ready to start your project?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg font-semibold text-white hover:scale-105 transition-transform duration-300 shadow-lg shadow-neon-cyan/50"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
