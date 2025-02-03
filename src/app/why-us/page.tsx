import { BookOpen, Target, Sparkles, Users, BarChart, Clock } from 'lucide-react'
import Link from 'next/link'

const benefits = [
  {
    title: 'Research-Based Approach',
    description: 'Our methodology is grounded in the latest literacy research and proven educational practices.',
    icon: BookOpen,
  },
  {
    title: 'Leadership Perspective',
    description: 'Programs designed specifically for educational leaders, focusing on school-wide implementation.',
    icon: Target,
  },
  {
    title: 'Proven Results',
    description: 'Track record of improving student literacy outcomes across diverse school environments.',
    icon: BarChart,
  },
  {
    title: 'Personalized Support',
    description: 'Tailored guidance and ongoing support to ensure successful implementation.',
    icon: Users,
  },
  {
    title: 'Innovative Methods',
    description: 'Cutting-edge strategies that go beyond traditional literacy instruction.',
    icon: Sparkles,
  },
  {
    title: 'Flexible Implementation',
    description: 'Programs that adapt to your schools schedule and specific needs.',
    icon: Clock,
  },
]

export default function WhyUsPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex rounded-full bg-primary/10 px-4 py-1.5">
            <span className="text-sm font-medium text-primary">
              The Principal Powered Reading Difference
            </span>
          </div>
          <h1 className="mb-6 font-display text-4xl font-bold text-secondary sm:text-5xl">
            Why Choose Principal Powered Reading?
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            We combine research-based practices with practical leadership experience to deliver transformative literacy programs.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group relative rounded-lg border-[1px] border-input bg-background p-6 transition-all hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold text-secondary">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="rounded-lg bg-secondary/5 p-8 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-secondary">
            Ready to Transform Your School's Literacy Program?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Join the growing number of schools that have revolutionized their approach to literacy with our proven methods.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/workshops"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-primary/90"
            >
              Explore Workshops
              <BookOpen className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background px-6 py-3 text-lg font-semibold text-secondary transition-colors hover:bg-secondary/5"
            >
              Contact Us
              <Sparkles className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
} 