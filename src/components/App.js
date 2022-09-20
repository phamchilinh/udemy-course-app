import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./ui/theme";
import Header from "./ui/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        Hello!
      </div>
    </ThemeProvider>
  );
}

export default App;
