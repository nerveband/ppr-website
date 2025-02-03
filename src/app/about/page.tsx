import { Users, BookOpen, Award, Heart } from 'lucide-react'

const values = [
  {
    title: 'Research-Driven',
    description: 'Our methods are grounded in the latest literacy research and proven educational practices.',
    icon: BookOpen,
  },
  {
    title: 'Leadership Focused',
    description: 'We empower educational leaders to drive meaningful change in their schools.',
    icon: Users,
  },
  {
    title: 'Excellence',
    description: 'We maintain the highest standards in our training and professional development programs.',
    icon: Award,
  },
  {
    title: 'Student Success',
    description: 'Everything we do is focused on improving student literacy outcomes.',
    icon: Heart,
  },
]

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 font-display text-4xl font-bold text-secondary sm:text-5xl">
            Our Mission
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            We empower educational leaders to transform their schools' literacy practices through research-informed professional development and ongoing support.
          </p>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="mb-12 text-center font-display text-3xl font-bold text-secondary">
            Our Values
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="group relative rounded-lg border-[1px] border-input bg-background p-6 transition-all hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-display text-xl font-semibold text-secondary">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="rounded-lg bg-secondary/5 p-8">
          <div className="mb-8 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold text-secondary">
              Meet Our Founder
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              With over two decades of experience in education and literacy development.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-6 h-32 w-32 overflow-hidden rounded-full bg-primary/10">
              {/* Add founder image here */}
              <div className="flex h-full items-center justify-center">
                <Users className="h-16 w-16 text-primary" />
              </div>
            </div>
            <h3 className="mb-2 font-display text-2xl font-semibold text-secondary">
              [Founder Name]
            </h3>
            <p className="mb-4 text-lg text-primary">
              Founder & Lead Instructor
            </p>
            <p className="max-w-2xl text-center text-muted-foreground">
              [Founder bio - A brief description of their experience, qualifications, and passion for literacy education. Include relevant certifications and achievements.]
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 