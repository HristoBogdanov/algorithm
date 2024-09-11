import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export default function RevealDivRightToLeft({ children }: PropsWithChildren) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: 85 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0 }}
    >
      {children}
    </motion.div>
  );
}
