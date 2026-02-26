"use client";

import { Search, Bell, MessageSquare, ChevronDown } from "lucide-react";

export default function Topbar() {
  return (
   <header className="fixed top-0 left-15 right-0 h-16 bg-white border-b border-gray-100 flex items-center px-6 z-30">

  {/* Left spacer */}
  <div className="flex-1" />

  {/* Center Search */}
  <div className="w-full max-w-md">
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className="w-full pl-4 pr-9 py-2 bg-gray-100 rounded-xl text-sm text-gray-600 placeholder-gray-500 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
      />
      <Search
        size={16}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
      />
    </div>
  </div>

  {/* Right icons */}
  <div className="flex-1 flex justify-end items-center gap-3">
    <button className="relative nav-icon">
      <MessageSquare size={20} />
      <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full border border-white"></span>
    </button>

    <button className="relative nav-icon">
      <Bell size={20} />
      <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full border border-white"></span>
    </button>

    <div className="flex items-center gap-2 cursor-pointer">
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="Minnie Armstrong"
        className="w-8 h-8 rounded-full object-cover"
      />
      <ChevronDown size={14} className="text-gray-400" />
    </div>
  </div>
</header>
  );
}
