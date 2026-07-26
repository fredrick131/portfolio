import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="loader-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
    >
      <motion.div
        className="loader-mark"
        initial={{ scale: 0.7, opacity: 0, rotate: -8 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        FS
        <motion.span
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(120deg, transparent 30%, rgba(56,189,248,.45) 50%, transparent 70%)",
          }}
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <div className="loader-track">
        <motion.div
          className="loader-fill"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="loader-label"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Loading Portfolio
      </motion.div>
    </motion.div>
  );
}
