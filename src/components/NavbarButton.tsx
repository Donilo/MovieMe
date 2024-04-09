import { ReactNode } from "react";

interface Props {
  children: string | ReactNode;
  iconClasses?: string;
  onClicked?: () => void;
}

export default function NavbarButton({
  children,
  iconClasses,
  onClicked,
}: Props) {
  return (
    <button
      onClick={onClicked}
      className="bg-gray-600 rounded-full p-2 hover:border-transparent hover:text-red-500 hover:bg-gray-700 transform hover:scale-110 transition ease-out duration-300"
    >
      <div className={iconClasses}>{children}</div>
    </button>
  );
}
