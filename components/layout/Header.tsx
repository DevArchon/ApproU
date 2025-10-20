"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary-600">
            approU
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/mortgage" className="text-gray-700 hover:text-primary-600 font-medium">
              Mortgage
            </Link>
            <Link href="/mortgage/calculators" className="text-gray-700 hover:text-primary-600 font-medium">
              Calculators
            </Link>
            <Link href="/mortgage/rates" className="text-gray-700 hover:text-primary-600 font-medium">
              Rates
            </Link>
            <Link href="/mortgage/brokers" className="text-gray-700 hover:text-primary-600 font-medium">
              Brokers
            </Link>
            <Link href="/about-approu" className="text-gray-700 hover:text-primary-600 font-medium">
              About
            </Link>
            <Link 
              href="/mortgage-appointment-online" 
              className="bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700 transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4">
            <Link href="/mortgage" className="block text-gray-700 hover:text-primary-600 font-medium">
              Mortgage
            </Link>
            <Link href="/mortgage/calculators" className="block text-gray-700 hover:text-primary-600 font-medium">
              Calculators
            </Link>
            <Link href="/mortgage/rates" className="block text-gray-700 hover:text-primary-600 font-medium">
              Rates
            </Link>
            <Link href="/mortgage/brokers" className="block text-gray-700 hover:text-primary-600 font-medium">
              Brokers
            </Link>
            <Link href="/about-approu" className="block text-gray-700 hover:text-primary-600 font-medium">
              About
            </Link>
            <Link 
              href="/mortgage-appointment-online" 
              className="block bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700 transition text-center"
            >
              Get Started
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
