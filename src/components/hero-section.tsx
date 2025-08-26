import { Button } from '@/components/ui/button'
import AdvancedCourseSearch from '@/components/advanced-course-search'
import { ArrowRight } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="bg-white py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-12">
          {/* Headline */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
              Elevate Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Professional Skills
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Join thousands of professionals who have transformed their careers through our 
              world-class training programs across 8 comprehensive business disciplines and 12 global venues.
            </p>
          </div>

          {/* Advanced Search Box */}
          <div className="py-12">
            <AdvancedCourseSearch />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-20">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-3">2,500+</div>
              <div className="text-gray-600 font-medium">Professionals Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-3">24</div>
              <div className="text-gray-600 font-medium">Expert Courses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-3">12</div>
              <div className="text-gray-600 font-medium">Global Venues</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-3">8</div>
              <div className="text-gray-600 font-medium">Training Categories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
