'use client';
import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Download } from 'lucide-react';

export default function PressKitPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
            <nav className="fixed w-full z-50 top-0 left-0 bg-white/80 backdrop-blur-md border-b border-slate-200">
                <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="bg-indigo-600 text-white p-2 rounded-lg shadow-lg">
                            <ArrowLeft size={24} />
                        </div>
                        <span className="text-xl font-bold text-slate-900">Back to Home</span>
                    </Link>
                </div>
            </nav>

            <section className="pt-32 pb-20">
                <div className="container mx-auto px-4 max-w-3xl text-center">
                    <Badge className="mb-4 bg-indigo-100 text-indigo-700 hover:bg-indigo-100">Media Resources</Badge>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Press Kit</h1>
                    <p className="text-xl text-slate-600 mb-12">
                        Logos, screenshots, and brand assets for media use.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 text-left">
                        <div className="bg-white p-6 rounded-xl border border-slate-200">
                            <h3 className="font-bold text-lg mb-2">Logos & Marks</h3>
                            <p className="text-sm text-slate-500 mb-4">Vector and raster versions of our logo.</p>
                            <Button variant="outline" className="w-full"><Download size={16} className="mr-2" /> Download ZIP</Button>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200">
                            <h3 className="font-bold text-lg mb-2">Product Screenshots</h3>
                            <p className="text-sm text-slate-500 mb-4">High-res screenshots of the dashboard.</p>
                            <Button variant="outline" className="w-full"><Download size={16} className="mr-2" /> Download ZIP</Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
