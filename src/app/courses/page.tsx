'use client';
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import CourseCard from '@/components/CourseCard';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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

// Interface defining the structure of a Course object
export interface Course {
    id: string;
    title: string;
    category: string;
    instructor: string;
    progress: number;
    lessons: number;
    hours: number;
    level: string;
    color: string;
}

/**
 * CoursesPage Component
 * 
 * Manages the display, filtering, creation, and deletion of courses.
 * - separate API route for persistence
 * - responsive grid layout
 * - category-based filtering acting as sub-navigation
 * - modal dialog for adding new courses
 */
export default function CoursesPage() {
    // --- State Management ---
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('All Courses');
    const [open, setOpen] = useState(false);

    // Form state for creating a new course
    const [newCourse, setNewCourse] = useState({
        title: '',
        category: 'Mathematics',
        instructor: '',
        lessons: '',
        hours: '',
        level: 'Beginner'
    });

    // Available categories for filtering
    const categories = ['All Courses', 'Science', 'Arts', 'Mathematics', 'Computer Science'];

    // --- Effects ---
    // Fetch courses on component mount
    useEffect(() => {
        fetchCourses();
    }, []);

    // --- API Handlers ---

    // Fetch all courses from the API
    const fetchCourses = async () => {
        try {
            const res = await fetch('/api/courses');
            const data = await res.json();
            setCourses(data);
            setLoading(false);
        } catch (error) {
            console.error('Failed to fetch courses', error);
            setLoading(false);
        }
    };

    // Handle adding a new course
    const handleAddCourse = async () => {
        if (!newCourse.title || !newCourse.instructor) return;

        // Auto-assign color based on category for better visual distinction
        let color = 'bg-indigo-600';
        if (newCourse.category === 'Science') color = 'bg-blue-600';
        if (newCourse.category === 'Arts') color = 'bg-amber-600';
        if (newCourse.category === 'Computer Science') color = 'bg-emerald-600';

        const courseData = { ...newCourse, color };

        try {
            const res = await fetch('/api/courses', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(courseData)
            });

            if (res.ok) {
                setOpen(false); // Close modal
                // Reset form
                setNewCourse({ title: '', category: 'Mathematics', instructor: '', lessons: '', hours: '', level: 'Beginner' });
                fetchCourses(); // Refresh list
            }
        } catch (error) {
            console.error('Failed to add course', error);
        }
    };

    // Handle deleting a course
    const handleDeleteCourse = async (id: string, e: React.MouseEvent) => {
        e.stopPropagation(); // Stop event bubbling so card click doesn't trigger
        if (!confirm("Are you sure you want to delete this course?")) return;

        try {
            const res = await fetch(`/api/courses/${id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                fetchCourses();
            }
        } catch (error) {
            console.error('Failed to delete course', error);
        }
    };

    // --- Derived State ---
    // Filter courses based on the currently selected category tab
    const filteredCourses = selectedCategory === 'All Courses'
        ? courses
        : courses.filter(c => c.category === selectedCategory);

    return (
        <div className="space-y-6">
            <Header title="Course Management" />

            {/* --- Controls Row: Filters & Add Button --- */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                {/* Category Filters (Scrollable on Mobile) */}
                <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
                    {categories.map((cat, i) => (
                        <button
                            key={i}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors border
                            ${selectedCategory === cat
                                    ? 'bg-slate-800 text-white border-slate-800'
                                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:bg-slate-50'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Add New Course Dialog */}
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <Button className="gap-2 bg-indigo-600 hover:bg-indigo-700 text-white w-full md:w-auto">
                            <Plus size={16} /> Add New Course
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px] bg-white">
                        <DialogHeader>
                            <DialogTitle>Add New Course</DialogTitle>
                            <DialogDescription>Create a new course curriculum.</DialogDescription>
                        </DialogHeader>

                        {/* Course Creation Form */}
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <label className="text-right text-sm font-medium">Title</label>
                                <Input className="col-span-3" value={newCourse.title} onChange={e => setNewCourse({ ...newCourse, title: e.target.value })} placeholder="e.g. Advanced Calculus" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <label className="text-right text-sm font-medium">Category</label>
                                <select
                                    className="col-span-3 flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                    value={newCourse.category}
                                    onChange={e => setNewCourse({ ...newCourse, category: e.target.value })}
                                >
                                    {categories.filter(c => c !== 'All Courses').map(c => <option key={c} value={c}>{c}</option>)}
                                </select>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <label className="text-right text-sm font-medium">Instructor</label>
                                <Input className="col-span-3" value={newCourse.instructor} onChange={e => setNewCourse({ ...newCourse, instructor: e.target.value })} placeholder="e.g. Dr. Smith" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <label className="text-right text-sm font-medium">Lessons</label>
                                <Input className="col-span-3" type="number" value={newCourse.lessons} onChange={e => setNewCourse({ ...newCourse, lessons: e.target.value })} placeholder="24" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <label className="text-right text-sm font-medium">Hours</label>
                                <Input className="col-span-3" type="number" value={newCourse.hours} onChange={e => setNewCourse({ ...newCourse, hours: e.target.value })} placeholder="48" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <label className="text-right text-sm font-medium">Level</label>
                                <select
                                    className="col-span-3 flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                    value={newCourse.level}
                                    onChange={e => setNewCourse({ ...newCourse, level: e.target.value })}
                                >
                                    <option value="Beginner">Beginner</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Advanced">Advanced</option>
                                </select>
                            </div>
                        </div>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="ghost">Cancel</Button>
                            </DialogClose>
                            <Button onClick={handleAddCourse} className="bg-indigo-600 text-white">Create Course</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

            {/* --- Course Grid Display --- */}
            {loading ? (
                <div className="p-12 text-center text-slate-500">Loading courses...</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCourses.length === 0 ? (
                        <div className="col-span-full text-center py-10 text-slate-500">No courses found in this category.</div>
                    ) : (
                        // Map through filtered courses and render CourseCard component
                        filteredCourses.map((course) => (
                            <CourseCard
                                key={course.id}
                                course={course} // Pass course data
                                onDelete={handleDeleteCourse} // Pass delete handler
                            />
                        ))
                    )}
                </div>
            )}
        </div>
    );
}
