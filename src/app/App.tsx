import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import cn from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { Navbar } from "widgets/Navbar";
import Logo from "shared/assets/icons/theme-icon.svg";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cn("app", {}, [theme])}>
      <Navbar />
      <ThemeSwitcher />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/"} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
