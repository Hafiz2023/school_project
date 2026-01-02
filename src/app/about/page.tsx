'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { School, CheckCircle2, Globe, Users, Award, Heart, ArrowRight } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-50 to-transparent -z-10"></div>
                <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
                    <Badge className="mb-6 bg-indigo-100 text-indigo-700 hover:bg-indigo-100 px-4 py-1.5 text-sm uppercase tracking-wider">Our Mission</Badge>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 leading-tight">
                        We are building the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Global OS for Education</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        EduPrime removes the administrative burden from schools, allowing educators to focus on what they do best: teaching the next generation.
                    </p>
                </div>
            </section>

            {/* Image Grid / "Our Story" */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
                        {/* Main Large Image */}
                        <div className="md:col-span-8 h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl relative group">
                            <Image
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
                                alt="Team collaboration"
                                width={1200}
                                height={800}
                                unoptimized
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 text-white">
                                <h3 className="text-2xl font-bold mb-2">Collaboration at our Core</h3>
                                <p className="opacity-90">Our diverse team working together to solve complex problems.</p>
                            </div>
                        </div>

                        {/* Smaller Side Images */}
                        <div className="md:col-span-4 flex flex-col gap-8">
                            <div className="h-[230px] rounded-3xl overflow-hidden shadow-xl relative group">
                                <Image
                                    src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=2574&auto=format&fit=crop"
                                    alt="Modern Office"
                                    width={600}
                                    height={400}
                                    unoptimized
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="bg-indigo-600 rounded-3xl p-8 flex flex-col justify-center h-[238px] text-white shadow-xl">
                                <span className="text-5xl font-bold mb-2">500+</span>
                                <span className="text-indigo-200 font-medium text-lg">Partner Schools Worldwide</span>
                                <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
                                    Join the movement <ArrowRight size={16} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2">2024</div>
                            <div className="text-slate-400">Founded</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2">1M+</div>
                            <div className="text-slate-400">Students Managed</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2">50+</div>
                            <div className="text-slate-400">Team Members</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2">15</div>
                            <div className="text-slate-400">Countries</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Values</h2>
                        <p className="text-slate-600">The principles that guide every decision we make.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Users,
                                title: "Students First",
                                desc: "Every feature we build is ultimately designed to improve the student learning experience."
                            },
                            {
                                icon: Award,
                                title: "Excellence",
                                desc: "We don't settle for 'good enough'. We aim for pixel-perfect design and rock-solid reliability."
                            },
                            {
                                icon: Heart,
                                title: "Empathy",
                                desc: "We listen deeply to teachers and administrators to understand their real-world challenges."
                            }
                        ].map((val, i) => (
                            <Card key={i} className="border-none shadow-lg bg-slate-50/50 hover:bg-white transition-colors">
                                <CardContent className="p-8 text-center">
                                    <div className="w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto mb-6">
                                        <val.icon size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">{val.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{val.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Meet Leadership</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: "Sarah Connor", role: "CEO & Co-Founder", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop" },
                            { name: "Michael Chang", role: "CTO", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop" },
                            { name: "Emily Blunt", role: "Head of Product", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2561&auto=format&fit=crop" },
                            { name: "David Kim", role: "VP of Sales", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop" }
                        ].map((member, i) => (
                            <div key={i} className="group">
                                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 shadow-md bg-slate-200">
                                    <Image
                                        src={member.img}
                                        alt={member.name}
                                        width={400}
                                        height={533}
                                        unoptimized
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                                <p className="text-indigo-600 text-sm font-medium">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-4xl font-bold text-slate-900 mb-8">Join us on our journey</h2>
                    <p className="text-xl text-slate-600 mb-10">
                        We are always looking for talented individuals to help us shape the future of education.
                    </p>
                    <Link href="/careers">
                        <Button size="lg" className="h-14 px-10 text-lg bg-indigo-600 hover:bg-indigo-500 text-white rounded-full shadow-xl">
                            View Open Positions
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
