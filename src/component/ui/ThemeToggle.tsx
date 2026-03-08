import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-[var(--surface-main)] border border-[var(--border-main)] hover:border-brand-primary/50 transition-all duration-300 group"
            aria-label="Toggle Theme"
        >
            {theme === 'light' ? (
                <Moon className="w-5 h-5 text-[var(--text-muted)] group-hover:text-brand-primary transition-colors" />
            ) : (
                <Sun className="w-5 h-5 text-[var(--text-muted)] group-hover:text-amber-400 transition-colors" />
            )}
        </button>
    );
};
