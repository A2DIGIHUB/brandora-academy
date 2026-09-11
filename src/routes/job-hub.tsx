import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Users, Clock, ArrowRight, CheckCircle2, ShieldCheck, Mail, Sparkles } from "lucide-react";

export const Route = createFileRoute("/job-hub")({
  head: () => ({
    meta: [
      { title: "Talent Network & Hiring — BrandoraX" },
      {
        name: "description",
        content:
          "BrandoraX evaluated talent network. Cohort 1 learners in UI/UX, Web Dev, Data Analysis, and Cybersecurity are in training.",
      },
      { property: "og:title", content: "Talent Network & Hiring — BrandoraX" },
      {
        property: "og:description",
        content:
          "Pre-register as an employer partner to access evaluated, project-ready digital graduates.",
      },
    ],
  }),
  component: JobHubPage,
});

function JobHubPage() {
  const [submitted, setSubmitted] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [roles, setRoles] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        {/* HERO / EMPTY-STATE SCAFFOLD */}
        <section className="px-6 pt-20 pb-20 border-b border-border">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              <Clock className="size-3.5" />
              Cohort 1 in Active Training • Launching Soon
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tighter leading-[0.98] mb-6">
              OUR TALENT COMMUNITY IS GROWING.
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              We are currently preparing our first cohort of skilled learners in Web Development, UI/UX, Data,
              and Cybersecurity. Verified student profiles and proof-of-work portfolios will appear here upon cohort completion.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/academy"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-md text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity inline-flex items-center gap-2 shadow-lg shadow-primary/20"
              >
                Explore Learning Tracks
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/talent-pipeline"
                className="border border-border bg-card px-8 py-4 rounded-md text-sm font-bold uppercase tracking-wider hover:bg-secondary transition-colors"
              >
                How We Evaluate Talent
              </Link>
            </div>
          </div>
        </section>

        {/* EMPLOYER PRE-REGISTRATION */}
        <section className="py-24 px-6 bg-secondary/30">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-4">
                For Employers & Startups
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                Be the first to hire evaluated graduates.
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                Skip unstructured hiring rounds and résumé fluff. Pre-register your organization to receive priority
                access to our verified talent directory and customized cohort matching.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-sm">Verified Proof-of-Work Portfolios</div>
                    <div className="text-xs text-muted-foreground">Every candidate has built and shipped real client-grade projects.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-sm">Practitioner Evaluated</div>
                    <div className="text-xs text-muted-foreground">Vetted across technical competency, communication, and deadline discipline.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-sm">Zero Upfront Hiring Fee in Beta</div>
                    <div className="text-xs text-muted-foreground">Partner with us early to shape custom briefs and interview candidates.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-card border border-border p-8 rounded-xl shadow-lg">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="size-12 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center mb-4">
                    <Sparkles className="size-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto mb-6">
                    Your interest has been recorded. Our partnership lead will reach out with early cohort candidate previews.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-primary font-bold uppercase tracking-wider hover:underline"
                  >
                    Submit another response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleRegister} className="space-y-4">
                  <h3 className="text-xl font-bold tracking-tight mb-2">Pre-Register As Employer</h3>
                  <p className="text-xs text-muted-foreground mb-6">
                    Get alerted when Cohort 1 graduates become available for internships and full-time placement.
                  </p>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. Acme Labs"
                      className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="hiring@company.com"
                      className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                      Disciplines You Seek to Hire
                    </label>
                    <input
                      type="text"
                      value={roles}
                      onChange={(e) => setRoles(e.target.value)}
                      placeholder="e.g. React Developers, UI/UX Designers"
                      className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-3 rounded-md text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity mt-2"
                  >
                    Join Employer Talent Waitlist
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
