import React, { useState } from "react";
import useLocalizer from "@/hooks/useLocalizer";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { MenuIcon, X } from "lucide-react";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Link } from "react-router";
import AnimatedButton from "./AnimatedButton";
import useScrollSmooth from "@/hooks/useScrollSmooth";

const Header: React.FC = () => {
  const { t } = useLocalizer();
  const { theme } = useTheme();
  const [toggle, setToggle] = useState(false);
  const isMobile = useMediaQuery("(max-width:767px)");
  React.useEffect(() => {
    if (isMobile) {
      setToggle(false);
    }
  }, [isMobile]);

  const goTo = useScrollSmooth();
  return (
    <nav
      className={cn(
        "w-[80%]  md:w-[70%] rounded-md shadow-xs left-[50%]  -translate-x-[50%]  fixed z-50 bg-nav"
      )}
    >
      <div className="flex flex-row min-h-[75px] justify-between items-center py-2 px-4 w-full">
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center gap-2 relative">
            <div className=" relative flex justify-center items-center mx-5">
              <div className=" absolute bg-primary h-6 w-6 rounded-sm rotate-[45deg] shadow z-10" />
              <div
                className={cn(
                  " absolute h-5 w-5 rounded-sm right-0 rotate-[45deg] shadow z-20",
                  theme == "light" ? "bg-black" : "bg-white"
                )}
              />
            </div>
            <h3 className="font-semibold">{t("app.name")}</h3>
          </div>
        </div>
        <div className="flex-1 justify-items-end">
          {isMobile && (
            <Button
              className="flex self-start bg-primary text-black"
              onClick={() => setToggle(!toggle)}
            >
              {!toggle ? <MenuIcon size={24} /> : <X size={24} />}
            </Button>
          )}

          {!isMobile && (
            <div className="flex flex-row gap-4 items-center">
              <ul
                className={cn(
                  "flex flex-row gap-2 items-center  lg:[&>li]:text-2xl [&>li:not(:last-child)]:px-2 [&>li:not(:last-child)]:py-2  [&>li:not(:last-child)]:rounded-sm  [&>li]:font-bold [&>li:not(:last-child)]:hover:bg-gray-100",
                  theme == "dark"
                    ? "[&>li:not(:last-child)]:hover:bg-[#191919]"
                    : "[&>li:not(:last-child)]:hover:bg-[#f1f1f1]"
                )}
              >
                <li>
                  <Link to={"#"}>{t("menus.home")}</Link>
                </li>
                <li>
                  <Link to={"#"}>{t("menus.services")}</Link>
                </li>
                <li>
                  <Link to={"#"}>{t("menus.about")}</Link>
                </li>
                <li>
                  <AnimatedButton
                  directArrowColor="text-black"
                    label={t("menus.contact")}
                    onClick={() => {goTo('contactUsSection')}}
                  />
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {isMobile && (
        <div
          className={cn(
            "flex mt-2 rounded-md absolute bg-nav w-full transition-all ",
            toggle ? "block" : "hidden"
          )}
        >
          <ul
            className={cn(
              "flex flex-col w-full  gap-2 p-2 lg:[&>li]:text-2xl  [&>li:not(:last-child)]:px-2 [&>li:not(:last-child)]:py-2  [&>li:not(:last-child)]:rounded-sm  [&>li]:font-bold [&>li:not(:last-child)]:hover:bg-gray-100",
              theme == "dark"
                ? "[&>li:not(:last-child)]:hover:bg-[#191919]"
                : "[&>li:not(:last-child)]:hover:bg-[#f1f1f1]"
            )}
          >
            <li>
              <Link className="w-full block" to={"#"}>
                {t("menus.home")}
              </Link>
            </li>
            <li>
              <Link className="w-full block" to={"#"}>
                {t("menus.services")}
              </Link>
            </li>
            <li>
              <Link className="w-full block" to={"#"}>
                {t("menus.about")}
              </Link>
            </li>
            <li>
              <AnimatedButton
                className="w-full"
                label={t("menus.contact")}
                directArrowColor="text-black"
                onClick={() => {}}
              />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
