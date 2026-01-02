'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Globe, Save } from 'lucide-react';

export default function SettingsPage() {
    const [loading, setLoading] = useState(false);

    // Mock user profile data
    const [profile, setProfile] = useState({
        name: 'Admin User',
        email: 'admin@eduprime.com',
        role: 'Administrator'
    });

    // Mock system settings
    const [settings, setSettings] = useState({
        schoolName: 'EduPrime Academy',
        address: '123 Education Lane, Knowledge City',
        phone: '+1 (555) 123-4567',
        currency: 'USD ($)',
        theme: 'Light',
        language: 'English'
    });

    const handleSave = () => {
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            alert('Settings saved successfully!');
        }, 1000);
    };

    return (
        <div className="space-y-6">
            <Header title="Settings" />

            <Tabs defaultValue="profile" className="w-full">
                <TabsList className="grid w-full grid-cols-3 max-w-md mb-8">
                    <TabsTrigger value="profile">Profile</TabsTrigger>
                    <TabsTrigger value="general">General</TabsTrigger>
                    <TabsTrigger value="appearance">Appearance</TabsTrigger>
                </TabsList>

                {/* Profile Settings */}
                <TabsContent value="profile">
                    <Card>
                        <CardHeader>
                            <CardTitle>Profile Information</CardTitle>
                            <CardDescription>Update your personal account details.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-2xl font-bold border-4 border-white shadow-lg">
                                    AD
                                </div>
                                <Button variant="outline" size="sm">Change Avatar</Button>
                            </div>

                            <div className="grid gap-2">
                                <label className="text-sm font-medium">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                                    <Input
                                        value={profile.name}
                                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                                        className="pl-9"
                                    />
                                </div>
                            </div>

                            <div className="grid gap-2">
                                <label className="text-sm font-medium">Email Address</label>
                                <Input disabled value={profile.email} />
                                <p className="text-xs text-slate-500">Email cannot be changed contact support.</p>
                            </div>

                            <div className="pt-4 border-t">
                                <h3 className="text-sm font-medium mb-4">Change Password</h3>
                                <div className="grid gap-4">
                                    <div className="grid gap-2">
                                        <label className="text-sm font-medium">Current Password</label>
                                        <Input type="password" placeholder="••••••••" />
                                    </div>
                                    <div className="grid gap-2">
                                        <label className="text-sm font-medium">New Password</label>
                                        <Input type="password" placeholder="••••••••" />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={handleSave} disabled={loading}>
                                {loading ? 'Saving...' : 'Save Changes'}
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                {/* General Settings */}
                <TabsContent value="general">
                    <Card>
                        <CardHeader>
                            <CardTitle>School Information</CardTitle>
                            <CardDescription>Manage your institutions public details.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2">
                                <label className="text-sm font-medium">School Name</label>
                                <Input
                                    value={settings.schoolName}
                                    onChange={(e) => setSettings({ ...settings, schoolName: e.target.value })}
                                />
                            </div>
                            <div className="grid gap-2">
                                <label className="text-sm font-medium">Address</label>
                                <Input
                                    value={settings.address}
                                    onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                                />
                            </div>
                            <div className="grid gap-2">
                                <label className="text-sm font-medium">Phone Number</label>
                                <Input
                                    value={settings.phone}
                                    onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                                />
                            </div>
                            <div className="grid gap-2">
                                <label className="text-sm font-medium">Currency</label>
                                <select
                                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                    value={settings.currency}
                                    onChange={(e) => setSettings({ ...settings, currency: e.target.value })}
                                >
                                    <option>USD ($)</option>
                                    <option>EUR (€)</option>
                                    <option>GBP (£)</option>
                                    <option>PKR (Rs)</option>
                                </select>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={handleSave} disabled={loading} className="gap-2">
                                <Save size={16} /> Save Settings
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                {/* Appearance Settings */}
                <TabsContent value="appearance">
                    <Card>
                        <CardHeader>
                            <CardTitle>Appearance & Preferences</CardTitle>
                            <CardDescription>Customize the look and feel of your dashboard.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <label className="text-sm font-medium">Dark Mode</label>
                                    <p className="text-xs text-slate-500">Switch between light and dark themes.</p>
                                </div>
                                <div className="flex items-center gap-2 border p-1 rounded-lg">
                                    <Button variant={settings.theme === 'Light' ? 'default' : 'ghost'} size="sm" onClick={() => setSettings({ ...settings, theme: 'Light' })}>Light</Button>
                                    <Button variant={settings.theme === 'Dark' ? 'default' : 'ghost'} size="sm" onClick={() => setSettings({ ...settings, theme: 'Dark' })}>Dark</Button>
                                </div>
                            </div>

                            <div className="grid gap-2">
                                <label className="text-sm font-medium">Language</label>
                                <div className="relative">
                                    <Globe className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                                    <select
                                        className="pl-9 flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                        value={settings.language}
                                        onChange={(e) => setSettings({ ...settings, language: e.target.value })}
                                    >
                                        <option>English</option>
                                        <option>Spanish</option>
                                        <option>French</option>
                                        <option>Urdu</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t">
                                <div className="space-y-0.5">
                                    <label className="text-sm font-medium">Email Notifications</label>
                                    <p className="text-xs text-slate-500">Receive daily summaries via email.</p>
                                </div>
                                <div className="h-6 w-11 rounded-full bg-slate-200 relative cursor-pointer">
                                    <span className="h-4 w-4 rounded-full bg-white absolute top-1 left-1 shadow-sm"></span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
