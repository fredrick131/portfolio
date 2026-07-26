import { motion } from "framer-motion";

export default function Reveal({ children, delay = 0, className = "", as = "div" }) {
  const Component = motion[as] || motion.div;
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </Component>
  );
}
