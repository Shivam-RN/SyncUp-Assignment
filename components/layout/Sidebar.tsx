'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Briefcase, Users, MessageSquare, BarChart2, Settings, Menu, X, User } from 'lucide-react'
import clsx from 'clsx'

const navItems = [
  { icon: Home, href: '/', label: 'Home' },
   { icon: Briefcase, href: '/jobs', label: 'Jobs' }, 
   { icon: User, label: 'Profile' },
    { icon: Users, label: 'Network' },
     { icon: MessageSquare, label: 'Messages' },
]

const bottomItems = [ 
  { icon: BarChart2, label: 'Analytics' },
   { icon: Settings, label: 'Settings' },
   ]

export default function Sidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Mobile Top Left Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow"
      >
        <Menu size={20} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={clsx(
          "fixed top-0 left-0 h-full w-20 bg-white border-r border-gray-100 flex flex-col items-center py-4 z-50 transition-transform",
          open ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0 md:flex"
        )}
      >
        {/* Close button mobile */}
        <button
          onClick={() => setOpen(false)}
          className="md:hidden absolute top-3 right-6 z-50 bg-gray-100 p-1 rounded-lg shadow"
        >
          <X size={24} />
        </button>

        <nav className="flex flex-col gap-3 mt-14 flex-1">
          {navItems.map(({ icon: Icon, href, label }) => href ? ( <Link key={label} href={href} title={label} className={clsx( 'nav-icon', pathname === href && 'active' )} > <Icon size={20} /> </Link> ) : ( <button key={label} title={label} className="nav-icon" > <Icon size={20} /> </button> ) )}
        </nav>

        {/* Bottom items */} <div className="flex flex-col gap-1"> {bottomItems.map(({ icon: Icon, label }) => ( <button key={label} title={label} className="nav-icon" > <Icon size={20} /> </button> ))} </div>
      </aside>
    </>
  )
}