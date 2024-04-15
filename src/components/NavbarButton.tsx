import { ReactNode } from "react";

interface Props {
  children: string | ReactNode;
  classes?: string;
  onClicked?: () => void;
}

export default function NavbarButton({ children, classes, onClicked }: Props) {
  return (
    <button onClick={onClicked} className="btn-navbar">
      <div className={classes}>{children}</div>
    </button>
  );
}
