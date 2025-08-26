import Image from 'next/image'

const CategoriesHero = () => {
  return (
    <section className="relative min-h-[500px] flex items-center overflow-hidden py-16 md:py-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&h=800&fit=crop&auto=format"
          alt="Professional Training Categories Background"
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
              <span className="text-white font-medium">Training Categories</span>
            </div>
          </nav>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Training
            <br />
            <span className="text-blue-200">Categories</span>
          </h1>

          {/* Description */}
          <div className="max-w-2xl space-y-3">
            <div className="space-y-3 text-white/90 text-xs md:text-sm leading-relaxed font-light">
              <p>
                Behind every successful professional is comprehensive skill development, strategic learning, 
                smart career building, and confident expertise advancement.
              </p>
              
              <p>
                At <span className="text-blue-200 font-medium">London Premier Centre</span>, we believe training categories aren't just subject areas, 
                they're the foundation that builds exceptional careers.
              </p>
              
              <p>
                Our training categories cover essential business disciplines, strategic methodologies, industry best practices, 
                professional certifications, compliance standards, and more.
              </p>
              
              <p>
                Categories are available across leading cities including{' '}
                <span className="text-blue-200 font-medium">
                  London, Dubai, Barcelona, Paris, Istanbul, Kuala Lumpur, Singapore, and Amsterdam
                </span>, with flexible learning formats to fit every professional journey.
              </p>
              
              <p>
                If you're ready to explore the training disciplines that power organizations, discover our comprehensive range of{' '}
                <span className="text-blue-200 font-medium">Training Categories</span> below.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoriesHero
