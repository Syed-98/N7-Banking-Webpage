import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RootLayout from "@/app/layout";
import Home from "@/app/page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RootLayout>
      <Home />
    </RootLayout>
  </StrictMode>,
);
