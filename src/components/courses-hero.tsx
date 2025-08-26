import Image from 'next/image'

const CoursesHero = () => {
  return (
    <section className="relative min-h-[500px] flex items-center overflow-hidden py-16 md:py-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&h=800&fit=crop&auto=format"
          alt="Professional Training Background"
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
              <span className="text-white/60">&gt;</span>
              <span className="text-white font-medium">All Courses</span>
            </div>
          </nav>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Professional Development
            <br />
            <span className="text-blue-200">Courses</span>
          </h1>

          {/* Description */}
          <div className="max-w-2xl space-y-3">
            <div className="space-y-3 text-white/90 text-xs md:text-sm leading-relaxed font-light">
              <p>
                Behind every successful business is strong professional development, comprehensive training, 
                smart skill building, and confident decision-making.
              </p>
              
              <p>
                At <span className="text-blue-200 font-medium">London Premier Centre</span>, we believe professional skills aren't just knowledge in your mind, 
                they're the engine that drives real growth.
              </p>
              
              <p>
                Our training courses dive deep into industry fundamentals, strategic thinking, advanced methodologies, 
                professional best practices, compliance, and more.
              </p>
              
              <p>
                Courses are available in leading cities including{' '}
                <span className="text-blue-200 font-medium">
                  London, Dubai, Barcelona, Paris, Istanbul, Kuala Lumpur, Singapore, and Amsterdam
                </span>, with flexible learning formats to fit every professional journey.
              </p>
              
              <p>
                If you're ready to master the skills that power organizations, explore our full range of{' '}
                <span className="text-blue-200 font-medium">Professional Development courses</span> below.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoursesHero
