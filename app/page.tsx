import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import FeaturesGrid from "@/components/sections/FeaturesGrid";

export default function Home() {
  return (
    <>
      <Hero 
        title="Find Your Perfect Mortgage Solution"
        subtitle="Expert guidance for first-time buyers, refinancing, and investment properties across Canada"
        ctaText="Get Pre-Approved"
        ctaLink="/mortgage/application-process"
      />
      
      <FeaturesGrid />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Explore Mortgage Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Mortgage Basics</h3>
              <p className="text-gray-600 mb-4">
                Learn the fundamentals of mortgages in Canada
              </p>
              <a href="/mortgage/basics" className="text-primary-600 font-medium hover:underline">
                Learn More →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Calculators</h3>
              <p className="text-gray-600 mb-4">
                Calculate payments, affordability, and more
              </p>
              <a href="/mortgage/calculators" className="text-primary-600 font-medium hover:underline">
                Calculate Now →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Current Rates</h3>
              <p className="text-gray-600 mb-4">
                View the latest mortgage rates by province
              </p>
              <a href="/mortgage/rates" className="text-primary-600 font-medium hover:underline">
                View Rates →
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection 
        title="Ready to Get Started?"
        description="Connect with our mortgage experts and get pre-approved in minutes"
        ctaText="Check Your Options"
        ctaLink="/mortgage/application-process"
      />
    </>
  );
}
