import "./App.css";
import { BrowserRouter } from "react-router";
import useLocalizer from "./hooks/useLocalizer";
import Header from "./components/common/Header";
import { useEffect, useState } from "react";
import Loader from "./components/common/Loader";
import { ThemeProvider } from "./contexts/ThemeContext";
import FixedSettingsBox from "./components/FixedSettingsBox";
import { cn } from "./lib/utils";
import MainSection from "./components/sections/main/MainSection";
import Line from "./components/common/Line";
import OurServicesSection from "./components/sections/ourServices/OurServicesSection";
import AboutUsSection from "./components/sections/about/AboutUsSection";
import ContactSection from "./components/sections/contact/ContactSection";
import Footer from "./components/Footer";
import SplashCursor from "./components/animations/SplashCursor";

function App() {
  const { dir, isRTL } = useLocalizer();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <ThemeProvider defaultTheme="light">
      <BrowserRouter>
        <div
          dir={dir}
          className={cn(
            "min-h-screen w-full overflow-x-hidden relative",
            isRTL ? "text-right" : "text-left"
          )}
        >
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <SplashCursor/>
              <Header />
              <FixedSettingsBox className="mt-[10rem]" />
              <main className="flex flex-col mt-20 px-2  md:px-[4rem]">
                <MainSection />
                <Line />
                <OurServicesSection />
                <Line />
                <AboutUsSection />
                <Line />
                <ContactSection/>
              </main>
              <Footer/>
            </>
          )}
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
