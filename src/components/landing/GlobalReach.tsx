import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Flag, Ship, Award } from "lucide-react";

const metrics = [
  { icon: Globe, value: "42", label: "Countries Served", suffix: "+" },
  { icon: Flag, value: "15", label: "Source Nations", suffix: "" },
  { icon: Ship, value: "2,400", label: "Shipments / Year", suffix: "+" },
  { icon: Award, value: "99.2", label: "Delivery Success %", suffix: "%" },
];

const GlobalReach = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary mb-4">Our Reach</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
            Global Footprint
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="text-center p-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <m.icon className="text-primary" size={24} />
              </div>
              <div className="text-4xl md:text-5xl font-black text-foreground">
                {m.value}<span className="text-secondary">{m.suffix}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground font-medium">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
