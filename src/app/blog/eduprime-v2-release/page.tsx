'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
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
    Bookmark,
    MessageCircle,
    Heart,
    Rocket,
    CheckCircle2
} from 'lucide-react';

export default function BlogPost() {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
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
                        <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full">Product Update</span>
                        <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>Jan 15, 2026</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>5 min read</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-8 tracking-tight">
                        Introducing EduPrime v2.0: AI-Powered Analytics & Mobile First
                    </h1>

                    <div className="flex items-center justify-between border-y border-slate-100 py-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-100 p-0.5">
                                <img
                                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
                                    alt="Author"
                                    className="w-full h-full rounded-full bg-slate-100"
                                />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">Alex Chen</h4>
                                <p className="text-sm text-slate-500">Head of Product</p>
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
                    <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5">
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
                            alt="Data Analytics Dashboard"
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8 md:p-12">
                            <div className="flex items-center gap-3 text-white">
                                <div className="p-2 bg-emerald-500 rounded-lg">
                                    <Rocket size={24} />
                                </div>
                                <span className="font-bold text-lg">Official Release</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Article Content */}
                <div className="container mx-auto px-4 max-w-3xl">
                    <article className="prose prose-lg prose-indigo prose-slate mx-auto">
                        <p className="lead text-xl text-slate-600 leading-relaxed mb-8 font-medium">
                            We've listened to feedback from over 500 schools. Today, we're thrilling to unveil EduPrime v2.0—rebuilt from the ground up to be faster, smarter, and ready for the future of education management.
                        </p>

                        <h2>What's New in v2.0?</h2>
                        <p>
                            This update isn't just a facelift. We've introduced three core engines that will fundamentally change how administrators interact with their data.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 not-prose">
                            {[
                                { title: "AI Predictions", desc: "Forecast student dropouts before they happen.", color: "bg-purple-50 text-purple-700" },
                                { title: "Mobile Parent App", desc: "Native iOS and Android apps for instant communication.", color: "bg-blue-50 text-blue-700" },
                                { title: "Smart Finance", desc: "Automated reconciliation and tax generation.", color: "bg-emerald-50 text-emerald-700" },
                                { title: "Global Search", desc: "Find any record in milliseconds alongside universal shortcuts.", color: "bg-amber-50 text-amber-700" }
                            ].map((feature, i) => (
                                <div key={i} className={`p-6 rounded-2xl ${feature.color} transition-transform hover:-translate-y-1`}>
                                    <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                                        <CheckCircle2 size={20} /> {feature.title}
                                    </h3>
                                    <p className="opacity-90 leading-snug">{feature.desc}</p>
                                </div>
                            ))}
                        </div>

                        <h2>Predictive Analytics for Student Success</h2>
                        <p>
                            By leveraging historical data, our new AI model identifies patterns that correlate with academic struggles. This allows teachers to intervene <em>early</em>, rather than waiting for report card day.
                        </p>

                        <blockquote>
                            "The predictive model flagged 15 students who were quietly struggling. We intervened, and 12 of them finished the semester with honors." — <strong>Principal Skinner, Springfield High</strong>
                        </blockquote>

                        <h2>Seamless Mobile Experience</h2>
                        <p>
                            The world is mobile-first. Parents can now pay fees, sign permission slips, and chat with teachers directly from our new mobile app. Push notifications ensure important updates are never missed.
                        </p>

                        <h3>Migration Guide</h3>
                        <p>
                            For existing customers, the migration to v2.0 is automatic and free. Your data will be seamlessly transferred this weekend. Check your email for specific downtime windows.
                        </p>
                    </article>

                    {/* Engagement Actions */}
                    <div className="mt-16 pt-8 border-t border-slate-200">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Thoughts on v2.0?</h3>
                        <div className="flex gap-4">
                            <Button variant="outline" className="gap-2 rounded-full hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600">
                                <Heart size={18} />
                                <span>892 Likes</span>
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
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden text-center">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-white mb-4">Ready to upgrade?</h2>
                            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                                Schedule a specialized demo for your institution to see the new AI features in action.
                            </p>
                            <Link href="/contact">
                                <Button className="rounded-full px-8 py-6 bg-white text-slate-900 hover:bg-slate-100 font-bold text-lg">
                                    Book a Demo
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
