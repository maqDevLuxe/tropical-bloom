import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";

const origins = [
  { fruit: "Dragon Fruit", region: "Vietnam", desc: "Hand-harvested from the Mekong Delta's volcanic terroir, our pitaya bursts with magenta vibrancy.", emoji: "🐉" },
  { fruit: "Mangosteen", region: "Thailand", desc: "Known as the 'Queen of Fruits', sourced from century-old orchards in Chanthaburi province.", emoji: "👑" },
  { fruit: "Passion Fruit", region: "Colombia", desc: "Grown at 1,800m altitude in the Andes, delivering unmatched aromatic intensity.", emoji: "🌺" },
  { fruit: "Rambutan", region: "Indonesia", desc: "From Sumatra's rainforest edge, these hairy jewels are picked at peak sweetness.", emoji: "🌴" },
];

const OriginStories = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="origins" ref={ref} className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary mb-4">From the Source</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
            Exotic Origin Stories
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {origins.map((o, i) => (
            <motion.div
              key={o.fruit}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="card-hover group p-8 rounded-2xl border border-border bg-card hover:border-primary/40"
            >
              <div className="flex items-start gap-4">
                <span className="text-5xl">{o.emoji}</span>
                <div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{o.fruit}</h3>
                  <div className="flex items-center gap-1.5 mt-1 text-muted-foreground">
                    <MapPin size={14} />
                    <span className="text-sm font-medium">{o.region}</span>
                  </div>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{o.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OriginStories;
