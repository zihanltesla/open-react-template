"use client";

import Link from "next/link";
import Logo from "./logo";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "@/app/theme/ThemeProvider";
import { useState } from "react";
import ModalContact from "../modal-contact";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const { theme } = useTheme();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  return (
    <>
      <ModalContact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <header className="z-50 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div 
          className="relative flex h-14 items-center justify-between gap-3 rounded-2xl px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs"
          style={{ 
            backgroundColor: theme.muted,
            ['--border-gradient' as any]: `linear-gradient(to right, ${theme.border}, ${theme.accent}, ${theme.border})`
          }}
        >
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo className="h-10 sm:h-14 w-auto" />
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 flex-shrink flex-wrap items-center justify-end gap-1 sm:gap-3 sm:flex-nowrap">
            {/* Mobile menu button */}
            <li className="sm:hidden">
              <button className="p-2 text-gray-400 hover:text-white" style={{ position: 'relative' }}>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </li>
            <li>
              <div className="relative min-w-[80px] sm:min-w-[100px] language-selector">
                <select 
                  className="bg-transparent text-gray-300 text-xs sm:text-sm px-1 sm:px-2 py-1 rounded border border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-500 w-full"
                  defaultValue="en"
                  onChange={(e) => {
                    const lang = e.target.value as 'en' | 'sv';
                    setLanguage(lang);
                  }}
                >
                  <option value="en">English</option>
                  <option value="sv">Svenska</option>
                </select>
              </div>
            </li>
            <li>
              <ThemeToggle />
            </li>
            <li className="hidden sm:block">
              <Link
                href="/solutions"
                className="btn-sm bg-gray-800/80 hover:bg-gray-700/80 text-gray-300 px-4 py-2 rounded-lg transition-colors duration-200"
              >
                {language === 'en' ? 'Solutions' : 'Lösningar'}
              </Link>
            </li>
            <li className="hidden sm:block">
            <div data-aos="fade-up" data-aos-delay={800}>
                  <a
                    className="btn group w-full bg-[length:100%_100%] bg-[bottom] hover:bg-[length:100%_150%] sm:w-auto transition-all duration-200 z-50"
                    style={{
                      backgroundImage: `linear-gradient(to top, ${useTheme().theme.accent}, ${useTheme().theme.primary})`,
                      color: useTheme().theme.text
                    }}
                    onClick={() => setIsContactOpen(true)}
                    href="#"
                  >
                    <span className="relative inline-flex items-center">
                      {language === 'en' ? 'Email Us' : 'E-posta oss'}
                      <span 
                        className="ml-1 tracking-normal transition-transform group-hover:translate-x-0.5"
                        style={{ color: useTheme().theme.text }}
                      >
                        {'>'}
                      </span>
                    </span>
                  </a>
                </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
    </>
  );
}
