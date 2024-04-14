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
    <button onClick={onClicked} className="btn-navbar">
      <div className={iconClasses}>{children}</div>
    </button>
  );
}
