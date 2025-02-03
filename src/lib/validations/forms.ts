import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export const workshopRegistrationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  school: z.string().min(2, 'School name must be at least 2 characters'),
  role: z.string().min(2, 'Role must be at least 2 characters'),
  workshop: z.string().min(2, 'Workshop must be selected'),
})

export const freeClassRegistrationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  school: z.string().min(2, 'School name must be at least 2 characters'),
  role: z.string().min(2, 'Role must be at least 2 characters'),
  preferredFormat: z.enum(['online', 'in-person'], {
    required_error: 'Please select a preferred format',
  }),
})

export const onSiteInquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  school: z.string().min(2, 'School name must be at least 2 characters'),
  role: z.string().min(2, 'Role must be at least 2 characters'),
  preferredDates: z.string().min(2, 'Please provide preferred dates'),
  additionalInfo: z.string().optional(),
}) 