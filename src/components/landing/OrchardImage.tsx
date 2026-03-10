import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import orchardImg from "@/assets/orchard-aerial.jpg";

const OrchardImage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      <motion.div
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={inView ? { clipPath: "inset(0 0% 0 0)" } : {}}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <img
          src={orchardImg}
          alt="Aerial view of tropical fruit orchard at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tropical-deep/60 to-transparent" />
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground text-center tracking-tight"
        >
          Straight From<br />
          <span className="text-gradient-tropical">Our Orchards</span>
        </motion.h2>
      </div>
    </section>
  );
};

export default OrchardImage;
