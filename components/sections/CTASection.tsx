import Link from "next/link";

interface CTASectionProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export default function CTASection({ title, description, ctaText, ctaLink }: CTASectionProps) {
  return (
    <section className="bg-primary-600 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-xl mb-8 text-primary-50 max-w-2xl mx-auto">
          {description}
        </p>
        <Link 
          href={ctaLink}
          className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
