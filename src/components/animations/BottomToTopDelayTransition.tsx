import { motion } from "framer-motion";
import { PropsWithChildren, CSSProperties } from "react";

type RevealDivBottomToTopDelayProps = PropsWithChildren<{
  className?: string;
  delay: number;
  style?: CSSProperties;
}>;

export default function RevealDivBottomToTopDelay({
  children,
  className,
  delay,
  style,
}: RevealDivBottomToTopDelayProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.3, delay: delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
