import { useDarkMode } from "../hooks/useDarkMode";
import { Sun, Moon, Monitor } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useDarkMode();

  const themeConfig = {
    light: {
      icon: <Sun className="w-5 h-5 text-yellow-500" />,
      label: "Light",
      bg: "bg-yellow-100 hover:bg-yellow-200",
    },
    dark: {
      icon: <Moon className="w-5 h-5 text-indigo-400" />,
      label: "Dark",
      bg: "bg-gray-800 hover:bg-gray-700",
    },
    system: {
      icon: <Monitor className="w-5 h-5 text-blue-500" />,
      label: "Auto",
      bg: "bg-blue-100 hover:bg-blue-200",
    },
  };

  const current = themeConfig[theme];

  return (
    <button
      onClick={toggleTheme}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-full
        font-medium shadow-md
        transition-all duration-300 ease-out
        scale-100 hover:scale-105 active:scale-95
        text-gray-900 dark:text-white
        ${current.bg}
      `}
    >
      <span className="transition-transform duration-300">
        {current.icon}
      </span>
      <span className="text-sm">{current.label} Mode</span>
    </button>
  );
}
