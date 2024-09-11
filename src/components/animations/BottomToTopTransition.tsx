import { motion } from "framer-motion";
import { PropsWithChildren, CSSProperties } from "react";

type RevealDivBottomToTopProps = PropsWithChildren<{
  className?: string;
  style?: CSSProperties;
}>;

export default function RevealDivBottomToTop({
  children,
  className,
  style,
}: RevealDivBottomToTopProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay: 0 }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
