import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import ScheduledCourses from '@/components/scheduled-courses'
import TrainingCategories from '@/components/training-categories'
import VenuesSection from '@/components/venues-section'
import AboutSection from '@/components/about-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ScheduledCourses />
      <TrainingCategories />
      <VenuesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
