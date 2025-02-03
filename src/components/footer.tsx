import Link from 'next/link'

const navigation = {
  main: [
    { name: 'Workshops', href: '/workshops' },
    { name: 'About Us', href: '/about' },
    { name: 'Why Us', href: '/why-us' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Research', href: '/research' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: '#',
      icon: (props: React.ComponentProps<'svg'>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props: React.ComponentProps<'svg'>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
  ],
}

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4">
            <h2 className="font-display text-lg font-semibold">About Us</h2>
            <p className="text-sm leading-6 text-secondary-foreground/80">
              Principal Powered Reading empowers educational leaders with research-informed literacy practices, transforming schools through comprehensive professional development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-display text-lg font-semibold">Quick Links</h2>
            <ul role="list" className="mt-4 space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm leading-6 text-secondary-foreground/80 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h2 className="font-display text-lg font-semibold">Resources</h2>
            <ul role="list" className="mt-4 space-y-2">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm leading-6 text-secondary-foreground/80 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="font-display text-lg font-semibold">Contact</h2>
            <ul role="list" className="mt-4 space-y-2">
              <li>
                <a
                  href="mailto:info@principalpoweredreading.com"
                  className="text-sm leading-6 text-secondary-foreground/80 transition-colors hover:text-white"
                >
                  info@principalpoweredreading.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="text-sm leading-6 text-secondary-foreground/80 transition-colors hover:text-white"
                >
                  (123) 456-7890
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <div className="flex space-x-6">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-secondary-foreground/80 transition-colors hover:text-white"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-center text-xs leading-5 text-secondary-foreground/80">
            &copy; {new Date().getFullYear()} Principal Powered Reading. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 