'use client';
import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, FileText, Video, Download, Users, Lightbulb, ArrowRight, PlayCircle } from 'lucide-react';

export default function ResourcesPage() {
    const resources = [
        {
            category: "E-Book",
            title: "Digital Transformation in Education 2025",
            desc: "A comprehensive guide to modernizing your school's infrastructure and administration.",
            icon: BookOpen,
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            category: "Whitepaper",
            title: "Student Data Privacy & Security Report",
            desc: "Understanding compliance (FERPA/COPPA) and best practices for data protection.",
            icon: FileText,
            color: "text-indigo-600",
            bg: "bg-indigo-50"
        },
        {
            category: "Video Course",
            title: "EduPrime Admin Certification",
            desc: "Master the EduPrime dashboard with this 4-hour video training series for administrators.",
            icon: Video,
            color: "text-rose-600",
            bg: "bg-rose-50"
        },
        {
            category: "Case Study",
            title: "How Riverdale High Saved 30% on Admin Costs",
            desc: "Real-world analysis of how automation improved efficiency and reduced overhead.",
            icon: Lightbulb,
            color: "text-amber-600",
            bg: "bg-amber-50"
        },
        {
            category: "Template",
            title: "School Policy Handbook Template",
            desc: "customizable Word document for creating your institution's code of conduct.",
            icon: Download,
            color: "text-emerald-600",
            bg: "bg-emerald-50"
        },
        {
            category: "Webinar",
            title: "The Future of Hybrid Learning",
            desc: "Recording of our recent panel discussion with top education technology experts.",
            icon: PlayCircle,
            color: "text-purple-600",
            bg: "bg-purple-50"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50 rounded-bl-full -mr-20 -mt-20 z-0"></div>
                <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
                    <Badge className="mb-6 bg-indigo-100 text-indigo-700 hover:bg-indigo-100 px-4 py-1.5">Resource Hub</Badge>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                        Empower Your School with <br /><span className="text-indigo-600">Knowledge & Tools</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-10">
                        Everything you need to master EduPrime and stay ahead in the world of educational technology.
                    </p>

                    <div className="flex justify-center gap-4">
                        <div className="relative w-full max-w-md">
                            <input
                                type="text"
                                placeholder="Search resources, guides, tutorials..."
                                className="w-full h-14 pl-6 pr-14 rounded-full border-2 border-slate-200 focus:outline-none focus:border-indigo-500 shadow-sm"
                            />
                            <Button size="icon" className="absolute right-2 top-2 rounded-full h-10 w-10 bg-indigo-600 hover:bg-indigo-500">
                                <ArrowRight size={18} />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resources Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {resources.map((res, i) => (
                            <Card key={i} className="hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-slate-100">
                                <CardHeader>
                                    <div className={`w-12 h-12 rounded-xl ${res.bg} ${res.color} flex items-center justify-center mb-4`}>
                                        <res.icon size={24} />
                                    </div>
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{res.category}</div>
                                    <CardTitle className="text-xl text-slate-900">{res.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base text-slate-600">
                                        {res.desc}
                                    </CardDescription>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="ghost" className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 p-0 font-semibold">
                                        Download / View <ArrowRight size={16} className="ml-2" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Help & Support Strip */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold mb-4">Need Technical Support?</h2>
                            <p className="text-slate-400 text-lg mb-8">
                                Our dedicated support team is available 24/7 to help you with any issues or questions about your account.
                            </p>
                            <div className="flex gap-4">
                                <Button className="bg-indigo-600 hover:bg-indigo-500 text-white border-0">
                                    Visit Help Center
                                </Button>
                                <Button variant="outline" className="text-white border-slate-600 hover:bg-slate-800 hover:text-white">
                                    Submit Ticket
                                </Button>
                            </div>
                        </div>
                        <div className="md:w-1/2 grid grid-cols-2 gap-4">
                            <div className="bg-slate-800 p-6 rounded-2xl">
                                <BookOpen className="text-indigo-400 mb-4" size={32} />
                                <h4 className="font-bold mb-2">Documentation</h4>
                                <p className="text-sm text-slate-400">Detailed API docs and integration guides.</p>
                            </div>
                            <div className="bg-slate-800 p-6 rounded-2xl">
                                <Users className="text-indigo-400 mb-4" size={32} />
                                <h4 className="font-bold mb-2">Community</h4>
                                <p className="text-sm text-slate-400">Join 500+ school admins in our forum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
