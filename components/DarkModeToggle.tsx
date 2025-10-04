"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface DarkModeToggleProps {
  className?: string;
}

export default function DarkModeToggle({ className }: DarkModeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // قبل الـ mount ما يحصل → نعرض placeholder صغير عشان نتجنب mismatch
  if (!mounted) {
    return (
      <button
        type="button"
        disabled
        className="flex items-center justify-center w-15 h-10  
         "
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      title="Toggle theme"
      aria-label="Toggle theme"
      className={`flex items-center justify-center w-15 h-10 
        text-gray-800 dark:text-gray-200
        hover:scale-110 active:scale-95
        transition-all duration-300 ease-in-out cursor-pointer ${
          className || ""
        }`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="w-5 h-5" strokeWidth={2} />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="w-5 h-5" strokeWidth={2} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
