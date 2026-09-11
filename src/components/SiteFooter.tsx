import { Link } from "@tanstack/react-router";
import { BrandLogo } from "@/components/BrandLogo";

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div>
            <BrandLogo className="h-7 w-auto mb-6" invert />
            <p className="text-sm text-background/70 leading-relaxed max-w-xs">
              An outcome-based digital workforce company: train, get evaluated, get placed.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-background/50 mb-6">Academy</h4>
            <ul className="space-y-4 text-[13px] font-medium">
              <li><Link to="/academy" className="hover:text-gold transition-colors">Programs & tracks</Link></li>
              <li><Link to="/academy" className="hover:text-gold transition-colors">Admission</Link></li>
              <li><Link to="/auth" className="hover:text-gold transition-colors">Apply now</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-background/50 mb-6">Talent Pipeline</h4>
            <ul className="space-y-4 text-[13px] font-medium">
              <li><Link to="/talent-pipeline" className="hover:text-gold transition-colors">How it works</Link></li>
              <li><Link to="/talent-pipeline" className="hover:text-gold transition-colors">Hire talent</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Partnerships</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-background/50 mb-6">Connect</h4>
            <ul className="space-y-4 text-[13px] font-medium">
              <li><Link to="/community" className="hover:text-gold transition-colors">Community</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">About us</Link></li>
              <li><a href="mailto:hello@brandorax.com" className="hover:text-gold transition-colors">hello@brandorax.com</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
          <p className="font-mono text-[10px] text-background/50 uppercase">
            © {new Date().getFullYear()} BrandoraX. Developing tomorrow's digital workforce.
          </p>
          <div className="flex gap-8 font-mono text-[10px] text-background/50 uppercase">
            <Link to="/contact" className="hover:text-background">Contact</Link>
            <Link to="/about" className="hover:text-background">About</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
