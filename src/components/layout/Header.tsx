"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/components/providers/ThemeProvider";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { useTranslations } from "next-intl";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, toggleTheme, mounted } = useTheme();
    const { locale, setLocale, isLoading } = useLanguage();
    const t = useTranslations("nav");

    const navLinks = [
        { href: "#products", label: t("products") },
        { href: "#story", label: t("ourStory") },
        { href: "#quality", label: t("quality") },
        { href: "#contact", label: t("contact") },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Detect safe area inset for notched devices
    const [safeAreaTop, setSafeAreaTop] = useState(0);
    useEffect(() => {
        // Try to get safe area from CSS env()
        const testEl = document.createElement('div');
        testEl.style.paddingTop = 'env(safe-area-inset-top, 0px)';
        document.body.appendChild(testEl);
        const computed = parseInt(getComputedStyle(testEl).paddingTop) || 0;
        document.body.removeChild(testEl);

        // If env() returns 0 but we're on a notched device, use fallback
        // Check if viewport-fit is cover and screen dimensions suggest a notched phone
        const isNotchedDevice = window.innerWidth < 500 && window.innerHeight > 700 &&
            (window.screen.height >= 812 || window.devicePixelRatio >= 3);

        setSafeAreaTop(computed > 0 ? computed : (isNotchedDevice ? 47 : 0));
    }, []);

    // Conditional rendering - don't render header at all when not needed
    if (!isScrolled && !isMobileMenuOpen) {
        return null;
    }

    return (
        <>
            <header
                style={{
                    transform: 'translate3d(0, 0, 0)',
                    WebkitTransform: 'translate3d(0, 0, 0)',
                    willChange: 'transform',
                    paddingTop: safeAreaTop,
                }}
                className="fixed top-0 left-0 right-0 z-[9999] bg-background border-b border-primary/10 shadow-sm"
            >
                <div className="container-custom">
                    <nav className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/App_Logo/app_icon.png"
                                alt="Rangaa Naturals Logo"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                            <span className="font-heading text-xl font-bold text-primary">
                                Rangaa Naturals
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Right Actions */}
                        <div className="flex items-center gap-3">
                            {/* Language Switcher */}
                            {!isLoading && (
                                <div className="flex items-center gap-1 bg-grass-light dark:bg-surface rounded-full p-1">
                                    <button
                                        onClick={() => locale !== "en" && setLocale("en")}
                                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${locale === "en"
                                            ? "bg-primary text-white"
                                            : "text-foreground/60 hover:text-primary"
                                            }`}
                                    >
                                        EN
                                    </button>
                                    <button
                                        onClick={() => locale !== "ta" && setLocale("ta")}
                                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${locale === "ta"
                                            ? "bg-primary text-white"
                                            : "text-foreground/60 hover:text-primary"
                                            }`}
                                    >
                                        தமிழ்
                                    </button>
                                </div>
                            )}

                            {/* Theme Toggle */}
                            {mounted && (
                                <button
                                    onClick={toggleTheme}
                                    className="p-2 rounded-full hover:bg-grass-light transition-colors"
                                    aria-label="Toggle theme"
                                >
                                    {theme === "light" ? (
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    )}
                                </button>
                            )}

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden p-2 rounded-lg hover:bg-grass-light transition-colors"
                                aria-label="Toggle menu"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isMobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-background pt-20 md:hidden"
                    >
                        <nav className="container-custom py-8">
                            <div className="flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-2xl font-heading text-foreground hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

