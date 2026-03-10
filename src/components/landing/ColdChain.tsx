import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Thermometer, Truck, Warehouse, ShieldCheck } from "lucide-react";

const steps = [
  { icon: Thermometer, title: "Harvest Cooling", desc: "Fruits are pre-cooled within 2 hours of harvest to lock in peak freshness." },
  { icon: Warehouse, title: "Cold Storage", desc: "Climate-controlled warehouses maintain precise humidity and temperature." },
  { icon: Truck, title: "Reefer Transport", desc: "GPS-tracked refrigerated containers with real-time temp monitoring." },
  { icon: ShieldCheck, title: "Quality Seal", desc: "Every shipment arrives with a verified cold-chain integrity certificate." },
];

const ColdChain = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="logistics" ref={ref} className="section-padding gradient-tropical">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sunset-orange mb-4">Technology</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-primary-foreground">
            Cold-Chain Logistics
          </h2>
          <p className="mt-4 text-primary-foreground/60 max-w-2xl mx-auto">
            Our end-to-end cold-chain ensures every fruit arrives as fresh as the moment it was picked.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass-card rounded-2xl p-8 text-center group card-hover"
            >
              <div className="w-16 h-16 rounded-full bg-sunset-orange/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-sunset-orange/30 transition-colors">
                <step.icon className="text-sunset-orange" size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground mb-3">{step.title}</h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ColdChain;
