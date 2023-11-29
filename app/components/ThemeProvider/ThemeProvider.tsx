'use client';

import { useEffect, useState } from "react";

import ThemeContext from "@/app/context/themeContext";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const themeFromStorage: boolean =
        typeof localStorage !== 'undefined' && localStorage.getItem('hotel-theme')
            ? JSON.parse(localStorage.getItem('hotel-theme')!)
            : false;


    const [darkTheme, setDarkTheme] = useState<boolean>(themeFromStorage);

    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
        <div className={`${darkTheme ? "dark" : ""} min-h-screen`}>
            <div className="dark:text-white dark:bg-black text-[#1E1E1E]">
                {children}
            </div>
        </div>
    </ThemeContext.Provider>

};

export default ThemeProvider;