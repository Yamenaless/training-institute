'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table'
import { 
  Users, 
  Megaphone, 
  Hotel, 
  ArrowLeft, 
  Calendar, 
  Clock,
  BookOpen,
  Award,
  Target,
  DollarSign, 
  TrendingUp, 
  Briefcase, 
  Smartphone 
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import coursesData from '../../data/courses.json'

interface Category {
  id: number
  slug: string
  name: string
  description: string
  image: string
}

interface Course {
  id: number
  slug: string
  category_id: number
  name: string
  description: string
  duration_days: number
  image: string
}

interface SingleCategoryViewProps {
  category: Category
}

const SingleCategoryView = ({ category }: SingleCategoryViewProps) => {
  const courses: Course[] = coursesData.filter(course => course.category_id === category.id)

  // Get category demo image
  const getCategoryDemoImage = (categoryId: number) => {
    const demoImages = {
      1: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=400&fit=crop&auto=format', // Hotel/Tourism
      2: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=400&fit=crop&auto=format', // Media/PR
      3: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=400&fit=crop&auto=format', // HR
      4: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=400&fit=crop&auto=format', // Finance
      5: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=400&fit=crop&auto=format', // Digital Marketing
      6: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop&auto=format', // Project Management
      7: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=400&fit=crop&auto=format', // Sales
      8: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=400&fit=crop&auto=format', // IT
    }
    return demoImages[categoryId as keyof typeof demoImages] || demoImages[1]
  }

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case 'hospitality & tourism':
        return <Hotel className="h-12 w-12 text-white" />
      case 'media & public relations':
        return <Megaphone className="h-12 w-12 text-white" />
      case 'human resources':
        return <Users className="h-12 w-12 text-white" />
      case 'finance & accounting':
        return <DollarSign className="h-12 w-12 text-white" />
      case 'digital marketing':
        return <Smartphone className="h-12 w-12 text-white" />
      case 'project management':
        return <Target className="h-12 w-12 text-white" />
      case 'sales & business development':
        return <TrendingUp className="h-12 w-12 text-white" />
      case 'information technology':
        return <Briefcase className="h-12 w-12 text-white" />
      default:
        return <Users className="h-12 w-12 text-white" />
    }
  }

  const getCategoryColor = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case 'hospitality & tourism':
        return 'from-blue-500 to-blue-600'
      case 'media & public relations':
        return 'from-purple-500 to-purple-600'
      case 'human resources':
        return 'from-green-500 to-green-600'
      case 'finance & accounting':
        return 'from-emerald-500 to-emerald-600'
      case 'digital marketing':
        return 'from-pink-500 to-pink-600'
      case 'project management':
        return 'from-orange-500 to-orange-600'
      case 'sales & business development':
        return 'from-cyan-500 to-cyan-600'
      case 'information technology':
        return 'from-indigo-500 to-indigo-600'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  const getCourseImage = (courseId: number) => {
    // Generate course-specific demo images
    const courseImages = {
      1: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=300&h=200&fit=crop&auto=format',
      2: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=300&h=200&fit=crop&auto=format',
      3: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=300&h=200&fit=crop&auto=format',
      4: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=200&fit=crop&auto=format',
      5: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=300&h=200&fit=crop&auto=format',
      6: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop&auto=format',
      7: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300&h=200&fit=crop&auto=format',
      8: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&auto=format',
      9: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=200&fit=crop&auto=format',
      10: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop&auto=format',
      11: 'https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=300&h=200&fit=crop&auto=format',
      12: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=300&h=200&fit=crop&auto=format',
      13: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop&auto=format',
      14: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop&auto=format',
      15: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=300&h=200&fit=crop&auto=format',
      16: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop&auto=format',
      17: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=200&fit=crop&auto=format',
      18: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop&auto=format',
      19: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&auto=format',
      20: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=300&h=200&fit=crop&auto=format',
      21: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=300&h=200&fit=crop&auto=format',
      22: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop&auto=format',
      23: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop&auto=format',
      24: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=300&h=200&fit=crop&auto=format',
    }
    return courseImages[courseId as keyof typeof courseImages] || courseImages[1]
  }

  const gradientClass = getCategoryColor(category.name)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden py-16 md:py-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={getCategoryDemoImage(category.id)}
            alt={category.name}
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
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span className="text-white/60">&gt;</span>
                <Link href="/categories" className="hover:text-white transition-colors">Categories</Link>
                <span className="text-white/60">&gt;</span>
                <span className="text-white font-medium">{category.name}</span>
              </div>
            </nav>

            {/* Category Badge */}
            <div className="mb-4">
              <Badge variant="secondary" className="bg-blue-200 text-blue-800 px-3 py-1">
                Training Category
              </Badge>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {category.name}
            </h1>

            {/* Description */}
            <div className="max-w-2xl space-y-3">
              <div className="space-y-3 text-white/90 text-xs md:text-sm leading-relaxed font-light">
                <p className="text-base md:text-lg font-normal">
                  {category.description}
                </p>
                
                <p>
                  Explore our comprehensive range of {courses.length} professional training courses 
                  designed to enhance your expertise in {category.name.toLowerCase()}.
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
                <BookOpen className="h-5 w-5 mr-2" />
                <span>{courses.length} Course{courses.length !== 1 ? 's' : ''}</span>
              </div>
              <div className="flex items-center text-white/90">
                <Clock className="h-5 w-5 mr-2" />
                <span>{Math.round(courses.reduce((acc, course) => acc + course.duration_days, 0) / courses.length)} Days Avg</span>
              </div>
              <div className="flex items-center text-white/90">
                <Award className="h-5 w-5 mr-2" />
                <span>Certificates Included</span>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Available Courses Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Courses</h2>
            <p className="text-lg text-gray-600">
              Explore our {courses.length} professional training course{courses.length !== 1 ? 's' : ''} in {category.name.toLowerCase()}.
            </p>
          </div>

          {courses.length > 0 ? (
            <div className="bg-white rounded-lg shadow-sm border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-16"></TableHead>
                    <TableHead>Course Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-center">Duration</TableHead>
                    <TableHead className="text-center">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {courses.map((course) => (
                    <TableRow key={course.id}>
                      <TableCell>
                        <div className="w-12 h-12 relative rounded-lg overflow-hidden">
                          <Image
                            src={getCourseImage(course.id)}
                            alt={course.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">
                        <div className="space-y-1">
                          <h3 className="font-semibold text-gray-900 leading-tight">
                            {course.name}
                          </h3>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="h-4 w-4 mr-1" />
                            Course ID: {course.id}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                          {course.description}
                        </p>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex flex-col items-center">
                          <div className="flex items-center text-sm font-medium text-gray-900 mb-1">
                            <Clock className="h-4 w-4 mr-1 text-primary" />
                            {course.duration_days}
                          </div>
                          <span className="text-xs text-gray-500">
                            {course.duration_days === 1 ? 'day' : 'days'}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <Link href={`/courses/${course.slug}`}>
                          <Button 
                            size="sm" 
                            className="rounded-full hover:scale-105 transition-transform"
                          >
                            View Details
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <Card>
              <CardContent className="py-12 text-center">
                <Calendar className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Courses Available</h3>
                <p className="text-gray-600 mb-4">
                  There are currently no courses available in this category. Contact us to request courses.
                </p>
                <Button variant="outline">Request Training Courses</Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  )
}

export default SingleCategoryView
