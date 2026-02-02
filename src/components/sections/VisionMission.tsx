"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function VisionMission() {
    const t = useTranslations("visionMission");

    const missionPoints = [
        {
            icon: "🌿",
            title: t("mission.organic.title"),
            description: t("mission.organic.description"),
        },
        {
            icon: "👨‍🌾",
            title: t("mission.fairTrade.title"),
            description: t("mission.fairTrade.description"),
        },
        {
            icon: "🛡️",
            title: t("mission.purity.title"),
            description: t("mission.purity.description"),
        },
        {
            icon: "❤️",
            title: t("mission.health.title"),
            description: t("mission.health.description"),
        },
    ];

    const stats = [
        { value: "50+", label: t("stats.products") },
        { value: "100+", label: t("stats.farmers") },
        { value: "10K+", label: t("stats.families") },
        { value: "5+", label: t("stats.years") },
    ];

    return (
        <section className="section-padding relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/scroll-story-cinematic-frame.png"
                    alt="Cinematic rural Tamil Nadu countryside"
                    fill
                    className="object-cover object-center opacity-25 dark:opacity-15"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
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
                    <span className="text-sm font-medium text-primary uppercase tracking-[0.2em]">
                        {t("label")}
                    </span>
                    <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-4">
                        {t("title")} <span className="text-gradient">{t("titleHighlight")}</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="glass-card p-8 md:p-12 border border-primary/10"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                                <span className="text-4xl">👁️</span>
                            </div>
                            <h3 className="font-heading text-3xl text-foreground">{t("visionTitle")}</h3>
                        </div>
                        <p className="text-foreground/70 text-lg leading-relaxed">
                            {t("visionText")}
                        </p>

                        {/* Decorative Element */}
                        <div className="mt-8 flex items-center gap-3">
                            <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary/20 rounded-full" />
                            <span className="text-sm text-primary font-medium">Since 2015</span>
                        </div>
                    </motion.div>

                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="glass-card p-8 md:p-12 border border-primary/10"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                                <span className="text-4xl">🎯</span>
                            </div>
                            <h3 className="font-heading text-3xl text-foreground">{t("missionTitle")}</h3>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
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
                                        <h4 className="font-semibold text-foreground">
                                            {point.title}
                                        </h4>
                                        <p className="text-sm text-foreground/60 mt-1">
                                            {point.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="font-heading text-4xl md:text-5xl text-primary font-bold">
                                {stat.value}
                            </div>
                            <div className="text-sm text-foreground/60 mt-2">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

