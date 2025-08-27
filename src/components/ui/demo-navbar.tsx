import { Book, Menu, GraduationCap, MapPin, Building2, Users, Calendar } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
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

interface DemoNavbarProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
  }[];

}

const DemoNavbar = ({
  logo = {
    url: "/",
    src: "", // We'll use an icon instead
    alt: "Professional Training Institute Logo",
    title: "Professional Training Institute",
  },
  menu = [
    { title: "Home", url: "/" },
    {
      title: "Categories",
      url: "/categories",
      items: [
        {
          title: "Hospitality & Tourism",
          description: "Comprehensive courses in tourism management and hospitality excellence",
          icon: <Building2 className="size-5 shrink-0" />,
          url: "/categories/1",
        },
        {
          title: "Media & Public Relations",
          description: "Strategic communication and corporate branding courses",
          icon: <Users className="size-5 shrink-0" />,
          url: "/categories/2",
        },
        {
          title: "Human Resources",
          description: "Advanced HR management and leadership development programs",
          icon: <Users className="size-5 shrink-0" />,
          url: "/categories/3",
        },
        {
          title: "Finance & Accounting",
          description: "Professional finance and accounting courses",
          icon: <Book className="size-5 shrink-0" />,
          url: "/categories/4",
        },
        {
          title: "Digital Marketing",
          description: "Cutting-edge digital marketing strategies and social media management",
          icon: <GraduationCap className="size-5 shrink-0" />,
          url: "/categories/5",
        },
        {
          title: "Project Management",
          description: "Comprehensive project management methodologies and Agile practices",
          icon: <Calendar className="size-5 shrink-0" />,
          url: "/categories/6",
        },
        {
          title: "Sales & Business Development",
          description: "Advanced sales techniques and business development strategies",
          icon: <Users className="size-5 shrink-0" />,
          url: "/categories/7",
        },
        {
          title: "Information Technology",
          description: "Technology training, cybersecurity, and IT management",
          icon: <GraduationCap className="size-5 shrink-0" />,
          url: "/categories/8",
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
          url: "/courses/1",
        },
        {
          title: "Advanced PR & Communication",
          description: "Strategic public relations and crisis communication",
          icon: <Users className="size-5 shrink-0" />,
          url: "/courses/4",
        },
        {
          title: "Strategic HR Management",
          description: "Develop HR strategies that align with business goals",
          icon: <Users className="size-5 shrink-0" />,
          url: "/courses/7",
        },
        {
          title: "Digital Marketing Strategy",
          description: "Comprehensive digital marketing planning and campaign optimization",
          icon: <GraduationCap className="size-5 shrink-0" />,
          url: "/courses/13",
        },
        {
          title: "PMP Certification",
          description: "Project Management Professional certification training",
          icon: <Calendar className="size-5 shrink-0" />,
          url: "/courses/16",
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
  ],
  mobileExtraLinks = [
    { name: "About Us", url: "/about" },
    { name: "Contact", url: "/contact" },
    { name: "Venues", url: "/venues" },
    { name: "Blog", url: "/blog" },
  ],

}: DemoNavbarProps) => {
  return (
    <section className="py-4 border-b bg-white">
      <div className="container">
        <nav className="hidden lg:flex">
          <div className="flex items-center justify-between w-full">
            <a href={logo.url} className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-gray-900">{logo.title}</span>
            </a>
            <div className="flex items-center ml-8">
              <NavigationMenu>
                <NavigationMenuList className="gap-2">
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <a href={logo.url} className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-gray-900">{logo.title}</span>
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <GraduationCap className="h-8 w-8 text-primary" />
                      <span className="text-xl font-bold text-gray-900">
                        {logo.title}
                      </span>
                    </a>
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
    </section>
  );
};

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
    <a key={item.title} href={item.url} className="font-semibold text-gray-900 hover:text-primary">
      {item.title}
    </a>
  );
};

export { DemoNavbar };
