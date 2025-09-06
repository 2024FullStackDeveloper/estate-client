import React from "react";
import { useTranslation } from "react-i18next";

interface LangContextProps {
  locale: string;
  t: (key: string) => string;
  switchLanguage: () => void;
  languages: { text: string; value: string }[];
  dir: "rtl" | "ltr";
  isRTL: boolean;
  lang:string
}

const initialData: LangContextProps = {
  locale: "ar",
  t: () => "",
  switchLanguage: () => {},
  languages: [],
  dir: "rtl",
  isRTL: true,
  lang:"ع"
};

const LangContext = React.createContext<LangContextProps>(initialData);

const LangProvider: React.FC<{ children: Readonly<React.ReactNode> }> = ({
  children,
}) => {
  const { t, i18n } = useTranslation();
  const [locale, setLocale] = React.useState(i18n.language);
  const languages = [
    {
      text: "ع",
      value: "ar",
    },
    {
      text: "EN",
      value: "en",
    },
  ];

  const switchLanguage = React.useCallback(() => {
    const newLang = locale?.toLowerCase() == "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    setLocale(newLang);
  }, [locale]);

  const dir = i18n.dir();
  const isRTL = dir == "rtl";
  const lang = languages?.find(e=>e.value == locale)?.text ?? "ع";

  return (
    <LangContext.Provider
      value={{ locale, t, dir, isRTL, lang, switchLanguage, languages }}
    >
      {children}
    </LangContext.Provider>
  );
};

export {
    type LangContextProps,
    LangContext,
    LangProvider
}
