import {
  ShoppingCart,
  CalendarCheck,
  Bot,
  MessageSquareText,
  Boxes,
  TrendingUp,
  Zap,
  Cpu,
  ShieldCheck,
} from 'lucide-react';

const map = {
  ShoppingCart,
  CalendarCheck,
  Bot,
  MessageSquareText,
  Boxes,
  TrendingUp,
  Zap,
  Cpu,
  ShieldCheck,
};

/**
 * 文字列名からLucideアイコンを解決するヘルパー。
 * @param {string} name - アイコン名（lucide-react のエクスポート名）
 * @param {object} props - 渡すプロパティ（className 等）
 */
export default function Icon({ name, ...props }) {
  const Cmp = map[name] ?? Zap;
  return <Cmp {...props} aria-hidden="true" />;
}