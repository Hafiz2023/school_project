'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, PlayCircle, Star, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-gradient-to-b from-indigo-100/50 to-blue-50/50 rounded-full blur-3xl -z-10 opacity-60"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-purple-100/50 to-pink-50/50 rounded-full blur-3xl -z-10 opacity-60"></div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Text Content */}
                    <div className="lg:w-1/2 relative z-10 space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-100 shadow-sm text-indigo-700 text-xs font-bold uppercase tracking-wide hover:shadow-md transition-shadow cursor-default">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                            </span>
                            v2.0 is Live: AI-Powered Analytics
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                            Smarter Management for <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500">
                                Modern Schools
                            </span>
                        </h1>

                        <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                            Replace fragmented tools with one unified OS. Streamline admissions, fees, and academics while delighting parents and teachers.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href="/login">
                                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto flex items-center gap-2">
                                    Start Free Trial <ArrowRight size={18} />
                                </Button>
                            </Link>
                            <Link href="/watch-demo">
                                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-slate-200 hover:border-slate-300 hover:bg-white text-slate-700 hover:text-indigo-600 backdrop-blur-sm w-full sm:w-auto flex items-center gap-2">
                                    <PlayCircle size={18} /> Watch Video
                                </Button>
                            </Link>
                        </div>

                        <div className="flex items-center gap-6 pt-4 text-sm font-medium text-slate-500">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs overflow-hidden">
                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="Avatar" />
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-indigo-50 text-indigo-600 flex items-center justify-center text-xs font-bold ring-1 ring-indigo-100">
                                    +2k
                                </div>
                            </div>
                            <div>
                                <div className="flex text-amber-400 mb-0.5">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                                </div>
                                <span className="text-slate-900 font-bold">4.9/5</span> from 500+ schools
                            </div>
                        </div>
                    </div>

                    {/* Hero Image / Dashboard Mockup */}
                    <div className="lg:w-1/2 relative lg:h-[600px] flex items-center perspective-1000">
                        {/* Decorative Elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-indigo-100 to-white rounded-full opacity-20 blur-3xl -z-10 animate-blob"></div>

                        {/* Main Image Container with 3D Float Effect */}
                        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-indigo-900/10 border-4 border-white transform hover:scale-[1.02] hover:rotate-1 transition-all duration-700 ease-out z-10 group">
                            <img
                                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop"
                                alt="School Administrator Dashboard"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>

                            {/* Floating Stat Card 1 */}
                            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 animate-bounce-slow max-w-[200px]">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                                        <CreditCard size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-medium">Revenue</p>
                                        <p className="text-lg font-bold text-slate-900">$24,500</p>
                                    </div>
                                </div>
                                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                    <div className="bg-green-500 w-[75%] h-full rounded-full"></div>
                                </div>
                            </div>

                            {/* Floating Stat Card 2 */}
                            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/50 flex items-center gap-2 animate-pulse-slow">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <span className="text-xs font-bold text-slate-700">System Online</span>
                            </div>
                        </div>

                        {/* Back Decor */}
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
