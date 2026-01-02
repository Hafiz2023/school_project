'use client';
import React from 'react';
import {
    Users,
    CalendarCheck,
    BarChart3,
    CreditCard,
    School,
    ShieldCheck
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';

export default function Features() {
    return (
        <section id="features" className="py-24 bg-white relative">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-indigo-600 font-bold tracking-wider text-sm uppercase mb-2 block">Powerful Modules</span>
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Everything You Need to Run a School</h2>
                    <p className="text-lg text-slate-600">
                        A complete suite of applications designed to work together seamlessly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Users,
                            title: "Student Information",
                            desc: "360° student profiles with academic history, health records, and documents.",
                            color: "text-blue-600",
                            bg: "bg-blue-50"
                        },
                        {
                            icon: CalendarCheck,
                            title: "Smart Attendance",
                            desc: "Automated attendance tracking with instant SMS notifications to parents.",
                            color: "text-purple-600",
                            bg: "bg-purple-50"
                        },
                        {
                            icon: BarChart3,
                            title: "Exam & Grading",
                            desc: "Flexible grading systems, automated report cards, and performance analytics.",
                            color: "text-indigo-600",
                            bg: "bg-indigo-50"
                        },
                        {
                            icon: CreditCard,
                            title: "Fee Management",
                            desc: "Online fee collection, automated invoicing, and financial reporting.",
                            color: "text-emerald-600",
                            bg: "bg-emerald-50"
                        },
                        {
                            icon: School,
                            title: "Library & Inventory",
                            desc: "Track book circulation, asset management, and digital resources.",
                            color: "text-orange-600",
                            bg: "bg-orange-50"
                        },
                        {
                            icon: ShieldCheck,
                            title: "Data Security",
                            desc: "Role-based access control, encrypted data, and automated daily backups.",
                            color: "text-rose-600",
                            bg: "bg-rose-50"
                        }
                    ].map((feature, i) => (
                        <Card key={i} className="group hover:shadow-2xl hover:shadow-indigo-900/10 transition-all duration-300 border-slate-100 hover:border-indigo-100 hover:-translate-y-1 overflow-hidden relative">
                            <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-50 transition-opacity ${feature.bg} -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-500`}></div>
                            <CardHeader>
                                <div className={`w-14 h-14 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300 shadow-sm`}>
                                    <feature.icon size={28} />
                                </div>
                                <CardTitle className="text-xl group-hover:text-indigo-600 transition-colors">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base leading-relaxed text-slate-600">
                                    {feature.desc}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
