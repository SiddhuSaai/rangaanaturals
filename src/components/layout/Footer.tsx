import Link from "next/link";
import Image from "next/image";

const footerLinks = {
    products: [
        { label: "Rice", href: "#products" },
        { label: "Millets", href: "#products" },
        { label: "Ghee & Oils", href: "#products" },
        { label: "Health Mix", href: "#products" },
    ],
    company: [
        { label: "Our Story", href: "#story" },
        { label: "Quality Policy", href: "#quality" },
        { label: "Certifications", href: "#story" },
    ],
    contact: [
        { label: "WhatsApp", href: "https://wa.me/919876543210" },
        { label: "Email", href: "mailto:contact@rishiorganic.com" },
        { label: "Phone", href: "tel:+919876543210" },
    ],
};

const socialLinks = [
    {
        label: "Facebook",
        href: "#",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5L14.17.5C10.24.5 9.25 3.11 9.25 5.11v2.35H6.5V12h2.75v12h5.25V12h3.54l.72-4.54z" />
            </svg>
        )
    },
    {
        label: "Instagram",
        href: "#",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
        )
    },
    {
        label: "YouTube",
        href: "#",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        )
    },
];

export default function Footer() {
    return (
        <footer id="contact" className="bg-primary-dark text-white">
            {/* Main Footer */}
            <div className="container-custom section-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <Image
                                src="/App_Logo/app_icon.png"
                                alt="Rangaa Naturals Logo"
                                width={50}
                                height={50}
                                className="rounded-full"
                            />
                            <span className="font-heading text-2xl font-bold">
                                Rangaa Naturals
                            </span>
                        </Link>
                        <p className="text-white/70 text-sm leading-relaxed mb-6">
                            Tradition you can taste, Purity you can trust. Bringing authentic organic
                            products from Tamil Nadu&apos;s fertile lands to your home.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="font-heading text-lg font-semibold mb-4">Products</h4>
                        <ul className="space-y-3">
                            {footerLinks.products.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-heading text-lg font-semibold mb-4">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-heading text-lg font-semibold mb-4">Get in Touch</h4>
                        <ul className="space-y-3 text-sm text-white/70">
                            <li className="flex items-start gap-2">
                                <span className="mt-0.5">📍</span>
                                <span>Trichy, Tamil Nadu, India - 620001</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span>📞</span>
                                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                                    +91 98765 43210
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span>✉️</span>
                                <a href="mailto:contact@rishiorganic.com" className="hover:text-white transition-colors">
                                    contact@rishiorganic.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-white/50 text-sm text-center md:text-left">
                            &quot;Rooted in tradition. Growing with trust.&quot;
                        </p>
                        <p className="text-white/50 text-sm">
                            © {new Date().getFullYear()} Rangaa Naturals. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
