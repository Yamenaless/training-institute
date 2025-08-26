import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Calendar, Building } from 'lucide-react'
import Image from 'next/image'
import venuesData from '../../data/venues.json'
import eventsData from '../../data/events.json'

interface Venue {
  id: number
  city: string
  country: string
  address: string
  image: string
}

interface Event {
  id: number
  course_id: number
  venue_id: number
  start_date: string
  end_date: string
  price: number
  status: string
  max_participants: number
}

const VenuesSection = () => {
  const venues: Venue[] = venuesData
  const events: Event[] = eventsData

  const getEventCount = (venueId: number) => {
    return events.filter(event => event.venue_id === venueId).length
  }

  const getNextEvent = (venueId: number) => {
    const venueEvents = events.filter(event => event.venue_id === venueId)
    const sortedEvents = venueEvents.sort((a, b) => 
      new Date(a.start_date).getTime() - new Date(b.start_date).getTime()
    )
    return sortedEvents[0]
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const getCountryFlag = (country: string) => {
    const flags: { [key: string]: string } = {
      'UAE': '🇦🇪',
      'UK': '🇬🇧',
      'Turkey': '🇹🇷',
      'Spain': '🇪🇸',
      'Singapore': '🇸🇬',
      'USA': '🇺🇸',
      'France': '🇫🇷',
      'Germany': '🇩🇪',
      'Hong Kong': '🇭🇰',
      'Australia': '🇦🇺',
      'Canada': '🇨🇦',
      'Switzerland': '🇨🇭'
    }
    return flags[country] || '🌍'
  }

  const getVenueDemoImage = (venueId: number) => {
    const demoImages = {
      1: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop&auto=format', // Dubai
      2: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop&auto=format', // London
      3: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop&auto=format', // Istanbul
      4: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400&h=300&fit=crop&auto=format', // Barcelona
      5: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop&auto=format', // Singapore
      6: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop&auto=format', // New York
      7: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=300&fit=crop&auto=format', // Paris
      8: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=300&fit=crop&auto=format', // Frankfurt
      9: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=400&h=300&fit=crop&auto=format', // Hong Kong
      10: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&auto=format', // Sydney
      11: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=300&fit=crop&auto=format', // Toronto
      12: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=300&fit=crop&auto=format', // Zurich
    }
    return demoImages[venueId as keyof typeof demoImages] || demoImages[1]
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Global Training Venues
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn in world-class facilities across major business hubs. 
            Our venues provide the perfect environment for professional growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {venues.slice(0, 8).map((venue) => {
            const eventCount = getEventCount(venue.id)
            const nextEvent = getNextEvent(venue.id)
            
            return (
              <Card 
                key={venue.id} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Venue Image Header */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={getVenueDemoImage(venue.id)}
                    alt={`${venue.city}, ${venue.country}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-lg">{getCountryFlag(venue.country)}</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Building className="h-4 w-4 text-white" />
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold mb-1">{venue.city}</h3>
                    <p className="text-sm font-medium opacity-90">{venue.country}</p>
                  </div>
                </div>
                
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-start text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 mt-0.5 text-red-500 flex-shrink-0" />
                    <span className="line-clamp-2">{venue.address}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Upcoming Events:</span>
                      <span className="font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                        {eventCount}
                      </span>
                    </div>
                    
                    {nextEvent && (
                      <div className="flex items-center text-xs text-gray-500 bg-gray-50 p-2 rounded">
                        <Calendar className="h-3 w-3 mr-1" />
                        Next: {formatDate(nextEvent.start_date)}
                      </div>
                    )}
                  </div>

                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                  >
                    View Events
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="rounded-full px-8">
            Explore All Venues
          </Button>
        </div>
      </div>
    </section>
  )
}

export default VenuesSection
