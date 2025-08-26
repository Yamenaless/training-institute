import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Award, Users, Globe, TrendingUp, CheckCircle } from 'lucide-react'

const AboutSection = () => {
  const features = [
    {
      icon: <Award className="h-6 w-6 text-blue-500" />,
      title: "Expert Instructors",
      description: "Learn from industry leaders with decades of real-world experience"
    },
    {
      icon: <Users className="h-6 w-6 text-green-500" />,
      title: "Small Class Sizes",
      description: "Personalized attention with maximum 20 participants per session"
    },
    {
      icon: <Globe className="h-6 w-6 text-purple-500" />,
      title: "Global Recognition",
      description: "Internationally recognized certifications accepted worldwide"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-orange-500" />,
      title: "Career Growth",
      description: "95% of our graduates report career advancement within 6 months"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                About Professional Training Institute
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                For over a decade, we've been at the forefront of professional development, 
                empowering individuals and organizations to achieve excellence through 
                comprehensive training programs.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600">
                Our institute specializes in three core areas: Hospitality & Tourism, 
                Media & Public Relations, and Human Resources. We combine theoretical 
                knowledge with practical applications to ensure our participants are 
                ready to excel in their careers.
              </p>
              
              <div className="flex items-center space-x-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">ISO 9001:2015 Certified Training Provider</span>
              </div>
              
              <div className="flex items-center space-x-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Accredited by International Training Standards</span>
              </div>
            </div>

            <div className="pt-4">
              <Button size="lg" className="rounded-full">
                Learn More About Us
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="mx-auto w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">12+</div>
              <div className="text-blue-100">Years of Excellence</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">2,500+</div>
              <div className="text-blue-100">Graduates</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Corporate Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
