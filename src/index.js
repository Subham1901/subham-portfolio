import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./utils/helper";
import { BrowserRouter } from "react-router-dom";
import "aos/dist/aos.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
);
