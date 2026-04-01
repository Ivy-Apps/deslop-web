'use client';

import type { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';
import type { ReactNode } from 'react';

import { typeScale } from '@/components/design-system/typography';

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  children?: ReactNode;
};

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  children,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white/[0.02] border border-white/5 rounded-3xl p-9 md:p-10 hover:bg-white/[0.04] transition-all group"
    >
      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className={typeScale.titleLg}>{title}</h3>
      <p className="text-zinc-300 text-lg leading-relaxed mb-8">
        {description}
      </p>
      {children}
    </motion.div>
  );
}
