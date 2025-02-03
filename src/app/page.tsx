import Link from 'next/link'
import Image from 'next/image'
import { BookOpen, Users, Target, Workflow, ArrowRight, Star, TrendingUp, Award, Clock } from 'lucide-react'

const features = [
  {
    title: 'Who We Serve',
    description: 'Educational leaders seeking to transform their schools literacy practices through research-based approaches.',
    icon: Users,
  },
  {
    title: 'What We Do',
    description: 'Provide comprehensive workshops and training focused on implementing effective literacy practices school-wide.',
    icon: BookOpen,
  },
  {
    title: 'Why It Matters',
    description: 'Strong literacy foundations are crucial for student success across all subjects and grade levels.',
    icon: Target,
  },
  {
    title: 'How We Work',
    description: 'Through interactive workshops, personalized guidance, and ongoing support for sustainable implementation.',
    icon: Workflow,
  },
]

const workshops = [
  {
    title: 'Reading Motivation Workshop',
    description: 'Learn research-backed strategies to boost student engagement and motivation in reading.',
    duration: '6 hours',
    participants: 'Up to 30 leaders',
    featured: true,
  },
  {
    title: 'Literacy Leadership Intensive',
    description: 'Deep dive into implementing school-wide literacy programs that drive measurable results.',
    duration: '2 days',
    participants: 'Up to 25 leaders',
    featured: true,
  },
]

const stats = [
  { label: 'Schools Impacted', value: '100+' },
  { label: 'Student Success Rate', value: '94%' },
  { label: 'Leadership Training Hours', value: '1000+' },
  { label: 'Years of Experience', value: '20+' },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-primary/10 to-background">
        <div className="absolute inset-0 bg-grid-primary/10" />
        
        {/* Decorative Elements */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -left-1/4 top-1/2 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4 py-20 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Content */}
            <div className="relative z-10 text-left">
              <div className="mb-8 inline-flex rounded-full bg-primary/10 px-4 py-1.5 backdrop-blur">
                <span className="text-sm font-medium text-primary">
                  Transforming Schools Through Literacy Leadership
                </span>
              </div>
              <h1 className="mb-6 font-display text-5xl font-bold leading-tight text-secondary sm:text-6xl lg:text-7xl">
                Principal Powered Reading
              </h1>
              <p className="mb-8 text-xl leading-relaxed text-secondary/80 lg:text-2xl">
                Empowering Educational Leaders with Research-Informed Literacy Practices
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/workshops"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-primary/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Explore Workshops
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/why-us"
                  className="inline-flex items-center gap-2 rounded-md border border-input bg-white/50 px-8 py-4 text-lg font-semibold text-secondary backdrop-blur transition-all hover:bg-white hover:scale-105"
                >
                  Why Choose Us
                  <Star className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative z-10 lg:ml-12">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-white shadow-2xl">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/20 blur-2xl" />
                <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-secondary/20 blur-2xl" />
                <Image
                  src="/hero/hero.jpg"
                  alt="Educational leaders collaborating"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority
                />
                <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10" />
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-12 -left-12 rounded-lg border border-white/20 bg-white/90 p-6 shadow-xl backdrop-blur lg:bottom-12">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-secondary/60">Success Rate</div>
                    <div className="text-2xl font-bold text-secondary">94%</div>
                  </div>
                </div>
              </div>

              {/* Floating Schools Card */}
              <div className="absolute -right-8 top-0 rounded-lg border border-white/20 bg-white/90 p-6 shadow-xl backdrop-blur">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-secondary/10 p-3">
                    <BookOpen className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-secondary/60">Schools Impacted</div>
                    <div className="text-2xl font-bold text-secondary">100+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full border-y bg-secondary/5 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-2 font-display text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-secondary/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Workshops */}
      <section className="w-full py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-display text-4xl font-bold text-secondary">
              Featured Workshops
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Transform your school's literacy program with our research-based professional development workshops.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {workshops.map((workshop) => (
              <div
                key={workshop.title}
                className="group relative overflow-hidden rounded-lg border-[1px] border-input bg-background p-8 transition-all hover:shadow-lg"
              >
                <div className="absolute right-4 top-4">
                  <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    Featured
                  </div>
                </div>
                <h3 className="mb-3 font-display text-2xl font-bold text-secondary">
                  {workshop.title}
                </h3>
                <p className="mb-6 text-lg text-muted-foreground">
                  {workshop.description}
                </p>
                <div className="mb-6 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-secondary/60">
                    <Clock className="h-4 w-4" />
                    {workshop.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-secondary/60">
                    <Users className="h-4 w-4" />
                    {workshop.participants}
                  </div>
                </div>
                <Link
                  href="/workshops"
                  className="inline-flex items-center gap-2 text-primary transition-colors hover:text-primary/80"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/workshops"
              className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-6 py-3 text-lg font-semibold text-secondary transition-all hover:bg-secondary/5 hover:scale-105"
            >
              View All Workshops
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full border-t bg-secondary/5 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Leading the Way in Literacy Education
              </span>
            </div>
            <h2 className="font-display text-3xl font-bold text-secondary">
              Comprehensive Leadership Development
            </h2>
          </div>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="group space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all group-hover:scale-110 group-hover:bg-primary/20">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-semibold text-secondary">
                  {feature.title}
                </h2>
                <p className="text-lg leading-relaxed text-foreground/80">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-secondary py-24 text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-display text-4xl font-bold">
              Ready to Transform Your School's Literacy Program?
            </h2>
            <p className="mb-8 text-xl text-secondary-foreground/80">
              Join leading schools that have revolutionized their approach to literacy education.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-4 text-lg font-semibold text-secondary transition-all hover:bg-white/90 hover:scale-105"
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/workshops"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition-all hover:bg-white/20 hover:scale-105"
              >
                View Workshops
                <BookOpen className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 