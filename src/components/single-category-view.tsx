'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
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
  DollarSign, 
  TrendingUp, 
  Target, 
  Briefcase, 
  Smartphone 
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import coursesData from '../../data/courses.json'

interface Category {
  id: number
  name: string
  description: string
  image: string
}

interface Course {
  id: number
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-80 overflow-hidden">
        <Image
          src={getCategoryDemoImage(category.id)}
          alt={category.name}
          fill
          className="object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${gradientClass} opacity-90`} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <div className="mb-6 flex justify-center">
              {getCategoryIcon(category.name)}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {category.name}
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90 mb-6">
              {category.description}
            </p>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              {courses.length} Course{courses.length !== 1 ? 's' : ''} Available
            </Badge>
          </div>
        </div>
      </section>

      {/* Navigation Breadcrumb */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/categories" className="flex items-center text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Categories
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{category.name}</span>
          </div>
        </div>
      </section>

      {/* Courses Table Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="px-6 py-4 border-b bg-gray-50">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Available Courses
              </h2>
              <p className="text-gray-600">
                Explore our {courses.length} professional training course{courses.length !== 1 ? 's' : ''} in {category.name.toLowerCase()}
              </p>
            </div>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50/50">
                    <TableHead className="w-16"></TableHead>
                    <TableHead className="min-w-[300px]">Course Name</TableHead>
                    <TableHead className="min-w-[400px]">Description</TableHead>
                    <TableHead className="w-32 text-center">Duration</TableHead>
                    <TableHead className="w-32 text-center">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {courses.map((course) => (
                    <TableRow key={course.id} className="hover:bg-gray-50/50">
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
                      <TableCell>
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
                        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
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
                        <Link href={`/courses/${course.id}`}>
                          <Button 
                            size="sm" 
                            className="w-full rounded-full hover:scale-105 transition-transform"
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

            {courses.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Calendar className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No Courses Available
                </h3>
                <p className="text-gray-600">
                  There are currently no courses available in this category.
                </p>
              </div>
            )}
          </div>

          {/* Category Statistics */}
          {courses.length > 0 && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {courses.length}
                  </div>
                  <div className="text-sm text-gray-600">
                    Total Courses
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {Math.round(courses.reduce((acc, course) => acc + course.duration_days, 0) / courses.length)}
                  </div>
                  <div className="text-sm text-gray-600">
                    Avg. Duration (days)
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {courses.reduce((acc, course) => acc + course.duration_days, 0)}
                  </div>
                  <div className="text-sm text-gray-600">
                    Total Training Days
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default SingleCategoryView
