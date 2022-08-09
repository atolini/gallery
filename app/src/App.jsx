import React from "react";
import GlobalStyle from "./design-system/GlobalStyle.js";
import Slide from "./slide/Slide.jsx";
import Home from "./home/Home.jsx";
import Theme from "./design-system/ThemeStyle.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "./header/Header.jsx";
import { useSelector } from "react-redux";

const queryClient = new QueryClient();

function App() {
  const mode = useSelector((state) => state.slide.view);

  return (
    <QueryClientProvider client={queryClient}>
      <Theme>
        <GlobalStyle />
        <Header />
        <hr />
        {mode === "home" ? <Home /> : <Slide />}
      </Theme>
    </QueryClientProvider>
  );
}

export { App };
