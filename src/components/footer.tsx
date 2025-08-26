import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { GraduationCap, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { href: '/courses', label: 'All Courses' },
    { href: '/categories', label: 'Categories' },
    { href: '/venues', label: 'Venues' },
    { href: '/about', label: 'About Us' }
  ]

  const categories = [
    { href: '/categories', label: 'Hospitality & Tourism' },
    { href: '/categories', label: 'Media & Public Relations' },
    { href: '/categories', label: 'Human Resources' }
  ]

  const support = [
    { href: '/contact', label: 'Contact Us' },
    { href: '#', label: 'Help Center' },
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms of Service' }
  ]

  const socialLinks = [
    { href: '#', icon: <Facebook className="h-5 w-5" />, label: 'Facebook' },
    { href: '#', icon: <Twitter className="h-5 w-5" />, label: 'Twitter' },
    { href: '#', icon: <Linkedin className="h-5 w-5" />, label: 'LinkedIn' },
    { href: '#', icon: <Instagram className="h-5 w-5" />, label: 'Instagram' }
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">
                Professional Training Institute
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Empowering professionals worldwide with comprehensive training programs 
              in hospitality, media relations, and human resources.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>info@pti-training.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>Dubai, UAE</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Training Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Training Areas</h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link 
                    href={category.href} 
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                {support.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href} 
                      className="hover:text-blue-400 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
              <p className="text-gray-400 text-sm mb-3">
                Subscribe to our newsletter for the latest courses and updates.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 text-sm"
                />
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Professional Training Institute. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">Follow us:</span>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
