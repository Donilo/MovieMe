import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function MovieCardItem({ children }: Props) {
  return (
    <li className="relative min-w-48 h-52 md:hover:h-72 bg-slate-500 mb-2 rounded-xl cursor-pointer shadow-md dark:shadow-none overflow-hidden transform hover:rounded-3xl hover:scale-105 transition-all ease-out duration-500">
      {children}
    </li>
  );
}
