import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyled } from "./styles/global";
import { Trasactions } from "./pages/Trasactions";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyled />
      
      <Trasactions />
    </ThemeProvider>
  )
}

