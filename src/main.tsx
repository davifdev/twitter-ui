import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./global.css";

import Tweet from "./components/Tweet";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div>
      <Tweet user="Davi" likes={15}>
        Meu primeiro tweet
      </Tweet>
      <Tweet user="Laura" likes={20}>
        Hello World!
      </Tweet>
      <Tweet user="Roberval">Olá, Mundo!</Tweet>
    </div>
  </StrictMode>
);
