import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function HorizontalListContainer({ children }: Props) {
  return (
    <ul className="flex gap-4 md:hover:gap-6 p-4 -mt-7 mb-2 overflow-x-scroll scrollbar dark:scrollbar-dark transition-all ease-out duration-500">
      {children}
    </ul>
  );
}
