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
      <Menu.Button className="flex items-center overflwo-hidden bg-gray-600 rounded-full p-2 hover:border-transparent hover:text-red-500 hover:bg-gray-700 transform hover:scale-110 transition ease-out duration-300">
        {label}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 h-auto overflow-hidden origin-top-right divide-y divide-gray-700 rounded-md backdrop-blur-sm bg-gray-800/70 border-2 border-gray-700 shadow-lg ring-2 ring-black/5 focus:outline-none">
          {/* if items and children not exist then return it */}
          {!items && !children ? (
            <Menu.Item as="span">Please add items</Menu.Item>
          ) : (
            items?.map((item) => (
              /* Use the `active` state to conditionally style the active item. */
              <Menu.Item key={item.href} as={Fragment}>
                {({ active }) => (
                  <a
                    href={item.href}
                    className={`${
                      active ? "text-red-500" : "text-gray-300"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {item.label}
                  </a>
                )}
              </Menu.Item>
            ))
          )}
          {/* if children exists then return it even if items provided */}
          {children && <Menu.Item>{children}</Menu.Item>}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
