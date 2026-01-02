'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Calendar, Search, School } from 'lucide-react';
import { blogData } from '@/lib/mockData';

export default function BlogPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Trends', 'Teaching', 'Product', 'Curriculum', 'Technology', 'Wellness'];

    const filteredPosts = blogData.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const featuredPost = blogData[0];

    if (!featuredPost) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-slate-900 mb-4">No posts found</h1>
                    <Link href="/">
                        <Button>Back to Home</Button>
                    </Link>
                </div>
            </div>
        );
    }

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

            {/* Hero / Featured Section */}
            <section className="pt-32 pb-12">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <Badge className="mb-4 bg-indigo-100 text-indigo-700 hover:bg-indigo-100">Our Blog</Badge>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Latest Insights & Updates</h1>
                        <p className="text-xl text-slate-600">
                            Resources, guides, and news for modern educators and administrators.
                        </p>
                    </div>

                    {/* Featured Post */}
                    <Link href={`/blog/${featuredPost.slug}`}>
                        <div className="group relative rounded-3xl overflow-hidden shadow-2xl bg-white grid md:grid-cols-2 gap-0 border border-slate-100 cursor-pointer">
                            <div className="h-[300px] md:h-[450px] overflow-hidden relative">
                                <Image
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    unoptimized
                                />
                            </div>
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-3 text-sm font-medium text-slate-500 mb-4">
                                    <Badge variant="outline" className="border-indigo-200 text-indigo-700 bg-indigo-50">{featuredPost.category}</Badge>
                                    <span className="flex items-center gap-1"><Calendar size={14} /> {featuredPost.date}</span>
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    {featuredPost.excerpt}
                                </p>
                                <div className="flex items-center gap-3 mt-auto">
                                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                                        <Image
                                            src={featuredPost.author.avatar}
                                            alt={featuredPost.author.name}
                                            fill
                                            className="object-cover"
                                            unoptimized
                                        />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-slate-900">{featuredPost.author.name}</div>
                                        <div className="text-xs text-slate-500">Author</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Main Feed */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    {/* Filters */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                        <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === cat ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="relative w-full md:w-72">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 z-10" size={18} />
                            <Input
                                type="text"
                                placeholder="Search articles..."
                                className="w-full pl-10 pr-4 py-2 rounded-full border-slate-200 focus-visible:ring-indigo-500 bg-white"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.filter(p => p.id !== featuredPost.id).map((post) => (
                            <Link href={`/blog/${post.slug}`} key={post.id} className="group">
                                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col">
                                    <div className="h-56 overflow-hidden relative">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            unoptimized
                                        />
                                    </div>
                                    <CardContent className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center gap-3 text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-3">
                                            {post.category} • {post.date}
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm line-clamp-3 mb-6 flex-grow">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center gap-2 mt-auto">
                                            <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                                <Image
                                                    src={post.author.avatar}
                                                    alt={post.author.name}
                                                    fill
                                                    className="object-cover"
                                                    unoptimized
                                                />
                                            </div>
                                            <span className="text-sm font-medium text-slate-700">{post.author.name}</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>

                    {filteredPosts.length === 0 && (
                        <div className="text-center py-20 text-slate-500">
                            No articles found matching your search.
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
}
