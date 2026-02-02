"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";

type Locale = "en" | "ta";

interface LanguageContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>("en");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Read locale from cookie on mount
        const cookieLocale = document.cookie
            .split("; ")
            .find((row) => row.startsWith("locale="))
            ?.split("=")[1] as Locale | undefined;

        if (cookieLocale && (cookieLocale === "en" || cookieLocale === "ta")) {
            setLocaleState(cookieLocale);
        }
        setIsLoading(false);
    }, []);

    const setLocale = useCallback((newLocale: Locale) => {
        setLocaleState(newLocale);
        // Set cookie with 1-year expiry
        document.cookie = `locale=${newLocale};path=/;max-age=31536000`;
        // Reload page to apply translations
        window.location.reload();
    }, []);

    return (
        <LanguageContext.Provider value={{ locale, setLocale, isLoading }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
