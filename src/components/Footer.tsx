import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, School } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#0B0F1C] text-slate-300 font-sans pt-24 pb-12 relative overflow-hidden border-t border-slate-900/50">
            {/* Gradient Orbs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
                    {/* Brand & Mission - Spans 6 columns */}
                    <div className="lg:col-span-6 flex flex-col justify-between">
                        <div>
                            <Link href="/" className="flex items-center gap-2 group w-fit mb-8">
                                <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-900/20 group-hover:scale-105 transition-transform duration-300">
                                    <School size={22} />
                                </div>
                                <span className="text-2xl font-bold text-white tracking-tight">EduPrime</span>
                            </Link>
                            <p className="text-slate-400 leading-relaxed text-lg max-w-sm mb-8">
                                Reimaging school management with intelligent tools that help educators focus on what matters most: <span className="text-white font-medium">Teaching.</span>
                            </p>
                        </div>

                        <div className="flex gap-3">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-lg bg-slate-900/50 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white hover:border-indigo-500 transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns - Span 3 columns each */}
                    <div className="lg:col-span-3">
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Product</h4>
                        <ul className="space-y-4">
                            {['Features', 'Pricing'].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-white transition-colors text-sm font-medium block hover:translate-x-1 duration-200">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Company</h4>
                        <ul className="space-y-4">
                            {[
                                { label: 'About', href: '/about' },
                                { label: 'Careers', href: '/careers' },
                                { label: 'Blog', href: '/blog' },
                                { label: 'Contact', href: '/contact' },
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-slate-400 hover:text-white transition-colors text-sm font-medium block hover:translate-x-1 duration-200">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
                    <p>© 2025 EduPrime Inc.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms</Link>
                        <Link href="/security" className="hover:text-slate-400 transition-colors">Security</Link>
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-medium">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                            Systems Normal
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
