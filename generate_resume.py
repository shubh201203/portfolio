import os
import pypdf
from playwright.sync_api import sync_playwright

resume_html = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  @import url('https://fonts.cdnfonts.com/css/latin-modern-roman');
  
  @page {
    size: 210mm 297mm;
    margin: 10mm 14mm 10mm 14mm;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Latin Modern Roman', 'Computer Modern', 'Times New Roman', serif;
    font-size: 9.35pt;
    line-height: 1.25;
    color: #000;
    background: #fff;
    -webkit-font-smoothing: antialiased;
  }

  .header {
    text-align: center;
    margin-bottom: 8px;
  }

  .name {
    font-size: 19pt;
    font-weight: 700;
    letter-spacing: 0.6px;
    margin-bottom: 2px;
  }

  .contact-line {
    font-size: 8.75pt;
    color: #111;
    line-height: 1.32;
  }

  .contact-line a {
    color: #000;
    text-decoration: none;
  }

  .contact-line span.sep {
    margin: 0 4px;
    color: #444;
  }

  .section {
    margin-top: 7px;
  }

  .section-title {
    font-size: 10.0pt;
    font-weight: 700;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    border-bottom: 0.7pt solid #000;
    padding-bottom: 1px;
    margin-bottom: 3.5px;
  }

  p.summary-text {
    font-size: 9.0pt;
    text-align: justify;
    line-height: 1.26;
  }

  .entry-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 9.15pt;
  }

  .entry-title {
    font-weight: 700;
  }

  .entry-date {
    font-style: italic;
    font-size: 8.85pt;
    white-space: nowrap;
  }

  .entry-subrow {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 9.05pt;
  }

  .entry-subtitle {
    font-style: normal;
  }

  .entry-location {
    font-style: italic;
    font-size: 8.85pt;
    white-space: nowrap;
  }

  .tech-skills-list {
    font-size: 8.95pt;
    line-height: 1.25;
  }

  .tech-category {
    font-weight: 700;
  }

  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 3.5px;
    font-size: 9.15pt;
  }

  .project-name {
    font-weight: 700;
  }

  .project-tech {
    font-style: italic;
    font-size: 8.55pt;
    color: #222;
  }

  ul.project-bullets {
    list-style-type: none;
    padding-left: 0;
    margin-top: 1.5px;
    margin-bottom: 2.5px;
  }

  ul.project-bullets li {
    position: relative;
    padding-left: 11px;
    font-size: 8.85pt;
    line-height: 1.23;
    text-align: justify;
    margin-bottom: 1px;
  }

  ul.project-bullets li::before {
    content: '•';
    position: absolute;
    left: 2px;
    top: 0;
    font-size: 8pt;
  }

  .cert-list {
    margin-top: 1.5px;
  }

  .cert-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 9.05pt;
    line-height: 1.26;
  }

  .cert-name {
    font-weight: 600;
  }

  .cert-date {
    font-style: italic;
    font-size: 8.85pt;
  }

  .achievement-item {
    font-size: 8.95pt;
    line-height: 1.24;
    margin-top: 2px;
  }
</style>
</head>
<body>

<div class="header">
  <div class="name">SHUBH SHARMA</div>
  <div class="contact-line">
    Amaravati, Andhra Pradesh, India<span class="sep">|</span>+91 96807 49857<span class="sep">|</span>Open to relocation
  </div>
  <div class="contact-line">
    <a href="mailto:shubhsharmaa2003@gmail.com">shubhsharmaa2003@gmail.com</a><span class="sep">|</span><a href="https://linkedin.com/in/shubh-sharma-2067981b5">linkedin.com/in/shubh-sharma-2067981b5</a>
  </div>
  <div class="contact-line">
    <a href="https://github.com/shubh201203">github.com/shubh201203</a><span class="sep">|</span><a href="https://shubh201203.github.io/portfolio">shubh201203.github.io/portfolio</a>
  </div>
</div>

<div class="section">
  <div class="section-title">Professional Summary</div>
  <p class="summary-text">
    Entry-level Data Analyst / BI Analyst candidate and Computer Science undergraduate at VIT-AP University, also pursuing IIT Madras’s BS in Data Science and Management. Built NovaCart and BitePulse analytics projects using SQL, Python, PostgreSQL, Power BI, and DAX, analyzing 104K+ synthetic sales records and 1.6M+ synthetic product events through ETL, data modeling, funnel analysis, cohort retention, and customer segmentation. Microsoft-certified Power BI, Fabric Analytics and Azure Data Fundamentals professional, with Google Data Practitioner certification; currently pursuing the Google Data Analytics Professional Certificate.
  </p>
</div>

<div class="section">
  <div class="section-title">Education</div>
  <div class="entry-row">
    <span class="entry-title">VIT-AP University</span>
    <span class="entry-date">2023–2027 (Expected)</span>
  </div>
  <div class="entry-subrow">
    <span class="entry-subtitle">B.Tech. in Computer Science and Engineering (Core)</span>
    <span class="entry-location">Amaravati, Andhra Pradesh</span>
  </div>
  <div class="entry-row" style="margin-top: 1.5px;">
    <span class="entry-title">Indian Institute of Technology Madras</span>
    <span class="entry-date">2026–Present</span>
  </div>
  <div class="entry-subrow">
    <span class="entry-subtitle">BS in Data Science and Management – Foundational Level</span>
    <span class="entry-location">Class XII: 78% | Class X: 95%</span>
  </div>
</div>

<div class="section">
  <div class="section-title">Technical Skills</div>
  <div class="tech-skills-list">
    <div><span class="tech-category">Programming:</span> Python, SQL</div>
    <div><span class="tech-category">Python Libraries:</span> Pandas, NumPy, Matplotlib</div>
    <div><span class="tech-category">Data Analytics:</span> Data Cleaning, Exploratory Data Analysis (EDA), KPI Reporting, Funnel Analysis, Conversion Rate Analysis, Cohort Retention, RFM (Recency, Frequency, Monetary) Segmentation, Customer Segmentation, Pareto Analysis, Microsoft Excel, Statistics</div>
    <div><span class="tech-category">BI &amp; Visualization:</span> Power BI, DAX, Power Query, Semantic Modeling, Dashboard Development, Data Visualization</div>
    <div><span class="tech-category">Databases &amp; Data Engineering:</span> PostgreSQL, ETL Pipelines, Data Transformation, Star Schema, Data Modeling, Dimensional Modeling, Data Warehousing, Data Validation, Analytical Views, Microsoft Fabric</div>
    <div><span class="tech-category">Tools:</span> Git, GitHub &nbsp;&nbsp;<span class="tech-category">Other:</span> FastAPI, React, Firebase</div>
  </div>
</div>

<div class="section">
  <div class="section-title">Projects</div>
  
  <div class="project-header">
    <span class="project-name">NovaCart – E-Commerce Sales &amp; Customer Analytics Platform</span>
  </div>
  <div class="project-tech">Python, Pandas, PostgreSQL, Power BI, DAX</div>
  <ul class="project-bullets">
    <li>Built a Python/Pandas ETL pipeline loading 104,852 cleaned synthetic sales records into an 8-table PostgreSQL star schema; passed 19/19 validation tests with zero reconciliation difference.</li>
    <li>Developed a 6-page Power BI report with 30+ DAX measures covering executive KPIs, profitability, customer intelligence, regional operations, retention, and RFM analysis.</li>
    <li>Analyzed 54,854 realized orders across 5,000 customers, reporting INR 847.6M realized revenue, 30.93% margin, 5.57% return rate, and 82.1% active-customer repeat rate.</li>
    <li>Applied RFM segmentation, cohort retention, and Pareto analysis to assess customer value, retention behavior, and product concentration.</li>
  </ul>

  <div class="project-header">
    <span class="project-name">BitePulse – Food Delivery Product Analytics Warehouse</span>
  </div>
  <div class="project-tech">Python, SQL, PostgreSQL, Power BI, DAX</div>
  <ul class="project-bullets">
    <li>Designed an 8-table PostgreSQL warehouse with 1.6M+ synthetic records, including 1.24M clickstream events, 180K sessions, and 50K orders; built 8 ETL pipelines and 10 analytical views.</li>
    <li>Wrote 26 SQL queries analyzing a seven-stage funnel, measuring 27.78% session-to-order conversion, 85.39% checkout conversion, and 91.03% fulfillment.</li>
    <li>Analyzed 12 monthly cohorts and 12,494 transacting users, measuring 68.90% repeat ordering, INR 670.60 average delivered order value, and a 19.91% effective take rate.</li>
    <li>Built a 6-page Power BI report with an 11-table semantic model, 13 active relationships, and 66 DAX measures.</li>
  </ul>

  <div class="project-header">
    <span class="project-name">DIRS – Disaster Intelligence &amp; Response System</span>
  </div>
  <div class="project-tech">Python, FastAPI, PostGIS, PuLP, Google OR-Tools</div>
  <ul class="project-bullets">
    <li>Led a 4-member capstone team building a role-based disaster-response platform for government, citizen, volunteer, and NGO users, with 56 REST handlers across 13 FastAPI routers and real-time WebSocket updates.</li>
    <li>Applied PuLP linear programming, Google OR-Tools vehicle routing, and PostGIS spatial indexing across 11 what-if crisis scenarios; measured proximity queries under 15 ms and API P95 latency under 45 ms.</li>
  </ul>

  <div class="project-header">
    <span class="project-name">WardrobeWhiz – Wardrobe Recommendation Web App</span>
  </div>
  <div class="project-tech">React, Node.js, Express.js, Firebase</div>
  <ul class="project-bullets">
    <li>Built and deployed a full-stack web app on Vercel and Render with 6 REST endpoints and 7 rule-based styling checks for occasion matching, color harmony, layering, and wardrobe gaps; 4/4 automated tests passed.</li>
  </ul>
</div>

<div class="section">
  <div class="section-title">Certifications</div>
  <div class="cert-list">
    <div class="cert-row">
      <span class="cert-name">Microsoft Certified: Power BI Data Analyst Associate (PL-300)</span>
      <span class="cert-date">Oct 2026</span>
    </div>
    <div class="cert-row">
      <span class="cert-name">Microsoft Certified: Fabric Analytics Engineer Associate (DP-600)</span>
      <span class="cert-date">Oct 2026</span>
    </div>
    <div class="cert-row">
      <span class="cert-name">Microsoft Certified: Azure Data Fundamentals (DP-900)</span>
      <span class="cert-date">Oct 2026</span>
    </div>
    <div class="cert-row">
      <span class="cert-name">Google Data Practitioner Associate</span>
      <span class="cert-date">Oct 2026</span>
    </div>
    <div class="cert-row">
      <span class="cert-name">Google Data Analytics Professional Certificate</span>
      <span class="cert-date">In progress</span>
    </div>
  </div>
</div>

<div class="section">
  <div class="section-title">Achievements</div>
  <div class="achievement-item">
    <strong>Top 10 – VIT-AP Engineering Clinics Expo 2025–26:</strong> SafeMine Pro Helmet project selected among approximately 1,008 teams.
  </div>
</div>

</body>
</html>
"""

html_path = os.path.abspath('resume_render.html')
with open(html_path, 'w', encoding='utf-8') as f:
    f.write(resume_html)

output_pdf = os.path.abspath('shubh-portfolio/public/resume.pdf')

with sync_playwright() as p:
    browser = p.chromium.launch(channel='msedge')
    page = browser.new_page()
    page.goto('file:///' + html_path.replace('\\', '/'))
    page.wait_for_timeout(1000)
    pdf_bytes = page.pdf(
        format='A4',
        print_background=True,
        prefer_css_page_size=True
    )
    with open(output_pdf, 'wb') as f:
        f.write(pdf_bytes)
        
    # Also take a screenshot for visual inspection
    page.set_viewport_size({"width": 800, "height": 1130})
    screenshot_path = os.path.abspath('resume_preview.png')
    page.screenshot(path=screenshot_path, full_page=True)
    browser.close()

reader = pypdf.PdfReader(output_pdf)
print(f"Generated {output_pdf} successfully!")
print(f"Total Pages: {len(reader.pages)}")
