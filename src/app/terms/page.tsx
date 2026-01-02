'use client';
import React from 'react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import { AlertCircle, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
            <Navbar />

            <main className="pt-32 pb-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <Badge className="mb-4 bg-slate-100 text-slate-700 hover:bg-slate-100 border-slate-200">
                            Last Revised: January 1, 2026
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Terms of Service</h1>
                        <p className="text-xl text-slate-600">
                            Please read these terms carefully before using the EduPrime platform.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 space-y-12">

                        {/* Section 1 */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 text-sm">1</span>
                                1. Subscription & License
                            </h2>
                            <div className="pl-11 prose prose-slate max-w-none text-slate-600 leading-relaxed">
                                <p>
                                    EduPrime grants your institution a non-exclusive, non-transferable, limited license to access and use our software service. This license is valid only for the duration of your active subscription. You agree to pay all fees associated with your selected plan (Starter, Professional, or Enterprise).
                                </p>
                            </div>
                        </section>

                        <hr className="border-slate-100" />

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 text-sm">2</span>
                                2. Acceptable Use Policy
                            </h2>
                            <div className="pl-11 prose prose-slate max-w-none text-slate-600 leading-relaxed">
                                <p className="mb-4">You agree not to misuse the EduPrime services. Prohibited actions include:</p>
                                <ul className="space-y-3">
                                    <li className="flex gap-3">
                                        <AlertCircle size={20} className="text-rose-500 shrink-0" />
                                        <span>Attempting to probe, scan, or test the vulnerability of our system or network.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <AlertCircle size={20} className="text-rose-500 shrink-0" />
                                        <span>Uploading any content that contains viruses, malware, or illegal materials.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <AlertCircle size={20} className="text-rose-500 shrink-0" />
                                        <span>Using the platform to send unsolicited bulk emails (SPAM).</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <hr className="border-slate-100" />

                        {/* Section 3 */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 text-sm">3</span>
                                3. Service Level Agreement (SLA)
                            </h2>
                            <div className="pl-11 prose prose-slate max-w-none text-slate-600 leading-relaxed">
                                <p>
                                    We strive for <strong>99.9% uptime</strong>. Scheduled maintenance will be communicated at least 48 hours in advance. In the event of significant downtime, customers on Professional and Enterprise plans may be eligible for service credits as defined in their specific contracts.
                                </p>
                            </div>
                        </section>

                        <hr className="border-slate-100" />

                        {/* Section 4 */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 text-sm">4</span>
                                4. Limitation of Liability
                            </h2>
                            <div className="pl-11 prose prose-slate max-w-none text-slate-600 leading-relaxed">
                                <p>
                                    In no event shall EduPrime be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
                                </p>
                            </div>
                        </section>
                    </div>

                    <div className="mt-12 text-center">
                        <div className="inline-flex items-center justify-center p-6 bg-indigo-50 rounded-2xl">
                            <FileText size={32} className="text-indigo-600 mb-2 mr-4" />
                            <div className="text-left">
                                <h3 className="font-bold text-slate-900">Need a signed contract?</h3>
                                <p className="text-sm text-slate-600">Enterprise customers can request a custom MSA. <a href="/contact" className="text-indigo-600 font-semibold hover:underline">Contact Sales</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
