'use client';
import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { ArrowLeft, Globe } from 'lucide-react';

export default function GDPRPage() {
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
                                <Globe size={32} />
                            </div>
                        </div>
                        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">GDPR Compliance</h1>
                        <p className="text-xl text-slate-600">
                            Our commitment to your data rights under the General Data Protection Regulation.
                        </p>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 prose prose-slate max-w-none">
                        <h3>Your Rights</h3>
                        <ul>
                            <li><strong>Right to Access:</strong> You have the right to request copies of your personal data.</li>
                            <li><strong>Right to Rectification:</strong> You have the right to request that we correct any information you believe is inaccurate.</li>
                            <li><strong>Right to Erasure:</strong> You have the right to request that we erase your personal data (Right to be forgotten).</li>
                            <li><strong>Right to Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal data.</li>
                        </ul>
                        <p>
                            To exercise any of these rights, please contact us at privacy@eduprime.com.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
