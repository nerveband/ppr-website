# Principal Powered Reading Website - Detailed Development Plan

## 1. Project Context

### 1.1. Product Context (productContext.md)

#### 1.1.1. Why This Project Exists
To establish an online presence for "Principal Powered Reading" and promote their workshops and services to educational leaders.

#### 1.1.2. Problems It Solves
- Lack of online visibility for "Principal Powered Reading".
- Difficulty for potential clients (principals, school leaders) to find information about workshops and services.
- Inefficient workshop registration process.

#### 1.1.3. How It Should Work
The website should be a simple, informative, and professional platform that:
- Clearly communicates the mission and value proposition of "Principal Powered Reading".
- Provides detailed information about workshops and the founder.
- Allows users to easily register and pay for workshops.
- Is performant, accessible, and maintainable using modern web development technologies.
- Is scalable and adaptable for future feature additions.

### 1.2. Active Context (activeContext.md)

#### 1.2.1. Current Task
Creating a detailed development plan for the "Principal Powered Reading" website.

#### 1.2.2. Recent Changes
- Updated tech stack to Next.js, React, TypeScript, Tailwind CSS, etc., based on best practices guide.
- Revised `techContext.md` and `systemPatterns.md` to reflect the new tech stack.
- Updated development plan to align with the new technology choices.

#### 1.2.3. Next Steps
1. Finalize and present the updated detailed development plan to the user.
2. Upon approval, begin website development using Next.js and the chosen technologies.
3. Set up development environment and project structure.
4. Start building components and pages based on the updated plan.
5. Continuously update documentation as development progresses.

### 1.3. System Patterns (systemPatterns.md)

#### 1.3.1. Architecture
- **Frontend:** Single-Page Application (SPA) built with Next.js and React.
- **Routing:** Next.js App Router.
- **Server-Side Rendering (SSR) / Static Site Generation (SSG):** Leverage Next.js capabilities for SSR/SSG where appropriate for performance and SEO.
- **Component-Driven:**  Built using reusable React components.
- **State Management:** Redux Toolkit for global state, React Context and useState/useReducer for local component state.
- **Styling:** Tailwind CSS for utility-first styling, CSS variables for theming.
- **E-commerce:** Integrate a suitable e-commerce solution (e.g., Stripe API for payments, consider a lightweight e-commerce platform or service if needed for product/order management - to be determined based on specific requirements beyond MVP).

#### 1.3.2. Key Technical Decisions
- **Framework Choice:** Next.js for its comprehensive features, performance optimizations, and developer experience.
- **Language:** TypeScript for type safety and maintainability.
- **Styling:** Tailwind CSS for rapid and consistent styling.
- **Component Library:** Shadcn UI and Radix UI for accessible and customizable UI components.
- **State Management:** Redux Toolkit for predictable global state management.

#### 1.3.3. Architecture Patterns
- **Component-Based Architecture:**  Modular and reusable UI components.
- **Frontend-Focused:**  Client-side rendering with server-side rendering/static generation for initial load and SEO.
- **API-Driven (Potentially):**  If e-commerce or future features require backend logic, the frontend will interact with APIs. For MVP, e-commerce integration might be primarily frontend-focused using a service like Stripe.

### 1.4. Tech Context (techContext.md)

#### 1.4.1. Technologies Used
- **Frontend Framework:** Next.js with React
- **Language:** TypeScript
- **Styling:** Tailwind CSS, CSS variables
- **UI Components:** Shadcn UI, Radix UI Primitives
- **State Management:** Redux Toolkit (for global state), useState, useReducer, useContext (for local state)
- **Form Validation:** Zod, React Hook Form
- **Testing:** Jest, React Testing Library
- **Documentation:** JSDoc
- **Internationalization:** next-i18next

#### 1.4.2. Development Setup
- Node.js and npm or yarn
- Code editor (VSCode recommended)
- Git for version control
- Local development environment

#### 1.4.3. Technical Constraints
- **Modern Web Development Practices:** Adhere to the best practices outlined in the provided guide.
- **Performance Optimization:** Implement React performance optimizations (useCallback, useMemo, code splitting).
- **Accessibility:**  Ensure website accessibility (semantic HTML, ARIA attributes, keyboard navigation, color contrast).
- **Responsiveness:**  Mobile-first responsive design.

### 1.5. Progress (progress.md)

#### 1.5.1. What Works
- Initial website content and brand guidelines are provided.
- Design and development plan is created and updated for the new tech stack.
- Tech stack and architecture documentation updated.

#### 1.5.2. What's Left to Build
- Website structure and component development using Next.js, React, and TypeScript.
- E-commerce integration (using Stripe or similar).
- SEO optimization.
- Mobile responsiveness implementation.
- Content population and finalization.
- Unit and integration testing.
- Accessibility implementation.
- Internationalization (if required).
- Deployment (e.g., Vercel, Netlify).
- Documentation (JSDoc, user guide).

#### 1.5.3. Progress Status
- Planning phase: Completed (updated for new tech stack).
- Development phase: Not started.
- Testing phase: Not started.
- Deployment phase: Not started.

## 2. Detailed MVP Design & Development Plan

### 2.1. Project Goals

*   **Primary Goal:** Create a simple, informative website to promote "Principal Powered Reading" workshops and services to educational leaders, driving workshop registrations.
*   **MVP Focus:**  Launch a functional website quickly with core information and registration capabilities. Advanced features can be added in later iterations.

### 2.2. Target Audience

*   Principals
*   School Leaders
*   Teacher-Leaders
*   Educational Leaders

### 2.3. Website Name

*   Principal Powered Reading

### 2.4. Design Guidelines

#### 2.4.1. Color Scheme ("Modern Authority" Palette)

*   **Primary:** Logo Yellow (#F4C430) - Use for primary buttons, accents, and highlights.
*   **Secondary:** Deep Navy (#1C2B4B) - Use for headers, navigation, and important text.
*   **Supporting Colors:**
    *   Pure White (#FFFFFF) - Backgrounds, text contrast.
    *   Light Gray (#F5F5F5) -  Secondary backgrounds, subtle dividers.
    *   Dark Charcoal (#2D2D2D) - Body text, general text content.

#### 2.4.2. Typography

*   **Font Specification:**  Company will provide font specifications.  If not immediately available, use clean, professional, and readable fonts (e.g.,  "Roboto" or "Open Sans" for body text, and a slightly bolder sans-serif for headings).
*   **Font Sizes:**  Ensure readability across devices. Use a clear hierarchy of font sizes for headings, subheadings, and body text.

#### 2.4.3. Visual Elements

*   **Logo:** Prominently display the "Principal Powered Reading" logo (bold yellow background).
*   **Imagery:** Use compelling, professional images related to education, leadership, and reading. Focus on images that convey empowerment, research, and transformation.  Source high-quality stock photos if necessary, or use provided images if available.
*   **Website Style:** Unique and visually appealing, yet professional and trustworthy. Clean and intuitive layout. Mobile-responsive design is mandatory.

#### 2.4.4. Tone and Messaging

*   Professional, yet accessible.
*   Research-focused, but practical and actionable.
*   Empowering and transformational.
*   Educational leadership perspective.
*   Emphasize school-wide impact.

### 2.5. Website Structure & Content (MVP)

#### 2.5.1. Homepage

*   **Hero Section:**
    *   Headline:  "Principal Powered Reading" -  Clear and prominent.
    *   Sub-headline:  "Empowering Educational Leaders with Research-Informed Literacy Practices." (Or similar, concise value proposition).
    *   Compelling image or graphic.
    *   Clear Call to Action Button: "Explore Our Workshops" (linking to the Workshops section).
*   **"Who We Serve, What We Do, Why It Matters, How We Work" Section:**  Use the provided markdown content under "Our Mission" to create concise paragraphs explaining these key aspects. Use clear headings and bullet points for readability.
*   **"What Makes Us Different" Section:**  Highlight the unique value proposition – focus on school leaders, broader research perspective, etc. Use the provided markdown content.
*   **"The Science of Reading Perspective" Section:** Briefly explain the approach, emphasizing the broader research focus beyond just phonics. Use the provided markdown content.
*   **"Free Sample Class" Section:**  Promote the free class offering with a brief description and a clear call to action (e.g., "Register for a Free Class").  Initially, this can link to a contact form or email signup.
*   **"About the Founder & Instructor" Section:**  Include a professional photo of ZV and a brief, compelling bio highlighting credentials and experience. Use the provided "[ZV credentials and background]" placeholder to insert this content when available.
*   **Call to Action Banner (Optional):**  A banner at the bottom of the homepage encouraging users to explore workshops or contact for on-site training.

#### 2.5.2. "The Workshops" Page (or Section)

*   **Main Heading:** "Our Workshops"
*   **Introduction:**  Briefly describe the workshops – live, online/in-person, topic-focused, professional development credits.
*   **"Reading Motivation Workshop" Section:**
    *   Sub-heading: "Reading Motivation Workshop"
    *   Detailed description of the workshop (use "[Detailed description and upcoming dates]" placeholder for now, actual content to be added).
    *   Call to Action Button: "Register Now" (link to e-commerce registration when set up).  For MVP, this could initially link to a contact form or email inquiry.
*   **"Future Workshops" Section:**
    *   Sub-heading: "Coming Soon - Future Workshops"
    *   List upcoming workshop topics (if known).  If not, simply state "Additional workshops are in development. Check back soon!".

#### 2.5.3. "Founder & Instructor" Page (or Section)

*   **Main Heading:** "About the Founder & Instructor" (or "Meet ZV")
*   **Professional Photo of ZV:** Prominent display.
*   **Detailed Biography:** Expand on the brief bio from the homepage, providing more details about ZV's background, expertise, and passion for literacy education. Use the "[ZV credentials and background]" placeholder content when available.

#### 2.5.4. "What Makes Us Different" Page (or Section)

*   **Main Heading:** "What Makes Us Different"
*   **Detailed Explanation:** Expand on the points mentioned in the homepage section. Clearly articulate the unique approach and value proposition. Use the provided markdown content.

#### 2.5.5. "A Free Class" Page (or Section)

*   **Main Heading:** "Free Sample Class"
*   **Description of Free Class Options:** Explain the available free class options (preview, special topics, overview).
*   **Call to Action:**  Clear instructions on how to access the free class (e.g., "Sign up for our mailing list to be notified about upcoming free classes," or a direct registration form if feasible in MVP).

#### 2.5.6. "On Site @ Your School" Page (or Section)

*   **Main Heading:** "On-Site Workshops for Your School" (or "Bring Our Workshops to Your School")
*   **Description:** Explain the on-site workshop option and its benefits.
*   **Call to Action:** "Contact Us to Learn More About On-Site Training" (link to contact form or email).

#### 2.5.7. Contact Page (or Section)

*   **Main Heading:** "Contact Us"
*   **Contact Form:**  Implement a simple contact form (using React Hook Form and Zod for validation).
*   **Email Address:** Display the email address clearly (e.g., info@principalpoweredreading.com - placeholder).
*   **Phone Number:** Display the phone number clearly.

#### 2.5.8. Footer

*   **"About Us" Link:** Link to the "Founder & Instructor" page or section.
*   **Email Contact Link:**  mailto: link to the email address.
*   **Phone Number:** Display phone number again.
*   **Copyright Information:**  "© \[Year] Principal Powered Reading. All rights reserved."

#### 2.5.9. Navigation Menu

*   **Main Navigation:**
    *   The Workshops (Dropdown: Reading Motivation, Coming Soon)
    *   Founder & Instructor
    *   What Makes Us Different
    *   A Free Class
    *   On Site @ Your School
*   **Footer Navigation:** (Links as listed in Footer section above)

### 2.6. Functional Requirements (MVP)

*   **E-commerce for Workshop Registration:**
    *   Integrate a suitable e-commerce solution (e.g., Stripe API for payments).
    *   Allow users to register and pay for workshops (starting with the "Reading Motivation Workshop").
    *   Implement basic payment processing (e.g., Stripe integration).
*   **Contact Forms:** Implement contact forms for inquiries and free class registration (using React Hook Form and Zod for validation).
*   **Mobile Responsiveness:**  Ensure the website is fully responsive and looks good on all devices (desktops, tablets, and smartphones).
*   **SEO Optimization (Basic):**
    *   Use relevant keywords in page titles and descriptions (e.g., "principal leadership," "reading research," "literacy workshops").
    *   Ensure website is indexable by search engines (Next.js handles this well).
    *   Implement basic metadata management using Next.js Head component.
*   **Accessibility (a11y):**
    *   Use semantic HTML.
    *   Ensure keyboard navigation.
    *   Maintain accessible color contrast.
    *   Use ARIA attributes where necessary.

### 2.7. Development Steps

1.  **Environment Setup:** Set up local development environment with Node.js, npm/yarn, and VSCode. Initialize a new Next.js project with TypeScript.
2.  **Project Structure Setup:** Organize project directories (e.g., `components`, `pages`, `styles`, `public`).
3.  **Component Development (Shadcn UI, Radix UI):**
    *   Set up Shadcn UI and Radix UI Primitives.
    *   Develop reusable UI components (buttons, typography, layouts, navigation, forms, etc.) using these libraries and Tailwind CSS.
4.  **Page Development (Next.js App Router):**
    *   Create pages based on the website structure (Homepage, Workshops, Founder, etc.) using Next.js App Router.
    *   Implement page layouts and structure.
    *   Integrate components into pages.
5.  **Homepage Content Implementation:** Populate the homepage with content, sections, and imagery as per the design plan.
6.  **Workshops Page Development:** Develop the "Workshops" page, including workshop descriptions and registration calls to action.
7.  **Founder & Instructor Page Development:** Create the "Founder & Instructor" page with bio and photo.
8.  **"What Makes Us Different" Page Development:** Implement the "What Makes Us Different" page with detailed explanations.
9.  **"Free Class" Page Development:** Develop the "Free Class" page and integrate a contact form or email signup for free class access.
10. **"On Site" Page Development:** Create the "On Site" page with information and a contact form for inquiries.
11. **Contact Page Development:** Develop the "Contact" page and implement the contact form using React Hook Form and Zod for validation.
12. **Navigation Implementation:** Implement main and footer navigation menus using Next.js Link component and appropriate UI components.
13. **Styling with Tailwind CSS and CSS Variables:** Apply Tailwind CSS for styling and use CSS variables for theming and consistent design. Ensure mobile responsiveness throughout development.
14. **E-commerce Integration (Stripe):**
    *   Integrate Stripe API for payment processing.
    *   Implement workshop registration and payment flow for the "Reading Motivation Workshop".
    *   Handle payment success and error scenarios.
15. **Form Validation (Zod, React Hook Form):** Implement form validation for contact forms and potentially workshop registration forms using Zod and React Hook Form.
16. **SEO Optimization:** Implement basic SEO practices, including metadata, semantic HTML, and Next.js SEO features.
17. **Accessibility Implementation:** Ensure website accessibility by using semantic HTML, ARIA attributes, keyboard navigation, and testing color contrast.
18. **Testing (Unit and Integration):** Write unit tests for components and integration tests for key workflows using Jest and React Testing Library.
19. **Content Population:** Finalize all website content, including workshop descriptions, founder bio, and imagery.
20. **Responsiveness Testing:** Thoroughly test responsiveness on different devices and screen sizes.
21. **Deployment (Vercel/Netlify):** Deploy the website to a hosting platform like Vercel or Netlify.
22. **Documentation:** Generate JSDoc documentation for components and functions. Create a brief user guide for content updates (if needed).

### 2.8. Content To Be Provided

*   **Official Logo:** "Principal Powered Reading" logo file.
*   **Font Specifications:**  Details on preferred fonts.
*   **ZV Credentials and Background:**  Detailed bio and professional photo of ZV.
*   **Workshop Descriptions:**  Detailed descriptions for each workshop, including dates and specific content for "Reading Motivation Workshop".
*   **Compelling Imagery:**  Images related to education, leadership, and reading (if available, otherwise stock photos will be used).
*   **Contact Information:**  Email address, phone number.

### 2.9. Documentation

*   Maintain and update `activeContext.md` and `progress.md` throughout the development process.
*   Document component and function details using JSDoc.
*   Create a brief user guide for content updates (if necessary).

This detailed plan provides a comprehensive guide for developing the MVP website using a modern JavaScript tech stack. This document should serve as the primary reference throughout the development process. 