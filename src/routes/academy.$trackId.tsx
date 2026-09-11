import { useState } from "react";
import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/academy/$trackId")({
  component: TrackDetailPage,
});

export const trackDetailsData: Record<
  string,
  {
    id: string;
    title: string;
    tag: string;
    headline: string;
    overview: string;
    duration: string;
    price: string;
    pricingTier: { intensive: string; pro: string };
    tools: string[];
    prerequisites: string;
    curriculum: { phase: string; title: string; weeks: string; topics: string[]; project: string }[];
    outcomes: string[];
    idealFor: string[];
  }
> = {
  uiux: {
    id: "uiux",
    title: "UI/UX & Product Design",
    tag: "Design",
    headline: "Master User Research, Scalable Design Systems & Interactive Prototypes",
    overview:
      "Go from user psychology and wireframing to building atomic design systems and conducting usability tests for production web and mobile apps. Every phase centers on real client briefs.",
    duration: "3 Months (Intensive) / 6 Months (Professional)",
    price: "₦80,000 – ₦150,000",
    pricingTier: { intensive: "₦80,000 (3 Months)", pro: "₦150,000 (6 Months)" },
    tools: ["Figma", "FigJam", "Design Tokens", "Notion", "Whimsical", "Lottie"],
    prerequisites: "No prior design experience required. Basic computer literacy and problem-solving curiosity.",
    curriculum: [
      {
        phase: "Phase 01",
        title: "UX Research & Information Architecture",
        weeks: "Weeks 1 – 4",
        topics: ["User persona development", "User journey mapping", "Card sorting & low-fi wireframing", "Competitive UX teardowns"],
        project: "Complete Discovery & Wireframe Suite for a Fintech App",
      },
      {
        phase: "Phase 02",
        title: "Visual Design, UI Layout & Typography",
        weeks: "Weeks 5 – 8",
        topics: ["Color theory & WCAG AAA contrast", "Typography scales & grid systems", "Atomic component architecture", "Micro-interactions"],
        project: "Cross-Platform Mobile Banking Design System in Figma",
      },
      {
        phase: "Phase 03",
        title: "Advanced Prototyping & Usability Testing",
        weeks: "Weeks 9 – 12",
        topics: ["Interactive state variants & auto-layout", "Moderated usability testing", "Developer handoff & documentation", "Case study storytelling"],
        project: "Production-Ready Case Study & Interactive Clickable Prototype",
      },
    ],
    outcomes: [
      "Ship 3 comprehensive case studies ready for client and employer review",
      "Master Figma auto-layout, component properties, and tokenized styles",
      "Conduct real moderated user testing with quantitative feedback analysis",
      "Complete design handoff with production-grade specs for engineers",
    ],
    idealFor: [
      "Aspiring product designers looking to break into global tech roles",
      "Graphic designers transitioning into UI/UX and product strategy",
      "Founders and product managers wanting hands-on design execution skills",
    ],
  },
  "web-dev": {
    id: "web-dev",
    title: "Full-Stack Web Development",
    tag: "Engineering",
    headline: "Build, Test & Deploy Production Web Apps with React, TypeScript & Cloud Backend",
    overview:
      "Master modern frontend architecture and full-stack engineering. Write clean TypeScript, build robust component libraries, interface with REST/GraphQL APIs, and deploy cloud-native applications.",
    duration: "3 Months (Frontend) / 6 Months (Fullstack)",
    price: "₦80,000 – ₦150,000",
    pricingTier: { intensive: "₦80,000 (3 Months)", pro: "₦150,000 (6 Months)" },
    tools: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Supabase", "Git & GitHub", "Vercel"],
    prerequisites: "Basic understanding of computers. Prior HTML/CSS knowledge is a plus but not strictly required.",
    curriculum: [
      {
        phase: "Phase 01",
        title: "Modern Frontend Foundations",
        weeks: "Weeks 1 – 4",
        topics: ["Semantic HTML5 & modern CSS/Tailwind", "JavaScript ES6+ fundamentals", "Git workflows & collaborative branching", "DOM manipulation"],
        project: "Responsive Multi-Page Commercial Web Platform",
      },
      {
        phase: "Phase 02",
        title: "React, TypeScript & State Architecture",
        weeks: "Weeks 5 – 8",
        topics: ["React hooks & component lifecycles", "TypeScript typing & interfaces", "Client-side routing & caching", "Form validation & optimistic UI"],
        project: "Full-Featured SaaS Dashboard with Live Data Feeds",
      },
      {
        phase: "Phase 03",
        title: "Backend, Database & Cloud Deployment",
        weeks: "Weeks 9 – 12",
        topics: ["Relational databases & Supabase integration", "User authentication & row-level security (RLS)", "Serverless API functions", "CI/CD & performance auditing"],
        project: "Full-Stack E-Commerce Platform with Live Auth & Database",
      },
    ],
    outcomes: [
      "Deploy 4 full-stack applications with custom domains and live databases",
      "Write type-safe, modular TypeScript code following industry standards",
      "Master authentication, authorization, and secure database row-level security",
      "Graduate with an active GitHub contribution graph and verified portfolio",
    ],
    idealFor: [
      "Beginners wanting a direct path into high-demand software engineering",
      "Self-taught developers needing senior mentorship and portfolio polish",
      "Technical professionals wanting to modernize their web tech stack",
    ],
  },
  "data-analysis": {
    id: "data-analysis",
    title: "Data Analysis & BI",
    tag: "Analytics",
    headline: "Transform Raw Datasets into Predictive Insights and Executive Dashboards",
    overview:
      "Learn data cleaning, statistical modeling, SQL querying, and executive storytelling with PowerBI and Tableau. Answer complex business questions with structured analytical models.",
    duration: "6 Months (Professional) / 12 Months (Advanced)",
    price: "₦150,000 – ₦250,000",
    pricingTier: { intensive: "₦150,000 (6 Months)", pro: "₦250,000 (12 Months)" },
    tools: ["SQL (PostgreSQL)", "Python", "Pandas", "NumPy", "Tableau", "PowerBI", "Excel Advanced"],
    prerequisites: "Comfort with numbers and spreadsheets. No prior programming required.",
    curriculum: [
      {
        phase: "Phase 01",
        title: "Advanced Excel & Relational SQL",
        weeks: "Weeks 1 – 8",
        topics: ["Complex Excel formulas & pivot modeling", "SQL queries, joins & aggregations", "Subqueries & window functions", "Data extraction & cleaning"],
        project: "Retail Sales Performance Audit with SQL & PowerBI",
      },
      {
        phase: "Phase 02",
        title: "Python for Data Analysis & Automation",
        weeks: "Weeks 9 – 16",
        topics: ["Python syntax & data structures", "Pandas DataFrame manipulation", "NumPy statistical operations", "Automated ETL pipelines"],
        project: "Customer Churn Prediction & Retention Pipeline",
      },
      {
        phase: "Phase 03",
        title: "Business Intelligence & Executive Dashboards",
        weeks: "Weeks 17 – 24",
        topics: ["Tableau calculated fields & parameters", "PowerBI DAX formulas & data modeling", "Executive storytelling & KPI reporting", "Portfolio assembly"],
        project: "End-to-End Enterprise Executive Intelligence Hub",
      },
    ],
    outcomes: [
      "Query complex multi-table databases using advanced SQL window functions",
      "Automate data ingestion, cleaning, and transformation with Python scripts",
      "Design interactive C-suite executive dashboards tracking real revenue metrics",
      "Present actionable business recommendations backed by statistical evidence",
    ],
    idealFor: [
      "Professionals transitioning from non-technical roles into high-paying analytics",
      "Finance and operations specialists wanting advanced automation skills",
      "Graduates seeking data analyst and BI developer positions",
    ],
  },
  cybersecurity: {
    id: "cybersecurity",
    title: "Cybersecurity Defense",
    tag: "Security",
    headline: "Learn Network Defense, Threat Modeling & Ethical Vulnerability Assessment",
    overview:
      "Understand modern threat vectors, secure network configurations, vulnerability scanning, penetration testing basics, and industry compliance frameworks.",
    duration: "6 Months (Professional) / 12 Months (Advanced)",
    price: "₦150,000 – ₦250,000",
    pricingTier: { intensive: "₦150,000 (6 Months)", pro: "₦250,000 (12 Months)" },
    tools: ["Wireshark", "Nmap", "Kali Linux", "Burp Suite", "Metasploit", "Snort", "Linux CLI"],
    prerequisites: "Basic knowledge of computer networks and operating systems.",
    curriculum: [
      {
        phase: "Phase 01",
        title: "Networking Fundamentals & Linux Administration",
        weeks: "Weeks 1 – 8",
        topics: ["TCP/IP, DNS & OSI model deep dive", "Linux command line & permissions", "Packet analysis with Wireshark", "Firewalls & port scanning"],
        project: "Enterprise Network Topology & Packet Inspection Audit",
      },
      {
        phase: "Phase 02",
        title: "Vulnerability Scanning & Defensive Security",
        weeks: "Weeks 9 – 16",
        topics: ["Vulnerability assessment methodologies", "SIEM log analysis", "Identity & Access Management (IAM)", "System hardening & encryption"],
        project: "Comprehensive Infrastructure Security Audit & Hardening",
      },
      {
        phase: "Phase 03",
        title: "Penetration Testing & Incident Response",
        weeks: "Weeks 17 – 24",
        topics: ["OWASP Top 10 web vulnerabilities", "Ethical hacking with Burp Suite", "Incident response playbooks", "Security compliance standards (ISO 27001, SOC2)"],
        project: "Full Penetration Testing Report & Remediation Playbook",
      },
    ],
    outcomes: [
      "Conduct professional network vulnerability scans and packet analysis",
      "Analyze and mitigate OWASP Top 10 web application security flaws",
      "Author industry-standard penetration testing and audit reports",
      "Implement defensive security controls and incident response procedures",
    ],
    idealFor: [
      "IT support specialists and network administrators wanting to specialize in security",
      "Developers looking to master DevSecOps and defensive architecture",
      "Students preparing for security analyst certifications (CompTIA Security+, CEH)",
    ],
  },
  "graphic-design": {
    id: "graphic-design",
    title: "Graphic & Brand Design",
    tag: "Creative",
    headline: "Craft Corporate Brand Identities, Typography Systems & Marketing Collateral",
    overview:
      "Master visual composition, typography hierarchies, brand identity strategy, and digital marketing collateral creation using professional vector and raster toolchains.",
    duration: "3 Months",
    price: "₦80,000",
    pricingTier: { intensive: "₦80,000 (3 Months)", pro: "₦80,000" },
    tools: ["Adobe Illustrator", "Photoshop", "Typography", "Figma", "Brand Books", "InDesign"],
    prerequisites: "No prior experience required. A passion for aesthetics and creative storytelling.",
    curriculum: [
      {
        phase: "Phase 01",
        title: "Design Principles & Vector Mastery",
        weeks: "Weeks 1 – 4",
        topics: ["Elements & principles of graphic design", "Color harmony & psychology", "Vector illustration in Adobe Illustrator", "Pen tool mastery & geometry"],
        project: "Complete Iconography Suite & Geometric Vector System",
      },
      {
        phase: "Phase 02",
        title: "Brand Strategy & Logo Systems",
        weeks: "Weeks 5 – 8",
        topics: ["Brand naming & positioning", "Logomark construction & grid systems", "Typography hierarchies & pairing", "Color system guidelines"],
        project: "End-to-End Corporate Identity for a Modern Enterprise",
      },
      {
        phase: "Phase 03",
        title: "Brand Collateral & Packaging",
        weeks: "Weeks 9 – 12",
        topics: ["Print & digital collateral layouts", "3D product mockups & packaging dies", "Comprehensive Brand Guidelines Book", "Client presentation mastery"],
        project: "Full 30-Page Brand Identity Manual & Presentation Deck",
      },
    ],
    outcomes: [
      "Design complete brand systems with logos, typography, colors, and assets",
      "Create high-converting digital marketing collateral and social media kits",
      "Export print-ready files and vector assets with technical precision",
      "Build a polished portfolio attracting international clients",
    ],
    idealFor: [
      "Creative individuals looking to turn visual talent into a lucrative career",
      "Marketers and social media managers wanting professional design chops",
      "Freelancers wanting to charge higher rates for full brand identity packages",
    ],
  },
  "software-dev": {
    id: "software-dev",
    title: "Software Systems Engineering",
    tag: "Engineering",
    headline: "Architect Backend Systems, Scalable APIs & Robust Database Architectures",
    overview:
      "Deep dive into backend software engineering, server architectures, microservices, relational and NoSQL databases, automated unit testing, and production deployment.",
    duration: "6 Months (Professional) / 12 Months (Advanced)",
    price: "₦150,000 – ₦250,000",
    pricingTier: { intensive: "₦150,000 (6 Months)", pro: "₦250,000 (12 Months)" },
    tools: ["Node.js / Express", "Python", "PostgreSQL", "Redis", "Docker", "Git", "Postman", "Supabase"],
    prerequisites: "Basic programming logic understanding (variables, loops, functions).",
    curriculum: [
      {
        phase: "Phase 01",
        title: "Data Structures & Clean Architecture",
        weeks: "Weeks 1 – 6",
        topics: ["Core algorithms & complexity analysis", "Object-oriented & functional design patterns", "Git team collaboration & PR reviews", "Unit testing frameworks"],
        project: "Robust In-Memory Cache & Search Algorithm Suite",
      },
      {
        phase: "Phase 02",
        title: "RESTful & GraphQL API Engineering",
        weeks: "Weeks 7 – 14",
        topics: ["API architecture best practices", "Database modeling & indexing (PostgreSQL)", "Authentication (JWT, OAuth, Sessions)", "Rate limiting & middleware"],
        project: "Scalable Multi-Tenant API with Rate Limiting & Auth",
      },
      {
        phase: "Phase 03",
        title: "Microservices, Caching & Cloud Infrastructure",
        weeks: "Weeks 15 – 24",
        topics: ["Containerization with Docker", "Redis caching & pub/sub messaging", "CI/CD automated pipelines", "Monitoring, logging, and error tracking"],
        project: "Distributed Real-Time Message Queue & Notification Service",
      },
    ],
    outcomes: [
      "Architect and ship production-ready backend services handling concurrent load",
      "Design optimized database schemas with indexing and query tuning",
      "Implement comprehensive automated test suites (unit, integration, e2e)",
      "Deploy containerized applications with automated CI/CD workflows",
    ],
    idealFor: [
      "Frontend developers wanting to transition into full-stack and backend engineering",
      "Computer science students needing real production experience",
      "Engineers wanting to master backend systems design and scalable architecture",
    ],
  },
};

function TrackDetailPage() {
  const { trackId } = useParams({ from: "/academy/$trackId" });
  const track = trackDetailsData[trackId] || trackDetailsData["web-dev"];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="pb-24">
        {/* BREADCRUMB */}
        <div className="border-b border-border bg-[#EEF2F9]/50 px-6 py-3.5">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-muted-foreground font-mono">
            <Link to="/" className="hover:text-[#0040E9] transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3.5" />
            <Link to="/academy" className="hover:text-[#0040E9] transition-colors">
              Academy
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-[#000F38] font-semibold">{track.title}</span>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="px-6 pt-16 pb-20 border-b border-border">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <div className="text-xs font-mono text-[#0040E9] uppercase tracking-widest font-bold mb-3">
                {track.tag} Track · Cohort 1 Enrollment
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.02] text-[#000F38] mb-6">
                {track.headline}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
                {track.overview}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-border">
                <div>
                  <div className="text-xs font-mono uppercase text-muted-foreground mb-1">Duration</div>
                  <div className="text-base font-bold text-[#000F38]">{track.duration}</div>
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-muted-foreground mb-1">Tuition Range</div>
                  <div className="text-base font-bold text-[#0040E9]">{track.price}</div>
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-muted-foreground mb-1">Format</div>
                  <div className="text-base font-bold text-[#000F38]">Live Classes + Sprints</div>
                </div>
              </div>
            </div>

            {/* ENROLLMENT CARD */}
            <div className="lg:col-span-4 bg-white border border-border rounded-lg p-8 shadow-sm">
              <div className="text-xs font-mono uppercase text-[#0040E9] font-bold mb-2">Admission Open</div>
              <h3 className="text-2xl font-bold text-[#000F38] mb-4">Enroll in this Track</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                Limited seats per cohort to guarantee weekly 1-on-1 code and design reviews.
              </p>

              <div className="space-y-2.5 mb-6 font-mono text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="text-[#0040E9] font-bold">✓</span>
                  <span>Intensive live classes & sprint briefs</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#0040E9] font-bold">✓</span>
                  <span>Weekly 1-on-1 practitioner reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#0040E9] font-bold">✓</span>
                  <span>Verified proof-of-work portfolio</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#0040E9] font-bold">✓</span>
                  <span>Alumni Telegram community access</span>
                </div>
              </div>

              <Link
                to="/auth"
                className="w-full text-center block bg-[#0040E9] text-white py-3.5 rounded text-xs font-bold uppercase tracking-wider hover:bg-[#0035C2] transition-colors"
              >
                Apply for Admission Now
              </Link>
            </div>
          </div>
        </section>

        {/* CURRICULUM SYLLABUS SECTION */}
        <section className="py-24 px-6 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-16">
              <div className="text-xs font-mono text-[#0040E9] uppercase tracking-widest font-bold mb-2">
                Detailed Syllabus
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000F38] tracking-tight">
                Curriculum & Milestones
              </h2>
            </div>

            <div className="space-y-8">
              {track.curriculum.map((phase) => (
                <div key={phase.phase} className="bg-white border border-border rounded p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-border gap-4 mb-6">
                    <div>
                      <span className="font-mono text-xs font-bold text-[#0040E9]">
                        {phase.phase} · {phase.weeks}
                      </span>
                      <h3 className="text-2xl font-bold text-[#000F38] mt-1">{phase.title}</h3>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-7">
                      <div className="text-xs font-mono uppercase text-muted-foreground mb-3 font-bold">
                        Topics Covered:
                      </div>
                      <div className="grid sm:grid-cols-2 gap-2 text-xs font-mono text-muted-foreground">
                        {phase.topics.map((topic) => (
                          <div key={topic} className="flex items-center gap-2">
                            <span className="text-[#0040E9] font-bold">•</span>
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-5 bg-muted p-5 rounded">
                      <div className="text-[11px] font-mono uppercase text-[#0040E9] font-bold mb-1">
                        Milestone Deliverable:
                      </div>
                      <div className="text-sm font-bold text-[#000F38]">{phase.project}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TOOLS & TECH STACK */}
        <section className="py-20 px-6 bg-[#EEF2F9]/50 border-b border-border">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <div className="text-xs font-mono text-[#0040E9] uppercase tracking-widest font-bold mb-1">Toolchain</div>
              <h3 className="text-2xl font-bold text-[#000F38]">Tools You Will Master</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {track.tools.map((tool) => (
                <span key={tool} className="bg-white border border-border px-3.5 py-1.5 rounded text-xs font-mono font-semibold text-[#000F38]">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR & PREREQUISITES */}
        <section className="py-24 px-6 border-b border-border">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="bg-white border border-border p-8 rounded">
              <h3 className="text-lg font-bold text-[#000F38] mb-4">Who Is This Track For?</h3>
              <ul className="space-y-3 text-xs font-mono text-muted-foreground">
                {track.idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#0040E9] font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-border p-8 rounded">
              <h3 className="text-lg font-bold text-[#000F38] mb-4">Prerequisites</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{track.prerequisites}</p>
              <div className="text-xs font-mono text-muted-foreground">
                Note: All software tools taught during the track offer free student tiers or open-source licenses.
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-[#000F38] text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-4 text-white">Ready to Master {track.title}?</h2>
            <p className="text-white/70 text-base mb-8 max-w-xl mx-auto">
              Applications are reviewed continuously. Register, choose your cohort schedule, and start building.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/auth"
                className="bg-[#0040E9] text-white px-8 py-4 rounded text-xs font-bold uppercase tracking-wider hover:bg-[#0035C2] transition-colors"
              >
                Apply for {track.title}
              </Link>
              <Link
                to="/academy"
                className="border border-white/30 text-white hover:bg-white/10 px-6 py-4 rounded text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Explore Other Tracks
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
