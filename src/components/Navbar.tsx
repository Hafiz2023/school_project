'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { School, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Features', href: '/features' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Resources', href: '/resources' },
        { name: 'About', href: '/about' },
    ];

    return (
        <nav className={cn(
            "fixed w-full z-50 top-0 left-0 transition-all duration-300 border-b",
            scrolled || mobileMenuOpen
                ? "bg-white/90 backdrop-blur-md border-slate-200 shadow-sm"
                : "bg-transparent border-transparent"
        )}>
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group cursor-pointer z-50">
                    <div className="bg-gradient-to-tr from-indigo-600 to-blue-600 text-white p-2 md:p-2.5 rounded-xl shadow-lg group-hover:shadow-indigo-500/30 transition-all duration-300 group-hover:scale-105">
                        <School size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
                        EduPrime
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-500">
                    {navLinks.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "relative hover:text-indigo-600 transition-colors py-2",
                                pathname === item.href ? "text-indigo-600 font-semibold" : ""
                            )}
                        >
                            {item.name}
                            {pathname === item.href && (
                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-600 rounded-full" />
                            )}
                        </Link>
                    ))}
                </div>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="/login">
                        <Button variant="ghost" className="font-semibold text-slate-600 hover:text-indigo-600 hover:bg-indigo-50">
                            Sign In
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button className="rounded-full bg-slate-900 hover:bg-slate-800 text-white px-6 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300">
                            Get Started
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-slate-700 z-50"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu Overlay */}
                {mobileMenuOpen && (
                    <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 md:hidden animate-in fade-in slide-in-from-top-10 duration-200">
                        <div className="flex flex-col items-center gap-6 text-xl font-medium text-slate-700">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={cn(
                                        "hover:text-indigo-600 transition-colors",
                                        pathname === item.href ? "text-indigo-600 font-bold" : ""
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <div className="flex flex-col gap-4 mt-8 w-64">
                            <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                                <Button variant="outline" className="w-full h-12 text-lg">Sign In</Button>
                            </Link>
                            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                                <Button className="w-full h-12 text-lg bg-indigo-600 hover:bg-indigo-500">Get Started</Button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
