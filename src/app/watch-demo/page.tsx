'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Play } from 'lucide-react';
import Link from 'next/link';

export default function WatchDemo() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            <Navbar />

            <main className="pt-32 pb-20 container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8">
                        <Link href="/">
                            <Button variant="ghost" className="pl-0 hover:pl-2 transition-all text-slate-500 hover:text-indigo-600 mb-4 gap-2">
                                <ArrowLeft size={16} /> Back to Home
                            </Button>
                        </Link>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                            See EduPrime in Action
                        </h1>
                        <p className="text-lg text-slate-600">
                            Discover how our platform simplifies school management in this 2-minute walkthrough.
                        </p>
                    </div>

                    {/* Video Player Container */}
                    <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border-4 border-white ring-1 ring-slate-200 group">
                        {/* You can replace the src with your actual demo video URL */}
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/TY6v-vfmhi0"
                            title="Product Demo"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>

                        {/* Overlay (Optional - removes when playing usually, but with iframe we rely on YouTube controls) */}
                    </div>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Easy Onboarding", desc: "Get your school running in less than 24 hours." },
                            { title: "Real-time Analytics", desc: "Track attendance and finances instantly." },
                            { title: "Parent App", desc: "Keep parents connected with mobile alerts." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 mb-4">
                                    <Play size={20} fill="currentColor" />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-slate-500 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
