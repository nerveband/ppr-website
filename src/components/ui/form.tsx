'use client'

import * as React from 'react'
import { useForm, UseFormReturn, SubmitHandler, FieldValues } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

interface FormProps<TFormValues extends FieldValues> {
  onSubmit: SubmitHandler<TFormValues>
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode
  schema: z.ZodType<TFormValues>
}

export function Form<TFormValues extends FieldValues>({
  onSubmit,
  children,
  schema,
}: FormProps<TFormValues>) {
  const methods = useForm<TFormValues>({
    resolver: zodResolver(schema),
  })

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
      {children(methods)}
    </form>
  )
}

interface FormFieldProps {
  label: string
  name: string
  type?: string
  placeholder?: string
  error?: string
}

export function FormField({
  label,
  name,
  type = 'text',
  placeholder,
  error,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-secondary"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={`block w-full rounded-md border-[1px] ${
          error ? 'border-destructive' : 'border-input'
        } px-3 py-2 text-foreground shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary`}
      />
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
    </div>
  )
} 