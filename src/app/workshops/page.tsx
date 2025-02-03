import { BookOpen, Users, Calendar, ArrowRight } from 'lucide-react'

const workshops = [
  {
    title: 'Reading Motivation Workshop',
    description: 'Learn research-backed strategies to boost student engagement and motivation in reading.',
    duration: '6 hours',
    participants: 'Up to 30 leaders',
    date: 'Multiple dates available',
    icon: BookOpen,
  },
  {
    title: 'Literacy Leadership Intensive',
    description: 'Deep dive into implementing school-wide literacy programs that drive measurable results.',
    duration: '2 days',
    participants: 'Up to 25 leaders',
    date: 'Contact for dates',
    icon: Users,
  },
]

export default function WorkshopsPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-4xl font-bold text-secondary">
          Professional Development Workshops
        </h1>
        <p className="mb-12 text-xl text-muted-foreground">
          Transform your school's literacy practices with our research-based workshops designed specifically for educational leaders.
        </p>

        <div className="space-y-8">
          {workshops.map((workshop) => (
            <div
              key={workshop.title}
              className="group relative rounded-lg border-[1px] border-input bg-background p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex items-start gap-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <workshop.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-secondary">
                    {workshop.title}
                  </h2>
                  <p className="mt-2 text-lg text-muted-foreground">
                    {workshop.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        {workshop.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        {workshop.participants}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        {workshop.date}
                      </span>
                    </div>
                  </div>
                </div>
                <ArrowRight className="h-6 w-6 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-primary/10 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-secondary">
            Custom Workshop Programs
          </h2>
          <p className="mb-6 text-lg text-muted-foreground">
            Need a tailored solution? We can create custom workshop programs to meet your school's specific needs.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-primary/90"
          >
            Contact Us
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </main>
  )
} 