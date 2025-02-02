import { ReactNode, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

interface Props {
  label: string | ReactNode;
  children?: ReactNode;
  items?: Item[];
}

interface Item {
  label: string;
  href: string;
}

export default function DropdownMenu({ label, children, items }: Props) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="btn-navbar">{label}</Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 h-auto overflow-hidden origin-top-right divide-y divide-gray-400 dark:divide-gray-700 rounded-md backdrop-blur-xl bg-gray-500/20 dark:bg-gray-800/70 border-2 border-gray-400/50 dark:border-gray-700 shadow-lg ring-2 ring-gray-400/5 dark:ring-black/5 focus:outline-none">
          {items?.map((item) => (
            /* Use the `active` state to conditionally style the active item. */
            <Menu.Item key={item.href} as={Fragment}>
              {({ active }) => (
                <a
                  href={item.href}
                  className={`${
                    active
                      ? "bg-white/15 dark:bg-black/15 text-black/80 dark:text-gray-50"
                      : "text-black/50  dark:text-gray-400"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {item.label}
                </a>
              )}
            </Menu.Item>
          ))}
          {/* if children exists then return it even if items provided */}
          {children && <Menu.Item>{children}</Menu.Item>}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
