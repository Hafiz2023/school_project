'use client';
import React from 'react';

import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Zap, Users, Globe, BarChart3, Smartphone } from 'lucide-react';

export default function FeaturesPage() {
    const featuresList = [
        {
            title: "Student Information System (SIS)",
            desc: "The heartbeat of your institution. Manage the entire student lifecycle from admission to graduation in one secure digital vault.",
            points: ["Digital Admission Forms", "Student Profiles & Health Records", "Alumni Management", "Transfer Certificates"],
            img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2670&auto=format&fit=crop",
            icon: Users
        },
        {
            title: "Smart Attendance & Timetable",
            desc: "Say goodbye to manual registers. Track attendance via biometrics, RFID, or mobile app and automate class scheduling.",
            points: ["Biometric Integration", "Real-time SMS Alerts to Parents", "Auto-Timetable Generator", "Leave Management"],
            img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2604&auto=format&fit=crop",
            icon: Zap
        },
        {
            title: "Financial Management",
            desc: "Complete fee automation. Generate invoices, track pending payments, and manage staff payroll with tax calculations.",
            points: ["Online Fee Collection", "Automated Invoicing", "Expense Tracking", "Payroll & Payslips"],
            img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2626&auto=format&fit=crop",
            icon: BarChart3
        },
        {
            title: "LMS & Online Exams",
            desc: "Extend learning beyond the classroom. Conduct online classes, share assignments, and hold secure computer-based exams.",
            points: ["Course Content Management", "Online Quiz Engine", "Assignment Submission", "Automated Grading"],
            img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2574&auto=format&fit=crop",
            icon: Globe
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
            <Navbar />

            {/* Hero */}
            <section className="pt-40 pb-20 bg-slate-50 text-center">
                <div className="container mx-auto px-4 max-w-4xl">
                    <Badge className="mb-6 bg-indigo-100 text-indigo-700 hover:bg-indigo-100 px-4 py-1.5">Feature Tour</Badge>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-8 leading-tight">
                        One Platform. <br /> <span className="text-indigo-600">Infinite Possibilities.</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Discover the modules that make EduPrime the worlds most preferred school operating system.
                    </p>
                </div>
            </section>

            {/* Feature Blocks */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    {featuresList.map((feat, i) => (
                        <div key={i} className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 mb-32 last:mb-0 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="md:w-1/2 relative group">
                                <div className={`absolute inset-0 bg-indigo-600 rounded-3xl rotate-2 opacity-10 group-hover:rotate-6 transition-transform duration-500`}></div>
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video">
                                    <Image
                                        src={feat.img}
                                        alt={feat.title}
                                        width={800}
                                        height={600}
                                        className="w-full h-full object-cover"
                                        unoptimized
                                    />
                                </div>
                            </div>

                            <div className="md:w-1/2">
                                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                                    <feat.icon size={24} />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">{feat.title}</h2>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    {feat.desc}
                                </p>
                                <ul className="space-y-4">
                                    {feat.points.map((point, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <CheckCircle2 size={20} className="text-emerald-500" />
                                            <span className="font-medium text-slate-800">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Mobile App Section */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-900/50 to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2">
                            <h2 className="text-4xl font-bold mb-6">School in Your Pocket</h2>
                            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                                The EduPrime mobile app keeps parents, teachers, and students connected on the go. View homework, pay fees, and track bus location in real-time.
                            </p>
                            <div className="flex gap-4">
                                <Button className="h-14 px-8 bg-white text-slate-900 hover:bg-slate-100 font-bold rounded-xl flex items-center gap-2">
                                    <Smartphone size={20} /> App Store
                                </Button>
                                <Button variant="outline" className="h-14 px-8 border-slate-600 hover:bg-slate-800 text-white font-bold rounded-xl flex items-center gap-2">
                                    <Smartphone size={20} /> Play Store
                                </Button>
                            </div>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            {/* Abstract Phone Mockup using CSS shapes */}
                            <div className="w-[300px] h-[600px] border-8 border-slate-800 bg-slate-950 rounded-[3rem] shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-slate-800 rounded-b-xl z-20"></div>
                                <div className="relative z-10 h-full w-full bg-slate-900 flex items-center justify-center text-slate-700">
                                    <span className="text-center">App Screenshot <br /> Placeholder</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
