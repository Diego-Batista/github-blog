import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/theme/defaultTheme";
import moment from "moment"
import "moment/dist/locale/pt-br"

moment.locale("pt-br")

export function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles/>
        <Router/>
      </ThemeProvider>
    </BrowserRouter>
  )
}
