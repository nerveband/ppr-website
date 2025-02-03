'use client'

import { Form, FormField } from '@/components/ui/form'
import { contactFormSchema, type ContactFormValues } from '@/lib/validations/contact'

export default function ContactPage() {
  const handleSubmit = async (data: ContactFormValues) => {
    // TODO: Implement form submission
    console.log(data)
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-3xl font-bold text-secondary">Contact Us</h1>
        <p className="mb-6 text-lg text-muted-foreground">
          Have questions about our workshops or interested in bringing Principal Powered Reading to your school? We'd love to hear from you.
        </p>
        
        <div className="rounded-lg border-[1px] border-input bg-card p-8 shadow-sm">
          <Form<ContactFormValues>
            onSubmit={handleSubmit}
            schema={contactFormSchema}
          >
            {({ register, formState: { errors } }) => (
              <>
                <FormField
                  label="Name"
                  {...register('name')}
                  placeholder="Your full name"
                  error={errors.name?.message}
                />
                <FormField
                  label="Email"
                  type="email"
                  {...register('email')}
                  placeholder="you@example.com"
                  error={errors.email?.message}
                />
                <FormField
                  label="Subject"
                  {...register('subject')}
                  placeholder="How can we help?"
                  error={errors.subject?.message}
                />
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-secondary"
                  >
                    Message
                  </label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    placeholder="Tell us more about your needs..."
                    className={`block w-full rounded-md border-[1px] ${
                      errors.message ? 'border-destructive' : 'border-input'
                    } px-3 py-2 text-foreground shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary`}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="mt-6 w-full rounded-md bg-primary px-4 py-3 text-lg font-semibold text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Send Message
                </button>
              </>
            )}
          </Form>
        </div>
      </div>
    </main>
  )
} 