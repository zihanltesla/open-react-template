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
      <header className="z-50 w-full">
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
  {/* 美化后的自定义语言切换下拉菜单 */}
  <div className="relative min-w-[80px] sm:min-w-[100px] language-selector">
    {(() => {
      const [open, setOpen] = useState(false);
      const options = [
        { value: "en", label: "English" },
        { value: "sv", label: "Svenska" },
      ];
      const selected = options.find((o) => o.value === language);
      return (
        <div className="relative">
          <button
            type="button"
            className="flex items-center justify-between w-full px-3 py-1.5 rounded-xl bg-[rgba(30,41,59,0.92)] text-sm font-semibold shadow-md transition-all duration-150 focus:outline-none"
            style={{
              background: theme.muted,
              fontFamily: "inherit",
              color: theme.text,
            }}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex items-center gap-2">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="inline-block mr-1">
                <circle cx="12" cy="12" r="10" stroke={theme.accent} strokeWidth="2" fill="none"/>
                <text x="12" y="16" textAnchor="middle" fontSize="12" fill={theme.accent} fontWeight="bold">
                  {selected?.label[0]}
                </text>
              </svg>
              {selected?.label}
            </span>
            <svg className={`ml-2 h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke={theme.accent} strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {open && (
            <ul
              className="absolute left-0 z-20 mt-2 w-full rounded-xl bg-[rgba(30,41,59,0.96)] shadow-2xl py-1 animate-fade-in"
              style={{
                background: theme.muted,
              }}
            >
              {options.map((opt) => (
                <li key={opt.value}>
                  <button
                    className={`w-full text-left px-4 py-2 rounded-lg text-base font-medium transition-all duration-100 border-0 ${
                      language === opt.value
                        ? "bg-[rgba(255,255,255,0.08)]"
                        : "hover:bg-[rgba(255,255,255,0.04)]"
                    }`}
                    style={{
                      fontFamily: "inherit",
                      color: language === opt.value ? theme.accent : theme.text,
                      border: "none",
                    }}
                    onClick={() => {
                      setLanguage(opt.value as "en" | "sv");
                      setOpen(false);
                    }}
                  >
                    {opt.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    })()}
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
            <div>
                <a
                  className="btn-sm bg-gray-800/80 hover:bg-gray-700/80 text-white px-4 py-2 rounded-lg"
                  style={{
                    backgroundImage: `linear-gradient(to top, ${useTheme().theme.accent}, ${useTheme().theme.primary})`,
                    color: 'white'
                  }}
                  onClick={() => setIsContactOpen(true)}
                  href="#"
                >
                  <span className="relative inline-flex items-center">
                    {language === 'en' ? 'Email Us' : 'E-posta oss'}
                    <span 
                      className="ml-1 tracking-normal"
                      style={{ color: 'white' }}
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
