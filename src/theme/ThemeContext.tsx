import { createContext,useState } from "react";

type Theme = "Light"|"Dark"

interface ThemeInput {
    theme:Theme,
    changeTheme: ()=>void
}

export const ThemeContext = createContext<ThemeInput>({
    theme:"Light",
    changeTheme: ()=>{}
})
const ThemeProvider = ({children}:{children:React.ReactNode}) =>{
    const [theme,setTheme] = useState<Theme>("Light")

    const changeTheme = () =>{
        setTheme((prev)=>prev==="Light"?"Dark":"Light")
    }
    return(
        <ThemeContext.Provider value = {{theme,changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider