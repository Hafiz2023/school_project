'use client';
import React from 'react';
import { Search, Bell, HelpCircle } from 'lucide-react';

export default function Header({ title }: { title: string }) {
    return (
        <header className="flex items-center justify-between mb-8">
            <div>
                <h1 className="text-2xl font-bold text-slate-800">{title}</h1>
                <p className="text-sm text-slate-500 mt-1">Welcome to your school management portal.</p>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative hidden md:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search anything..."
                        className="pl-10 pr-4 py-2 rounded-full border border-slate-200 focus:outline-none focus:border-indigo-500 w-64 text-sm"
                    />
                </div>

                <button className="p-2 text-slate-500 hover:text-indigo-600 transition-colors relative">
                    <Bell size={20} />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <button className="p-2 text-slate-500 hover:text-indigo-600 transition-colors">
                    <HelpCircle size={20} />
                </button>
            </div>
        </header>
    );
}
