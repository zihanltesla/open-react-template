"use client";

import Link from "next/link";
import Logo from "./logo";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "@/app/theme/ThemeProvider";

export default function Header() {
  const { theme } = useTheme();

  return (
    <header className="z-30 mt-2 w-full md:mt-5">
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
            <Logo />
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <ThemeToggle />
            </li>
            <li>
              <Link
                href="/explore"
                className="btn-sm bg-gray-800/80 hover:bg-gray-700/80 text-gray-300 px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Explore
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="btn-sm bg-indigo-600/90 hover:bg-indigo-500/90 text-white px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Email Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
