import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingButtons = () => {
  const [showTop, setShowTop] = useState(false);
  const [showWa, setShowWa] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowWa(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-foreground hover:text-accent transition-colors shadow-sm"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showWa && (
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            href="https://wa.me/233208150124"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[12px] text-foreground bg-background border border-border rounded-full px-4 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:text-accent transition-colors"
          >
            WhatsApp ↗
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingButtons;
