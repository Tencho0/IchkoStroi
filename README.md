# ИчкоСтрой — Industrial Hall Construction Website

A production-ready static marketing website for **ИчкоСтрой (IchkoStroy)**, a Bulgarian company specializing in industrial hall construction. Built with pure HTML, CSS, and vanilla JavaScript — no frameworks.

## Features

- 16 pages with full SEO optimization (meta tags, Open Graph, JSON-LD structured data)
- Mobile-first responsive design (mobile, tablet, desktop)
- Modern CSS: Grid, Flexbox, custom properties, `clamp()`, glassmorphism
- Scroll-triggered animations (Intersection Observer)
- FAQ accordion, portfolio filtering, sticky header, back-to-top button
- All text in Bulgarian

## File Structure

```
/
├── index.html                  # Home / Landing page
├── about.html                  # About the company
├── services.html               # Services hub
├── portfolio.html              # Portfolio / Projects
├── process.html                # Our process (5 steps)
├── faq.html                    # Frequently asked questions
├── contact.html                # Contact page with form
├── services/
│   ├── production-halls.html   # Manufacturing halls
│   ├── warehouse.html          # Warehouses & logistics
│   ├── cold-storage.html       # Cold storage facilities
│   ├── steel-structures.html   # Steel structures
│   └── renovation.html         # Hall renovation
├── portfolio/
│   ├── project-1.html          # Project: Mega Industry
│   ├── project-2.html          # Project: TransLog
│   └── project-3.html          # Project: FreshCo
├── css/
│   └── styles.css              # Global stylesheet
├── js/
│   └── main.js                 # Global JavaScript
├── robots.txt                  # Search engine directives
├── sitemap.xml                 # XML sitemap
├── .gitignore
└── README.md
```

## Deployment to Cloudflare Pages

### Step 1: Create a GitHub Account
If you don't have one already, sign up for a free account at [github.com](https://github.com).

### Step 2: Create a Repository and Push Code
```bash
# If not already initialized:
git init
git add .
git commit -m "Initial commit"

# Create a new repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/ichkostroy.git
git branch -M main
git push -u origin main
```

### Step 3: Sign Up for Cloudflare Pages
Go to [pages.cloudflare.com](https://pages.cloudflare.com) and sign up for a free account (or log in if you already have one).

### Step 4: Create a Project
Click **"Create a project"** → **"Connect to Git"**.

### Step 5: Select Your Repository
Authorize Cloudflare to access your GitHub account and select the **ichkostroy** repository.

### Step 6: Configure Build Settings
- **Framework preset:** None
- **Build command:** *(leave empty)*
- **Build output directory:** `/` (root)

### Step 7: Deploy
Click **"Save and Deploy"**. Cloudflare will deploy your site.

### Step 8: Your Site is Live
Your site will be available at `https://ichkostroy.pages.dev` within about 1 minute.

### Step 9 (Optional): Custom Domain
To add a custom domain (e.g., `ichkostroy.bg`):
1. Go to your project in the Cloudflare Pages dashboard
2. Click **Custom Domains**
3. Add your domain and follow the DNS instructions

## Updating the Site

Simply push changes to the `main` branch on GitHub:
```bash
git add .
git commit -m "Update content"
git push
```
Cloudflare Pages will automatically detect the push and redeploy within seconds.

## Local Development

No build step required. Just open `index.html` in your browser:

```bash
# Option 1: Open directly
open index.html        # macOS
start index.html       # Windows

# Option 2: Local dev server (recommended for correct relative paths)
npx serve .
```

Then visit `http://localhost:3000` in your browser.

## Tech Stack

- **HTML5** — Semantic markup, SEO-optimized
- **CSS3** — Custom properties, Grid, Flexbox, animations, glassmorphism
- **JavaScript** — Vanilla ES6+, Intersection Observer API
- **Fonts** — Google Fonts (Inter, Outfit)
- **No frameworks, no dependencies, no build tools**
