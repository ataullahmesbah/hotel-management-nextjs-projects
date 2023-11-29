import { type } from "os";
import { Dispatch, SetStateAction, createContext } from "react";

type ThemeContextTYPE = {
    darkTheme: boolean;
    setDarkTheme: Dispatch<SetStateAction<boolean>>;

};

const ThemeContext = createContext<ThemeContextTYPE>({
    darkTheme: false,
    setDarkTheme: () => null,
});

export default ThemeContext;