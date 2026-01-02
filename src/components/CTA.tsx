'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CTA() {
    return (
        <section className="py-24 relative overflow-hidden bg-slate-900">
            {/* Abstract Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
                    Ready to Transform Your Campus?
                </h2>
                <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                    Join 500+ forward-thinking schools using EduPrime to deliver world-class education management.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/login">
                        <Button size="lg" className="h-16 px-12 text-xl bg-white text-slate-900 font-bold rounded-full hover:bg-indigo-50 hover:scale-105 transition-all shadow-xl">
                            Get Started Now
                        </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="h-16 px-12 text-xl border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 rounded-full hover:border-slate-500 transition-all">
                        Contact Sales
                    </Button>
                </div>
                <p className="mt-8 text-slate-500 text-sm">
                    No credit card required · 14-day free trial · Cancel anytime
                </p>
            </div>
        </section>
    );
}
