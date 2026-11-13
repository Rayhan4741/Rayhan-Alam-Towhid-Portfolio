# Professional Full Stack Developer Portfolio (Next.js 14)

A modern, high-performance, and fully responsive personal portfolio website built with **Next.js 14 (App Router)**, **React 18**, **Tailwind CSS**, and **Lucide Icons**.

---

## 🌟 Key Features & Requirements Checklist

| # | Requirement | Implementation Details |
|---|---|---|
| **1** | **Responsive Navigation Bar** | Sticky glassmorphic navbar with smooth scroll links to all sections, active section highlight indicator, brand badge with glowing pulse dot, and an animated mobile drawer menu. |
| **2** | **Designation & Introduction** | Professional headline, dynamic typewriter designation switcher (*Full Stack Developer*, *MERN & Next.js Specialist*, *Software Engineer*), professional avatar portrait with glowing gradient ring and floating badges. |
| **3** | **Resume Download Button** | High-visibility action button in the Hero section and Navbar triggering an interactive Resume Viewer with one-click download and formatted print/PDF capability. |
| **4** | **Social Links** | Embedded interactive profile links for **GitHub**, **LinkedIn**, **Twitter / X**, **Facebook**, and direct **WhatsApp**. |
| **5** | **About Me Section** | Detailed personal story covering **Programming Journey**, **Type of Work Enjoyed**, **Core Personality & Engineering Ethics**, and **Hobbies & Outside Interests** (Football, Photography, Sci-Fi Literature, Mechanical Keyboards). |
| **6** | **Skills Section** | Graphical format featuring progress meters, percentage proficiency indicators, experience badges, and category tabs (*Frontend*, *Backend*, *Databases*, *Tools & DevOps*). |
| **7** | **Educational Qualification** | Comprehensive post-HSC academic timeline: **B.Sc. in Computer Science & Engineering** (UIU, CGPA 3.82/4.00, thesis, coursework) and **Higher Secondary Certificate (HSC)** (Science, Golden A+). |
| **8** | **Work Experience** | Interactive professional career timeline highlighting roles (*Junior Full Stack Developer*, *Frontend Developer Intern*, *Freelance Web Developer*), quantifiable impact, and tech tags. |
| **9** | **Projects Section (4 Projects)** | Card format showing project name, thumbnail, category, tech badges, and **"View More / Details"** button leading to dedicated Next.js dynamic pages (`/projects/[id]`) with: <br>• Main tech stack used <br>• In-depth description <br>• Live project link <br>• GitHub client repository link <br>• Challenges faced & engineered solutions <br>• Potential improvements & future roadmap |
| **10** | **Contact Information** | One-click copy email (`alex.morgan.dev@gmail.com`), phone number, direct WhatsApp click-to-chat (`https://wa.me/...`), and a responsive message form with instant feedback. |
| **11** | **Footer** | Elegant footer with quick navigation links, social buttons, copyright notice, and smooth back-to-top button. |
| **12** | **Responsive & Polished UI** | Dark developer theme (`#090d16`), emerald (`#10b981`) and cyan (`#06b6d4`) glowing accents, glassmorphic panels, and mobile-first responsive layout tested across all viewports. |

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router & Server-Side Generation)
- **Library**: [React 18](https://react.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Inter & JetBrains Mono

---

## 📁 Project Structure

```text
├── app/
│   ├── globals.css              # Custom Tailwind utilities, glassmorphism, scrollbars
│   ├── layout.jsx               # Root layout & SEO metadata
│   ├── page.jsx                 # Main homepage bringing all portfolio sections together
│   └── projects/
│       └── [id]/
│           └── page.jsx         # Dynamic detailed project page (Requirement 9)
├── components/
│   ├── Navbar.jsx               # Responsive navigation with mobile menu drawer
│   ├── Hero.jsx                 # Introduction, designation, photo, resume CTA, socials
│   ├── About.jsx                # Journey, work enjoyed, personality & hobbies
│   ├── Skills.jsx               # Categorized graphical skills with progress bars
│   ├── Education.jsx            # B.Sc. in CSE & HSC academic cards
│   ├── Experience.jsx           # Career timeline with quantifiable metrics
│   ├── Projects.jsx             # Project cards with "View More / Details" links
│   ├── Contact.jsx              # Direct contact cards, WhatsApp link & message form
│   ├── Footer.jsx               # Elegant footer with social links & back-to-top
│   └── ResumeModal.jsx          # Interactive resume viewer with instant download
├── data/
│   └── portfolioData.js         # Centralized, easily editable portfolio content
├── public/
│   └── Alex_Morgan_Resume.pdf   # Downloadable resume document
├── next.config.mjs              # Next.js optimization configuration
├── tailwind.config.js           # Custom themes, colors & animations
└── package.json                 # Scripts and dependencies
```

---

## 🚀 How to Run Locally

1. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

2. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Run production server**:
   ```bash
   npm run start
   ```

---

## 🌐 How to Host Live (Free & Instant)

### Option 1: Deploy to Vercel (Recommended for Next.js - 2 Minutes)
1. Push this repository to your GitHub account:
   ```bash
   git remote add origin https://github.com/Rayhan4741/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) and sign in with GitHub.
3. Click **"Add New"** > **"Project"** and select your repository.
4. Click **"Deploy"** (Vercel automatically detects Next.js settings).
5. Your live URL will be ready immediately (e.g., `https://your-portfolio.vercel.app`).

### Option 2: Deploy to Netlify
1. Go to [Netlify](https://www.netlify.com/) and connect your GitHub repository.
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Deploy site.

