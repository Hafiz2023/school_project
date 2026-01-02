'use client';
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import StatsCard from '@/components/StatsCard'; // Core Component: Reusable stats display
import { Users, Clock, Calendar, Plus, Trash2, BookOpen, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog";

// Type definition for Classroom data
interface Classroom {
    id: string;
    name: string;
    subject: string;
    teacher: string;
    students: number;
    time: string;
    room: string;
    color: string;
}

/**
 * ClassroomPage Component
 * 
 * Handles layout and logic for managing school classrooms.
 * Features:
 * - Real-time stats calculation using StatsCard
 * - Grid layout that adapts to mobile/tablet/desktop
 * - CRUD operations via API calls
 */
export default function ClassroomPage() {
    // --- State ---
    const [classes, setClasses] = useState<Classroom[]>([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);

    // Form state for creating a new class
    const [newClass, setNewClass] = useState({
        name: '',
        subject: '',
        teacher: '',
        time: '',
        room: ''
    });

    // --- Effects ---
    // Fetch initial data on mount
    useEffect(() => {
        fetchClasses();
    }, []);

    // --- API Interactions ---

    // Retrieve all classrooms from the backend
    const fetchClasses = async () => {
        try {
            const res = await fetch('/api/classrooms');
            const data = await res.json();
            setClasses(data);
            setLoading(false);
        } catch (error) {
            console.error('Failed to fetch classrooms', error);
            setLoading(false);
        }
    };

    // Submit new class data to the API
    const handleAddClass = async () => {
        if (!newClass.name || !newClass.subject) return;

        try {
            const res = await fetch('/api/classrooms', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newClass)
            });

            if (res.ok) {
                setOpen(false); // Close dialog on success
                // Reset form fields
                setNewClass({ name: '', subject: '', teacher: '', time: '', room: '' });
                fetchClasses(); // Refresh grid
            }
        } catch (error) {
            console.error('Failed to add class', error);
        }
    };

    // Remove a class from the system
    const handleDeleteClass = async (id: string) => {
        if (!confirm("Are you sure you want to delete this class?")) return;

        try {
            const res = await fetch(`/api/classrooms/${id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                fetchClasses();
            }
        } catch (error) {
            console.error('Failed to delete class', error);
        }
    };

    // --- Statistics Calculation ---
    // Dynamic metrics based on current data
    const totalClasses = classes.length;
    const totalStudents = classes.reduce((acc, curr) => acc + (curr.students || 0), 0);
    const avgClassSize = totalClasses > 0 ? Math.round(totalStudents / totalClasses) : 0;

    return (
        <div className="space-y-6">
            <Header title="Classroom Management" />

            {/* --- Key Metrics Section using Core Component 'StatsCard' --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatsCard
                    title="Total Classes"
                    value={totalClasses}
                    icon={BookOpen}
                    description="Active sessions"
                    className="bg-indigo-600 text-white"
                    iconClassName="bg-white/10 text-white"
                />
                <StatsCard
                    title="Total Students"
                    value={totalStudents}
                    icon={GraduationCap}
                    description="Enrolled in classes"
                    iconClassName="bg-emerald-50 text-emerald-500"
                />
                <StatsCard
                    title="Avg. Class Size"
                    value={avgClassSize}
                    icon={Users}
                    description="Students per class"
                    iconClassName="bg-orange-50 text-orange-500"
                />
            </div>

            {/* --- Actions & Filters Row --- */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                {/* Search Input */}
                <div className="relative w-full sm:w-72">
                    <Input placeholder="Search classes..." className="pl-10" />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                        <BookOpen size={16} />
                    </div>
                </div>

                {/* Add Class Modal Dialog */}
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <Button className="gap-2 w-full sm:w-auto bg-slate-800 text-white hover:bg-slate-700">
                            <Plus size={16} /> Add New Class
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                            <DialogTitle>Create New Class</DialogTitle>
                            <DialogDescription>Add details for the new class schedule.</DialogDescription>
                        </DialogHeader>

                        {/* Data Entry Form */}
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <label className="text-right text-sm font-medium">Class Name</label>
                                <Input className="col-span-3" value={newClass.name} onChange={e => setNewClass({ ...newClass, name: e.target.value })} placeholder="e.g. Class 10-A" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <label className="text-right text-sm font-medium">Subject</label>
                                <Input className="col-span-3" value={newClass.subject} onChange={e => setNewClass({ ...newClass, subject: e.target.value })} placeholder="e.g. Mathematics" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <label className="text-right text-sm font-medium">Teacher</label>
                                <Input className="col-span-3" value={newClass.teacher} onChange={e => setNewClass({ ...newClass, teacher: e.target.value })} placeholder="e.g. Mr. Wilson" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <label className="text-right text-sm font-medium">Time</label>
                                <Input className="col-span-3" value={newClass.time} onChange={e => setNewClass({ ...newClass, time: e.target.value })} placeholder="e.g. 09:00 AM" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <label className="text-right text-sm font-medium">Room</label>
                                <Input className="col-span-3" value={newClass.room} onChange={e => setNewClass({ ...newClass, room: e.target.value })} placeholder="e.g. 301" />
                            </div>
                        </div>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="ghost">Cancel</Button>
                            </DialogClose>
                            <Button onClick={handleAddClass} className="bg-indigo-600">Create Class</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

            {/* --- Data Grid Display --- */}
            {loading ? (
                <div className="p-12 text-center text-slate-500">Loading classrooms...</div>
            ) : (
                // Responsive Grid: 1 col mobile, 2 col tablet, 3 col desktop
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {classes.map((cls) => (
                        <Card key={cls.id} className={`${cls.color} border-l-4 hover:shadow-lg transition-all duration-200 group`}>
                            <CardHeader className="flex flex-row justify-between items-start pb-2">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <CardTitle className="text-lg font-bold text-slate-800">{cls.name}</CardTitle>
                                    </div>
                                    <p className="text-xs font-semibold text-emerald-700 bg-emerald-100 inline-block px-2 py-1 rounded mt-2">{cls.subject}</p>
                                </div>
                                <Button variant="ghost" size="icon" onClick={() => handleDeleteClass(cls.id)} className="opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Trash2 size={16} className="text-slate-400 hover:text-red-500" />
                                </Button>
                            </CardHeader>

                            <CardContent>
                                <div className="space-y-4 pt-2">
                                    <div className="flex items-center justify-between text-sm text-slate-600">
                                        <div className="flex items-center gap-2">
                                            <Users size={16} className="text-indigo-500" />
                                            <span>{cls.teacher}</span>
                                        </div>
                                        <span className="font-semibold">{cls.students} Students</span>
                                    </div>

                                    <div className="flex items-center gap-4 text-xs text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                        <div className="flex items-center gap-1.5">
                                            <Clock size={14} />
                                            <span>{cls.time}</span>
                                        </div>
                                        <div className="h-3 w-px bg-slate-300"></div>
                                        <div className="flex items-center gap-1.5">
                                            <Calendar size={14} />
                                            <span>Room {cls.room}</span>
                                        </div>
                                    </div>

                                    <div className="pt-2 flex gap-2">
                                        <Button variant="outline" className="flex-1 h-9 text-xs font-medium hover:text-indigo-600 hover:border-indigo-200">View Schedule</Button>
                                        <Button className="flex-1 h-9 text-xs bg-slate-800 text-white hover:bg-slate-700">Attendance</Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
