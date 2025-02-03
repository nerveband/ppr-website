## SpecStory

## Design and Development Plan for Principal Powered Reading (2/3/2025, 2:57:17 PM)

_**User**_

@.cursorrules 
<context>
Based on the existing logo with its bold yellow background, here are three refined color scheme options that would create a cohesive brand identity:

"Modern Authority" Palette:


Primary: Logo Yellow (#F4C430)
Secondary: Deep Navy (#1C2B4B)
Supporting colors:

Pure White (#FFFFFF)
Light Gray (#F5F5F5) - for backgrounds
Dark Charcoal (#2D2D2D) - for body text
This creates a professional, authoritative look while maintaining the warmth of the yellow.

Visual Design & Brand Elements:

The website should be unique and visually appealing while maintaining professionalism
Company will provide specific brand guidelines including:

Official logo
Color scheme
Font specifications


Emphasis on compelling imagery throughout
Clean, intuitive navigation and layout
Mobile-responsive design required

Content Structure:

Main Navigation Menu:


The Workshops (with dropdown for Reading Motivation and Coming Soon)
Founder & Instructor
What Makes Us Different
A Free Class
On Site @ Your School


Homepage Content Focus:


Clear value proposition highlighting research-informed leadership in reading education
Emphasis on transforming schools through literacy research
Target audience clearly identified (principals, superintendents, educational leaders)
What/Why/How structure explaining the program's purpose and approach
Differentiation from standard "science of reading" programs


Key Content Sections:


Workshop details and registration
Instructor credentials (ZV credentials)
Unique value proposition
Free class offerings
On-site workshop information
About Us/Contact sections

Tone & Messaging:

Professional yet accessible
Research-focused but practical
Empowering and transformational
Educational leadership perspective
Emphasis on school-wide impact rather than classroom-level tactics
Clear differentiation from teacher-focused training

Functional Requirements:

Built-in e-commerce for workshop registration/payment
SEO optimization
Easy backend management for updates
Built using professional web-builder platform (e.g., Squarespace, Wix)
Registration/signup functionality for workshops and free classes

Footer Elements:

About Us
Email contact
Phone number
Copyright information

The overall design should reflect the company's mission of empowering educational leaders with research-based practices to transform school-wide reading instruction and student outcomes.
I'll convert the provided website content into a clear markdown format based on the documents:

# Principal Powered Reading

## Our Mission
When a school leader has a research-informed vision of school-wide reading instruction and practice, teachers flourish as literacy educators and students grow into successful readers. This is what we mean by Principal Powered Reading.

### Who We Serve
Principals and other school leaders, teacher-leaders, and educational leaders.

### What We Do
We empower Principals and other educational leaders with key literacy research and research-informed practices to transform their schools.

### Why It Matters
School leaders need a deep understanding of the research related to how children and young adults develop into successful readers so they can evaluate and improve school-wide reading programs and practices.

### How We Work
We offer live workshops (on zoom or in-person), each of which addresses one core literacy-based topic. You learn the key findings of the scientific research and how to apply research-backed principles and strategies to build upon or transform your current school-wide literacy practices related to that topic.

## What Makes Us Different
Most literacy-based trainings rightly focus on teaching teachers. While training for teachers demands a focus on day-to-day lessons and instructional techniques, training for Principals and other school leaders requires a broader focus on how the findings from reading research translate into key school-wide decisions related to curriculum, staffing, professional development, family engagement, and more.

## The Science of Reading Perspective
The growing "science of reading" movement aims to bring research-based reading practices into classrooms. However, this catchphrase often narrowly refers to only one aspect ("phonics") of a much broader set of key research findings. It is this broader research, established over decades in the fields of cognitive science, psychology, and neuroscience, that is our focus.

## Our Workshops
- Live workshops available online via Zoom or in-person
- Each workshop focuses on one core literacy-based topic
- Build your knowledge at your own pace
- Registration and payment options available
- Professional development credits available

### Reading Motivation Workshop
[Detailed description and upcoming dates]

### Future Workshops
Coming Soon - Additional topics in development

## Free Sample Class
Experience our approach firsthand through a free introductory class. Options include:
- Preview of our Reading Motivation workshop
- Special topics (e.g., eBooks vs physical books vs audio books)
- Overview sampling of multiple workshop content

## On-Site Training
We can bring our workshops directly to your school or district. Contact us to learn more about on-site training options.

## About the Founder & Instructor
[ZV credentials and background]

## Contact Information
- Email: [Contact form]
- Phone: [Number]
- [Additional contact options]

## Footer Information
- About Us: [Company story and mission]
- Contact Information
- Copyright Notice
- [Additional footer links]

*Note: This content structure is designed to be modular and can be expanded or modified based on specific implementation needs.*

Would you like me to focus on any particular section to develop further or provide more specific content recommendations?

</context>

<goal>
write a design and development plan that can be handed off to an AI-developer that builds a clear, simple, MVP website using all the information provided. The name of the website is Principal Powered Reading. Be clear, focused, detailed, simple, instructional, and make sure there are clear guidelines at every step and phase. 
</goal>

---

_**Assistant**_

Okay, I understand. Here is a design and development plan for the "Principal Powered Reading" website, tailored for an AI developer and based on the information you've provided.

First, let's ensure we have the necessary documentation in place for my memory bank.

```markdown:docs/productContext.md
# Product Context: Principal Powered Reading Website

## Why This Project Exists
To establish an online presence for "Principal Powered Reading" and promote their workshops and services to educational leaders.

## Problems It Solves
- Lack of online visibility for "Principal Powered Reading".
- Difficulty for potential clients (principals, school leaders) to find information about workshops and services.
- Inefficient workshop registration process.

## How It Should Work
The website should be a simple, informative, and professional platform that:
- Clearly communicates the mission and value proposition of "Principal Powered Reading".
- Provides detailed information about workshops and the founder.
- Allows users to easily register and pay for workshops.
- Is easily manageable and maintainable.
```

```markdown:docs/activeContext.md
# Active Context: Principal Powered Reading Website Development Plan

## Current Task
Creating a design and development plan for the "Principal Powered Reading" website MVP.

## Recent Changes
- Received website content and brand guidelines from the user.
- Reviewed `.cursorrules` for development best practices.

## Next Steps
1. Finalize and present the design and development plan to the user.
2. Upon approval, begin website development using the chosen platform (Squarespace or Wix).
3. Continuously update documentation as development progresses.

## Design and Development Plan (Detailed Below)
```

```markdown:docs/systemPatterns.md
# System Patterns: Principal Powered Reading Website

## Architecture
- Simple, single-page or minimal multi-page website.
- Hosted on a web-builder platform (Squarespace or Wix).
- Content-focused design with clear navigation.
- Integrated e-commerce functionality for workshop registration.

## Key Technical Decisions
- **Platform Choice:** Squarespace or Wix for ease of use and maintenance.
- **Styling:**  Utilize the provided color scheme and potentially Tailwind CSS if the platform allows for custom CSS injection for more control, while aiming for simplicity.
- **Content Management:**  Leverage the platform's built-in CMS for easy content updates.
- **E-commerce:** Utilize the platform's e-commerce features for workshop registration and payments.

## Architecture Patterns
- **Content-Driven:** Website primarily focused on delivering information clearly and effectively.
- **User-Centric:** Design and navigation focused on ease of use for potential clients.
```

```markdown:docs/techContext.md
# Tech Context: Principal Powered Reading Website

## Technologies Used
- **Web-Builder Platform:** Squarespace or Wix (to be decided).
- **HTML/CSS/JavaScript:**  Underlying web technologies, potentially abstracted by the chosen platform.
- **E-commerce Platform:** Integrated within Squarespace or Wix.
- **Styling:** Tailwind CSS (if platform allows and deemed necessary for customization).

## Development Setup
- Access to chosen web-builder platform (Squarespace or Wix account).
- Brand assets (logo, color scheme, fonts) provided by the client.
- Content provided in markdown format.

## Technical Constraints
- **Simplicity:** MVP website, prioritize essential features and clear communication.
- **Ease of Maintenance:**  Website should be easily updated by non-technical users.
- **Budget:**  Utilize cost-effective web-builder platform and avoid complex custom development.
```

```markdown:docs/progress.md
# Progress: Principal Powered Reading Website

## What Works
- Initial website content and brand guidelines are provided.
- Design and development plan is being created.

## What's Left to Build
- Website structure and design implementation on the chosen platform.
- E-commerce integration for workshop registration.
- SEO optimization.
- Mobile responsiveness implementation.
- Content population and finalization.
- Testing and deployment.

## Progress Status
- Planning phase: In progress.
- Development phase: Not started.
- Testing phase: Not started.
- Deployment phase: Not started.
```

Now that the memory bank is initialized, here is the design and development plan for the "Principal Powered Reading" website MVP:

# Principal Powered Reading Website - MVP Design & Development Plan

## 1. Project Goals

*   **Primary Goal:** Create a simple, informative website to promote "Principal Powered Reading" workshops and services to educational leaders, driving workshop registrations.
*   **MVP Focus:**  Launch a functional website quickly with core information and registration capabilities. Advanced features can be added in later iterations.

## 2. Target Audience

*   Principals
*   School Leaders
*   Teacher-Leaders
*   Educational Leaders

## 3. Website Name

*   Principal Powered Reading

## 4. Platform Selection

*   **Recommended Platform:** **Squarespace**.  Squarespace is user-friendly, offers good design templates, integrated e-commerce, and is suitable for content-focused websites. Wix is a viable alternative if Squarespace proves unsuitable for any reason.
*   **AI Developer Task:** Choose either Squarespace or Wix. Set up a new account/project for "Principal Powered Reading".

## 5. Design Guidelines

### 5.1. Color Scheme ("Modern Authority" Palette)

*   **Primary:** Logo Yellow (#F4C430) - Use for primary buttons, accents, and highlights.
*   **Secondary:** Deep Navy (#1C2B4B) - Use for headers, navigation, and important text.
*   **Supporting Colors:**
    *   Pure White (#FFFFFF) - Backgrounds, text contrast.
    *   Light Gray (#F5F5F5) -  Secondary backgrounds, subtle dividers.
    *   Dark Charcoal (#2D2D2D) - Body text, general text content.

### 5.2. Typography

*   **Font Specification:**  Company will provide font specifications.  If not immediately available, use clean, professional, and readable fonts readily available in Squarespace/Wix (e.g.,  "Roboto" or "Open Sans" for body text, and a slightly bolder sans-serif for headings).
*   **Font Sizes:**  Ensure readability across devices. Use a clear hierarchy of font sizes for headings, subheadings, and body text.

### 5.3. Visual Elements

*   **Logo:** Prominently display the "Principal Powered Reading" logo (bold yellow background).
*   **Imagery:** Use compelling, professional images related to education, leadership, and reading. Focus on images that convey empowerment, research, and transformation.  Source high-quality stock photos if necessary, or use provided images if available.
*   **Website Style:** Unique and visually appealing, yet professional and trustworthy. Clean and intuitive layout. Mobile-responsive design is mandatory.

### 5.4. Tone and Messaging

*   Professional, yet accessible.
*   Research-focused, but practical and actionable.
*   Empowering and transformational.
*   Educational leadership perspective.
*   Emphasize school-wide impact.

## 6. Website Structure & Content (MVP)

### 6.1. Homepage

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

### 6.2. "The Workshops" Page (or Section)

*   **Main Heading:** "Our Workshops"
*   **Introduction:**  Briefly describe the workshops – live, online/in-person, topic-focused, professional development credits.
*   **"Reading Motivation Workshop" Section:**
    *   Sub-heading: "Reading Motivation Workshop"
    *   Detailed description of the workshop (use "[Detailed description and upcoming dates]" placeholder for now, actual content to be added).
    *   Call to Action Button: "Register Now" (link to e-commerce registration when set up).  For MVP, this could initially link to a contact form or email inquiry.
*   **"Future Workshops" Section:**
    *   Sub-heading: "Coming Soon - Future Workshops"
    *   List upcoming workshop topics (if known).  If not, simply state "Additional workshops are in development. Check back soon!".

### 6.3. "Founder & Instructor" Page (or Section)

*   **Main Heading:** "About the Founder & Instructor" (or "Meet ZV")
*   **Professional Photo of ZV:** Prominent display.
*   **Detailed Biography:** Expand on the brief bio from the homepage, providing more details about ZV's background, expertise, and passion for literacy education. Use the "[ZV credentials and background]" placeholder content when available.

### 6.4. "What Makes Us Different" Page (or Section)

*   **Main Heading:** "What Makes Us Different"
*   **Detailed Explanation:** Expand on the points mentioned in the homepage section. Clearly articulate the unique approach and value proposition. Use the provided markdown content.

### 6.5. "A Free Class" Page (or Section)

*   **Main Heading:** "Free Sample Class"
*   **Description of Free Class Options:** Explain the available free class options (preview, special topics, overview).
*   **Call to Action:**  Clear instructions on how to access the free class (e.g., "Sign up for our mailing list to be notified about upcoming free classes," or a direct registration form if feasible in MVP).

### 6.6. "On Site @ Your School" Page (or Section)

*   **Main Heading:** "On-Site Workshops for Your School" (or "Bring Our Workshops to Your School")
*   **Description:** Explain the on-site workshop option and its benefits.
*   **Call to Action:** "Contact Us to Learn More About On-Site Training" (link to contact form or email).

### 6.7. Contact Page (or Section)

*   **Main Heading:** "Contact Us"
*   **Contact Form:**  Implement a simple contact form (using Squarespace/Wix forms).
*   **Email Address:** Display the email address clearly (e.g., info@principalpoweredreading.com - placeholder).
*   **Phone Number:** Display the phone number clearly.

### 6.8. Footer

*   **"About Us" Link:** Link to the "Founder & Instructor" page or section.
*   **Email Contact Link:**  mailto: link to the email address.
*   **Phone Number:** Display phone number again.
*   **Copyright Information:**  "© \[Year] Principal Powered Reading. All rights reserved."

### 6.9. Navigation Menu

*   **Main Navigation:**
    *   The Workshops (Dropdown: Reading Motivation, Coming Soon)
    *   Founder & Instructor
    *   What Makes Us Different
    *   A Free Class
    *   On Site @ Your School
*   **Footer Navigation:** (Links as listed in Footer section above)

## 7. Functional Requirements (MVP)

*   **E-commerce for Workshop Registration:**
    *   Integrate Squarespace/Wix e-commerce functionality to allow users to register and pay for workshops (starting with the "Reading Motivation Workshop").
    *   Initially, focus on basic payment processing (e.g., Stripe/PayPal integration).
*   **Contact Forms:** Implement contact forms for inquiries and free class registration (if direct registration is used for MVP).
*   **Mobile Responsiveness:**  Ensure the website is fully responsive and looks good on all devices (desktops, tablets, and smartphones).
*   **SEO Optimization (Basic):**
    *   Use relevant keywords in page titles and descriptions (e.g., "principal leadership," "reading research," "literacy workshops").
    *   Ensure website is indexable by search engines (check Squarespace/Wix SEO settings).
    *   Submit sitemap to search engines (if applicable in chosen platform).

## 8. Development Steps

1.  **Platform Setup:** Choose Squarespace or Wix and set up the project.
2.  **Template Selection:** Choose a clean, professional template that aligns with the design guidelines.
3.  **Homepage Development:**  Build the homepage sections as outlined in 6.1, incorporating content and imagery.
4.  **Workshops Page Development:** Create the "Workshops" page/section (6.2).
5.  **Founder & Instructor Page Development:** Create the "Founder & Instructor" page/section (6.3).
6.  **"What Makes Us Different" Page Development:** Create the "What Makes Us Different" page/section (6.4).
7.  **"Free Class" Page Development:** Create the "Free Class" page/section (6.5).
8.  **"On Site" Page Development:** Create the "On Site" page/section (6.6).
9.  **Contact Page Development:** Create the "Contact" page/section (6.7) and implement contact form.
10. **Footer Development:**  Create the website footer (6.8).
11. **Navigation Setup:** Configure the main and footer navigation menus (6.9).
12. **E-commerce Integration:** Set up e-commerce for "Reading Motivation Workshop" registration.
13. **Content Population:**  Populate all pages with final content, including workshop descriptions, founder bio, etc.
14. **Mobile Responsiveness Testing:**  Thoroughly test responsiveness on different devices and screen sizes.
15. **SEO Optimization:** Implement basic SEO settings in the platform.
16. **Testing:**  Test all website functionality, links, forms, and e-commerce flow.
17. **Deployment:**  Publish the website on the chosen platform.

## 9. Content To Be Provided

*   **Official Logo:** "Principal Powered Reading" logo file.
*   **Font Specifications:**  Details on preferred fonts.
*   **ZV Credentials and Background:**  Detailed bio and professional photo of ZV.
*   **Workshop Descriptions:**  Detailed descriptions for each workshop, including dates and specific content for "Reading Motivation Workshop".
*   **Compelling Imagery:**  Images related to education, leadership, and reading (if available, otherwise stock photos will be used).
*   **Contact Information:**  Email address, phone number.

## 10. Documentation

*   Update `activeContext.md` and `progress.md` throughout the development process.
*   Document any platform-specific configurations or settings.
*   Provide a brief user guide for content updates within the chosen platform.

This plan provides a detailed roadmap for developing the MVP website. Please let me know if you have any questions or require further clarification on any section.

---



---

