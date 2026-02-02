import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale } from "next-intl/server";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rangaa Naturals | 100% Pure Natural Products Store",
  description: "Tradition you can taste, Purity you can trust. Discover authentic organic products from Tamil Nadu's fertile lands - Rice, Millets, Ghee, Oils & more.",
  keywords: ["organic", "natural", "Tamil Nadu", "rice", "millets", "ghee", "pure", "traditional", "farmers", "Rangaa Naturals"],
  icons: {
    icon: "/App_Logo/app_icon.png",
    apple: "/App_Logo/app_icon.png",
  },
  openGraph: {
    title: "Rangaa Naturals | 100% Pure Natural Products Store",
    description: "Tradition you can taste, Purity you can trust.",
    type: "website",
    images: ["/App_Logo/app_icon.png"],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <LanguageProvider>
            <ThemeProvider>
              <Header />
              <main style={{ isolation: 'isolate', margin: 0, padding: 0 }}>{children}</main>
              <Footer />
              <WhatsAppButton />
            </ThemeProvider>
          </LanguageProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
