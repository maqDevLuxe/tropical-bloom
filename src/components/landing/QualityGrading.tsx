import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Droplets, Scale, Stamp } from "lucide-react";

const grades = [
  { icon: Eye, step: "01", title: "Visual Inspection", desc: "Every fruit is visually assessed for color, shape, and surface integrity." },
  { icon: Droplets, step: "02", title: "Brix Testing", desc: "Sugar content measured with refractometers to guarantee sweetness standards." },
  { icon: Scale, step: "03", title: "Weight & Size", desc: "Precision sorting by calibrated scales ensures uniform shipment quality." },
  { icon: Stamp, step: "04", title: "Export Certification", desc: "Phytosanitary and organic certifications issued for every batch." },
];

const QualityGrading = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="quality" ref={ref} className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary mb-4">Standards</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
            Quality Grading Process
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {grades.map((g, i) => (
            <motion.div
              key={g.step}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative card-hover group"
            >
              <div className="p-8 rounded-2xl border border-border bg-card hover:border-primary/40 transition-all h-full">
                <span className="text-6xl font-black text-primary/10 group-hover:text-primary/20 transition-colors absolute top-4 right-6">
                  {g.step}
                </span>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <g.icon className="text-primary" size={22} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{g.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{g.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityGrading;
