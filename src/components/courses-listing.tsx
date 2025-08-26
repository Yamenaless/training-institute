'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Clock, Users, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import coursesData from '../../data/courses.json'
import categoriesData from '../../data/categories.json'

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

const COURSES_PER_PAGE = 9

const CoursesListing = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)

  const courses: Course[] = coursesData
  const categories: Category[] = categoriesData

  // Filter courses by category if selected
  const filteredCourses = selectedCategory 
    ? courses.filter(course => course.category_id === selectedCategory)
    : courses

  // Calculate pagination
  const totalPages = Math.ceil(filteredCourses.length / COURSES_PER_PAGE)
  const startIndex = (currentPage - 1) * COURSES_PER_PAGE
  const endIndex = startIndex + COURSES_PER_PAGE
  const currentCourses = filteredCourses.slice(startIndex, endIndex)

  // Get course demo image
  const getCourseDemoImage = (courseId: number) => {
    const demoImages = {
      1: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop&auto=format',
      2: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop&auto=format',
      3: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop&auto=format',
      4: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop&auto=format',
      5: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=300&fit=crop&auto=format',
      6: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=300&fit=crop&auto=format',
      7: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop&auto=format',
      8: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop&auto=format',
      9: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&auto=format',
      10: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&auto=format',
      11: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=300&fit=crop&auto=format',
      12: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop&auto=format',
      13: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format',
      14: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&auto=format',
      15: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=300&fit=crop&auto=format',
      16: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&auto=format',
      17: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop&auto=format',
      18: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&auto=format',
      19: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=400&h=300&fit=crop&auto=format',
      20: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop&auto=format',
      21: 'https://images.unsplash.com/photo-1553484771-cc0d9b8c2b33?w=400&h=300&fit=crop&auto=format',
      22: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&auto=format',
      23: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format',
      24: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop&auto=format',
    }
    return demoImages[courseId as keyof typeof demoImages] || demoImages[1]
  }

  const getCategoryName = (categoryId: number) => {
    const category = categories.find(cat => cat.id === categoryId)
    return category?.name || 'General'
  }

  const handleCategoryFilter = (categoryId: number | null) => {
    setSelectedCategory(categoryId)
    setCurrentPage(1) // Reset to first page when filtering
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to top of courses section
    window.scrollTo({ top: 400, behavior: 'smooth' })
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => handleCategoryFilter(null)}
              className="rounded-full"
            >
              All Courses ({courses.length})
            </Button>
            {categories.map((category) => {
              const categoryCount = courses.filter(course => course.category_id === category.id).length
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => handleCategoryFilter(category.id)}
                  className="rounded-full"
                >
                  {category.name} ({categoryCount})
                </Button>
              )
            })}
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-8 text-center">
          <p className="text-gray-600">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredCourses.length)} of {filteredCourses.length} courses
            {selectedCategory && (
              <span className="ml-2 text-primary font-medium">
                in {getCategoryName(selectedCategory)}
              </span>
            )}
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentCourses.map((course) => (
            <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              {/* Course Image */}
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
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
                    {getCategoryName(course.category_id)}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {course.name}
                </CardTitle>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {course.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration_days} days
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-1" />
                    Max 25 participants
                  </div>
                </div>

                <Link href={`/courses/${course.id}`}>
                  <Button className="w-full group-hover:bg-primary group-hover:scale-105 transition-all">
                    View Course Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-2">
            <Button
              variant="outline"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>

            <div className="flex space-x-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  onClick={() => handlePageChange(page)}
                  className="w-10 h-10 rounded-full"
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="rounded-full"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

export default CoursesListing
