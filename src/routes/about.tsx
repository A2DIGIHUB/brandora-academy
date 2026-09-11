import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About BrandoraX — Vision, Mission & Institutional Model" },
      {
        name: "description",
        content:
          "BrandoraX is an online-first digital workforce development company built on three pillars: Academy, Talent Pipeline, and Community Empowerment.",
      },
      { property: "og:title", content: "About BrandoraX — Vision, Mission & Institutional Model" },
      {
        property: "og:description",
        content:
          "Outcome-based, not certificate-based. Meet the model, core values, and governance structure powering BrandoraX.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    num: "01",
    title: "Outcomes Over Certificates",
    desc: "We measure ourselves by learner capability and verified career milestones, not passive video completion rates.",
  },
  {
    num: "02",
    title: "Uncompromising Proof of Work",
    desc: "Every graduate leaves with public repositories and design files built to live production standards.",
  },
  {
    num: "03",
    title: "Pan-African Digital Access",
    desc: "Online-first, low-bandwidth delivery so location never limits access to world-class technical education.",
  },
  {
    num: "04",
    title: "Workplace Discipline",
    desc: "Communication hygiene, Git commit etiquette, and sprint deadlines are graded with the same rigor as code syntax.",
  },
  {
    num: "05",
    title: "Employer-Aligned Syllabi",
    desc: "We build our curricula backwards from active hiring requirements in consultation with senior tech leads.",
  },
  {
    num: "06",
    title: "Long-Term Alumni Trajectory",
    desc: "Graduation is just the beginning. We support alumni with ongoing placement matching and senior transition resources.",
  },
];

const pillars = [
  {
    tag: "Pillar I",
    title: "The Academy",
    subtitle: "Core Training",
    desc: "Six intensive disciplines spanning 3, 6, and 12-month tracks. Guided by active practitioners with live code reviews and project milestones.",
    to: "/academy" as const,
    cta: "Explore Tracks",
  },
  {
    tag: "Pillar II",
    title: "Talent Pipeline",
    subtitle: "Employer Matching",
    desc: "A 7-stage vetting and evaluation engine that qualifies graduates for vetted employer internships, contracts, and full-time roles.",
    to: "/talent-pipeline" as const,
    cta: "View Pipeline Engine",
  },
  {
    tag: "Pillar III",
    title: "Community Empowerment",
    subtitle: "Democratized Access",
    desc: "Free monthly webinars, youth bootcamps, and NGO co-delivery models opening the first door for underserved aspiring builders.",
    to: "/community" as const,
    cta: "View Initiatives",
  },
];

const governanceUnits = [
  {
    role: "Founder & Chief Executive Officer",
    unit: "Executive Leadership",
    focus: "Strategic direction, investor relations, global ecosystem partnerships, and institutional vision.",
  },
  {
    role: "Director of Programs & Curriculum",
    unit: "Academic Governance",
    focus: "Curriculum rigor, instructor vetting, milestone grading standards, and student learning outcomes.",
  },
  {
    role: "Head of Employer Partnerships",
    unit: "Talent Network",
    focus: "Corporate outreach, hiring agreements, employer brief design, and talent matching pipelines.",
  },
  {
    role: "Lead Product & Platform Architect",
    unit: "Engineering & LMS",
    focus: "LMS infrastructure, proof-of-work portfolio verification, student dashboard, and automation tools.",
  },
  {
    role: "Growth & Brand Marketing Lead",
    unit: "Brand & Outreach",
    focus: "Student recruitment campaigns, community webinar series, alumni storytelling, and brand positioning.",
  },
  {
    role: "Operations & Student Success Manager",
    unit: "Operations",
    focus: "Admissions logistics, onboarding checklists, student accountability groups, and program compliance.",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        {/* HERO SECTION */}
        <section className="relative px-6 pt-20 pb-20 border-b border-border bg-[#EEF2F9]/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-xs font-mono text-[#0040E9] uppercase tracking-widest font-bold mb-3">
              Institutional Profile · The BrandoraX Blueprint
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.98] text-[#000F38] max-w-4xl mb-6">
              An Institution Built on Proof of Work.
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
              BrandoraX is an online-first digital workforce development company. We connect market-aligned training
              with practical briefs, rigorous practitioner evaluation, employer partnerships, and community empowerment.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/academy"
                className="bg-[#0040E9] text-white px-8 py-4 rounded text-xs font-bold uppercase tracking-wider hover:bg-[#0035C2] transition-colors inline-flex items-center gap-2"
              >
                Explore The Academy
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/talent-pipeline"
                className="border border-border bg-white text-[#000F38] px-8 py-4 rounded text-xs font-bold uppercase tracking-wider hover:bg-muted transition-colors"
              >
                Our 7-Stage Pipeline
              </Link>
            </div>
          </div>
        </section>

        {/* VISION & MISSION SPLIT */}
        <section className="py-20 px-6 border-b border-border">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-border p-10 rounded">
              <div className="text-xs font-mono font-bold text-[#0040E9] uppercase tracking-widest mb-3">
                Our Vision
              </div>
              <h2 className="text-2xl font-bold text-[#000F38] tracking-tight mb-4">
                A generation of digitally skilled African professionals who compete and deliver at global standards.
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We envision an ecosystem where geographic boundaries and lack of traditional credentials do not hold back
                extraordinary talent from building world-class technology products.
              </p>
            </div>

            <div className="bg-white border border-border p-10 rounded">
              <div className="text-xs font-mono font-bold text-[#0040E9] uppercase tracking-widest mb-3">
                Our Mission
              </div>
              <h2 className="text-2xl font-bold text-[#000F38] tracking-tight mb-4">
                To train, rigorously evaluate, and connect digital talent to real employment outcomes.
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                By replacing shallow theory with project-based milestones and practitioner reviews, we build verifiable proof of work
                that commands respect from leading companies and startups.
              </p>
            </div>
          </div>
        </section>

        {/* THREE-PILLAR ECOSYSTEM */}
        <section className="py-24 px-6 bg-[#EEF2F9]/50 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-16">
              <div className="text-xs font-mono text-[#0040E9] uppercase tracking-widest font-bold mb-2">
                Integrated Architecture
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000F38] tracking-tight">
                The three-pillar model.
              </h2>
              <p className="text-muted-foreground mt-3 text-base">
                Each pillar feeds the next: Community brings people in, the Academy trains them, and the Talent Pipeline connects verified builders to the global economy.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pillars.map((p) => (
                <div key={p.tag} className="bg-white border border-border p-8 rounded flex flex-col justify-between hover:border-[#0040E9] transition-colors group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#0040E9]">{p.tag}</span>
                      <span className="text-xs font-mono text-muted-foreground">{p.subtitle}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#000F38] mb-3">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <Link
                      to={p.to}
                      className="text-xs font-bold uppercase tracking-wider text-[#0040E9] inline-flex items-center gap-1 hover:underline"
                    >
                      {p.cta}
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6 OPERATIONAL VALUES */}
        <section className="py-24 px-6 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-16">
              <div className="text-xs font-mono text-[#0040E9] uppercase tracking-widest font-bold mb-2">
                Guiding Principles
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000F38] tracking-tight">
                Our operational values.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((v) => (
                <div key={v.num} className="bg-white border border-border p-8 rounded">
                  <div className="text-sm font-mono font-bold text-[#0040E9] mb-4">{v.num}</div>
                  <h3 className="text-lg font-bold text-[#000F38] mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GOVERNANCE & TEAM STRUCTURE */}
        <section className="py-24 px-6 bg-[#EEF2F9]/50 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-16">
              <div className="text-xs font-mono text-[#0040E9] uppercase tracking-widest font-bold mb-2">
                Governance & Units
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000F38] tracking-tight">
                Organizational structure.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {governanceUnits.map((u) => (
                <div key={u.role} className="bg-white border border-border p-8 rounded flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-mono font-bold text-[#0040E9] uppercase tracking-wider mb-2">
                      {u.unit}
                    </div>
                    <h3 className="text-lg font-bold text-[#000F38] mb-2">{u.role}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{u.focus}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INSTITUTIONAL CTA */}
        <section className="py-24 px-6 bg-[#000F38] text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 text-white">
              Ready to build with BrandoraX?
            </h2>
            <p className="text-white/80 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Whether you are an aspiring student, an employer looking for verified talent, or an institution seeking to collaborate,
              we welcome you to the BrandoraX ecosystem.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/academy"
                className="bg-[#0040E9] text-white px-8 py-4 rounded font-bold text-xs uppercase tracking-wider hover:bg-[#0035C2] transition-colors"
              >
                Apply for Admission
              </Link>
              <Link
                to="/contact"
                className="border border-white/30 hover:bg-white/10 px-8 py-4 rounded font-bold text-xs uppercase tracking-wider transition-colors text-white"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
