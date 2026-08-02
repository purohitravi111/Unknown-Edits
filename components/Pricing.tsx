// "use client";
// import React from 'react';
// import { motion } from 'motion/react';
// import { pricing } from '../data/content';
// import { CheckCircle2 } from 'lucide-react';

// export function Pricing() {
//   return (
//     <section id="pricing" className="py-32 bg-[var(--bg-muted)] relative z-10">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-20">
//           <h2 className="text-4xl md:text-5xl font-black text-[var(--primary)] mb-4">Transparent Pricing</h2>
//           <p className="text-[var(--secondary)] max-w-2xl mx-auto">
//             No hidden fees. Just high-quality post-production tailored to your specific needs.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8 items-center">
//           {pricing.map((pkg, idx) => (
//             <motion.div 
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: idx * 0.1 }}
//               className={`rounded-[var(--radius-lg)] p-8 ${
//                 pkg.featured 
//                   ? 'bg-gradient-to-b from-[var(--bg-paper)] to-[var(--bg-default)] border-2 border-[var(--accent)] transform md:-translate-y-4 shadow-[var(--glow)]'
//                   : 'bg-[var(--bg-paper)] border border-white/5'
//               }`}
//             >
//               {pkg.featured && (
//                 <div className="bg-[var(--accent)] text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full inline-block mb-6">
//                   Recommended
//                 </div>
//               )}
//               <h3 className="text-2xl font-bold text-[var(--primary)] mb-2">{pkg.packageName}</h3>
//               <div className="text-4xl font-black text-[var(--primary)] mb-8">
//                 {pkg.price}
//               </div>
//               <ul className="space-y-4 mb-10">
//                 {pkg.features.map((feat, fIdx) => (
//                   <li key={fIdx} className="flex items-start gap-3 text-[var(--secondary)]">
//                     <CheckCircle2 className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" />
//                     <span>{feat}</span>
//                   </li>
//                 ))}
//               </ul>
//               <a 
//                 href={pkg.cta.url}
//                 className={`block w-full py-4 rounded-[var(--radius-base)] text-center font-bold transition-all ${
//                   pkg.featured
//                     ? 'bg-[var(--accent)] text-white hover:bg-opacity-90'
//                     : 'bg-white/5 text-[var(--primary)] hover:bg-white/10'
//                 }`}
//               >
//                 {pkg.cta.label}
//               </a>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Clapperboard,
  Film,
  Building2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const plans = [
  {
    icon: Clapperboard,
    title: "Short-Form Editing",
    subtitle: "Perfect for creators growing on Instagram, YouTube Shorts & TikTok.",
    features: [
      "Premium Reel Editing",
      "Captions & Motion Graphics",
      "Sound Design",
      "Color Grading",
      "Fast Turnaround",
    ],
    button: "Let's Talk",
    featured: false,
  },

  {
    icon: Film,
    title: "Long-Form Editing",
    subtitle: "Professional editing for YouTube documentaries, podcasts and educational videos.",
    features: [
      "Storytelling Structure",
      "Motion Graphics",
      "Custom Sound Design",
      "Color Grading",
      "Thumbnail Consultation",
    ],
    button: "Book Discovery Call",
    featured: true,
  },

  {
    icon: Building2,
    title: "Brand Partnership",
    subtitle: "Dedicated editing support for brands, businesses and agencies.",
    features: [
      "Dedicated Editor",
      "Priority Delivery",
      "Unlimited Revisions*",
      "Custom Workflow",
      "Long-Term Collaboration",
    ],
    button: "Request Quote",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-32 bg-[var(--bg-muted)] relative overflow-hidden"
    >

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[var(--accent)]/5 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >

          <p className="uppercase tracking-[0.35em] text-sm text-[var(--accent)] font-semibold mb-5">
            OUR PLANS
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-[var(--primary)] mb-6">
            Choose Your
            <br />
            Editing Solution
          </h2>

          <p className="text-lg text-[var(--secondary)] leading-relaxed">
            Every creator and business has different needs. Choose the
            workflow that fits your content, goals and production style.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">

          {plans.map((plan, index) => {
  const Icon = plan.icon;

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -10,
      }}
      className={`group relative overflow-hidden rounded-[var(--radius-lg)] p-10 transition-all duration-500 ${
        plan.featured
          ? "border-2 border-[var(--accent)] bg-gradient-to-b from-[var(--bg-paper)] to-[var(--bg-default)] shadow-[var(--glow)]"
          : "border border-white/10 bg-[var(--bg-paper)] hover:border-[var(--accent)]/40"
      }`}
    >

      {plan.featured && (
        <div className="inline-flex items-center rounded-full bg-[var(--accent)] px-4 py-1 text-xs font-bold uppercase tracking-widest text-white mb-8">
          Most Popular
        </div>
      )}

      <div className="relative z-10">

        <div className="w-16 h-16 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-[var(--accent)]" />
        </div>

        <h3 className="text-3xl font-bold text-[var(--primary)] mb-3">
          {plan.title}
        </h3>

        <p className="text-[var(--secondary)] leading-7 mb-8">
          {plan.subtitle}
        </p>

        <ul className="space-y-5 mb-10">
          {plan.features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 text-[var(--secondary)]"
            >
              <CheckCircle2 className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className={`inline-flex w-full items-center justify-center gap-3 rounded-[var(--radius-base)] py-4 font-bold transition-all duration-300 ${
            plan.featured
              ? "bg-[var(--accent)] text-white hover:opacity-90"
              : "bg-white/5 text-[var(--primary)] hover:bg-white/10"
          }`}
        >
          {plan.button}
          <ArrowRight className="w-5 h-5" />
        </a>

      </div>

      <div className="absolute -right-12 -bottom-12 h-40 w-40 rounded-full bg-[var(--accent)]/5 blur-3xl transition-all duration-500 group-hover:bg-[var(--accent)]/10" />

    </motion.div>
  );
})}

        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-24"
        >
          <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-white/10 bg-[var(--bg-paper)] p-12 md:p-16 text-center">

            <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/5 via-transparent to-[var(--accent)]/5" />

            <div className="relative z-10">

              <h3 className="text-3xl md:text-5xl font-bold text-[var(--primary)] mb-6">
                Not Sure Which Plan
                <br />
                Fits Your Needs?
              </h3>

              <p className="max-w-2xl mx-auto text-lg text-[var(--secondary)] leading-relaxed mb-10">
                Every project is different. Let's discuss your content,
                editing style and goals, and we'll recommend the best workflow
                for your brand.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full bg-[var(--accent)] px-8 py-4 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Book a Discovery Call
                <ArrowRight className="w-5 h-5" />
              </a>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}