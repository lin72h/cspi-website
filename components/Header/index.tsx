"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LanguageToggler from "./LanguageToggler";
import menuData from "./menuData";
import GlobalSearchModal from "../GlobalSearch";
import { useLanguage } from "@/app/context/LanguageContext";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const { data: session } = useSession();
  const { t } = useLanguage();

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-999 w-full py-7 ${
          stickyMenu
            ? "bg-white !py-4 shadow transition duration-100 dark:bg-black"
            : ""
        }`}
      >
        <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
          <div className="flex w-full items-center justify-between xl:w-1/4">
            <a href="/" className="flex items-center">
              <div className="h-[5rem] w-auto sm:h-[5.5rem] md:h-[5.75rem]">
                <Image
                  src="/images/logo/logo-transparent.png"
                  alt="logo"
                  width={260}
                  height={65}
                  className="hidden h-full w-auto dark:block"
                />
                <Image
                  src="/images/logo/logo-transparent.png"
                  alt="logo"
                  width={260}
                  height={65}
                  className="h-full w-auto dark:hidden"
                />
              </div>
            </a>

            <div className="flex items-center gap-3 xl:hidden">
              {!session && (
                <Link
                  href="/support"
                  className="flex items-center justify-center rounded-full bg-cspi px-4 py-2 text-sm text-white duration-300 ease-in-out hover:bg-cspiHover"
                >
                  {t("contactUs")}
                </Link>
              )}
              <button
                onClick={() => setNavigationOpen(!navigationOpen)}
                aria-label="button for menu toggle"
                className="block xl:hidden"
              >
                <span className="relative block h-5.5 w-5.5 cursor-pointer">
                  <span className="du-block absolute right-0 h-full w-full">
                    <span
                      className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                        !navigationOpen && "!w-full delay-300"
                      }`}
                    ></span>
                    <span
                      className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                        !navigationOpen && "delay-400 !w-full"
                      }`}
                    ></span>
                    <span
                      className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                        !navigationOpen && "!w-full delay-500"
                      }`}
                    ></span>
                  </span>
                  <span className="du-block absolute right-0 h-full w-full rotate-45">
                    <span
                      className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                        !navigationOpen && "!h-0 delay-[0]"
                      }`}
                    ></span>
                    <span
                      className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                        !navigationOpen && "dealy-200 !h-0"
                      }`}
                    ></span>
                  </span>
                </span>
              </button>
            </div>
          </div>

          {/* Nav Menu Start   */}
          <div
            className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${
              navigationOpen &&
              "navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
            }`}
          >
            <nav>
              <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
                {menuData.map((menuItem, key) => (
                  <li
                    key={key}
                    className={menuItem.submenu && "group relative"}
                  >
                    {menuItem.submenu ? (
                      <>
                        <button
                          onClick={() => setDropdownToggler(!dropdownToggler)}
                          className="flex cursor-pointer items-center justify-between gap-3 hover:text-primary"
                        >
                          {t(menuItem.title, "header")}
                          <span>
                            <svg
                              className="h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-primary"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                            </svg>
                          </span>
                        </button>

                        <ul
                          className={`dropdown ${
                            dropdownToggler ? "flex" : ""
                          }`}
                        >
                          {menuItem.submenu.map((item, key) => (
                            <li key={key} className="hover:text-primary">
                              <Link href={item.path || "#"}>{t(item.title, "header")}</Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link
                        href={`${menuItem.path}`}
                        className={
                          pathUrl === menuItem.path
                            ? "text-primary hover:text-primary"
                            : "hover:text-primary"
                        }
                      >
                        {t(menuItem.title, "header")}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="ml-auto mt-7 flex items-center gap-4 xl:mt-0">
              <button
                onClick={() => setSearchModalOpen(true)}
                className="hidden h-[38px] w-[38px] items-center justify-center rounded-full bg-white text-waterloo dark:bg-black sm:flex"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 18 18"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_369_1884)">
                    <path
                      d="M16.9347 15.3963L12.4816 11.7799C14.3168 9.26991 14.1279 5.68042 11.8338 3.41337C10.6194 2.19889 9.00003 1.52417 7.27276 1.52417C5.54549 1.52417 3.92617 2.19889 2.71168 3.41337C0.201738 5.92332 0.201738 10.0256 2.71168 12.5355C3.92617 13.75 5.54549 14.4247 7.27276 14.4247C8.91907 14.4247 10.4574 13.804 11.6719 12.6975L16.179 16.3409C16.287 16.4219 16.4219 16.4759 16.5569 16.4759C16.7458 16.4759 16.9077 16.3949 17.0157 16.26C17.2316 15.9901 17.2046 15.6122 16.9347 15.3963ZM7.27276 13.2102C5.86935 13.2102 4.5739 12.6705 3.57532 11.6719C1.52418 9.62076 1.52418 6.30116 3.57532 4.27701C4.5739 3.27843 5.86935 2.73866 7.27276 2.73866C8.67617 2.73866 9.97162 3.27843 10.9702 4.27701C13.0213 6.32815 13.0213 9.64775 10.9702 11.6719C9.99861 12.6705 8.67617 13.2102 7.27276 13.2102Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_369_1884">
                      <rect
                        width="17.2727"
                        height="17.2727"
                        fill="white"
                        transform="translate(0.363647 0.363647)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>

              <LanguageToggler />

              {session ? (
                <>
                  <p>{session?.user?.name}</p>
                  <button
                    aria-label="SignOut"
                    onClick={() => signOut()}
                    className="flex items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primaryho"
                  >
                    {t("signOut")}
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/support"
                    className="hidden xl:flex items-center justify-center rounded-full bg-cspi px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-cspiHover"
                  >
                    {t("contactUs")}
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <GlobalSearchModal
        searchModalOpen={searchModalOpen}
        setSearchModalOpen={setSearchModalOpen}
      />
    </>
  );
};

// w-full delay-300

export default Header;
