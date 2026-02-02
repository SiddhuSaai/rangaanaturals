"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ScrollStory() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Track when scroll story section is in view
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setIsInView(latest > 0 && latest < 1);
    });

    const t = useTranslations("scrollStory");

    const storySteps = [
        {
            image: "/images/farmaer+ox-ploughing.png",
            alt: "Farmer ploughing land with oxen in Tamil Nadu",
            title: t("step1.title"),
            text: t("step1.text"),
        },
        {
            image: "/images/clam-cow.png",
            alt: "Native Indian cow in green farmland",
            title: t("step2.title"),
            text: t("step2.text"),
        },
        {
            image: "/images/close-up-crops.png",
            alt: "Close-up of healthy paddy crops with morning dew",
            title: t("step3.title"),
            text: t("step3.text"),
        },
        {
            image: "/images/jallikattu-bull-cow.png",
            alt: "Powerful Jallikattu bull representing Tamil heritage",
            title: t("step4.title"),
            text: t("step4.text"),
        },
    ];

    return (
        <section ref={containerRef} className="relative min-h-[400vh] bg-black z-10">
            {/* Fixed Container - uses fixed positioning when in view */}
            <div
                className={`${isInView ? 'fixed' : 'absolute'} top-0 left-0 right-0 h-screen flex items-center justify-center overflow-hidden bg-black z-10`}
                style={{
                    transform: 'translate3d(0, 0, 0)',
                }}
            >
                {/* Blurred background images - always visible */}
                {storySteps.map((step, index) => (
                    <BlurredBackground
                        key={`blur-${index}`}
                        image={step.image}
                        index={index}
                        total={storySteps.length}
                        scrollYProgress={scrollYProgress}
                    />
                ))}

                {/* Story Steps */}
                {storySteps.map((step, index) => (
                    <ScrollStoryStep
                        key={index}
                        step={step}
                        index={index}
                        total={storySteps.length}
                        scrollYProgress={scrollYProgress}
                    />
                ))}
            </div>
        </section>
    );
}

// Blurred background component
interface BlurredBackgroundProps {
    image: string;
    index: number;
    total: number;
    scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}

function BlurredBackground({ image, index, total, scrollYProgress }: BlurredBackgroundProps) {
    const start = index / total;
    const end = (index + 1) / total;

    // First slide appears immediately, others appear slightly before
    const opacity = useTransform(
        scrollYProgress,
        index === 0
            ? [0, 0.01, end - 0.02, end + 0.05]
            : [start - 0.05, start, end - 0.02, end + 0.02],
        [0.7, 0.7, 0.7, 0]
    );

    return (
        <motion.div
            style={{ opacity }}
            className="absolute inset-0 -z-10"
        >
            <Image
                src={image}
                alt=""
                fill
                className="object-cover object-center blur-xl scale-110"
                sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/40" />
        </motion.div>
    );
}

interface ScrollStoryStepProps {
    step: {
        image: string;
        alt: string;
        title: string;
        text: string;
    };
    index: number;
    total: number;
    scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}

function ScrollStoryStep({ step, index, total, scrollYProgress }: ScrollStoryStepProps) {
    const start = index / total;
    const end = (index + 1) / total;

    const opacity = useTransform(
        scrollYProgress,
        [start, start + 0.08, end - 0.08, end],
        [0, 1, 1, 0]
    );

    const scale = useTransform(
        scrollYProgress,
        [start, start + 0.08, end - 0.08, end],
        [1, 1, 1, 1]
    );

    const textY = useTransform(
        scrollYProgress,
        [start, start + 0.08, end - 0.08, end],
        [60, 0, 0, -40]
    );

    const textOpacity = useTransform(
        scrollYProgress,
        [start + 0.05, start + 0.12, end - 0.12, end - 0.05],
        [0, 1, 1, 0]
    );

    return (
        <motion.div
            style={{ opacity }}
            className="absolute inset-0"
        >
            {/* Fullscreen Image */}
            <motion.div style={{ scale }} className="absolute inset-0">
                <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                    priority={index === 0}
                />
                {/* Subtle bottom gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
            </motion.div>

            {/* Text Content */}
            <motion.div
                style={{ y: textY, opacity: textOpacity }}
                className="absolute inset-0 flex items-end justify-center pb-24 md:pb-32"
            >
                <div className="text-center px-6 max-w-4xl">
                    <span className="text-sm md:text-base font-medium text-primary uppercase tracking-[0.3em] mb-4 block">
                        {step.title}
                    </span>
                    <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-white leading-tight">
                        {step.text}
                    </h2>
                </div>
            </motion.div>

            {/* Scroll Indicator (only on first slide) */}
            {index === 0 && (
                <motion.div
                    style={{ opacity: textOpacity }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="flex flex-col items-center gap-2"
                    >
                        <span className="text-white/60 text-xs uppercase tracking-widest">Scroll</span>
                        <svg className="w-5 h-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.div>
                </motion.div>
            )}
        </motion.div>
    );
}
