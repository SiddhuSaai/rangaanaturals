"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const storySteps = [
    {
        image: "/images/farmer-oxen.svg",
        alt: "Farmer ploughing land with oxen in Tamil Nadu",
        text: "True wellness begins with nature…",
    },
    {
        image: "/images/native-cow.svg",
        alt: "Native Indian cow in green farmland",
        text: "Behind every product is a farmer…",
    },
    {
        image: "/images/crops-closeup.svg",
        alt: "Close-up of healthy paddy crops",
        text: "Behind every farmer is the soil…",
    },
];

export default function ScrollStory() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <section ref={containerRef} className="relative min-h-[300vh] bg-grass-light dark:bg-surface">
            {/* Sticky Container */}
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-8"
                    >
                        <span className="text-sm font-medium text-primary uppercase tracking-widest">
                            From Soil to Soul
                        </span>
                    </motion.div>

                    {/* Story Steps */}
                    {storySteps.map((step, index) => (
                        <ScrollStoryStep
                            key={index}
                            step={step}
                            index={index}
                            scrollYProgress={scrollYProgress}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

interface ScrollStoryStepProps {
    step: {
        image: string;
        alt: string;
        text: string;
    };
    index: number;
    scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}

function ScrollStoryStep({ step, index, scrollYProgress }: ScrollStoryStepProps) {
    const start = index / 3;
    const end = (index + 1) / 3;

    const opacity = useTransform(
        scrollYProgress,
        [start, start + 0.1, end - 0.1, end],
        [0, 1, 1, 0]
    );

    const y = useTransform(
        scrollYProgress,
        [start, start + 0.1, end - 0.1, end],
        [50, 0, 0, -50]
    );

    const scale = useTransform(
        scrollYProgress,
        [start, start + 0.1, end - 0.1, end],
        [0.9, 1, 1, 0.9]
    );

    return (
        <motion.div
            style={{ opacity, y, scale }}
            className="absolute inset-0 flex items-center justify-center"
        >
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-5xl mx-auto px-4">
                {/* Image */}
                <div className="relative w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src={step.image}
                        alt={step.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

                {/* Text */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
                        {step.text}
                    </h2>
                </div>
            </div>
        </motion.div>
    );
}
