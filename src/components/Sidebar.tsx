'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutDashboard, Users, BookOpen, GraduationCap, DollarSign, Settings, Bell, Menu, X, LogOut, Banknote, ClipboardList } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
    { name: 'Classroom', icon: Users, href: '/classroom' },
    { name: 'Students', icon: GraduationCap, href: '/students' },
    { name: 'Courses', icon: BookOpen, href: '/courses' },
    { name: 'Exams & Results', icon: ClipboardList, href: '/exams' },
    { name: 'Fees & Invoices', icon: DollarSign, href: '/fees' },
    { name: 'Payroll', icon: Banknote, href: '/payroll' },
    { name: 'Settings', icon: Settings, href: '/settings' },
  ];

  /* Mobile Overlay Logic */
  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    // In a real app, clear cookies/tokens here
    router.push('/login');
  };

  return (
    <>
      {/* Mobile/Tablet Toggle Button */}
      <button
        className="fixed top-4 left-4 z-50 p-2.5 bg-indigo-600 text-white rounded-lg lg:hidden shadow-xl hover:bg-indigo-700 transition-all active:scale-95"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay for mobile/tablet */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed top-0 left-0 h-full z-50
        w-[280px] bg-slate-900 text-white p-6
        transition-transform duration-300 ease-in-out shadow-2xl
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:shadow-none flex flex-col flex-shrink-0
        overflow-y-auto border-r border-slate-800 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent
      `}>
        <div className="flex items-center gap-2 mb-8 mt-12 lg:mt-0">
          <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white font-bold text-xl">
            E
          </div>
          <span className="text-xl font-bold text-white tracking-tight">EduPrime</span>
        </div>

        <div className="nav-header text-xs font-semibold text-slate-500 mb-4 px-2 uppercase tracking-wider">Main Menu</div>
        <nav className="flex flex-col gap-1 mb-auto">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
                onClick={() => setIsOpen(false)}
              >
                <Icon size={20} />
                <span className="font-medium text-sm">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mb-6">
          <div className="nav-header text-xs font-semibold text-slate-500 mb-4 px-2 uppercase tracking-wider">System</div>
          <nav className="flex flex-col gap-1">
            <Link href="/notifications" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white rounded-lg hover:bg-white/5">
              <Bell size={20} />
              <span className="font-medium text-sm">Notifications</span>
            </Link>
          </nav>
        </div>

        <div className="pt-4 border-t border-slate-800">
          <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors group">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg">
                <span className="text-xs font-bold">AD</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-white group-hover:text-indigo-200 transition-colors">Admin User</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">Administrator</span>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="text-slate-400 hover:text-red-400 hover:bg-red-400/10 p-2 rounded-full transition-all"
              title="Logout"
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
