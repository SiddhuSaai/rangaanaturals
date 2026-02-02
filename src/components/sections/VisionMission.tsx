"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const missionPoints = [
    {
        icon: "🌿",
        title: "100% Organic",
        description: "Pure products, no chemicals",
    },
    {
        icon: "👨‍🌾",
        title: "Fair Trade",
        description: "Direct farmer partnerships",
    },
    {
        icon: "🛡️",
        title: "Uncompromised Purity",
        description: "Rigorous quality control",
    },
    {
        icon: "❤️",
        title: "Community Health",
        description: "Wellness for all families",
    },
];

export default function VisionMission() {
    return (
        <section className="section-padding relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/farmland-bg.png"
                    alt="Farmland background"
                    fill
                    className="object-cover opacity-30 dark:opacity-20"
                />
                <div className="absolute inset-0 bg-background/80 dark:bg-background/90" />
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-medium text-primary uppercase tracking-widest">
                        Our Purpose
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-4">
                        Vision & Mission
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8 }}
                        className="glass-card p-8 md:p-10"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-3xl">👁️</span>
                            <h3 className="font-heading text-2xl text-foreground">Vision</h3>
                        </div>
                        <p className="text-foreground/70 text-lg leading-relaxed">
                            To be the trusted bridge between Tamil Nadu&apos;s organic farms and
                            health-conscious families worldwide—preserving tradition while nurturing
                            the future of sustainable living.
                        </p>
                    </motion.div>

                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8 }}
                        className="glass-card p-8 md:p-10"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-3xl">🎯</span>
                            <h3 className="font-heading text-2xl text-foreground">Mission</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {missionPoints.map((point, index) => (
                                <motion.div
                                    key={point.title}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-3"
                                >
                                    <span className="text-2xl">{point.icon}</span>
                                    <div>
                                        <h4 className="font-medium text-foreground text-sm">
                                            {point.title}
                                        </h4>
                                        <p className="text-xs text-foreground/60">
                                            {point.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
