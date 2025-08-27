import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import SingleCategoryView from '@/components/single-category-view'
import categoriesData from '../../../../data/categories.json'

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = categoriesData.find(cat => cat.slug === params.slug)
  
  if (!category) {
    return {
      title: 'Category Not Found | London Premier Centre',
    }
  }

  return {
    title: `${category.name} Courses | London Premier Centre`,
    description: `Explore our comprehensive ${category.name.toLowerCase()} training courses. ${category.description}`,
    keywords: `${category.name.toLowerCase()}, training courses, professional development, London Premier Centre`,
  }
}

export default function SingleCategoryPage({ params }: CategoryPageProps) {
  const category = categoriesData.find(cat => cat.slug === params.slug)
  
  if (!category) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <SingleCategoryView category={category} />
      <Footer />
    </main>
  )
}

// Generate static params for all categories
export async function generateStaticParams() {
  return categoriesData.map((category) => ({
    slug: category.slug,
  }))
}
