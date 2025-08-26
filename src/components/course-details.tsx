import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Calendar, Clock, Users, MapPin, DollarSign, ArrowRight, BookOpen, Award, Target } from 'lucide-react'
import eventsData from '../../data/events.json'
import venuesData from '../../data/venues.json'

interface Course {
  id: number
  category_id: number
  name: string
  description: string
  duration_days: number
  image: string
}

interface Category {
  id: number
  name: string
  description: string
  image: string
}

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

interface Venue {
  id: number
  city: string
  country: string
  address: string
  image: string
}

interface CourseDetailsProps {
  course: Course
  category?: Category
}

const CourseDetails = ({ course, category }: CourseDetailsProps) => {
  const events: Event[] = eventsData
  const venues: Venue[] = venuesData

  // Get related events for this course
  const relatedEvents = events.filter(event => event.course_id === course.id)

  // Get course demo image
  const getCourseDemoImage = (courseId: number) => {
    const demoImages = {
      1: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1600&h=600&fit=crop&auto=format',
      2: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&h=600&fit=crop&auto=format',
      3: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&h=600&fit=crop&auto=format',
      4: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&h=600&fit=crop&auto=format',
      5: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=1600&h=600&fit=crop&auto=format',
      6: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1600&h=600&fit=crop&auto=format',
      7: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&h=600&fit=crop&auto=format',
      8: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1600&h=600&fit=crop&auto=format',
      9: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&h=600&fit=crop&auto=format',
      10: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&h=600&fit=crop&auto=format',
      11: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1600&h=600&fit=crop&auto=format',
      12: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&h=600&fit=crop&auto=format',
      13: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=600&fit=crop&auto=format',
      14: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1600&h=600&fit=crop&auto=format',
      15: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1600&h=600&fit=crop&auto=format',
      16: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=600&fit=crop&auto=format',
      17: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&h=600&fit=crop&auto=format',
      18: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&h=600&fit=crop&auto=format',
      19: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=1600&h=600&fit=crop&auto=format',
      20: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&h=600&fit=crop&auto=format',
      21: 'https://images.unsplash.com/photo-1553484771-cc0d9b8c2b33?w=1600&h=600&fit=crop&auto=format',
      22: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1600&h=600&fit=crop&auto=format',
      23: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=600&fit=crop&auto=format',
      24: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1600&h=600&fit=crop&auto=format',
    }
    return demoImages[courseId as keyof typeof demoImages] || demoImages[1]
  }

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

  const getVenue = (venueId: number) => {
    return venues.find(venue => venue.id === venueId)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden py-16 md:py-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={getCourseDemoImage(course.id)}
            alt={course.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <div className="flex items-center space-x-2 text-sm text-white/80">
                <span>Home</span>
                <span className="text-white/60">></span>
                <span>Courses</span>
                <span className="text-white/60">></span>
                <span className="text-white font-medium">{course.name}</span>
              </div>
            </nav>

            {/* Category Badge */}
            {category && (
              <div className="mb-4">
                <Badge variant="secondary" className="bg-blue-200 text-blue-800 px-3 py-1">
                  {category.name}
                </Badge>
              </div>
            )}

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {course.name}
            </h1>

            {/* Description */}
            <div className="max-w-2xl space-y-3">
              <div className="space-y-3 text-white/90 text-xs md:text-sm leading-relaxed font-light">
                <p className="text-base md:text-lg font-normal">
                  {course.description}
                </p>
                
                <p>
                  This comprehensive {course.duration_days}-day training program is designed for professionals 
                  looking to advance their expertise and career prospects in {category?.name.toLowerCase() || 'this field'}.
                </p>
                
                <p>
                  Join industry experts and fellow professionals in world-class training facilities across 
                  major business hubs including London, Dubai, Barcelona, Paris, and more.
                </p>
              </div>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center text-white/90">
                <Clock className="h-5 w-5 mr-2" />
                <span>{course.duration_days} Days</span>
              </div>
              <div className="flex items-center text-white/90">
                <Users className="h-5 w-5 mr-2" />
                <span>Max 25 Participants</span>
              </div>
              <div className="flex items-center text-white/90">
                <Award className="h-5 w-5 mr-2" />
                <span>Certificate Included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {/* Course Overview */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="h-6 w-6 mr-2 text-primary" />
                      Course Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      {course.description}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      This {course.duration_days}-day intensive training program combines theoretical knowledge with 
                      practical applications, ensuring participants gain hands-on experience and actionable insights 
                      they can immediately implement in their professional roles.
                    </p>
                  </CardContent>
                </Card>

                {/* Learning Objectives */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="h-6 w-6 mr-2 text-primary" />
                      Learning Objectives
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Master fundamental concepts and advanced techniques in {category?.name.toLowerCase() || 'the subject area'}
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Develop practical skills through hands-on exercises and real-world case studies
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Learn industry best practices and current market trends
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Build confidence to implement strategies in your organization
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Network with industry professionals and expand your career opportunities
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Course Info Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Course Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{course.duration_days} Days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Max Participants:</span>
                    <span className="font-medium">25</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-medium">{category?.name}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Certificate:</span>
                    <span className="font-medium">Included</span>
                  </div>
                  <div className="pt-4 border-t">
                    <Button className="w-full" size="lg">
                      Enroll Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Need More Information?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Contact our training consultants for personalized advice and group bookings.
                  </p>
                  <Button variant="outline" className="w-full">
                    Contact Us
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Training Sessions</h2>
            <p className="text-lg text-gray-600">
              Choose from our scheduled training sessions across multiple locations worldwide.
            </p>
          </div>

          {relatedEvents.length > 0 ? (
            <div className="bg-white rounded-lg shadow-sm border">
              <Table>
                <TableCaption>
                  All training sessions for {course.name}. Prices may vary by location.
                </TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Location</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>End Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {relatedEvents.map((event) => {
                    const venue = getVenue(event.venue_id)
                    return (
                      <TableRow key={event.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                            {venue ? `${venue.city}, ${venue.country}` : 'TBD'}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                            {formatDate(event.start_date)}
                          </div>
                        </TableCell>
                        <TableCell>{formatDate(event.end_date)}</TableCell>
                        <TableCell>
                          <Badge 
                            variant={event.status === 'open' ? 'default' : 'secondary'}
                            className={event.status === 'open' ? 'bg-green-100 text-green-800' : ''}
                          >
                            {event.status === 'open' ? 'Available' : event.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right font-medium">
                          {formatPrice(event.price)}
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </div>
          ) : (
            <Card>
              <CardContent className="py-12 text-center">
                <Calendar className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Scheduled Sessions</h3>
                <p className="text-gray-600 mb-4">
                  There are currently no scheduled sessions for this course. Contact us to request a session.
                </p>
                <Button variant="outline">Request Training Session</Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  )
}

export default CourseDetails
