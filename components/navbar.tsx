"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  // { href: "features", label: "Features" },
  { href: "/learn-more", label: "How it Works" },
  { href: "/FAQ", label: "FAQs" },
  // { href: "/blog", label: "Blog" },
];

const Navbar1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">📓</span>
          <span className="text-xl font-semibold">LeetCodeJournal</span>
        </div>
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="/auth/signin"
            className="text-sm font-medium text-muted-foreground hover:text-primary"
          >
            Log in
          </Link>
          <Button asChild>
            <Link href="/auth/register">Sign up</Link>
          </Button>
          <ThemeToggle />
        </div>
        <div
          onClick={toggleMenu}
          className="lg:hidden focus:outline-none"
          role="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {/* ADDED THEME TOGGLE ALONG WITH MENU  */}
          <div className="flex flex-row justify-center items-center gap-2">
            <ThemeToggle />
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden">
          {/* ADDED X-PADDING TO MAKE IT FIT PROPERLY ON MOBILE SCREENS */}
          <nav className="container flex flex-col space-y-4 py-4 px-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-4 pt-4 border-t">
              {/* FORMATTED THE LOGIN BUTTON -> LOGIN TEXT IN CENTER AND BACKGROUND ADDED */}
              <Button asChild className="bg-primary-foreground text-white">
                <Link href="/auth/signin">Login</Link>
              </Button>
              <Button asChild onClick={toggleMenu}>
                <Link href="/auth/register">Sign up</Link>
              </Button>
              <div className="flex justify-start"></div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar1;
