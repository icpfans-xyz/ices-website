import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import { Links } from "../utils/AppConfig";
import Styles from "./navbar.module.css";

const navigation = [
  { name: "Doc", href: Links.doc },
  { name: "Twitter", href: Links.twitter },
  { name: "Discord", href: Links.discord },
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className={Styles.navbar}>
      {({ open }) => (
        <>
          <div
            className={`relative flex w-screen h-full lg:block  ${Styles.container}`}
          >
            <div className="container flex items-center w-screen h-full max-w-screen-xl px-6 mx-auto md:justify-between md:px-8">
              <div className={Styles["logo-box"]}>
                <a href="#">
                  <span className="sr-only">ICES</span>
                  <img
                    src="/assets/images/logo_title.png"
                    className="h-12"
                    alt="ICES"
                  />
                </a>
              </div>
              <div className="hidden md:block">
                <div className="flex items-center space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`hover:text-blue-600 px-3 py-2 font-sans text-normal font-medium`}
                    >
                      <div className="flex">{item.name}</div>
                    </a>
                  ))}

                  <a
                    href="#"
                    className="inline-block px-5 py-2 font-semibold text-white rounded-lg bg-gradient-to-br from-pink-600 to-yellow-600 hover:from-blue-500 hover:to-blue-700 "
                  >
                    Dashboard (Coming Soon)
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center pr-6 md:hidden">
              <Disclosure.Button className="flex items-center justify-center p-2 font-semibold text-gray-800 rounded-md hover:text-blue-600 md:hidden">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block w-7 h-7" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block w-7 h-7" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>

          {/* only show on mobile */}
          <Disclosure.Panel className="h-screen bg-white lg:hidden">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={`text-gray-800  hover:text-blue-600 block px-3 py-6 text-base border-white border-opacity-10 border-b`}
                >
                  <div className="flex">{item.name}</div>
                </Disclosure.Button>
              ))}

              <a
                href="#"
                className="inline-block px-5 py-2 font-semibold text-white rounded-lg bg-gradient-to-br from-pink-600 to-yellow-600 hover:from-blue-500 hover:to-blue-700 "
              >
                Dashboard (Coming Soon)
              </a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
