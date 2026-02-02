"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function TempleHeritage() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

    return (
        <section
            ref={ref}
            className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden"
        >
            {/* Background - Temple + Kollidam Bridge */}
            <motion.div
                style={{ scale }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="/images/temple-kollidam.svg"
                    alt="Srirangam Temple and Kollidam Bridge landscape"
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
                {/* Mist/Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/40 via-primary-dark/60 to-primary-dark/80" />
            </motion.div>

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
                    className="max-w-3xl mx-auto"
                >
                    {/* Decorative Line */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="w-16 h-px bg-white/30" />
                        <span className="text-3xl">🕉️</span>
                        <div className="w-16 h-px bg-white/30" />
                    </div>

                    {/* Quote */}
                    <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl text-white leading-relaxed">
                        &ldquo;Tradition is not preserved in books,
                        <br />
                        <span className="text-grass-light">but in what we choose to consume.&rdquo;</span>
                    </h2>

                    {/* Subtext */}
                    <p className="mt-8 text-white/60 text-sm md:text-base max-w-xl mx-auto">
                        From the sacred banks of the Kaveri, where Srirangam temple has stood for centuries,
                        we draw inspiration to preserve ancient wisdom through pure, organic living.
                    </p>
                </motion.div>
            </motion.div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
        </section>
    );
}
