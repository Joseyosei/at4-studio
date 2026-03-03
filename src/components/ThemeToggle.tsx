import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-sm border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun size={16} className="text-primary" />
      ) : (
        <Moon size={16} className="text-primary" />
      )}
    </button>
  );
};

export default ThemeToggle;
