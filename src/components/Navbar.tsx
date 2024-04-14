import Brand from "./Brand";
import NavbarMenu from "./NavbarMenu";

export default function Navbar() {
  return (
    <div className="flex h-16 px-5 justify-between border-b-2 border-dmLightRed rounded-b-lg shadow-md dark:shadow-none shadow-slate-300">
      <Brand />

      <NavbarMenu />
    </div>
  );
}
