import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth";
import { BrandLogo } from "@/components/BrandLogo";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { to: "/academy", label: "Academy" },
  { to: "/talent-pipeline", label: "Talent Pipeline" },
  { to: "/community", label: "Community" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const { session } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/80">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center" aria-label="BrandoraX home">
            <BrandLogo className="h-7 w-auto" />
          </Link>
          <nav className="hidden lg:flex gap-8 text-[13px] font-semibold tracking-wider text-muted-foreground uppercase">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="hover:text-foreground transition-colors relative py-1"
                activeProps={{ className: "text-primary font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden sm:flex items-center gap-5">
          {session ? (
            <Link
              to="/dashboard"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity shadow-sm"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                to="/auth"
                className="text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
              >
                Sign In
              </Link>
              <Link
                to="/auth"
                className="bg-primary text-primary-foreground px-6 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity shadow-sm inline-flex items-center gap-1.5"
              >
                Apply Now
                <ArrowRight className="size-3.5" />
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-md hover:bg-secondary text-foreground"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border bg-background px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground py-2 border-b border-border/40"
                activeProps={{ className: "text-primary font-bold" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="pt-4 flex flex-col gap-3">
            {session ? (
              <Link
                to="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-primary text-primary-foreground py-3 rounded-md text-xs font-bold uppercase tracking-wider"
              >
                Go to Dashboard
              </Link>
            ) : (
              <>
                <Link
                  to="/auth"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center bg-primary text-primary-foreground py-3 rounded-md text-xs font-bold uppercase tracking-wider"
                >
                  Apply Now
                </Link>
                <Link
                  to="/auth"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center border border-border py-2.5 rounded-md text-xs font-bold uppercase tracking-wider"
                >
                  Sign In
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
