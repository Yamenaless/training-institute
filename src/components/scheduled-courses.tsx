import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, DollarSign, Clock } from 'lucide-react'
import Image from 'next/image'
import eventsData from '../../data/events.json'
import coursesData from '../../data/courses.json'
import venuesData from '../../data/venues.json'

interface Event {
  id: number
  course_id: number
  venue_id: number
  start_date: string
  end_date: string
  price: number
  status: string
  max_participants: number
}

interface Course {
  id: number
  category_id: number
  name: string
  description: string
  duration_days: number
  image: string
}

interface Venue {
  id: number
  city: string
  country: string
  address: string
  image: string
}

const ScheduledCourses = () => {
  const events: Event[] = eventsData
  const courses: Course[] = coursesData
  const venues: Venue[] = venuesData

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price)
  }

  const getCourseDemoImage = (courseId: number) => {
    const demoImages = {
      1: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop&auto=format', // Event Management
      2: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop&auto=format', // Event Protocol
      3: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop&auto=format', // Tourism
      4: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop&auto=format', // PR Communication
      5: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=300&fit=crop&auto=format', // Corporate Branding
      6: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=300&fit=crop&auto=format', // Digital Media
      7: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop&auto=format', // HR Management
      8: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop&auto=format', // Leadership
      9: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&auto=format', // Recruitment
      10: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&auto=format', // Financial Analysis
      11: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=300&fit=crop&auto=format', // Corporate Finance
      12: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop&auto=format', // Risk Management
      13: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format', // Digital Marketing
      14: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&auto=format', // Social Media
      15: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=300&fit=crop&auto=format', // SEO Content
      16: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&auto=format', // PMP
      17: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop&auto=format', // Agile Scrum
      18: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&auto=format', // Project Risk
      19: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=400&h=300&fit=crop&auto=format', // Sales Techniques
      20: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop&auto=format', // Business Development
      21: 'https://images.unsplash.com/photo-1553484771-cc0d9b8c2b33?w=400&h=300&fit=crop&auto=format', // CRM
      22: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&auto=format', // Cybersecurity
      23: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format', // Data Analytics
      24: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop&auto=format', // IT Project Management
    }
    return demoImages[courseId as keyof typeof demoImages] || demoImages[1]
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Upcoming Training Sessions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our next scheduled training sessions and advance your professional skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.slice(0, 6).map((event) => {
            const course = courses.find(c => c.id === event.course_id)
            const venue = venues.find(v => v.id === event.venue_id)
            
            if (!course || !venue) return null

            return (
              <Card key={event.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                {/* Course Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={getCourseDemoImage(course.id)}
                    alt={course.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-semibold text-gray-800">
                      {course.duration_days} Days
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium mb-1">{venue.city}, {venue.country}</p>
                    <div className="flex items-center text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full w-fit">
                      <Calendar className="h-3 w-3 mr-1" />
                      {formatDate(event.start_date)}
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div>
                    <CardTitle className="text-lg font-bold text-gray-900 line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                      {course.name}
                    </CardTitle>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {course.description}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                      {formatDate(event.start_date)} - {formatDate(event.end_date)}
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-green-500" />
                      {venue.city}, {venue.country}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 text-green-600" />
                      <span className="text-xl font-bold text-green-600">
                        {formatPrice(event.price)}
                      </span>
                    </div>
                    <Button size="sm" className="rounded-full group-hover:bg-primary group-hover:scale-105 transition-all">
                      Enroll Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="rounded-full">
            View All Scheduled Courses
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ScheduledCourses
