import { motion } from "framer-motion";
import heroImg from "@/assets/hero-fruits.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={heroImg}
          alt="Exotic tropical fruits arranged on dark teal marble"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-tropical-deep/70 via-tropical-deep/40 to-tropical-deep/80" />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-sunset-orange text-sm md:text-base font-semibold uppercase tracking-[0.3em] mb-6"
        >
          Premium Exotic Fruit Export Agency
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-primary-foreground leading-[0.95] tracking-tight max-w-5xl"
        >
          FROM TROPICAL
          <br />
          <span className="text-gradient-tropical">ORCHARDS</span>
          <br />
          TO THE WORLD
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed"
        >
          We source, grade, and export the world's finest exotic fruits—delivering
          freshness from orchard to your doorstep across 40+ countries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#quote"
            className="px-8 py-4 rounded-full bg-secondary text-secondary-foreground font-semibold text-lg tracking-wide transition-transform duration-300 hover:scale-105"
          >
            Request a Quote
          </a>
          <a
            href="#origins"
            className="px-8 py-4 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-lg tracking-wide transition-all duration-300 hover:border-primary-foreground/60"
          >
            Explore Origins
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
