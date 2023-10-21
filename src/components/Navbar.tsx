"use client"

import * as NavigationMenu from "@radix-ui/react-navigation-menu"

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <a
        className="flex items-center gap-3 no-underline w-fit text-secondary"
        href="/"
      >
        <div className="flex bg-accent rounded-full">
          <div className="font-black text-[28px] px-3.5">E</div>
        </div>
        <div className="text-xl">
          <b>Eddie</b> Lima
        </div>
      </a>
      <Menu />
    </div>
  )
}

const Menu = () => {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className="flex justify-center">
        <MenuItem
          name="About Me"
          href="https://github.com/radix-ui"
          isActive={false}
        />
        <MenuItem name="Resume" href="https://github.com/radix-ui" isActive />
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}

type MenuItemProps = {
  name: string
  href: string
  isActive: boolean
}
const MenuItem = ({ name, href, isActive }: MenuItemProps) => {
  return (
    <NavigationMenu.Item>
      <NavigationMenu.Link
        className="text-secondary hover:text-secondary text-sm px-5 py-2 contrast-0 hover:filter-none"
        href="https://github.com/radix-ui"
      >
        {name}
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  )
}
