import { Metadata } from 'next'
import { DemoNavbar } from '@/components/ui/demo-navbar'

export const metadata: Metadata = {
  title: 'Demo Navigation | London Premier Centre',
  description: 'Demo navigation bar for London Premier Centre training institute',
}

export default function DemoNavPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <DemoNavbar />
      
      {/* Demo Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Demo Navigation Bar
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This is a demonstration of the new navigation bar with dropdown menus for Categories, Courses, and Venues.
            The navigation is fully responsive and includes mobile-friendly features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Features */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Categories Dropdown</h3>
            <p className="text-gray-600">
              Navigate through all 8 training categories with detailed descriptions and direct links to category pages.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Courses Menu</h3>
            <p className="text-gray-600">
              Quick access to featured courses and a direct link to browse all available training programs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Venues Directory</h3>
            <p className="text-gray-600">
              Explore our international training locations including London, Dubai, Barcelona, Paris, and Istanbul.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile Responsive</h3>
            <p className="text-gray-600">
              Fully responsive design with mobile-friendly accordion menus and touch-optimized interactions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Design</h3>
            <p className="text-gray-600">
              Clean, modern design that matches the training institute's professional brand and user experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Navigation</h3>
            <p className="text-gray-600">
              Intuitive navigation structure with clear visual hierarchy and smooth hover animations.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Navigation Features
            </h3>
            <ul className="text-sm text-blue-800 space-y-1 text-left">
              <li>• Dropdown menus for Categories, Courses, and Venues</li>
              <li>• Direct links to all category and course pages</li>
              <li>• Mobile-responsive accordion navigation</li>
              <li>• Professional branding with London Premier Centre logo</li>
              <li>• Student Portal and Enrollment buttons</li>
              <li>• Smooth animations and hover effects</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
