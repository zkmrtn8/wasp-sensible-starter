import {Outlet} from "react-router-dom";
import {TooltipProvider} from "../components/ui";
import {useTheme, useThemeProvider} from "../hooks/useTheme";
import {Toaster} from 'react-hot-toast'
import '../Main.css'

// TODO: Add things like a header and footer
// TooltipProvider and ThemeContext are already included.

export default function Layout() {
    const ThemeProvider = useThemeProvider()
    const t = useTheme()

    return <ThemeProvider>
        <TooltipProvider>
            <Toaster toastOptions={{
                className: 'bg-surface-800 text-surface-100 border',
            }}/>
            <Outlet/>
        </TooltipProvider>
    </ThemeProvider>
}