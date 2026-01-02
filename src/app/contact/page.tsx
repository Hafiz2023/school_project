import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 bg-slate-50 pt-20">

                <div className="container mx-auto px-4 py-20">
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                        <div className="bg-slate-900 p-10 text-white md:w-2/5 flex flex-col justify-between">
                            <div>
                                <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                                <p className="text-slate-400 mb-8">Have questions? We'd love to hear from you.</p>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <Mail className="text-indigo-400" />
                                        <span>support@eduprime.com</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Phone className="text-indigo-400" />
                                        <span>+1 (555) 123-4567</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <MapPin className="text-indigo-400" />
                                        <span>123 Education Lane<br />Tech City, TC 90210</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12">
                                <p className="text-sm text-slate-500">© 2025 EduPrime Inc.</p>
                            </div>
                        </div>

                        <div className="p-10 md:w-3/5">
                            <form className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">First Name</label>
                                        <Input placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">Last Name</label>
                                        <Input placeholder="Doe" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Email</label>
                                    <Input type="email" placeholder="john@school.edu" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Message</label>
                                    <textarea className="w-full min-h-[120px] rounded-md border border-slate-200 p-3 text-sm focus:outline-none focus:border-indigo-500" placeholder="How can we help?"></textarea>
                                </div>
                                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Send Message</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
