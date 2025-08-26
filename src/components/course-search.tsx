'use client'

import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import coursesData from '../../data/courses.json'
import categoriesData from '../../data/categories.json'

interface Course {
  id: number
  category_id: number
  name: string
  description: string
  duration_days: number
}

interface Category {
  id: number
  name: string
  description: string
}

interface CourseSearchProps {
  onSearchResults?: (results: Course[]) => void
}

const CourseSearch = ({ onSearchResults }: CourseSearchProps) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([])

  const courses: Course[] = coursesData
  const categories: Category[] = categoriesData

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    
    if (!term.trim()) {
      setFilteredCourses([])
      onSearchResults?.([])
      return
    }

    const filtered = courses.filter((course) => {
      // Search by course name
      const nameMatch = course.name.toLowerCase().includes(term.toLowerCase())
      
      // Search by category name
      const category = categories.find(cat => cat.id === course.category_id)
      const categoryMatch = category?.name.toLowerCase().includes(term.toLowerCase())
      
      return nameMatch || categoryMatch
    })

    setFilteredCourses(filtered)
    onSearchResults?.(filtered)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSearch(searchTerm)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search courses or categories..."
            value={searchTerm}
            onChange={handleInputChange}
            className="pl-10 pr-4 py-2 w-full rounded-full border-gray-300 focus:border-primary focus:ring-primary"
          />
        </div>
      </form>
      
      {/* Search Results Dropdown */}
      {filteredCourses.length > 0 && searchTerm && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto">
          {filteredCourses.map((course) => {
            const category = categories.find(cat => cat.id === course.category_id)
            return (
              <div
                key={course.id}
                className="p-4 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 cursor-pointer"
              >
                <h4 className="font-semibold text-gray-900">{course.name}</h4>
                <p className="text-sm text-gray-600 mt-1">{course.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {category?.name}
                  </span>
                  <span className="text-xs text-gray-500">
                    {course.duration_days} days
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default CourseSearch
