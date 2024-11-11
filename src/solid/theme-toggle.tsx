import { createEffect, createSignal } from "solid-js";

const ThemeToggle = () => {
  const [theme, setTheme] = createSignal<"light" | "dark">("dark");

  createEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      return setTheme(stored as "light" | "dark");
    }

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return setTheme("dark");
    }

    setTheme("light");
  });

  createEffect(() => {
    const root = document.documentElement;
    const currentTheme = theme();

    root.classList.remove("dark");
    if (currentTheme === "dark") {
      root.classList.add("dark");
    }

    localStorage.setItem("theme", currentTheme);
  });

  return (
    <button
      title={
        theme() === "dark" ? "Switch to light theme" : "Switch to dark theme"
      }
      onClick={() => setTheme(theme() === "dark" ? "light" : "dark")}
      class="w-fit"
    >
      {theme() === "dark" ? "🌙" : "🌞"}
    </button>
  );
};

export { ThemeToggle };
