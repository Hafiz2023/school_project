'use client';
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
    Calendar,
    Clock,
    ArrowLeft,
    Share2,
    Facebook,
    Twitter,
    Linkedin,
    Heart,
    Shield,
    Lock,
    Key,
    AlertTriangle
} from 'lucide-react';

export default function BlogPost() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            <Navbar />

            <main className="pt-32 pb-24">
                {/* Article Header */}
                <header className="container mx-auto px-4 max-w-4xl mb-12">
                    <Link href="/blog">
                        <Button variant="ghost" className="pl-0 hover:pl-2 transition-all text-slate-500 hover:text-indigo-600 mb-8 gap-2">
                            <ArrowLeft size={16} /> Back to Blog
                        </Button>
                    </Link>

                    <div className="flex items-center gap-4 mb-6 text-sm font-medium text-slate-500">
                        <span className="bg-red-50 text-red-700 px-3 py-1 rounded-full">Security Alert</span>
                        <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>Nov 05, 2025</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>10 min read</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-8 tracking-tight">
                        The Rising Threat: Cybersecurity Best Practices for Modern Schools
                    </h1>

                    <div className="flex items-center justify-between border-y border-slate-200 py-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-100 p-0.5">
                                <Image
                                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
                                    alt="Author"
                                    className="w-full h-full rounded-full bg-slate-100"
                                />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">Marcus Wright</h4>
                                <p className="text-sm text-slate-500">Chief Security Officer</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button size="icon" variant="ghost" className="rounded-full text-slate-400 hover:text-indigo-600 hover:bg-indigo-50">
                                <Share2 size={18} />
                            </Button>
                        </div>
                    </div>
                </header>

                {/* Featured Image */}
                <div className="container mx-auto px-4 max-w-5xl mb-16">
                    <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                        <Image
                            src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop"
                            alt="Cybersecurity Code"
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-slate-900/50 flex items-center justify-center">
                            <div className="p-4 bg-black/60 backdrop-blur-md rounded-2xl border border-red-500/50 text-white flex items-center gap-4 animate-pulse">
                                <AlertTriangle className="text-red-500" size={32} />
                                <div>
                                    <p className="font-mono text-sm text-red-400">THREAT LEVEL</p>
                                    <p className="font-bold text-xl">CRITICAL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Article Content */}
                <div className="container mx-auto px-4 max-w-3xl">
                    <article className="prose prose-lg prose-red prose-slate mx-auto">
                        <p className="lead text-xl text-slate-600 leading-relaxed mb-8 font-medium">
                            Schools hold vast amounts of sensitive data—from minor students identities to staff financial records. This makes them a prime target for ransomware attacks.
                        </p>

                        <h2>The Vulnerability Gap</h2>
                        <p>
                            Educational institutions often lag behind the corporate sector in network security infrastructure due to budget constraints. However, the cost of a data breach averages $300,000 for small institutions.
                        </p>

                        <h2>Top 3 Vulnerabilities</h2>
                        <ul className="list-none pl-0 space-y-4">
                            <li className="flex gap-4 items-start p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                <div className="bg-red-100 p-2 rounded-lg text-red-600 mt-1"><Key size={20} /></div>
                                <div>
                                    <strong className="block text-slate-900 text-lg">Weak Password Policies</strong>
                                    <span className="text-slate-600">Many schools still use SchoolName123 as default passwords. This is the easiest entry point for attackers.</span>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                <div className="bg-orange-100 p-2 rounded-lg text-orange-600 mt-1"><Lock size={20} /></div>
                                <div>
                                    <strong className="block text-slate-900 text-lg">Unsecured Wi-Fi</strong>
                                    <span className="text-slate-600">Student networks often bridge to administrative networks without proper segmentation.</span>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                <div className="bg-purple-100 p-2 rounded-lg text-purple-600 mt-1"><Shield size={20} /></div>
                                <div>
                                    <strong className="block text-slate-900 text-lg">Phishing</strong>
                                    <span className="text-slate-600">Teachers busy with grading are prone to clicking malicious links disguised as parent emails.</span>
                                </div>
                            </li>
                        </ul>

                        <h2>Immediate Steps to Take</h2>
                        <ol>
                            <li><strong>Enable MFA (Multi-Factor Authentication):</strong> Mandate this for all staff accounts.</li>
                            <li><strong>Regular Backups:</strong> Ensure encrypted, off-site backups are performed daily.</li>
                            <li><strong>Student Training:</strong> Teach digital hygiene as a core subject.</li>
                        </ol>

                        <div className="bg-slate-900 text-slate-300 p-8 rounded-2xl my-10 font-mono text-sm">
                            $ system_check --security<br />
                            &gt; Checking firewalls... [OK]<br />
                            &gt; Checking encryption... [FAIL]<br />
                            &gt; <span className="text-red-400">WARNING: 154 Unsecured records detected.</span>
                        </div>

                        <h2>How EduPrime Helps</h2>
                        <p>
                            EduPrime uses bank-grade encryption (AES-256) for all student data. Our role-based access control (RBAC) ensures that a math teacher cannot access financial records, limiting the blast radius of any compromised account.
                        </p>
                    </article>

                    {/* Engagement Actions */}
                    <div className="mt-16 pt-8 border-t border-slate-200">
                        <div className="flex gap-4">
                            <Button variant="outline" className="gap-2 rounded-full hover:border-red-200 hover:bg-red-50 hover:text-red-600">
                                <Heart size={18} />
                                <span>156 Likes</span>
                            </Button>
                            <div className="flex-1"></div>
                            <Button variant="ghost" size="icon" className="text-slate-500 hover:text-[#1877F2]"><Facebook size={20} /></Button>
                            <Button variant="ghost" size="icon" className="text-slate-500 hover:text-[#1DA1F2]"><Twitter size={20} /></Button>
                            <Button variant="ghost" size="icon" className="text-slate-500 hover:text-[#0A66C2]"><Linkedin size={20} /></Button>
                        </div>
                    </div>
                </div>

                {/* Newsletter CTA */}
                <div className="container mx-auto px-4 mt-20 max-w-4xl">
                    <div className="bg-slate-900 rounded-3xl p-1 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500">
                        <div className="bg-slate-900 rounded-[22px] p-8 md:p-12 text-center text-white h-full relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold mb-4">Secure your school today</h2>
                                <p className="text-slate-300 mb-8 max-w-xl mx-auto">Get a free security audit checklist provided by our expert InfoSec team.</p>
                                <Button className="rounded-full px-8 py-6 bg-white text-slate-900 hover:bg-slate-200 font-bold text-lg">
                                    Download Checklist
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
