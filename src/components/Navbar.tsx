"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-zinc-950/85 backdrop-blur-xl border-b border-white/[0.06] py-3" : "bg-transparent py-5 md:py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2.5 group cursor-pointer">
          <div className="w-9 h-9 rounded-md bg-white flex items-center justify-center ring-1 ring-white/10 transition-transform group-hover:scale-[1.02]">
            <span className="text-zinc-950 font-semibold text-xl leading-none">δ</span>
          </div>
          <span className="text-[17px] md:text-lg font-semibold tracking-[-0.02em] text-zinc-100">
            Deslop
          </span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          <a
            href="#features"
            className="text-base text-zinc-400 hover:text-zinc-100 transition-colors px-3 py-2 rounded-md hover:bg-white/[0.04]"
          >
            Features
          </a>
          <a
            href="#integrations"
            className="text-base text-zinc-400 hover:text-zinc-100 transition-colors px-3 py-2 rounded-md hover:bg-white/[0.04]"
          >
            Integrations
          </a>
          <a
            href="#pricing"
            className="text-base text-zinc-400 hover:text-zinc-100 transition-colors px-3 py-2 rounded-md hover:bg-white/[0.04]"
          >
            Pricing
          </a>
          <button className="ml-3 bg-white text-zinc-950 px-5 py-2.5 rounded-full text-base font-medium hover:bg-zinc-100 transition-colors ring-1 ring-white/10">
            Get Personal License
          </button>
        </div>

        <button
          className="md:hidden text-white p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-zinc-950 border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            <a
              href="#features"
              className="text-xl text-zinc-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#rules"
              className="text-xl text-zinc-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Rulebook
            </a>
            <a
              href="#docs"
              className="text-xl text-zinc-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Docs
            </a>
            <button className="bg-white text-black px-8 py-4 rounded-full text-xl font-medium">
              Add Deslop to my CI
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
