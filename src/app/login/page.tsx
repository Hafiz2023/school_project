'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Lock, Mail, Loader2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (res.ok) {
                // Login successful
                router.push('/dashboard');
            } else {
                setError(data.message || 'Invalid credentials');
            }
        } catch (err) {
            setError('Something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-md border-none shadow-xl bg-white">
                <CardHeader className="space-y-1 text-center pb-8 pt-8">
                    <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-indigo-200">
                            E
                        </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900">Welcome Back</CardTitle>
                    <CardDescription className="text-slate-500">
                        Sign in to EduPrime Dashboard
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700" htmlFor="email">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                                <Input
                                    id="email"
                                    placeholder="name@school.com"
                                    className="pl-10 h-10 border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium text-slate-700" htmlFor="password">Password</label>
                                <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500 font-medium">Forgot password?</a>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                                <Input
                                    id="password"
                                    placeholder="••••••••"
                                    className="pl-10 h-10 border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                                    type="password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    required
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="p-3 bg-red-50 border border-red-100 rounded-md text-red-600 text-sm">
                                {error}
                            </div>
                        )}

                        <Button
                            className="w-full h-10 bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-md shadow-indigo-100 transition-all duration-200"
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Signing in...
                                </>
                            ) : (
                                'Sign In'
                            )}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="text-center pb-8 pt-0">
                    <div className="text-sm text-slate-500 w-full">
                        Don't have an account? <Link href="/register" className="text-indigo-600 hover:text-indigo-500 font-medium">Register</Link>
                    </div>
                </CardFooter>
            </Card>

            <div className="absolute top-8 left-8">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
