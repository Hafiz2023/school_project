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
    Heart
} from 'lucide-react';

export default function BlogPost() {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <Navbar />

            {/* Progress Bar (Optional Visual Flair) */}
            <div className="fixed top-20 left-0 w-full h-1 z-40 bg-slate-100">
                <div className="h-full bg-indigo-600 w-[40%]"></div>
            </div>

            <main className="pt-32 pb-24">
                {/* Article Header */}
                <header className="container mx-auto px-4 max-w-4xl mb-12">
                    <Link href="/blog">
                        <Button variant="ghost" className="pl-0 hover:pl-2 transition-all text-slate-500 hover:text-indigo-600 mb-8 gap-2">
                            <ArrowLeft size={16} /> Back to Blog
                        </Button>
                    </Link>

                    <div className="flex items-center gap-4 mb-6 text-sm font-medium text-slate-500">
                        <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full">EdTech Trends</span>
                        <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>Oct 24, 2025</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>8 min read</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-8 tracking-tight">
                        The Future of Learning: 10 Proven Strategies to Improve Student Engagement
                    </h1>

                    <div className="flex items-center justify-between border-y border-slate-100 py-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-100 p-0.5">
                                <Image
                                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                                    alt="Author"
                                    className="w-full h-full rounded-full bg-slate-100"
                                />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">Dr. Sarah Johnson</h4>
                                <p className="text-sm text-slate-500">Education Specialist</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <Button size="icon" variant="ghost" className="rounded-full text-slate-400 hover:text-indigo-600 hover:bg-indigo-50">
                                <Share2 size={18} />
                            </Button>
                            <Button size="icon" variant="ghost" className="rounded-full text-slate-400 hover:text-indigo-600 hover:bg-indigo-50">
                                <Bookmark size={18} />
                            </Button>
                        </div>
                    </div>
                </header>

                {/* Featured Image */}
                <div className="container mx-auto px-4 max-w-5xl mb-16">
                    <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2604&auto=format&fit=crop"
                            alt="Students engaged in learning"
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>

                {/* Article Content */}
                <div className="container mx-auto px-4 max-w-3xl">
                    <article className="prose prose-lg prose-indigo prose-slate mx-auto">
                        <p className="lead text-xl text-slate-600 leading-relaxed mb-8 font-medium">
                            Engagement is the holy grail of education. When students are engaged, they learn faster, retain more, and actually enjoy the process. But in a world of endless distractions, how do we keep them focused?
                        </p>

                        <h2>1. Gamification is Not Just a Buzzword</h2>
                        <p>
                            Integrating game mechanics into learning—leaderboards, badges, and levels—triggers the brains reward system. Its not about turning school into a video game, but using the psychology of progress to motivate learners.
                        </p>

                        <h2>2. The Flipped Classroom Model</h2>
                        <p>
                            Traditional lectures are moving online, making room for active problem-solving in class. This shift empowers students to take ownership of their learning pace.
                        </p>

                        <div className="my-12 p-8 bg-indigo-50 rounded-2xl border border-indigo-100">
                            <h3 className="text-indigo-900 mt-0">Key Statistic</h3>
                            <p className="mb-0 text-indigo-700">
                                Schools implementing active learning strategies see a <span className="font-bold">23% increase</span> in test scores and a <span className="font-bold">40% reduction</span> in failure rates.
                            </p>
                        </div>

                        <h2>3. Technology as an Enabler, Not a Crutch</h2>
                        <p>
                            Using tools like <strong>EduPrime</strong> to streamline administrative tasks frees up teachers to focus on what matters most: connecting with students. Automation in attendance and grading allows for more personalized feedback loops.
                        </p>

                        <h2>4. Project-Based Learning (PBL)</h2>
                        <p>
                            Connect learning to the real world. Instead of abstract math problems, have students design a budget for a local charity. Real-world stakes drive real-world engagement.
                        </p>

                        <figure className="my-10">
                            <Image
                                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1740&auto=format&fit=crop"
                                alt="Collaborative Learning"
                                className="rounded-xl shadow-lg w-full"
                            />
                            <figcaption className="text-center text-sm text-slate-500 mt-3">
                                Collaborative learning encourages peer-to-peer instruction.
                            </figcaption>
                        </figure>

                        <h2>5. Social-Emotional Learning (SEL)</h2>
                        <p>
                            Students cant learn if they dont feel safe. Integrating SEL checks into your daily routine helps build a classroom community that supports academic risk-taking.
                        </p>

                        <hr className="my-12 border-slate-200" />

                        <h3>Conclusion</h3>
                        <p>
                            Improving student engagement is an ongoing journey, not a destination. By combining modern ed-tech tools with timeless pedagogical strategies, we can create classrooms that spark curiosity and foster a lifelong love for learning.
                        </p>
                    </article>

                    {/* Engagement Actions */}
                    <div className="mt-16 pt-8 border-t border-slate-200">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Was this article helpful?</h3>
                        <div className="flex gap-4">
                            <Button variant="outline" className="gap-2 rounded-full hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600">
                                <Heart size={18} />
                                <span>245 Likes</span>
                            </Button>
                            <Button variant="outline" className="gap-2 rounded-full hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600">
                                <MessageCircle size={18} />
                                <span>18 Comments</span>
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
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-white mb-4">Subscribe for more insights</h2>
                            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                                Join 5,000+ educators receiving weekly tips on school management and student success.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
                                />
                                <Button className="rounded-full px-8 py-6 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-lg">
                                    Subscribe
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
