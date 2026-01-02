'use client';
import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { ArrowLeft, Lock } from 'lucide-react';

export default function SecurityPage() {
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
                                <Lock size={32} />
                            </div>
                        </div>
                        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Security Overview</h1>
                        <p className="text-xl text-slate-600">
                            Enterprise-grade security for your school's data.
                        </p>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 prose prose-slate max-w-none">
                        <h3>Data Encryption</h3>
                        <p>
                            All data transmitted between your browser and EduPrime is encrypted using TLS 1.2 or higher.
                            Data at rest is encrypted using AES-256 encryption.
                        </p>
                        <h3>Access Control</h3>
                        <p>
                            We employ strict role-based access control (RBAC) to ensure that only authorized personnel have access to your data.
                        </p>
                        <h3>Compliance</h3>
                        <p>
                            We are compliant with FERPA, COPPA, and GDPR regulations to ensure student data privacy and safety.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
