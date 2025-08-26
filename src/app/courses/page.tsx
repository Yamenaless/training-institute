import { Metadata } from 'next'
import Navigation from '@/components/navigation'
import CoursesHero from '@/components/courses-hero'
import CoursesListing from '@/components/courses-listing'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Professional Development Courses | London Premier Centre',
  description: 'Explore our comprehensive range of professional development courses across 8 business disciplines. Available in leading cities worldwide with flexible learning formats.',
  keywords: 'professional development, business training, courses, finance, HR, digital marketing, project management, IT training',
}

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <CoursesHero />
      <CoursesListing />
      <Footer />
    </main>
  )
}
