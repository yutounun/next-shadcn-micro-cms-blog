import Link from "next/link";
import { IconBox } from "@tabler/icons-react";
import MobileMenu from "./mobile-menu";
import { ModeToggle } from "../ui/mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const categories = [
  { name: "Featured", href: "/blog" },
  { name: "Life", href: "/blog/category/24powvgak" },
  { name: "Leetcode", href: "/blog/category/r8vt20z772b" },
  { name: "Tech", href: "/blog/category/6xvpywpboij" },
];

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export function NavLink({ label, href }: { label: string; href: string }) {
  if (label === "Blog") {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="mx-4 text-sm font-medium lg:mx-5">
          {label}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {categories.map((category) => (
            <Link key={category.name} href={category.href}>
              <DropdownMenuItem>{category.name}</DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
  return (
    <Link href={href} className="mx-4 text-sm font-medium lg:mx-5">
      {label}
    </Link>
  );
}

export default function Header() {
  return (
    <header className="absolute z-30 w-full">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-1">
            <Link href="/">
              <IconBox />
            </Link>
          </div>
          <nav className="hidden md:flex md:grow">
            <ul className="flex flex-wrap items-center justify-center grow">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NavLink label={link.label} href={link.href} />
                </li>
              ))}
            </ul>
          </nav>

          <ul className="items-center justify-end flex-1 hidden md:flex md:grow">
            <li>
              <ModeToggle />
            </li>
          </ul>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
