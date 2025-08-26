'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import categoriesData from '../../data/categories.json'
import venuesData from '../../data/venues.json'

interface Category {
  id: number
  name: string
  description: string
  image: string
}

interface Venue {
  id: number
  city: string
  country: string
  address: string
  image: string
}

const AdvancedCourseSearch = () => {
  const [keyword, setKeyword] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedVenue, setSelectedVenue] = useState('')
  const [selectedMonth, setSelectedMonth] = useState('')
  const [selectedDuration, setSelectedDuration] = useState('')

  const categories: Category[] = categoriesData
  const venues: Venue[] = venuesData

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const durations = [
    '1-2 days', '3-4 days', '5-6 days', '1 week+'
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log({
      keyword,
      selectedCategory,
      selectedVenue,
      selectedMonth,
      selectedDuration
    })
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">Find Courses</h3>
        
        <form onSubmit={handleSearch} className="space-y-6">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Keyword Input */}
            <div>
              <label htmlFor="keyword" className="block text-sm font-medium text-gray-700 mb-2">
                Keyword
              </label>
              <Input
                id="keyword"
                type="text"
                placeholder="Search courses..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>

            {/* Categories Dropdown */}
            <div>
              <label htmlFor="categories" className="block text-sm font-medium text-gray-700 mb-2">
                Categories
              </label>
              <select
                id="categories"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Venues Dropdown */}
            <div>
              <label htmlFor="venues" className="block text-sm font-medium text-gray-700 mb-2">
                Venues
              </label>
              <select
                id="venues"
                value={selectedVenue}
                onChange={(e) => setSelectedVenue(e.target.value)}
                className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">All Venues</option>
                {venues.map((venue) => (
                  <option key={venue.id} value={venue.id}>
                    {venue.city}, {venue.country}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Month Dropdown */}
            <div>
              <label htmlFor="month" className="block text-sm font-medium text-gray-700 mb-2">
                Month
              </label>
              <select
                id="month"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Any Month</option>
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>

            {/* Duration Dropdown */}
            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-2">
                Duration
              </label>
              <select
                id="duration"
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Any Duration</option>
                {durations.map((duration) => (
                  <option key={duration} value={duration}>
                    {duration}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <Button
                type="submit"
                size="default"
                className="w-full"
              >
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdvancedCourseSearch
