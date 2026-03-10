import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const counters = [
  { value: 12500, label: "Tons Exported Annually", suffix: "+" },
  { value: 850, label: "Fruit Varieties", suffix: "+" },
  { value: 98, label: "Client Retention Rate", suffix: "%" },
  { value: 365, label: "Days of Fresh Supply", suffix: "" },
];

const AnimatedCounter = ({ target, inView, suffix }: { target: number; inView: boolean; suffix: string }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [inView, target]);

  return (
    <span>
      {display.toLocaleString()}{suffix}
    </span>
  );
};

const ExportCounters = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding gradient-tropical">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {counters.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground">
                <AnimatedCounter target={c.value} inView={inView} suffix={c.suffix} />
              </div>
              <p className="mt-3 text-sm text-primary-foreground/60 font-medium uppercase tracking-wide">{c.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExportCounters;
