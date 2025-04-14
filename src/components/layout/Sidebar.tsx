'use client';
import React from 'react';
import { FaRegFile, FaChartBar, FaCode } from "react-icons/fa";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routes = [
  { name: 'Dashboard', path: '/dashboard', icon: FaChartBar },
  { name: 'Skill Test', path: '/', icon: FaCode },
  { name: 'Internship', path: '/internship', icon: FaRegFile },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-white shadow-md">
      <nav className="mt-5">
        <ul className="space-y-1">
          {routes.map((route) => {
            const isActive = pathname === route.path || 
              (route.path === '/' && pathname === '/skill-test');

            return (
              <li key={route.path} >
                <Link 
                  href={route.path}
                  className={`
                    flex items-center gap-3 px-4 py-3 relative font-bold my-3 
                    ${isActive ? 'text-blue-700 bg-gray-100 rounded-r-full' : 'text-gray-700'}
                  `}
                >
                  <route.icon className={`text-lg `} />
                  <span>{route.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;