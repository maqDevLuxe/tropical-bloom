import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";

const FooterCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="quote" ref={ref}>
      {/* CTA */}
      <div className="section-padding gradient-tropical">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sunset-orange mb-4">Get Started</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-primary-foreground mb-6">
              Ready to Source<br />Premium Exotics?
            </h2>
            <p className="text-primary-foreground/60 max-w-xl mx-auto mb-10 leading-relaxed">
              Tell us about your needs and we'll prepare a custom quote within 24 hours.
            </p>
          </motion.div>

          {!submitted ? (
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <input
                type="email"
                placeholder="your@email.com"
                required
                className="flex-1 px-6 py-4 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-sunset-orange transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-full bg-secondary text-secondary-foreground font-semibold flex items-center justify-center gap-2 transition-transform hover:scale-105"
              >
                <Send size={18} />
                Request Quote
              </button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card rounded-2xl p-8 max-w-md mx-auto"
            >
              <p className="text-2xl font-bold text-primary-foreground mb-2">Thank you! 🎉</p>
              <p className="text-primary-foreground/60">We'll be in touch within 24 hours.</p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-tropical-deep px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div>
            <span className="text-2xl font-bold text-primary-foreground tracking-tight">
              <span className="text-gradient-tropical">TROPICA</span>EXPORTS
            </span>
            <p className="mt-4 text-sm text-primary-foreground/40 leading-relaxed">
              Premium exotic fruit sourcing, grading, and export services since 2009.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary-foreground/60 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Origins", "Logistics", "Quality", "Blog"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-sm text-primary-foreground/40 hover:text-sunset-orange transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary-foreground/60 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/40">
                <Mail size={14} /> export@tropicaexports.com
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/40">
                <Phone size={14} /> +1 (555) 987-6543
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/40">
                <MapPin size={14} /> Singapore & São Paulo
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary-foreground/60 mb-4">Certifications</h4>
            <div className="flex flex-wrap gap-2">
              {["GlobalGAP", "HACCP", "Organic", "Fair Trade"].map((c) => (
                <span key={c} className="text-xs font-semibold px-3 py-1.5 rounded-full border border-primary-foreground/20 text-primary-foreground/50">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-xs text-primary-foreground/30">
            © 2026 TropicaExports. All rights reserved. Premium exotic fruit export services worldwide.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default FooterCTA;
