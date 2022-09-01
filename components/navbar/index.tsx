import React from "react"
import { FaPoll, FaPollH } from "react-icons/fa"

export interface MenuOption {
  title: string
  slug: string
  isSpecial: boolean
  visible: boolean
  icon?: JSX.Element
  action?: (...params: any) => void
}

const menuOptions: MenuOption[] = [
  {
    title: "Rólunk",
    slug: "about",
    isSpecial: false,
    visible: true,
  },
  {
    title: "Eseményeink",
    slug: "events",
    isSpecial: false,
    visible: true,
  },
  {
    title: "Támogatóink",
    slug: "sponsors",
    isSpecial: false,
    visible: true,
  },
  {
    title: "Felvételi",
    slug: "invitation",
    isSpecial: true,
    visible: true,
    icon: <FaPollH className="mr-1 text-sm" />,
  },
]

const Navbar = () => {
  return (
    <div className="fixed inset-x-0 top-0 flex h-14 items-center justify-between bg-white px-6">
      <p className="font-bold italic text-soft-green">tESTIEM</p>
      <div className="flex space-x-2">
        {menuOptions
          .filter((option) => option.visible)
          .map((option) => (
            <div
              key={option.slug}
              className={`${
                option.isSpecial
                  ? "bg-soft-green text-white hover:bg-darker-green"
                  : "text-soft-green hover:bg-soft-green hover:text-white"
              } flex cursor-pointer items-center justify-center px-3 py-1 font-medium  duration-150 ease-in-out `}
            >
              <span>{option.icon && option.icon}</span>
              <p className="">{option.title}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Navbar
