import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, CheckCircle, Globe, Clock } from "lucide-react";

const docs = [
  { icon: FileText, title: "Phytosanitary Certificates", desc: "Issued per international plant protection standards." },
  { icon: CheckCircle, title: "Certificate of Origin", desc: "Verified provenance documentation for all shipments." },
  { icon: Globe, title: "Customs Clearance", desc: "We handle import/export declarations in 42+ countries." },
  { icon: Clock, title: "48-Hour Processing", desc: "All export documents prepared within 2 business days." },
];

const Documentation = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-muted">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary mb-4">Hassle-Free</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
              Export Documentation
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            We take the complexity out of international trade paperwork so you can focus on what matters—selling premium fruit.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {docs.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="card-hover group p-6 rounded-2xl border border-border bg-card hover:border-primary/30"
            >
              <d.icon className="text-primary mb-4" size={28} />
              <h3 className="text-lg font-bold text-foreground mb-2">{d.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documentation;
