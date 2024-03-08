"use client";

import { UserButton } from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  const Links = [
    {
      name: "Settings",
      href: "/settings",
    },
    {
      name: "Server",
      href: "/server",
    },
    {
      name: "Client",
      href: "/client",
    },
    {
      name: "Admin",
      href: "/admin",
    },
  ];

  return (
    <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl max-w-[600px] w-full shadow-sm">
      <div className="flex flex-wrap gap-x-2 gap-y-2">
        {Links.map((link) => (
          <Button
            key={link.href}
            asChild
            variant={pathname === link.href ? "default" : "outline"}
          >
            <Link href={link.href}>{link.name}</Link>
          </Button>
        ))}
      </div>
      <UserButton />
    </nav>
  );
};
