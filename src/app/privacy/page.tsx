'use client';
import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { School, Shield, Lock, Eye, Server, Globe } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
            {/* Navbar */}
            <nav className="fixed w-full z-50 top-0 left-0 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all">
                <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="bg-indigo-600 text-white p-2 rounded-lg shadow-lg group-hover:scale-105 transition-transform">
                            <School size={24} />
                        </div>
                        <span className="text-xl font-bold text-slate-900">EduPrime</span>
                    </Link>
                    <div className="flex gap-4">
                        <Link href="/contact">
                            <Button className="rounded-full bg-slate-900 hover:bg-slate-800 text-white px-6 shadow-md">
                                Contact Privacy Team
                            </Button>
                        </Link>
                    </div>
                </div>
            </nav>

            <main className="pt-32 pb-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-emerald-200">
                            Effective Date: January 1, 2026
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Privacy Policy</h1>
                        <p className="text-xl text-slate-600">
                            We are committed to protecting the privacy of students, educators, and institutions.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 space-y-12">

                        {/* Section 1 */}
                        <section>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                                    <Shield size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">1. Commitment to Student Privacy</h2>
                            </div>
                            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                                <p>
                                    At EduPrime, we treat student data with the highest level of confidentiality and security. We comply with major educational privacy laws including <strong>FERPA</strong> (Family Educational Rights and Privacy Act) and <strong>COPPA</strong> (Children's Online Privacy Protection Act).
                                </p>
                                <p className="mt-4">
                                    We pledge that we will never sell student data to third parties for advertising purposes. Student data is used solely for educational purposes and improving our platform's functionality.
                                </p>
                            </div>
                        </section>

                        <hr className="border-slate-100" />

                        {/* Section 2 */}
                        <section>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                                    <DatabaseIcon />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">2. Information We Collect</h2>
                            </div>
                            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                                <p className="mb-2">We collect the following types of information to provide our services:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><strong>Institutional Data:</strong> School names, addresses, billing information, and administrator contact details.</li>
                                    <li><strong>Student Records:</strong> Names, IDs, grades, attendance records, exam results, and course schedules.</li>
                                    <li><strong>Educator Data:</strong> Teacher profiles, employment details, and payroll information (if applicable).</li>
                                    <li><strong>Usage Logs:</strong> Information about how users interact with our dashboard to improve system performance.</li>
                                </ul>
                            </div>
                        </section>

                        <hr className="border-slate-100" />

                        {/* Section 3 */}
                        <section>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                                    <Lock size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">3. Data Security Measures</h2>
                            </div>
                            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                                <p>
                                    We employ bank-grade security protocols to protect your institutional data:
                                </p>
                                <div className="grid md:grid-cols-2 gap-4 mt-6">
                                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                        <h4 className="font-bold text-slate-900 mb-1">Encryption</h4>
                                        <p className="text-sm">Data is encrypted in transit (TLS 1.3) and at rest (AES-256).</p>
                                    </div>
                                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                        <h4 className="font-bold text-slate-900 mb-1">Access Control</h4>
                                        <p className="text-sm">Strict role-based access ensures only authorized personnel can view sensitive records.</p>
                                    </div>
                                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                        <h4 className="font-bold text-slate-900 mb-1">Backups</h4>
                                        <p className="text-sm">Automated daily backups stored in geographically distributed secure servers.</p>
                                    </div>
                                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                        <h4 className="font-bold text-slate-900 mb-1">Audits</h4>
                                        <p className="text-sm">Regular third-party security audits and penetration testing.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <hr className="border-slate-100" />

                        {/* Section 4 */}
                        <section>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-orange-50 text-orange-600 rounded-xl">
                                    <Globe size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">4. Third-Party Sharing</h2>
                            </div>
                            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                                <p>
                                    We do not share your data with third parties except as necessary to provide our services (e.g., cloud hosting providers like AWS, payment processors like Stripe). These partners are vetted for security and are contractually bound to protect your data.
                                </p>
                            </div>
                        </section>
                    </div>

                    <div className="mt-12 text-center text-slate-500 text-sm">
                        <p>Questions about our privacy practices? Email <a href="mailto:privacy@eduprime.com" className="text-indigo-600 hover:underline">privacy@eduprime.com</a></p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

// Icon component helper
function DatabaseIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s 9-1.34 9-3V5" /></svg>
    )
}
