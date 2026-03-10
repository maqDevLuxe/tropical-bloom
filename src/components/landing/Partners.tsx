import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  "Whole Foods", "Carrefour", "Tesco", "Aeon", "Woolworths", "Metro AG", "Costco", "Marks & Spencer"
];

const Partners = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-muted">
      <div className="max-w-7xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-12"
        >
          Trusted by Global Retail Partners
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, i) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center justify-center h-20 rounded-xl border border-border bg-background transition-all duration-300 hover:shadow-lg hover:border-primary/30"
            >
              <span className="text-lg font-bold tracking-wide text-foreground/60">{partner}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
