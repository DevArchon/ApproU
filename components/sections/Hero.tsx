import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}

export default function Hero({ title, subtitle, ctaText, ctaLink, backgroundImage }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-primary-50 max-w-3xl mx-auto">
          {subtitle}
        </p>
        <Link 
          href={ctaLink}
          className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition shadow-lg"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
