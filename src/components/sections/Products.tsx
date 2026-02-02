"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const productCategories = [
    {
        id: "rice",
        name: "Rice",
        icon: "🌾",
        count: 12,
        image: "/images/products/rice.svg",
        description: "Traditional varieties grown organically",
    },
    {
        id: "millets",
        name: "Millets",
        icon: "🌿",
        count: 8,
        image: "/images/products/millets.svg",
        description: "Ancient grains for modern health",
    },
    {
        id: "ghee-oils",
        name: "Ghee & Oils",
        icon: "🧈",
        count: 6,
        image: "/images/products/ghee.svg",
        description: "Pure, cold-pressed, traditional",
    },
    {
        id: "sweeteners",
        name: "Sweeteners",
        icon: "🍯",
        count: 5,
        image: "/images/products/jaggery.svg",
        description: "Natural sweetness from palm & cane",
    },
    {
        id: "palm",
        name: "Palm Products",
        icon: "🌴",
        count: 7,
        image: "/images/products/palm.svg",
        description: "Traditional palm-based delicacies",
    },
    {
        id: "malts",
        name: "Malts",
        icon: "🧪",
        count: 4,
        image: "/images/products/malts.svg",
        description: "Nutritious sprouted grain malts",
    },
    {
        id: "flour",
        name: "Flour",
        icon: "🥣",
        count: 9,
        image: "/images/products/flour.svg",
        description: "Stone-ground, preservative-free",
    },
    {
        id: "health-mix",
        name: "Health Mix",
        icon: "💪",
        count: 3,
        image: "/images/products/health-mix.svg",
        description: "Traditional sathu maavu blends",
    },
    {
        id: "cosmetics",
        name: "Cosmetics",
        icon: "🧴",
        count: 6,
        image: "/images/products/cosmetics.svg",
        description: "Herbal beauty from nature",
    },
];

const filterOptions = ["All", "Rice", "Millets", "Ghee & Oils", "Sweeteners", "Health"];

export default function Products() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [activeFilter, setActiveFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredCategories = productCategories.filter((cat) => {
        if (activeFilter !== "All" && !cat.name.includes(activeFilter)) {
            return false;
        }
        if (searchQuery && !cat.name.toLowerCase().includes(searchQuery.toLowerCase())) {
            return false;
        }
        return true;
    });

    return (
        <section id="products" className="section-padding bg-background">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-sm font-medium text-primary uppercase tracking-widest">
                        Our Products
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-4">
                        From Nature to <span className="text-gradient">Your Table</span>
                    </h2>
                    <p className="text-foreground/60 mt-4 max-w-2xl mx-auto">
                        Explore our range of certified organic products, each crafted with care and tradition.
                    </p>
                </motion.div>

                {/* Search & Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    {/* Search Bar */}
                    <div className="relative max-w-md mx-auto mb-6">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-5 py-3 pl-12 rounded-full bg-surface border border-primary/20 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30"
                        />
                        <svg
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>

                    {/* Filter Pills */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {filterOptions.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === filter
                                    ? "bg-primary text-white"
                                    : "bg-surface text-foreground/60 hover:bg-grass-light hover:text-primary"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Product Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredCategories.map((category, index) => (
                            <motion.div
                                key={category.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                onClick={() => setSelectedCategory(category.id)}
                                className="product-card glass-card overflow-hidden cursor-pointer group"
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-white text-3xl">{category.icon}</span>
                                            <span className="text-white/80 text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                                                {category.count} items
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="font-heading text-xl text-foreground mb-2">
                                        {category.name}
                                    </h3>
                                    <p className="text-sm text-foreground/60 mb-4">
                                        {category.description}
                                    </p>
                                    <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                                        <span>Explore</span>
                                        <svg
                                            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* View All CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <button className="btn-secondary inline-flex items-center gap-2">
                        <span>View All Products</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </motion.div>
            </div>

            {/* Category Modal - Placeholder for expansion */}
            <AnimatePresence>
                {selectedCategory && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCategory(null)}
                        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="glass-card max-w-2xl w-full max-h-[80vh] overflow-auto p-8"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-heading text-2xl text-foreground">
                                    {productCategories.find((c) => c.id === selectedCategory)?.name}
                                </h3>
                                <button
                                    onClick={() => setSelectedCategory(null)}
                                    className="p-2 hover:bg-grass-light rounded-full transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <p className="text-foreground/60 mb-6">
                                Product details coming soon! Contact us on WhatsApp for the full catalog and pricing.
                            </p>
                            <a
                                href="https://wa.me/919876543210"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary inline-flex items-center gap-2"
                            >
                                <span>Get Catalog on WhatsApp</span>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                </svg>
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
