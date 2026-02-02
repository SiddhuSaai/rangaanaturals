"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function TempleSilhouette() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);

    return (
        <section
            ref={ref}
            className="relative h-[50vh] md:h-[60vh] overflow-hidden"
        >
            {/* Background - Temple Silhouette at Sunrise */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="/images/temple-silhouette.png"
                    alt="South Indian temple silhouette at sunrise"
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                />
                {/* Warm sunrise gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 h-full flex items-center justify-center"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center px-6"
                >
                    <span className="text-sm md:text-base font-medium text-white/80 uppercase tracking-[0.3em] mb-4 block">
                        Heritage & Spirituality
                    </span>
                    <h3 className="font-heading text-2xl md:text-4xl text-white drop-shadow-2xl">
                        Where Tradition Meets <span className="text-amber-300">Wellness</span>
                    </h3>
                </motion.div>
            </motion.div>
        </section>
    );
}
