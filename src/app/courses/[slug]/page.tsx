import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navigation from '@/components/navigation'
import CourseDetails from '@/components/course-details'
import Footer from '@/components/footer'
import coursesData from '../../../../data/courses.json'
import categoriesData from '../../../../data/categories.json'

interface Course {
  id: number
  slug: string
  category_id: number
  name: string
  description: string
  duration_days: number
  image: string
}

interface Category {
  id: number
  slug: string
  name: string
  description: string
  image: string
}

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const courses: Course[] = coursesData
  const course = courses.find(c => c.slug === params.slug)
  
  if (!course) {
    return {
      title: 'Course Not Found | London Premier Centre',
    }
  }

  return {
    title: `${course.name} | London Premier Centre`,
    description: course.description,
    keywords: `${course.name}, professional training, business course, London Premier Centre`,
  }
}

export async function generateStaticParams() {
  const courses: Course[] = coursesData
  return courses.map((course) => ({
    slug: course.slug,
  }))
}

export default function CoursePage({ params }: PageProps) {
  const courses: Course[] = coursesData
  const categories: Category[] = categoriesData
  const course = courses.find(c => c.slug === params.slug)

  if (!course) {
    notFound()
  }

  const category = categories.find(cat => cat.id === course.category_id)

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <CourseDetails course={course} category={category} />
      <Footer />
    </main>
  )
}
