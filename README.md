# Professional Training Institute Website

A modern, professional training institute website built with Next.js, TailwindCSS, and shadcn/ui components.

## Features

- **Modern Design**: Clean, professional UI with soft colors, rounded cards, and subtle shadows
- **Responsive Layout**: Fully responsive design that works on all devices
- **Course Search**: Advanced search functionality to filter courses by name or category
- **Professional Sections**:
  - Navigation with mobile menu
  - Hero section with search functionality
  - Scheduled courses display
  - Training categories showcase
  - Global venues information
  - About us section
  - Contact form with validation
  - Professional footer with links and social media

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: TailwindCSS with custom design system
- **Components**: shadcn/ui for consistent, accessible components
- **Icons**: Lucide React for beautiful, consistent icons
- **Typography**: Inter font from Google Fonts
- **Language**: TypeScript for type safety

## Project Structure

```
training-institute/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── categories/        # Categories page
│   │   ├── contact/           # Contact page
│   │   ├── courses/           # Courses page
│   │   ├── venues/            # Venues page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # React components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── about-section.tsx
│   │   ├── contact-section.tsx
│   │   ├── course-search.tsx
│   │   ├── footer.tsx
│   │   ├── hero-section.tsx
│   │   ├── navigation.tsx
│   │   ├── scheduled-courses.tsx
│   │   ├── training-categories.tsx
│   │   └── venues-section.tsx
│   └── lib/
│       └── utils.ts          # Utility functions
├── data/                      # JSON mock data
│   ├── categories.json
│   ├── courses.json
│   ├── events.json
│   └── venues.json
└── Configuration files...
```

## Database Structure

The application uses JSON mock data that represents the following database structure:

### Categories
- `id`: Unique identifier
- `name`: Category name
- `description`: Category description

### Courses
- `id`: Unique identifier
- `category_id`: Foreign key to Categories
- `name`: Course name
- `description`: Course description
- `duration_days`: Course duration in days

### Venues
- `id`: Unique identifier
- `city`: Venue city
- `country`: Venue country
- `address`: Venue address

### Events
- `id`: Unique identifier
- `course_id`: Foreign key to Courses
- `venue_id`: Foreign key to Venues
- `start_date`: Event start date
- `end_date`: Event end date
- `price`: Event price

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Key Features Implemented

### 🔍 Course Search Functionality
- Real-time search through courses and categories
- Dropdown results with course details
- Search by course name or category name

### 📱 Responsive Design
- Mobile-first approach
- Responsive navigation with mobile menu
- Optimized layouts for all screen sizes

### 🎨 Professional UI/UX
- Modern gradient backgrounds
- Hover effects and smooth transitions
- Consistent color scheme and typography
- Accessible design patterns

### 📊 Data Integration
- JSON mock data integration
- Relational data handling (courses ↔ categories, events ↔ courses ↔ venues)
- Dynamic content rendering

## Future Enhancements

- Backend API integration
- User authentication system
- Course enrollment functionality
- Payment integration
- Admin dashboard
- Email notifications
- Advanced filtering and sorting
- Course reviews and ratings

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
