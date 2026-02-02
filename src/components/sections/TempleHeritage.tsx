"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function TempleHeritage() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);
    const t = useTranslations("templeHeritage");

    return (
        <section
            ref={ref}
            className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background - Temple + Kollidam Bridge */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/temple+kollidam-bridge.png"
                    alt="Srirangam Temple and Kollidam Bridge landscape"
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                />
                {/* Subtle dark cinematic overlay - no green */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
            </div>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 container-custom text-center"
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Decorative Line */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="w-20 h-px bg-white/40" />
                        <span className="text-4xl">🕉️</span>
                        <div className="w-20 h-px bg-white/40" />
                    </div>

                    {/* Quote */}
                    <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-white leading-relaxed drop-shadow-2xl">
                        &ldquo;{t("quote1")}
                        <br />
                        <span className="text-amber-200">{t("quote2")}&rdquo;</span>
                    </h2>

                    {/* Subtext */}
                    <p className="mt-10 text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        {t("description")}
                    </p>

                    {/* Location Badge */}
                    <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                        <span className="text-lg">📍</span>
                        <span className="text-white/80 text-sm">{t("location")}</span>
                    </div>
                </motion.div>
            </motion.div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />
        </section>
    );
}

