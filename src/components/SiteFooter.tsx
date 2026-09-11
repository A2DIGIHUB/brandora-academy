import { Link } from "@tanstack/react-router";
import { BrandLogo } from "@/components/BrandLogo";
import { Mail, ArrowRight, Send } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Col 1: Brand & Tagline (5 cols) */}
          <div className="lg:col-span-5">
            <BrandLogo className="h-7 w-auto mb-6" invert />
            <p className="text-sm text-background/70 leading-relaxed max-w-sm mb-8">
              An outcome-based digital workforce development company: train on real briefs, build proof-of-work
              portfolios, and connect to top employer opportunities across Africa.
            </p>
            <div className="inline-flex items-center gap-3 text-xs text-background/60 font-mono">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Next Cohort Application Window Open</span>
            </div>
          </div>

          {/* Col 2: Academy (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-background/50 mb-5">Academy</h4>
            <ul className="space-y-3.5 text-xs font-semibold uppercase tracking-wider text-background/80">
              <li>
                <Link to="/academy" className="hover:text-primary transition-colors">
                  All Disciplines
                </Link>
              </li>
              <li>
                <Link to="/academy" className="hover:text-primary transition-colors">
                  Course Tracks
                </Link>
              </li>
              <li>
                <Link to="/talent-pipeline" className="hover:text-primary transition-colors">
                  Outcome Model
                </Link>
              </li>
              <li>
                <Link to="/auth" className="hover:text-primary transition-colors">
                  Apply for Admission
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Community & Talent (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-background/50 mb-5">Ecosystem</h4>
            <ul className="space-y-3.5 text-xs font-semibold uppercase tracking-wider text-background/80">
              <li>
                <Link to="/talent-pipeline" className="hover:text-primary transition-colors">
                  Hire Talent
                </Link>
              </li>
              <li>
                <Link to="/community" className="hover:text-primary transition-colors">
                  Free Webinars
                </Link>
              </li>
              <li>
                <Link to="/community" className="hover:text-primary transition-colors">
                  Telegram Group
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Inquiries (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-background/50 mb-5">Contact</h4>
            <p className="text-xs text-background/70 leading-relaxed mb-4">
              Have questions regarding enrollment, sponsorships, or employer partnerships?
            </p>
            <a
              href="mailto:hello@brandorax.com"
              className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline mb-4"
            >
              <Mail className="size-4" />
              hello@brandorax.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4 text-xs font-mono text-background/50 uppercase tracking-wider">
          <p>© {new Date().getFullYear()} BrandoraX Digital. Developing Africa's Tech Workforce.</p>
          <div className="flex gap-6">
            <Link to="/about" className="hover:text-background transition-colors">
              About
            </Link>
            <Link to="/community" className="hover:text-background transition-colors">
              Community
            </Link>
            <Link to="/academy" className="hover:text-background transition-colors">
              Tracks
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
