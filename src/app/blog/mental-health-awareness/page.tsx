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
    Sun,
    Smile,
    Coffee,
    CloudRain
} from 'lucide-react';

export default function BlogPost() {
    return (
        <div className="min-h-screen bg-[#FDFBF7] font-sans text-slate-900">
            <Navbar />

            <main className="pt-32 pb-24">
                {/* Article Header */}
                <header className="container mx-auto px-4 max-w-4xl mb-12">
                    <Link href="/blog">
                        <Button variant="ghost" className="pl-0 hover:pl-2 transition-all text-slate-500 hover:text-teal-600 mb-8 gap-2">
                            <ArrowLeft size={16} /> Back to Blog
                        </Button>
                    </Link>

                    <div className="flex items-center gap-4 mb-6 text-sm font-medium text-slate-500">
                        <span className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full">Wellness</span>
                        <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>Feb 01, 2026</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>7 min read</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-8 tracking-tight">
                        Prioritizing Mental Health Awareness in Educational Settings
                    </h1>

                    <div className="flex items-center justify-between border-y border-stone-200 py-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-teal-100 p-0.5">
                                <Image
                                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Emma"
                                    alt="Author"
                                    className="w-full h-full rounded-full bg-slate-100"
                                />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">Dr. Emma Thompson</h4>
                                <p className="text-sm text-slate-500">School Psychologist</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <Button size="icon" variant="ghost" className="rounded-full text-slate-400 hover:text-teal-600 hover:bg-teal-50">
                                <Share2 size={18} />
                            </Button>
                        </div>
                    </div>
                </header>

                {/* Featured Image */}
                <div className="container mx-auto px-4 max-w-5xl mb-16">
                    <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-xl">
                        <Image
                            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2031&auto=format&fit=crop"
                            alt="Peaceful nature setting"
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-md p-2 rounded-full">
                            <Sun className="text-yellow-400 animate-spin-slow" size={32} />
                        </div>
                    </div>
                </div>

                {/* Article Content */}
                <div className="container mx-auto px-4 max-w-3xl">
                    <article className="prose prose-lg prose-teal prose-stone mx-auto">
                        <p className="lead text-xl text-stone-600 leading-relaxed mb-8 font-medium">
                            Academic pressure, social anxiety, and the lingering effects of global events have created a mental health crisis in schools. Prioritizing wellness isnt extra its essential for learning.
                        </p>

                        <h2>The Silent Struggle</h2>
                        <p>
                            Often, the quietest students are the ones struggling the most. Its crucial for educators to recognize the signs of burnout and anxiety, which can manifest as irritability, withdrawal, or a sudden drop in grades.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10 not-prose">
                            <div className="bg-teal-50 p-6 rounded-2xl text-center">
                                <Smile className="mx-auto text-teal-600 mb-2" size={32} />
                                <h4 className="font-bold text-teal-900 mb-1">Check-ins</h4>
                                <p className="text-sm text-teal-700">Daily mood meters.</p>
                            </div>
                            <div className="bg-stone-100 p-6 rounded-2xl text-center">
                                <Coffee className="mx-auto text-stone-600 mb-2" size={32} />
                                <h4 className="font-bold text-stone-900 mb-1">Breaks</h4>
                                <p className="text-sm text-stone-700">Scheduled downtime.</p>
                            </div>
                            <div className="bg-amber-50 p-6 rounded-2xl text-center">
                                <CloudRain className="mx-auto text-amber-600 mb-2" size={32} />
                                <h4 className="font-bold text-amber-900 mb-1">Support</h4>
                                <p className="text-sm text-amber-700">Easy access to counselors.</p>
                            </div>
                        </div>

                        <h2>Creating a Culture of Openness</h2>
                        <p>
                            Destigmatizing mental health starts at the top. When administrators and teachers openly discuss stress management and self-care, it gives students permission to do the same.
                        </p>

                        <h2>Practical Strategies for Teachers</h2>
                        <ul>
                            <li><strong>No Homework Weekends:</strong> Give students time to recharge fully.</li>
                            <li><strong>Mindfulness Minutes:</strong> Start class with 60 seconds of deep breathing.</li>
                            <li><strong>Flexible Deadlines:</strong> Allow grace periods for students going through personal crises.</li>
                        </ul>

                        <blockquote className="border-l-4 border-teal-500 pl-4 italic my-8 text-stone-600 bg-white p-6 rounded-r-xl shadow-sm">
                            We cannot teach the head if the heart is broken. Schools must be sanctuaries first, and centers of learning second.
                        </blockquote>

                        <h2>The Role of Technology</h2>
                        <p>
                            While screen time is often blamed, technology can also be a lifeline. Apps for guided meditation, anonymous reporting tools for bullying, and tele-health counseling sessions are becoming vital parts of the school ecosystem.
                        </p>
                    </article>

                    {/* Engagement Actions */}
                    <div className="mt-16 pt-8 border-t border-slate-200">
                        <div className="flex gap-4">
                            <Button variant="outline" className="gap-2 rounded-full hover:border-teal-200 hover:bg-teal-50 hover:text-teal-600">
                                <Heart size={18} />
                                <span>410 Likes</span>
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
                    <div className="bg-[#2D4F48] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-white mb-4">You are not alone</h2>
                            <p className="text-teal-100 mb-8 max-w-xl mx-auto">
                                Join our community of compassionate educators sharing resources on mental wellness.
                            </p>
                            <Button className="rounded-full px-8 py-6 bg-[#C4A484] hover:bg-[#B08E6B] text-white font-bold text-lg">
                                Join Community
                            </Button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
