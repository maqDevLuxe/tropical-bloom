import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    title: "Why Mangosteen Is the Ultimate Superfruit",
    excerpt: "Packed with xanthones, mangosteen offers antioxidant power that rivals blueberries.",
    category: "Nutrition",
    readTime: "4 min",
  },
  {
    title: "Dragon Fruit: A Visual & Nutritional Masterpiece",
    excerpt: "From gut health to iron absorption, discover why pitaya belongs in every diet.",
    category: "Wellness",
    readTime: "5 min",
  },
  {
    title: "The Rise of Passion Fruit in Global Cuisine",
    excerpt: "How this Andean gem went from local markets to Michelin-starred kitchens worldwide.",
    category: "Trends",
    readTime: "3 min",
  },
];

const NutritionBlog = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" ref={ref} className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary mb-4">Insights</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
            Tropical Nutrition Blog
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="card-hover group"
            >
              <div className="h-48 rounded-t-2xl gradient-sunset opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-6xl">🍈</span>
              </div>
              <div className="p-6 rounded-b-2xl border border-t-0 border-border bg-card">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  Read More <ArrowRight size={14} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NutritionBlog;
