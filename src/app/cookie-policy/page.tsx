'use client';
import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export default function LegalPage() {
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
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                                <ShieldCheck size={32} />
                            </div>
                        </div>
                        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Privacy & Security Policies</h1>
                        <p className="text-xl text-slate-600">
                            We are committed to protecting your data and privacy.
                        </p>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 prose prose-slate max-w-none">
                        <h3>Cookie Policy</h3>
                        <p>
                            This Cookie Policy explains how EduPrime uses cookies and similar technologies to recognize you when you visit our website.
                            It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                        </p>
                        <h4>What are cookies?</h4>
                        <p>
                            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used
                            by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
                        </p>

                        <hr className="my-8" />

                        <h3>Security Policy</h3>
                        <p>
                            We take security seriously. We use industry-standard encryption to protect your data in transit and at rest.
                            Our infrastructure is hosted on secure cloud providers with 24/7 monitoring.
                        </p>

                        <hr className="my-8" />

                        <h3>GDPR Compliance</h3>
                        <p>
                            If you are a resident of the European Economic Area (EEA), you have certain data protection rights.
                            EduPrime aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
