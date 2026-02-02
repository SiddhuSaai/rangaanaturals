"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function QualityPolicy() {
    const t = useTranslations("quality");

    const qualitySteps = [
        {
            number: "01",
            title: t("steps.sourcing.title"),
            description: t("steps.sourcing.description"),
            icon: "🌱",
        },
        {
            number: "02",
            title: t("steps.control.title"),
            description: t("steps.control.description"),
            icon: "🔬",
        },
        {
            number: "03",
            title: t("steps.sustainability.title"),
            description: t("steps.sustainability.description"),
            icon: "♻️",
        },
        {
            number: "04",
            title: t("steps.improvement.title"),
            description: t("steps.improvement.description"),
            icon: "📈",
        },
    ];
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
                        {t("label")}
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-4">
                        {t("title")} <span className="text-gradient">{t("titleHighlight")}</span>
                    </h2>
                    <p className="text-foreground/60 mt-4 max-w-2xl mx-auto">
                        {t("description")}
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
