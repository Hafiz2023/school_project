'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Check, X, HelpCircle } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';

export default function PricingPage() {
    const [isAnnual, setIsAnnual] = useState(true);

    const plans = [
        {
            name: "Starter",
            price: isAnnual ? "199" : "249",
            desc: "Essential management for small schools.",
            features: [
                "Up to 500 Students",
                "Basic Student Records",
                "Attendance Tracking",
                "Fee Management",
                "Email Support"
            ],
            notIncluded: ["Mobile App", "API Access", "Custom Reports"],
            cta: "Start Free Trial",
            popular: false
        },
        {
            name: "Professional",
            price: isAnnual ? "499" : "599",
            desc: "Advanced tools for growing institutions.",
            features: [
                "Up to 2,000 Students",
                "Everything in Starter",
                "Parent & Student Portals",
                "Online Exam System",
                "HR & Payroll",
                "Priority Support"
            ],
            notIncluded: ["API Access", "Custom Branding"],
            cta: "Get Started",
            popular: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            desc: "Full-scale solution for large campuses.",
            features: [
                "Unlimited Students",
                "Everything in Professional",
                "White-labeled Mobile App",
                "API Access & SSO",
                "Dedicated Success Manager",
                "Custom Integrations"
            ],
            notIncluded: [],
            cta: "Contact Sales",
            popular: false
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-20 text-center px-4">
                <Badge className="mb-6 bg-indigo-100 text-indigo-700 hover:bg-indigo-100 px-4 py-1.5">Simple Pricing</Badge>
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
                    Choose the Perfect Plan <br /> for Your School
                </h1>
                <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                    Transparent pricing with no hidden fees. Upgrade or downgrade anytime.
                </p>

                {/* Toggle */}
                <div className="flex items-center justify-center gap-4 mb-16">
                    <span className={`text-sm font-bold ${!isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>Monthly</span>
                    <Switch
                        checked={isAnnual}
                        onCheckedChange={setIsAnnual}
                    />
                    <span className={`text-sm font-bold ${isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
                        Yearly <span className="text-emerald-500 text-xs ml-1">(Save 20%)</span>
                    </span>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="pb-24 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-3 gap-8 items-start">
                        {plans.map((plan, i) => (
                            <div
                                key={i}
                                className={`relative rounded-3xl p-8 bg-white border ${plan.popular ? 'border-indigo-600 shadow-2xl scale-105 z-10' : 'border-slate-200 shadow-xl'} transition-all duration-300 hover:-translate-y-2`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                        Most Popular
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                                <p className="text-slate-500 text-sm mb-6 h-10">{plan.desc}</p>

                                <div className="mb-8">
                                    <span className="text-4xl font-extrabold text-slate-900">${plan.price}</span>
                                    {plan.price !== 'Custom' && <span className="text-slate-500">/mo</span>}
                                </div>

                                <Link href="/contact">
                                    <Button className={`w-full h-12 rounded-xl mb-8 font-bold ${plan.popular ? 'bg-indigo-600 hover:bg-indigo-500' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                                        {plan.cta}
                                    </Button>
                                </Link>

                                <div className="space-y-4">
                                    {plan.features.map((feat, idx) => (
                                        <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                                            <Check size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                                            <span>{feat}</span>
                                        </div>
                                    ))}
                                    {plan.notIncluded.map((feat, idx) => (
                                        <div key={idx} className="flex items-start gap-3 text-sm text-slate-400">
                                            <X size={18} className="text-slate-300 shrink-0 mt-0.5" />
                                            <span>{feat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {[
                            { q: "Can we switch plans later?", a: "Yes, you can upgrade or downgrade your plan at any time. Changes are effective immediately." },
                            { q: "Is there a setup fee?", a: "No, all our plans include free onboarding and setup. Enterprise plans include a dedicated success manager." },
                            { q: "What happens to our data if we cancel?", a: "You own your data. We provide a full export of all student and admin records upon cancellation." },
                            { q: "Do you offer discounts for non-profits?", a: "Yes, we offer special pricing for registered non-profit educational institutions. Contact sales for details." }
                        ].map((faq, i) => (
                            <div key={i} className="bg-slate-50 rounded-2xl p-6 hover:bg-slate-100 transition-colors cursor-pointer">
                                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                    <HelpCircle size={18} className="text-indigo-500" />
                                    {faq.q}
                                </h4>
                                <p className="text-slate-600 pl-7">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
