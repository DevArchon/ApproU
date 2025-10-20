// Utility functions for the mortgage application

/**
 * Format currency for display
 */
export function formatCurrency(amount: number, locale: string = 'en-CA'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'CAD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

/**
 * Format percentage for display
 */
export function formatPercentage(rate: number, decimals: number = 2): string {
  return `${rate.toFixed(decimals)}%`;
}

/**
 * Convert slug to title
 */
export function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Convert title to slug
 */
export function titleToSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Calculate monthly mortgage payment
 */
export function calculateMonthlyPayment(
  principal: number,
  annualRate: number,
  years: number
): number {
  const monthlyRate = annualRate / 100 / 12;
  const numberOfPayments = years * 12;
  
  if (monthlyRate === 0) {
    return principal / numberOfPayments;
  }
  
  const payment = principal * 
    (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
  return payment;
}

/**
 * Calculate maximum affordable home price
 */
export function calculateAffordability(
  annualIncome: number,
  monthlyDebts: number,
  downPayment: number,
  annualRate: number,
  amortizationYears: number = 25
): number {
  // Gross Debt Service (GDS) ratio - typically 32%
  const maxMonthlyHousingCost = (annualIncome / 12) * 0.32;
  
  // Subtract property tax and heating estimates (rough estimate: 15% of payment)
  const availableForMortgage = maxMonthlyHousingCost * 0.85;
  
  // Calculate maximum mortgage amount
  const monthlyRate = annualRate / 100 / 12;
  const numberOfPayments = amortizationYears * 12;
  
  const maxMortgage = availableForMortgage * 
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1) /
    (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments));
  
  return maxMortgage + downPayment;
}

/**
 * Calculate required down payment
 */
export function calculateDownPayment(homePrice: number): {
  minimum: number;
  percentage: number;
} {
  let minimum = 0;
  let percentage = 0;
  
  if (homePrice <= 500000) {
    minimum = homePrice * 0.05;
    percentage = 5;
  } else if (homePrice <= 1000000) {
    minimum = 25000 + (homePrice - 500000) * 0.10;
    percentage = (minimum / homePrice) * 100;
  } else {
    minimum = homePrice * 0.20;
    percentage = 20;
  }
  
  return { minimum, percentage };
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate Canadian phone number
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^(\+1|1)?[\s-]?\(?([0-9]{3})\)?[\s-]?([0-9]{3})[\s-]?([0-9]{4})$/;
  return phoneRegex.test(phone);
}

/**
 * Format date for display
 */
export function formatDate(date: Date | string, locale: string = 'en-CA'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Generate breadcrumb from pathname
 */
export function generateBreadcrumbs(pathname: string): Array<{ label: string; href: string }> {
  const paths = pathname.split('/').filter(Boolean);
  const breadcrumbs = [{ label: 'Home', href: '/' }];
  
  let currentPath = '';
  paths.forEach((path) => {
    currentPath += `/${path}`;
    breadcrumbs.push({
      label: slugToTitle(path),
      href: currentPath,
    });
  });
  
  return breadcrumbs;
}
