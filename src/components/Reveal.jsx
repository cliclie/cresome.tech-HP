import { motion, useReducedMotion } from 'motion/react';

/**
 * スクロール時フェードイン用のラッパー。
 * ビューポートに入るとフェードイン+スライドアップする。
 * @param {object} props
 * @param {number} [delay=0] - アニメーション開始までの遅延（秒）
 * @param {string} [className]
 */
export default function Reveal({ children, delay = 0, className = '', amount = 0.2 }) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={prefersReduced ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}