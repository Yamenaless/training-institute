'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, Megaphone, Hotel, ArrowRight, ChevronLeft, ChevronRight, DollarSign, TrendingUp, Target, Briefcase, Smartphone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import categoriesData from '../../data/categories.json'
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

const CATEGORIES_PER_PAGE = 6

const CategoriesListing = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const categories: Category[] = categoriesData
  const courses: Course[] = coursesData

  // Calculate pagination
  const totalPages = Math.ceil(categories.length / CATEGORIES_PER_PAGE)
  const startIndex = (currentPage - 1) * CATEGORIES_PER_PAGE
  const endIndex = startIndex + CATEGORIES_PER_PAGE
  const currentCategories = categories.slice(startIndex, endIndex)

  // Get category demo image
  const getCategoryDemoImage = (categoryId: number) => {
    const demoImages = {
      1: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop&auto=format', // Hotel/Tourism
      2: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop&auto=format', // Media/PR
      3: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop&auto=format', // HR
      4: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&auto=format', // Finance
      5: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format', // Digital Marketing
      6: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&auto=format', // Project Management
      7: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&auto=format', // Sales
      8: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&auto=format', // IT
    }
    return demoImages[categoryId as keyof typeof demoImages] || demoImages[1]
  }

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case 'hospitality & tourism':
        return <Hotel className="h-8 w-8 text-white" />
      case 'media & public relations':
        return <Megaphone className="h-8 w-8 text-white" />
      case 'human resources':
        return <Users className="h-8 w-8 text-white" />
      case 'finance & accounting':
        return <DollarSign className="h-8 w-8 text-white" />
      case 'digital marketing':
        return <Smartphone className="h-8 w-8 text-white" />
      case 'project management':
        return <Target className="h-8 w-8 text-white" />
      case 'sales & business development':
        return <TrendingUp className="h-8 w-8 text-white" />
      case 'information technology':
        return <Briefcase className="h-8 w-8 text-white" />
      default:
        return <Users className="h-8 w-8 text-white" />
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

  const getCourseCount = (categoryId: number) => {
    return courses.filter(course => course.category_id === categoryId).length
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to top of categories section
    window.scrollTo({ top: 400, behavior: 'smooth' })
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Training Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of professional development programs 
            designed to enhance your skills and advance your career across {categories.length} specialized disciplines.
          </p>
        </div>

        {/* Results Info */}
        <div className="mb-8 text-center">
          <p className="text-gray-600">
            Showing {startIndex + 1}-{Math.min(endIndex, categories.length)} of {categories.length} training categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentCategories.map((category) => {
            const courseCount = getCourseCount(category.id)
            const gradientClass = getCategoryColor(category.name)
            
            return (
              <Card 
                key={category.id} 
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2 overflow-hidden"
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={getCategoryDemoImage(category.id)}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${gradientClass} opacity-80 group-hover:opacity-90 transition-opacity`} />
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3">
                    {getCategoryIcon(category.name)}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold mb-1">{category.name}</h3>
                    <p className="text-sm bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full inline-block">
                      {courseCount} Course{courseCount !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">
                    {category.description}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <div className="text-sm text-gray-500">
                      {courseCount} available courses
                    </div>
                    <div className="text-sm text-primary font-medium">
                      Multiple venues
                    </div>
                  </div>

                  <Link href={`/categories/${category.id}`}>
                    <Button 
                      className="w-full group-hover:bg-primary group-hover:scale-105 transition-all duration-300 rounded-full"
                    >
                      Explore Single Category
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
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

export default CategoriesListing
