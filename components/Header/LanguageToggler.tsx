"use client";
import { useLanguage } from "@/app/context/LanguageContext";

const LanguageToggler = () => {
  const { language, setLanguage, t } = useLanguage();

  // Toggle between English and Chinese
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "zh" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Language Switcher"
      className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white text-black hover:bg-gray-100 dark:bg-black dark:text-white dark:hover:bg-gray-800"
    >
      {t("languageSwitch")}
    </button>
  );
};

export default LanguageToggler; 