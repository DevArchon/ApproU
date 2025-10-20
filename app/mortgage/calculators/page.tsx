import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mortgage Calculators",
  description: "Free mortgage calculators to help you estimate payments, affordability, down payment, and more.",
};

export default function CalculatorsPage() {
  const calculators = [
    { name: "Mortgage Payment Calculator", slug: "mortgage-payment-calculator", description: "Calculate your monthly mortgage payments" },
    { name: "Affordability Calculator", slug: "affordability-calculator", description: "Find out how much home you can afford" },
    { name: "Down Payment Calculator", slug: "down-payment-calculator", description: "Calculate your required down payment" },
    { name: "Refinance Calculator", slug: "refinance-calculator", description: "See if refinancing makes sense" },
    { name: "Land Transfer Tax Calculator", slug: "land-transfer-tax-calculator-canada", description: "Calculate land transfer taxes by province" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Mortgage Calculators</h1>
      <p className="text-lg text-gray-700 mb-8">
        Use our free calculators to plan your mortgage and understand your costs.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {calculators.map((calc) => (
          <a 
            key={calc.slug}
            href={`/mortgage/calculators/${calc.slug}`} 
            className="p-6 border rounded-lg hover:shadow-lg transition hover:border-primary-500"
          >
            <h3 className="text-xl font-semibold mb-2">{calc.name}</h3>
            <p className="text-gray-600 mb-3">{calc.description}</p>
            <span className="text-primary-600 font-medium">Calculate →</span>
          </a>
        ))}
      </div>
    </div>
  );
}
