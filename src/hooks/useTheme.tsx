import {createContext, useContext, useEffect} from "react";
import {useLocalStorage, useMediaQuery} from "@uidotdev/usehooks";

export function useTheme() {
    return useContext(ThemeContext)
}

type Theme = "dark" | "light";
export type ThemeSetting = "system" | "dark" | "light";

export const ThemeContext = createContext<{
    theme: Theme,
    themeSetting: ThemeSetting,
    setTheme: (newTheme: ThemeSetting) => void,
}>({
    theme: "dark",
    themeSetting: "system",
    setTheme: () => {
    },
})
export function useThemeProvider() {
    const [themeStore, setThemeStore] = useLocalStorage<0 | 1 | 2>("theme", 0)
    const prefersDark = useMediaQuery("(prefers-color-scheme: dark)")
    const themeFull: ThemeSetting = themeStore === 2 ? "dark" : themeStore === 1 ? "light" : "system";
    const theme: Theme = themeFull === "dark" || (themeFull === "system" && prefersDark) ? "dark" : "light";
    useEffect(() => {
        const html = document.documentElement;
        html.classList.remove("light", "dark");
        html.classList.add(theme);
    }, [theme]);

    function ThemeProvider({children}: {children: React.ReactNode}) {
        return <ThemeContext.Provider value={{
            setTheme: (t) => {
                const num = t === "system" ? 0 : t === "light" ? 1 : 2;
                setThemeStore(num);
            }, theme, themeSetting: themeFull
        }}>{children}</ThemeContext.Provider>
    }
    return ThemeProvider
}