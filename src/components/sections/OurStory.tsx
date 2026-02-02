"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function OurStory() {
    const t = useTranslations("story");
    const tCommon = useTranslations("common");

    const certifications = [
        { name: t("certifications.fssai"), icon: "🛡️" },
        { name: t("certifications.organic"), icon: "🌿" },
        { name: t("certifications.govt"), icon: "✅" },
    ];

    return (
        <section id="story" className="section-padding bg-gradient-to-b from-background to-grass-light dark:from-background dark:to-surface">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left - Story Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-sm font-medium text-primary uppercase tracking-widest">
                            {t("label")}
                        </span>
                        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
                            {t("title")} <span className="text-gradient">{t("titleHighlight")}</span>
                        </h2>

                        <div className="space-y-4 text-foreground/70 leading-relaxed">
                            <p>
                                {t("p1")} <em>{t("p1Question")}</em>
                            </p>
                            <p>
                                {t("p2")}
                            </p>
                            <p>
                                {t("p3")}
                            </p>
                            <p className="text-primary font-medium italic">
                                &ldquo;{t("p4")}&rdquo;
                            </p>
                        </div>
                    </motion.div>

                    {/* Right - Certifications */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="glass-card p-8">
                            <h3 className="font-heading text-xl text-foreground mb-6 text-center">
                                {t("certifiedTitle")}
                            </h3>

                            {/* Certification Badges */}
                            <div className="grid grid-cols-3 gap-6">
                                {certifications.map((cert, index) => (
                                    <motion.div
                                        key={cert.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex flex-col items-center gap-3"
                                    >
                                        <div className="relative w-16 h-16 md:w-20 md:h-20 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center shadow-md">
                                            <span className="text-3xl">{cert.icon}</span>
                                        </div>
                                        <span className="text-xs text-center text-foreground/60">
                                            {cert.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Trust Badge */}
                            <div className="mt-8 pt-6 border-t border-primary/10">
                                <div className="flex items-center justify-center gap-2 text-sm text-foreground/60">
                                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>{tCommon("verified")}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

