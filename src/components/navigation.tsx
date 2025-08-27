'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, GraduationCap, MapPin, Building2, Users, Calendar, Book } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: JSX.Element;
  items?: MenuItem[];
}

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menu: MenuItem[] = [
    { title: "Home", url: "/" },
    {
      title: "Categories",
      url: "/categories",
      items: [
        {
          title: "Hospitality & Tourism",
          description: "Comprehensive courses in tourism management and hospitality excellence",
          icon: <Building2 className="size-5 shrink-0" />,
          url: "/categories/hospitality-tourism",
        },
        {
          title: "Media & Public Relations",
          description: "Strategic communication and corporate branding courses",
          icon: <Users className="size-5 shrink-0" />,
          url: "/categories/media-public-relations",
        },
        {
          title: "Human Resources",
          description: "Advanced HR management and leadership development programs",
          icon: <Users className="size-5 shrink-0" />,
          url: "/categories/human-resources",
        },
        {
          title: "Finance & Accounting",
          description: "Professional finance and accounting courses",
          icon: <Book className="size-5 shrink-0" />,
          url: "/categories/finance-accounting",
        },
        {
          title: "Digital Marketing",
          description: "Cutting-edge digital marketing strategies and social media management",
          icon: <GraduationCap className="size-5 shrink-0" />,
          url: "/categories/digital-marketing",
        },
        {
          title: "Project Management",
          description: "Comprehensive project management methodologies and Agile practices",
          icon: <Calendar className="size-5 shrink-0" />,
          url: "/categories/project-management",
        },
        {
          title: "Sales & Business Development",
          description: "Advanced sales techniques and business development strategies",
          icon: <Users className="size-5 shrink-0" />,
          url: "/categories/sales-business-development",
        },
        {
          title: "Information Technology",
          description: "Technology training, cybersecurity, and IT management",
          icon: <GraduationCap className="size-5 shrink-0" />,
          url: "/categories/information-technology",
        },
      ],
    },
    {
      title: "Courses",
      url: "/courses",
      items: [
        {
          title: "Event Management",
          description: "Master comprehensive event planning from conception to execution",
          icon: <Calendar className="size-5 shrink-0" />,
          url: "/courses/event-management-planning",
        },
        {
          title: "Advanced PR & Communication",
          description: "Strategic public relations and crisis communication",
          icon: <Users className="size-5 shrink-0" />,
          url: "/courses/advanced-pr-communication",
        },
        {
          title: "Strategic HR Management",
          description: "Develop HR strategies that align with business goals",
          icon: <Users className="size-5 shrink-0" />,
          url: "/courses/strategic-hr-management",
        },
        {
          title: "Digital Marketing Strategy",
          description: "Comprehensive digital marketing planning and campaign optimization",
          icon: <GraduationCap className="size-5 shrink-0" />,
          url: "/courses/digital-marketing-strategy",
        },
        {
          title: "PMP Certification",
          description: "Project Management Professional certification training",
          icon: <Calendar className="size-5 shrink-0" />,
          url: "/courses/pmp-certification-preparation",
        },
        {
          title: "View All Courses",
          description: "Browse our complete catalog of professional training courses",
          icon: <Book className="size-5 shrink-0" />,
          url: "/courses",
        },
      ],
    },
    {
      title: "Venues",
      url: "/venues",
      items: [
        {
          title: "London",
          description: "Premium training facilities in the heart of London",
          icon: <MapPin className="size-5 shrink-0" />,
          url: "/venues#london",
        },
        {
          title: "Dubai",
          description: "Modern training centers in Dubai's business district",
          icon: <MapPin className="size-5 shrink-0" />,
          url: "/venues#dubai",
        },
        {
          title: "Barcelona",
          description: "Inspiring learning environments in Barcelona",
          icon: <MapPin className="size-5 shrink-0" />,
          url: "/venues#barcelona",
        },
        {
          title: "Paris",
          description: "Elegant training spaces in the City of Light",
          icon: <MapPin className="size-5 shrink-0" />,
          url: "/venues#paris",
        },
        {
          title: "Istanbul",
          description: "Strategic location bridging Europe and Asia",
          icon: <MapPin className="size-5 shrink-0" />,
          url: "/venues#istanbul",
        },
        {
          title: "View All Venues",
          description: "Explore all our international training locations",
          icon: <Building2 className="size-5 shrink-0" />,
          url: "/venues",
        },
      ],
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ]

  const mobileExtraLinks = [
    { name: "About Us", url: "/about" },
    { name: "Contact", url: "/contact" },
    { name: "Venues", url: "/venues" },
    { name: "Blog", url: "/blog" },
  ]

  const renderMenuItem = (item: MenuItem) => {
    if (item.items) {
      return (
        <NavigationMenuItem key={item.title} className="text-muted-foreground">
          <NavigationMenuTrigger className="text-gray-700 hover:text-primary">
            {item.title}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-96 p-3">
              <NavigationMenuLink>
                {item.items.map((subItem) => (
                  <li key={subItem.title}>
                    <a
                      className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                      href={subItem.url}
                    >
                      {subItem.icon}
                      <div>
                        <div className="text-sm font-semibold text-gray-900">
                          {subItem.title}
                        </div>
                        {subItem.description && (
                          <p className="text-sm leading-snug text-muted-foreground">
                            {subItem.description}
                          </p>
                        )}
                      </div>
                    </a>
                  </li>
                ))}
              </NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      );
    }

    return (
      <a
        key={item.title}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-6 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-muted hover:text-primary"
        href={item.url}
      >
        {item.title}
      </a>
    );
  };

  const renderMobileMenuItem = (item: MenuItem) => {
    if (item.items) {
      return (
        <AccordionItem key={item.title} value={item.title} className="border-b-0">
          <AccordionTrigger className="py-0 font-semibold hover:no-underline text-gray-900">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="mt-2">
            {item.items.map((subItem) => (
              <a
                key={subItem.title}
                className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                href={subItem.url}
                onClick={() => setIsMenuOpen(false)}
              >
                {subItem.icon}
                <div>
                  <div className="text-sm font-semibold text-gray-900">{subItem.title}</div>
                  {subItem.description && (
                    <p className="text-sm leading-snug text-muted-foreground">
                      {subItem.description}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </AccordionContent>
        </AccordionItem>
      );
    }

    return (
      <a 
        key={item.title} 
        href={item.url} 
        className="font-semibold text-gray-900 hover:text-primary py-2"
        onClick={() => setIsMenuOpen(false)}
      >
        {item.title}
      </a>
    );
  };

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-gray-900">
              Professional Training Institute
            </span>
          </Link>

          {/* Desktop Menu with Dropdowns */}
          <div className="hidden md:flex items-center ml-8">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                {menu.map((item) => renderMenuItem(item))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Toggle menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                      <GraduationCap className="h-8 w-8 text-primary" />
                      <span className="text-xl font-bold text-gray-900">
                        Professional Training Institute
                      </span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-6 flex flex-col gap-6">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                  <div className="border-t py-4">
                    <div className="grid grid-cols-2 justify-start">
                      {mobileExtraLinks.map((link, idx) => (
                        <a
                          key={idx}
                          className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
                          href={link.url}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation