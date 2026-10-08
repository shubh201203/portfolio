# Shubh Sharma — Data Analyst & BI Portfolio Website

A bespoke, high-performance personal portfolio website built with **React**, **Vite**, and **Tailwind CSS**. Designed specifically to position Shubh Sharma as a **Data Analyst | BI Analyst | Product Analytics** candidate for top recruiting pipelines, LinkedIn, and internship applications.

---

## 🌟 Key Highlights

- **Recruiter 5–10 Second Optimization**: Instant visual hierarchy showcasing core analytics identity, target roles, key tools (SQL, PostgreSQL, Power BI, DAX, Python, Star Schema), and direct contact channels.
- **NovaCart Centerpiece Case Study**: An extensive, dedicated 11-stage case study covering Business Problem, Data Source, Python Cleaning & ETL, Data Architecture, SQL Analytics Suite, Dimensional Star Schema modeling, and planned Power BI dashboard views.
- **Product Analytics Deep Dive**: Food delivery user journey analysis featuring an interactive 6-stage conversion funnel, retention cohorts, user segmentation, and an A/B testing evaluation framework.
- **Capstone & Full-Stack Projects**: Visual multi-role architecture of the Disaster Reporting & Management platform, alongside WardrobeWhiz and Emotion Music systems.
- **Strict Factual Integrity**: 100% adherence to verified claims with zero fabricated business figures or unearned proficiency rankings.
- **Single Source of Truth**: All content, project metadata, skills, and links are neatly organized in `src/data/portfolioData.js` for quick updates.

---

## 🚀 Quickstart & Local Development

```bash
# 1. Navigate to project directory
cd shubh-portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

The application will run locally at `http://localhost:5173`.

---

## 📦 Production Build

```bash
# Build optimized static distribution
npm run build

# Preview production build locally
npm run preview
```

The build output is bundled in the `dist/` directory, ready for immediate deployment on **Vercel**, **Netlify**, or **GitHub Pages**.

---

## 🌐 Deploying to GitHub Pages (Automated via GitHub Actions)

1. Create a new repository on your GitHub account ([github.com/shubh201203](https://github.com/shubh201203)).
   - Name it `portfolio` (or `shubh201203.github.io`).
2. Push this project to GitHub:
   ```bash
   git add .
   git commit -m "feat: portfolio website ready for GitHub Pages"
   git remote add origin https://github.com/shubh201203/<YOUR-REPO-NAME>.git
   git branch -M main
   git push -u origin main
   ```
3. Enable GitHub Pages in your repository settings:
   - On GitHub, go to your repository **Settings** > **Pages** (under "Code and automation" in the left sidebar).
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. That's it! The included `.github/workflows/deploy.yml` workflow will automatically trigger, build the website, and publish it at:
   - `https://shubh201203.github.io/<YOUR-REPO-NAME>/` (or `https://shubh201203.github.io/` if named `shubh201203.github.io`).

---

## 🌐 Deploying to Vercel (Alternative)

1. Push this directory to your GitHub account: [https://github.com/shubh201203](https://github.com/shubh201203)
2. Log into [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Framework Preset: **Vite**
5. Root Directory: `./`
6. Click **Deploy**. Vercel will build and assign your production domain within seconds.

---

## 📄 Adding Your Resume

When your updated resume is ready:
1. Save it as `resume.pdf`.
2. Place it into the `public/` directory (`shubh-portfolio/public/resume.pdf`).
3. Run `npm run build` and redeploy. The "Download Resume" buttons on the website will automatically serve it.

---

## 🛠️ Content Updates

To update your skills, projects, certifications, or personal contact details, simply edit:
```
src/data/portfolioData.js
```
No component code modifications are required.
