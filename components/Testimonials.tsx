// "use client";
// import React from 'react';
// import { motion } from 'motion/react';
// import { testimonials, clients } from '../data/content';
// import { Star, Quote } from 'lucide-react';

// export function Testimonials() {
//   return (
//     <section className="py-32 bg-[var(--bg-default)] relative z-10 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* Client Logos */}
//         <div className="mb-32">
//           <p className="text-center text-sm font-semibold tracking-widest text-[var(--secondary)] uppercase mb-10">
//             WHY CHOOSE UNKNOWN EDITS
//           </p>
//           <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
//             {clients.filter(c => c.featured).map((client, idx) => (
//               <img 
//                 key={idx}
//                 src={client.logo} 
//                 alt={client.name} 
//                 className="h-8 md:h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
//               />
//             ))}
//           </div>
//         </div>

//         {/* Testimonials */}
//         <div className="grid md:grid-cols-2 gap-8">
//           {testimonials.map((test, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               className="p-10 rounded-[var(--radius-lg)] bg-[var(--bg-paper)] border border-white/5 relative"
//             >
//               <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 rotate-180" />
//               <div className="flex gap-1 mb-6">
//                 {[...Array(test.rating)].map((_, i) => (
//                   <Star key={i} className="w-5 h-5 fill-[var(--accent)] text-[var(--accent)]" />
//                 ))}
//               </div>
//               <p className="text-lg text-[var(--primary)] mb-8 italic leading-relaxed">
//                 &quot;{test.review}&quot;
//               </p>
//               <div className="flex items-center gap-4">
//                 <img src={test.photo} alt={test.clientName} className="w-12 h-12 rounded-full object-cover" />
//                 <div>
//                   <h4 className="font-bold text-[var(--primary)]">{test.clientName}</h4>
//                   <p className="text-sm text-[var(--secondary)]">{test.company}</p>
//                 </div>
//               </div>
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
  Zap,
  Target,
  Users,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Clapperboard,
    title: "Cinematic Storytelling",
    description:
      "We transform raw footage into engaging stories that capture attention and keep viewers watching till the very end.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description:
      "Reliable delivery schedules without sacrificing creativity, quality or attention to detail.",
  },
  {
    icon: Target,
    title: "Attention To Detail",
    description:
      "Every cut, transition, sound effect and motion graphic is refined to create a polished final product.",
  },
  {
    icon: Users,
    title: "Collaborative Workflow",
    description:
      "Clear communication, transparent revisions and a smooth editing process from first draft to final delivery.",
  },
];

export function Testimonials() {
  return (
    <section className="py-32 bg-[var(--bg-default)] relative overflow-hidden">

      {/* Background Glow */}

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
            WHY CHOOSE UNKNOWN EDITS
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-[var(--primary)] leading-tight mb-6">
            Editing That Elevates
            <br />
            Every Story
          </h2>

          <p className="text-lg text-[var(--secondary)] leading-relaxed">
            Every project is crafted with cinematic storytelling,
            modern editing techniques and an obsession for quality—
            ensuring your content stands out in today's crowded feeds.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

{features.map((feature, index) => {
  const Icon = feature.icon;

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
        y: -8,
      }}
      className="group relative overflow-hidden rounded-[var(--radius-lg)] border border-white/10 bg-[var(--bg-paper)] p-10 transition-all duration-500 hover:border-[var(--accent)]/40 hover:shadow-[0_0_40px_rgba(255,0,0,0.08)]"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[var(--accent)]/5 via-transparent to-transparent" />

      <div className="relative z-10">

        <div className="w-16 h-16 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-[var(--accent)]" />
        </div>

        <h3 className="text-2xl font-bold text-[var(--primary)] mb-5">
          {feature.title}
        </h3>

        <p className="text-[var(--secondary)] leading-8 mb-8">
          {feature.description}
        </p>

        <div className="flex items-center gap-2 text-[var(--accent)] font-semibold group-hover:gap-4 transition-all duration-300">
          <span>Learn More</span>
          <ArrowRight className="w-5 h-5" />
        </div>

      </div>

      <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-[var(--accent)]/5 blur-3xl group-hover:bg-[var(--accent)]/10 transition-all duration-500" />

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
                Ready To Create
                <br />
                Something Exceptional?
              </h3>

              <p className="max-w-2xl mx-auto text-lg text-[var(--secondary)] leading-relaxed mb-10">
                Whether you're building a personal brand, growing a YouTube
                channel, or producing commercial content, Unknown Edits delivers
                premium editing that helps your videos stand out.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full bg-[var(--accent)] px-8 py-4 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </a>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}