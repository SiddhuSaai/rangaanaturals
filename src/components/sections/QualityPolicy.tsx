"use client";

import { motion } from "framer-motion";

const qualitySteps = [
    {
        number: "01",
        title: "Authentic Sourcing",
        description: "Direct partnerships with certified organic farmers across Tamil Nadu. Every product is traceable to its source.",
        icon: "🌱",
    },
    {
        number: "02",
        title: "Quality Control",
        description: "Rigorous testing at every stage—from harvest to packaging. No compromises on purity or safety.",
        icon: "🔬",
    },
    {
        number: "03",
        title: "Sustainability",
        description: "Eco-friendly packaging, minimal waste processing, and support for renewable farming practices.",
        icon: "♻️",
    },
    {
        number: "04",
        title: "Continuous Improvement",
        description: "Always evolving our processes based on research, feedback, and the latest in organic agriculture.",
        icon: "📈",
    },
];

export default function QualityPolicy() {
    return (
        <section id="quality" className="section-padding bg-grass-light dark:bg-surface">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-medium text-primary uppercase tracking-widest">
                        Quality Policy
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-4">
                        Our Promise to <span className="text-gradient">Purity</span>
                    </h2>
                    <p className="text-foreground/60 mt-4 max-w-2xl mx-auto">
                        Every step of our process is designed to deliver only the best to your family.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 md:-translate-x-1/2" />

                    {qualitySteps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative flex items-start gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-8 md:left-1/2 w-4 h-4 md:-translate-x-1/2">
                                <div className="timeline-dot" />
                            </div>

                            {/* Content Card */}
                            <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                                }`}>
                                <div className="glass-card p-6">
                                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                        }`}>
                                        <span className="text-3xl">{step.icon}</span>
                                        <div>
                                            <span className="text-xs font-mono text-primary">
                                                {step.number}
                                            </span>
                                            <h3 className="font-heading text-xl text-foreground">
                                                {step.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <p className="text-foreground/60 text-sm">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
