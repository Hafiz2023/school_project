'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-slate-50/50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
            <Navbar />
            <Hero />
            <Features />
            <CTA />
            <Footer />
        </div>
    );
}
