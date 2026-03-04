import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Force dark mode globally by adding 'dark' class to <html>
function ForceDarkMode() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return null;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ForceDarkMode />
    <App />
  </StrictMode>,
);
