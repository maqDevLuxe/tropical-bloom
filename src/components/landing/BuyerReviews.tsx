import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Elena Müller",
    role: "Procurement Director, Edeka Group",
    country: "Germany",
    text: "TropicaExports has transformed our exotic fruit aisle. Their cold-chain guarantee means zero spoilage on every shipment.",
    rating: 5,
  },
  {
    name: "Kenji Tanaka",
    role: "Import Manager, Aeon Retail",
    country: "Japan",
    text: "The quality grading is exceptional. Our customers notice the difference—sales of dragon fruit increased 340% since partnering.",
    rating: 5,
  },
  {
    name: "Sarah Al-Rashid",
    role: "F&B Sourcing Lead, Emirates Group",
    country: "UAE",
    text: "Documentation and customs clearance are seamless. They handle everything so we can focus on delivering to our airline lounges.",
    rating: 5,
  },
];

const BuyerReviews = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviews" ref={ref} className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
            International Buyer Reviews
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="card-hover p-8 rounded-2xl border border-border bg-card"
            >
              <Quote className="text-primary/20 mb-4" size={32} />
              <p className="text-foreground leading-relaxed mb-6">"{r.text}"</p>
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="text-sunset-orange fill-sunset-orange" size={16} />
                ))}
              </div>
              <div>
                <p className="font-bold text-foreground">{r.name}</p>
                <p className="text-sm text-muted-foreground">{r.role}</p>
                <p className="text-xs text-primary font-semibold mt-1">{r.country}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuyerReviews;
