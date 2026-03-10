import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fruits = [
  { name: "Dragon Fruit", months: [0,1,0,0,1,1,1,1,1,1,0,0] },
  { name: "Mangosteen", months: [0,0,0,1,1,1,1,1,0,0,0,0] },
  { name: "Passion Fruit", months: [1,1,1,1,0,0,0,0,0,1,1,1] },
  { name: "Rambutan", months: [0,0,0,0,1,1,1,1,1,0,0,0] },
  { name: "Lychee", months: [0,0,0,0,1,1,1,0,0,0,0,0] },
  { name: "Star Fruit", months: [1,1,1,0,0,0,1,1,1,1,1,1] },
];

const monthLabels = ["J","F","M","A","M","J","J","A","S","O","N","D"];

const Seasonality = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-muted">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary mb-4">Planning</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
            Seasonality & Availability
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[600px]">
            <thead>
              <tr>
                <th className="text-left text-sm font-semibold text-foreground pb-4 pr-6">Fruit</th>
                {monthLabels.map((m) => (
                  <th key={m} className="text-center text-xs font-semibold text-muted-foreground pb-4 w-10">{m}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {fruits.map((fruit, fi) => (
                <motion.tr
                  key={fruit.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + fi * 0.08 }}
                  className="border-t border-border"
                >
                  <td className="py-4 pr-6 text-sm font-semibold text-foreground whitespace-nowrap">{fruit.name}</td>
                  {fruit.months.map((avail, mi) => (
                    <td key={mi} className="py-4 text-center">
                      <div
                        className={`w-8 h-8 rounded-lg mx-auto transition-all duration-300 ${
                          avail
                            ? "bg-primary hover:bg-primary/80"
                            : "bg-border/50"
                        }`}
                      />
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default Seasonality;
