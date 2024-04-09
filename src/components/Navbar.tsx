import { FaRegBell, FaRegUser } from "react-icons/fa6";
import { HiMenu } from "react-icons/hi";
import DropdownNav from "./DropdownNav";
import SwitchDarkMode from "./SwitchDarkMode";
import Brand from "./Brand";
import NavbarSearch from "./NavbarSearch";

const links = [
  { href: "/account", label: "Account settings" },
  { href: "/support", label: "Support" },
  { href: "/sign-out", label: "Sign out" },
];

export default function Navbar() {
  return (
    <div className="flex h-16 px-5 justify-between border-b-4 border-red-500">
      <Brand />

      <div
        data-collapse-toggle="navbar"
        className="flex md:hidden items-center text-red-400 text-2xl"
        aria-controls="navbar"
        aria-expanded="false"
      >
        <button>
          <HiMenu />
        </button>
      </div>

      <div className="flex md:justify-between items-center" id="navbar">
        <NavbarSearch />

        <ul className="flex gap-5 text-gray-800 text-xl">
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
                  <div className="bg-gray-700 text-white w-full h-2 rounded-b-md"></div>
                </li>
              </ul>
            </DropdownNav>
          </li>
          <li>
            <DropdownNav label={<FaRegUser />} items={links} />
          </li>
        </ul>
      </div>
    </div>
  );
}
