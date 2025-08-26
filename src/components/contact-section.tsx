'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    alert('Thank you for your message! We will get back to you soon.')
  }

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-blue-500" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+44 20 7123 4567"]
    },
    {
      icon: <Mail className="h-5 w-5 text-green-500" />,
      title: "Email",
      details: ["info@pti-training.com", "admissions@pti-training.com"]
    },
    {
      icon: <MapPin className="h-5 w-5 text-red-500" />,
      title: "Headquarters",
      details: ["123 Business District", "Dubai, UAE"]
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our training programs? We're here to help you 
            find the perfect course for your professional development needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Contact Information
            </h3>
            
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="mt-1">{info.icon}</div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white border-0">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Need Immediate Assistance?</h4>
                <p className="text-blue-100 text-sm mb-4">
                  Our admissions team is available Monday to Friday, 9 AM to 6 PM (GMT).
                </p>
                <Button variant="secondary" size="sm" className="text-blue-600">
                  Schedule a Call
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What can we help you with?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your training needs..."
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto rounded-full">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
