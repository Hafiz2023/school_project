'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, ArrowRight, Heart, Zap, Globe, Coffee, School, ChevronRight } from 'lucide-react';

export default function CareersPage() {
    const jobs = [
        {
            title: "Senior Full Stack Engineer",
            department: "Engineering",
            location: "Remote / New York",
            type: "Full-time",
            tags: ["React", "Node.js", "TypeScript"]
        },
        {
            title: "Product Designer",
            department: "Design",
            location: "London, UK",
            type: "Full-time",
            tags: ["Figma", "UX/UI", "Design Systems"]
        },
        {
            title: "Customer Success Manager",
            department: "Sales",
            location: "Remote",
            type: "Full-time",
            tags: ["SaaS", "Education", "Client Relations"]
        },
        {
            title: "DevOps Engineer",
            department: "Engineering",
            location: "Berlin, Germany",
            type: "Full-time",
            tags: ["AWS", "Docker", "Kubernetes"]
        }
    ];

    const benefits = [
        { icon: Heart, title: "Health & Wellness", desc: "Comprehensive health insurance for you and your family." },
        { icon: Zap, title: "Flexible Work", desc: "Work from anywhere. We value output over hours." },
        { icon: Globe, title: "Remote-First", desc: "We are a distributed team with a global mindset." },
        { icon: Coffee, title: "Learning Budget", desc: "$1,500 annual stipend for courses and conferences." },
    ];

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
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-50/50 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/4"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-50/50 rounded-full blur-3xl -z-10 translate-y-1/2 -translate-x-1/4"></div>

                <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
                    <Badge className="mb-6 bg-indigo-100 text-indigo-700 hover:bg-indigo-100 px-4 py-1.5 text-sm uppercase tracking-wide">We're Hiring!</Badge>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight">
                        Build the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Education</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto">
                        Join us on our mission to empower schools, teachers, and students with technology that just works.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="#positions">
                            <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-indigo-600 hover:bg-indigo-500 shadow-xl shadow-indigo-200 w-full sm:w-auto">
                                View Open Roles
                            </Button>
                        </a>
                        <Link href="/about">
                            <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-slate-300 text-slate-700 hover:bg-slate-50 w-full sm:w-auto">
                                Learn About Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Gallery / Culture Section */}
            <section className="py-20 bg-white border-y border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="flex items-center gap-2 text-indigo-600 font-bold mb-4 uppercase tracking-wider text-sm">
                                <span className="w-8 h-[2px] bg-indigo-600"></span> Our Culture
                            </div>
                            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">Growth, Impact, & <br /> Collaboration.</h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    At EduPrime, we believe that the best work happens when you enjoy what you do.
                                    Our culture is built on <strong className="text-slate-900">transparency</strong>, <strong className="text-slate-900">autonomy</strong>, and <strong className="text-slate-900">continuous learning</strong>.
                                </p>
                                <p>
                                    Whether it's our annual company retreat, weekly "Show & Tell" sessions, or
                                    collaborative hackathons, we find ways to connect and grow together.
                                </p>
                                <div className="pt-4">
                                    <Link href="/about" className="inline-flex items-center text-indigo-600 font-bold hover:gap-2 transition-all group">
                                        Read our story <ChevronRight size={20} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 relative">
                            {/* Decorative blob */}
                            <div className="absolute inset-0 bg-indigo-100/30 blur-3xl -z-10 rounded-full transform scale-110"></div>

                            <div className="space-y-4 md:translate-y-12">
                                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-500">
                                    <Image
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
                                        alt="Team collaboration"
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                </div>
                                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-500">
                                    <Image
                                        src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop"
                                        alt="Presentation"
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-500">
                                    <Image
                                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop"
                                        alt="Office meeting"
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                </div>
                                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-500">
                                    <Image
                                        src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2574&auto=format&fit=crop"
                                        alt="Happy employee"
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-slate-50 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Work at EduPrime?</h2>
                        <p className="text-slate-600 text-lg">
                            We take care of our team so they can focus on what they do best.
                            Exceptional benefits for exceptional people.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center mb-6 transition-colors duration-300 shadow-2xl shadow-indigo-100">
                                    <benefit.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions Section */}
            <section id="positions" className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Open Positions</h2>
                            <p className="text-slate-600 text-lg">Come build the future of education with us.</p>
                        </div>
                        <Button variant="outline" className="rounded-full">View all departments</Button>
                    </div>

                    <div className="space-y-4">
                        {jobs.map((job, idx) => (
                            <Card key={idx} className="hover:border-indigo-400 hover:shadow-lg transition-all cursor-pointer group border-slate-200 overflow-hidden">
                                <CardContent className="p-0 flex flex-col md:flex-row">
                                    <div className="p-8 flex-grow">
                                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">{job.title}</h3>
                                                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500 font-medium">
                                                    <span className="flex items-center gap-1.5"><MapPin size={16} className="text-indigo-500" /> {job.location}</span>
                                                    <span className="flex items-center gap-1.5"><Clock size={16} className="text-indigo-500" /> {job.type}</span>
                                                    <span className="flex items-center gap-1.5 text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">{job.department}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {job.tags.map(tag => (
                                                <Badge key={tag} variant="secondary" className="font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 border-none">{tag}</Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="bg-slate-50 p-8 flex items-center justify-center border-l border-slate-100 w-full md:w-auto min-w-[150px] group-hover:bg-indigo-50 transition-colors">
                                        <Button className="group-hover:scale-110 transition-transform rounded-full w-12 h-12 p-0 flex items-center justify-center bg-white text-indigo-600 border border-indigo-100 shadow-sm hover:bg-indigo-600 hover:text-white">
                                            <ArrowRight size={20} />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-20 text-center bg-slate-50 rounded-3xl p-12 border border-slate-100">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Don't see a role that fits?</h3>
                        <p className="text-slate-600 mb-8 max-w-lg mx-auto">We are always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future openings.</p>
                        <Button variant="outline" size="lg" className="rounded-full bg-white hover:bg-slate-50 border-slate-300">Email us your resume</Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
