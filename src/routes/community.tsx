import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community Empowerment — BrandoraX" },
      { name: "description", content: "Free tech awareness webinars, youth training bootcamps, NGO partnership programs and skill orientation across the continent." },
      { property: "og:title", content: "Community Empowerment — BrandoraX" },
      { property: "og:description", content: "Opening the first door to digital skills for people who have never had one." },
    ],
  }),
  component: Community,
});

const initiatives = [
  { n: "01", title: "Free tech awareness webinars", desc: "Monthly online sessions introducing digital career paths, tools and what employers look for." },
  { n: "02", title: "Youth training bootcamps", desc: "Short intensive bootcamps that give young people a hands-on first project in a real toolchain." },
  { n: "03", title: "NGO partnership programs", desc: "Co-delivered training with non-profits reaching underserved and out-of-school communities." },
  { n: "04", title: "Skill orientation programs", desc: "Guided sessions that help people identify the specialization that actually fits them." },
];

function Community() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="pt-20 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-6">Pillar III</div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[0.95] max-w-4xl mb-8">
              OPPORTUNITY SHOULDN'T DEPEND ON ACCESS.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Community empowerment is not our marketing arm — it is the top of our funnel and the reason the company exists.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-px bg-border">
            {initiatives.map((i) => (
              <div key={i.n} className="bg-background p-10">
                <div className="font-mono text-xs text-accent mb-6">{i.n}</div>
                <h2 className="text-2xl font-bold mb-4 tracking-tight">{i.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{i.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 py-24 bg-foreground text-background">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tighter mb-6">Run a program with us.</h2>
              <p className="text-lg text-background/70 mb-8 max-w-lg">
                NGOs, schools, youth groups and community organisations can co-host a webinar, bootcamp or orientation series with BrandoraX.
              </p>
              <Link to="/contact" className="inline-block bg-gold text-gold-foreground rounded-md px-8 py-4 text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
                Propose a partnership
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-px bg-white/10">
              {[
                { v: "Free", l: "Webinars & orientation" },
                { v: "500+", l: "Learners targeted in years 1–2" },
                { v: "50", l: "Employer partnerships in view" },
                { v: "Online", l: "First delivery model" },
              ].map((s) => (
                <div key={s.l} className="bg-foreground p-8">
                  <div className="text-3xl font-extrabold tracking-tighter mb-2">{s.v}</div>
                  <div className="text-[11px] uppercase tracking-widest text-background/60">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
