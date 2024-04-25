import { FaRegBell, FaRegUser } from "react-icons/fa6";
import { HiMenu } from "react-icons/hi";
import DropdownNav from "./DropdownNav";
import NavbarSearch from "./NavbarSearch";
import SwitchDarkMode from "./SwitchDarkMode";

const links = [
  { href: "/account", label: "Account settings" },
  { href: "/watchlist", label: "Watchlist" },
  { href: "/support", label: "Support" },
  { href: "/sign-out", label: "Sign out" },
];

export default function NavbarMenu() {
  return (
    <div className="flex md:justify-between items-center" id="navbar">
      <NavbarSearch />

      <ul className="flex z-20 gap-2 md:gap-4 text-gray-200 text-xl">
        <li>
          <SwitchDarkMode />
        </li>
        <li className="relative">
          <DropdownNav label={<FaRegBell />}>
            <ul>
              <li>
                <span className="text-gray-500 flex w-full items-center justify-center rounded-md px-2 py-2 text-sm">
                  No new notification
                </span>
              </li>
              <li>
                <div className="bg-gray-700 text-white w-full h-1 rounded-b-md"></div>
              </li>
            </ul>
          </DropdownNav>
        </li>
        <li>
          <DropdownNav label={<FaRegUser />} items={links} />
        </li>
        {/* Dropdown burger button, still need to bring functionallity to it. */}
        <li className="md:hidden">
          <div
            data-collapse-toggle="navbar"
            className="flex md:hidden text-gray-200"
            aria-controls="navbar"
            aria-expanded="false"
          >
            <button className="flex items-center overflwo-hidden rounded-full p-2 bg-dmLightRed dark:hover:border-dmMainRed hover:border-transparent  transform hover:scale-110 transition ease-out duration-300">
              <HiMenu />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
