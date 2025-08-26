import { Metadata } from 'next'
import Navigation from '@/components/navigation'
import CategoriesHero from '@/components/categories-hero'
import CategoriesListing from '@/components/categories-listing'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Training Categories | London Premier Centre',
  description: 'Explore our comprehensive training categories across 8 business disciplines. Professional development programs in finance, HR, digital marketing, project management, and more.',
  keywords: 'training categories, business disciplines, professional development, finance training, HR courses, digital marketing, project management, IT training',
}

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <CategoriesHero />
      <CategoriesListing />
      <Footer />
    </main>
  )
}
