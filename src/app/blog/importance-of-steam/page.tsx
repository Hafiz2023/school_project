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
    Atom,
    Code,
    Palette,
    Calculator,
    Hammer
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
                        <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full">Curriculum</span>
                        <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>Dec 10, 2025</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>6 min read</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-8 tracking-tight">
                        Why S.T.E.A.M. Education is Critical for Future Innovators
                    </h1>

                    <div className="flex items-center justify-between border-y border-slate-100 py-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-100 p-0.5">
                                <Image
                                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                                    alt="Author"
                                    className="w-full h-full rounded-full bg-slate-100"
                                />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">Prof. Elena Rodriguez</h4>
                                <p className="text-sm text-slate-500">Curriculum Director</p>
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
                    <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=2670&auto=format&fit=crop"
                            alt="Children doing robotics"
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>

                {/* Article Content */}
                <div className="container mx-auto px-4 max-w-3xl">
                    <article className="prose prose-lg prose-indigo prose-slate mx-auto">
                        <p className="lead text-xl text-slate-600 leading-relaxed mb-8 font-medium">
                            The acronym has evolved from STEM to STEAM, adding Arts to the mix. But why? Because in the 21st century, technical skill without creative application is incomplete.
                        </p>

                        <h2>The Components of STEAM</h2>
                        <div className="flex flex-wrap gap-4 my-8 not-prose justify-center">
                            {[
                                { name: 'Science', icon: Atom, bg: 'bg-blue-100 text-blue-700' },
                                { name: 'Technology', icon: Code, bg: 'bg-indigo-100 text-indigo-700' },
                                { name: 'Engineering', icon: Hammer, bg: 'bg-orange-100 text-orange-700' },
                                { name: 'Arts', icon: Palette, bg: 'bg-pink-100 text-pink-700' },
                                { name: 'Math', icon: Calculator, bg: 'bg-green-100 text-green-700' },
                            ].map((item) => (
                                <div key={item.name} className={`flex items-center gap-2 px-4 py-2 rounded-full ${item.bg} font-bold text-sm`}>
                                    <item.icon size={16} /> {item.name}
                                </div>
                            ))}
                        </div>

                        <h2>Bridging the Gap Between Logic and Creativity</h2>
                        <p>
                            Engineers rarely work in a vacuum. They design products for <em>people</em>. The Arts component brings design thinking, empathy, and aesthetic principles into the hard sciences, creating more holistic problem solvers.
                        </p>

                        <h2>Implementing STEAM in the Classroom</h2>
                        <p>
                            It starts with cross-disciplinary projects. Dont just teach geometry; adhere it to architectural design. Dont just teach biology; illustrate it.
                        </p>
                        <ul>
                            <li><strong>Elementary:</strong> Use LEGO robotics to tell a story.</li>
                            <li><strong>Middle School:</strong> Design sustainable housing models.</li>
                            <li><strong>High School:</strong> Develop apps that solve community problems.</li>
                        </ul>

                        <div className="my-10 p-6 border-l-4 border-orange-500 bg-orange-50 pl-6 italic text-lg text-slate-700">
                            Innovators need to be able to look at a problem from multiple angles. STEAM provides the prism.
                        </div>

                        <h2>The Job Market Demand</h2>
                        <p>
                            LinkedIns annual emerging jobs report consistently lists roles that require a blend of technical capability and creative strategy. UX Design, Data Visualization, and Product Management are all pure STEAM careers.
                        </p>
                    </article>

                    {/* Engagement Actions */}
                    <div className="mt-16 pt-8 border-t border-slate-200">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Enjoyed this article?</h3>
                        <div className="flex gap-4">
                            <Button variant="outline" className="gap-2 rounded-full hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600">
                                <Heart size={18} />
                                <span>342 Likes</span>
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
                    <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
                        <h2 className="text-3xl font-bold mb-4">Empower your teachers</h2>
                        <p className="text-indigo-200 mb-8 max-w-xl mx-auto">Get our free  Complete Steam Classroom Guide, PDF when you sign up.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
                            />
                            <Button className="rounded-full px-8 py-6 bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-lg border border-indigo-400">
                                Get Guide
                            </Button>
                        </div>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}
