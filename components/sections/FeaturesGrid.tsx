export default function FeaturesGrid() {
  const features = [
    {
      title: "Expert Guidance",
      description: "Access to experienced mortgage brokers across Canada",
      icon: "👥",
    },
    {
      title: "Best Rates",
      description: "Compare rates from multiple lenders to find your best option",
      icon: "💰",
    },
    {
      title: "Fast Approval",
      description: "Get pre-approved quickly with our streamlined process",
      icon: "⚡",
    },
    {
      title: "Free Calculators",
      description: "Use our tools to estimate payments and affordability",
      icon: "🧮",
    },
    {
      title: "Local Expertise",
      description: "Province and city-specific mortgage information",
      icon: "📍",
    },
    {
      title: "24/7 Support",
      description: "Get answers to your questions anytime",
      icon: "🕐",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose approU?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
