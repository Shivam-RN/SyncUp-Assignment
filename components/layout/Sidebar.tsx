"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Briefcase,
  Users,
  MessageSquare,
  BarChart2,
  Settings,
  Menu,
  X,
  User,
} from "lucide-react";
import clsx from "clsx";

const navItems = [
  { icon: Home, href: "/", label: "Home" },
  { icon: Briefcase, href: "/jobs", label: "Jobs" },
  { icon: User, label: "Profile" },
  { icon: Users, label: "Network" },
  { icon: MessageSquare, label: "Messages" },
];

const bottomItems = [
  { icon: BarChart2, label: "Analytics" },
  { icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow"
      >
        <Menu size={20} />
      </button>

      {/* Overlay (Mobile) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={clsx(
          "fixed top-0 left-0 h-full bg-white border-r border-gray-100 flex flex-col py-4 z-50 transition-transform duration-300",
          "w-20 sm:w-52", // small width on mobile, wider on tablet+
          open ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0",
        )}
      >
        {/* Close Button (Mobile Only) */}
        <button
          onClick={() => setOpen(false)}
          className="md:hidden absolute top-4 right-4 bg-gray-100 p-1 rounded-lg"
        >
          <X size={20} />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2 px-4 mb-10">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-sm">S</span>
          </div>

          {/* Show text except phone */}
          <span className="hidden sm:inline text-lg font-semibold tracking-wide text-text-primary">
            <span className="font-bold text-primary">Sync</span>
            <span className="text-text-primary">Up</span>
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 flex-1 px-2">
          {navItems.map(({ icon: Icon, href, label }) =>
            href ? (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "flex items-center gap-3 px-3 py-2 rounded-xl text-gray-500 hover:bg-blue-50 hover:text-primary transition",
                  pathname === href && "bg-blue-50 text-primary",
                )}
              >
                <Icon size={20} />
                <span className="hidden sm:inline text-sm font-medium">
                  {label}
                </span>
              </Link>
            ) : (
              <button
                key={label}
                className="flex items-center gap-3 px-3 py-2 rounded-xl text-gray-500 hover:bg-blue-50 hover:text-primary transition"
              >
                <Icon size={20} />
                <span className="hidden sm:inline text-sm font-medium">
                  {label}
                </span>
              </button>
            ),
          )}
        </nav>

        {/* Bottom Items */}
        <div className="flex flex-col gap-2 px-2">
          {bottomItems.map(({ icon: Icon, label }) => (
            <button
              key={label}
              className="flex items-center gap-3 px-3 py-2 rounded-xl text-gray-500 hover:bg-blue-50 hover:text-primary transition"
            >
              <Icon size={20} />
              <span className="hidden sm:inline text-sm font-medium">
                {label}
              </span>
            </button>
          ))}
        </div>
      </aside>
    </>
  );
}
