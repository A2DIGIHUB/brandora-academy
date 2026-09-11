import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight, Send } from "lucide-react";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community Empowerment — BrandoraX" },
      {
        name: "description",
        content:
          "Free tech awareness webinars, youth training bootcamps, NGO partnership programs, and skill orientation across Africa.",
      },
      { property: "og:title", content: "Community Empowerment — BrandoraX" },
      {
        property: "og:description",
        content: "Opening the first door to digital careers for people who have never had access.",
      },
    ],
  }),
  component: CommunityPage,
});

const communityInitiatives = [
  {
    num: "01",
    title: "Free Tech Awareness Webinars",
    cadence: "Monthly · Online · Free",
    desc: "Live interactive sessions breaking down tech industry entry points, modern tooling stacks, portfolio frameworks, and what global hiring managers actually evaluate.",
  },
  {
    num: "02",
    title: "Youth Digital Bootcamps",
    cadence: "Quarterly · Virtual Cohorts",
    desc: "Short, high-intensity workshops giving ambitious young builders their first hands-on experience writing real code, designing Figma prototypes, or analyzing data.",
  },
  {
    num: "03",
    title: "NGO & School Co-Delivery",
    cadence: "Custom Cohorts · On-Demand",
    desc: "Structured joint programs partnering with non-profits, secondary schools, and civic organizations to bring verified tech education directly to underserved communities.",
  },
  {
    num: "04",
    title: "Skill Diagnostic Orientation",
    cadence: "Continuous · Self-Paced",
    desc: "Diagnostic self-assessments and guidance sessions to help aspiring professionals discover whether their natural aptitude leans toward Engineering, Design, or Data.",
  },
];

const upcomingWebinars = [
  {
    title: "From Zero to Shipped: How to Build Your First Tech Portfolio",
    speaker: "BrandoraX Lead Instructors",
    schedule: "Last Saturday of the Month · 6:00 PM WAT",
    track: "Career Orientation",
  },
  {
    title: "The Reality of Junior Tech Hiring: What Reviewers Look For",
    speaker: "Guest Industry Practitioners",
    schedule: "Monthly Masterclass Series",
    track: "Engineering & Design",
  },
];

function CommunityPage() {
  const [submitted, setSubmitted] = useState(false);
  const [org, setOrg] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("NGO / Non-Profit");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        {/* HERO SECTION */}
        <section className="relative px-6 pt-20 pb-20 border-b border-border bg-[#EEF2F9]/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-xs font-mono text-[#0040E9] uppercase tracking-widest font-bold mb-3">
              Pillar III · Democratizing Access
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.98] text-[#000F38] max-w-4xl mb-6">
              Opportunity Shouldn't Depend on Privilege.
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
              Community empowerment is not our marketing arm — it is our primary gateway for discovering and elevating
              raw talent across the continent through free webinars, grassroots bootcamps, and NGO partnerships.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://t.me/brandorax"
                target="_blank"
                rel="noreferrer"
                className="bg-[#0040E9] text-white px-8 py-4 rounded text-xs font-bold uppercase tracking-wider hover:bg-[#0035C2] transition-colors inline-flex items-center gap-2"
              >
                <Send className="size-4" />
                Join Student Telegram
              </a>
              <a
                href="#partner-form"
                className="border border-border bg-white text-[#000F38] px-8 py-4 rounded text-xs font-bold uppercase tracking-wider hover:bg-muted transition-colors inline-flex items-center gap-2"
              >
                Propose a Partnership
                <ArrowRight className="size-4" />
              </a>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-extrabold text-[#000F38]">100% Free</div>
                <div className="text-xs font-mono uppercase text-muted-foreground mt-1">Community Programs</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-[#000F38]">500+</div>
                <div className="text-xs font-mono uppercase text-muted-foreground mt-1">Targeted Year 1 Learners</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-[#000F38]">Online</div>
                <div className="text-xs font-mono uppercase text-muted-foreground mt-1">Pan-African Reach</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-[#000F38]">Zero Barrier</div>
                <div className="text-xs font-mono uppercase text-muted-foreground mt-1">Beginner Friendly</div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 INITIATIVES */}
        <section className="py-24 px-6 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-16">
              <div className="text-xs font-mono text-[#0040E9] uppercase tracking-widest font-bold mb-2">
                Outreach Programs
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000F38] tracking-tight">
                Four structured access pathways.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {communityInitiatives.map((item) => (
                <div key={item.num} className="bg-white border border-border p-8 rounded flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#0040E9]">{item.num}</span>
                      <span className="text-xs font-mono text-muted-foreground">{item.cadence}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#000F38] mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">{item.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-border flex items-center justify-between text-xs font-mono text-muted-foreground">
                    <span>Open to the Public</span>
                    <span className="text-[#0040E9] font-bold">Free Participation</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WEBINAR SHOWCASE */}
        <section className="py-24 px-6 bg-[#EEF2F9]/50 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <div className="text-xs font-mono text-[#0040E9] uppercase tracking-widest font-bold mb-2">
                  Monthly Masterclasses
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000F38] tracking-tight">
                  Free tech awareness webinars.
                </h2>
              </div>
              <a
                href="https://t.me/brandorax"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold uppercase tracking-wider text-[#0040E9] inline-flex items-center gap-1 hover:underline"
              >
                Join Telegram to Get Webinar Links
                <ArrowRight className="size-4" />
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {upcomingWebinars.map((w) => (
                <div key={w.title} className="bg-white border border-border p-8 rounded flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono uppercase text-[#0040E9] font-bold mb-2">{w.track}</div>
                    <h3 className="text-xl font-bold text-[#000F38] mb-3">{w.title}</h3>
                    <div className="text-xs font-mono text-muted-foreground space-y-1 mb-6">
                      <div>Instructor: {w.speaker}</div>
                      <div>Time: {w.schedule}</div>
                    </div>
                  </div>
                  <a
                    href="https://t.me/brandorax"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full text-center block bg-muted hover:bg-[#0040E9] hover:text-white py-3 rounded text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Register via Telegram Group
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NGO & INSTITUTIONAL PARTNERSHIP FORM */}
        <section id="partner-form" className="py-24 px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-6">
              <div className="text-xs font-mono text-[#0040E9] uppercase tracking-widest font-bold mb-2">
                Institutional Collaboration
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000F38] tracking-tight mb-6">
                Co-host a program with BrandoraX.
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                NGOs, schools, youth organizations, and community groups can co-host a workshop, webinar, or orientation
                series with BrandoraX. We provide the curriculum, mentors, and platform infrastructure.
              </p>

              <div className="space-y-4 font-mono text-xs text-muted-foreground">
                <div className="p-4 bg-white border border-border rounded">
                  <div className="font-bold text-[#000F38] text-sm mb-1">Turnkey Syllabi</div>
                  <div>Structured curriculum tailored to beginners and secondary school leavers.</div>
                </div>
                <div className="p-4 bg-white border border-border rounded">
                  <div className="font-bold text-[#000F38] text-sm mb-1">Practitioner Instructors</div>
                  <div>Our vetted mentors lead all sessions, breakout rooms, and project reviews.</div>
                </div>
                <div className="p-4 bg-white border border-border rounded">
                  <div className="font-bold text-[#000F38] text-sm mb-1">Completion Reporting</div>
                  <div>Detailed attendance and milestone verification for institutional donor reporting.</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white border border-border p-8 rounded shadow-sm">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="text-2xl font-bold text-[#000F38] mb-2">Proposal Received</div>
                  <p className="text-sm text-muted-foreground max-w-sm mx-auto mb-6">
                    Thank you. Our community program director will review your proposal and get in touch within 48 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#0040E9] font-bold uppercase tracking-wider hover:underline"
                  >
                    Submit another proposal
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-[#000F38] mb-1">Propose a Community Initiative</h3>
                  <p className="text-xs text-muted-foreground mb-6">
                    Tell us about your organization and how we can collaborate.
                  </p>

                  <div>
                    <label className="block text-xs uppercase font-bold text-muted-foreground mb-1">
                      Organization Name
                    </label>
                    <input
                      type="text"
                      required
                      value={org}
                      onChange={(e) => setOrg(e.target.value)}
                      placeholder="e.g. Lagos Youth Center"
                      className="w-full bg-background border border-border rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#0040E9]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold text-muted-foreground mb-1">
                      Organization Type
                    </label>
                    <select
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      className="w-full bg-background border border-border rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#0040E9]"
                    >
                      <option>NGO / Non-Profit</option>
                      <option>Secondary School / College</option>
                      <option>University / Student Body</option>
                      <option>Community / Faith-Based Center</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold text-muted-foreground mb-1">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="director@organization.org"
                      className="w-full bg-background border border-border rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#0040E9]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold text-muted-foreground mb-1">
                      Program Goals & Target Audience
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Briefly describe your intended initiative and estimated number of participants..."
                      className="w-full bg-background border border-border rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#0040E9] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0040E9] text-white py-3.5 rounded text-xs font-bold uppercase tracking-wider hover:bg-[#0035C2] transition-colors mt-2"
                  >
                    Submit Partnership Proposal
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
