'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import { Search, Filter, Plus, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

type Student = {
    id: string;
    name: string;
    grade: string;
    parent: string;
    phone: string;
    status: string;
};

export default function StudentsPage() {
    const [students, setStudents] = useState<Student[]>([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [newStudent, setNewStudent] = useState({ name: '', grade: '', parent: '', phone: '' });
    const [searchQuery, setSearchQuery] = useState('');

    async function fetchStudents() {
        try {
            setLoading(true);
            const res = await fetch('/api/students');
            const data = await res.json();
            setStudents(data);
        } catch (error) {
            console.error('Failed to fetch students', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchStudents();
    }, []);

    // Filter Logic
    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.grade.toLowerCase().includes(searchQuery.toLowerCase())
    );

    async function handleAddStudent() {
        if (!newStudent.name) return;

        try {
            const res = await fetch('/api/students', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newStudent)
            });
            if (res.ok) {
                setOpen(false);
                setNewStudent({ name: '', grade: '', parent: '', phone: '' });
                fetchStudents(); // Refresh list
            }
        } catch (err) {
            console.error("Error adding student", err);
        }
    }

    async function handleDelete(id: string) {
        if (!confirm("Are you sure you want to delete this student?")) return;
        try {
            const res = await fetch(`/api/students/${id}`, { method: 'DELETE' });
            if (res.ok) {
                fetchStudents();
            }
        } catch (err) {
            console.error("Error deleting", err);
        }
    }

    return (
        <div className="space-y-6">
            <Header title="Student Directory" />

            <Card>
                <CardContent className="flex flex-col md:flex-row justify-between items-center gap-4 py-6">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                        <Input
                            type="text"
                            placeholder="Search by name, roll no..."
                            className="pl-10"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-2 w-full md:w-auto">
                        <Button variant="outline" className="gap-2">
                            <Filter size={18} /> Filter
                        </Button>

                        <Dialog open={open} onOpenChange={setOpen}>
                            <DialogTrigger asChild>
                                <Button className="gap-2">
                                    <Plus size={18} /> Add Student
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Add New Student</DialogTitle>
                                    <DialogDescription>
                                        Enter the student&apos;s details here. Click save when you&apos;re done.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <label htmlFor="name" className="text-right text-sm font-medium">Name</label>
                                        <Input id="name" value={newStudent.name} onChange={e => setNewStudent({ ...newStudent, name: e.target.value })} className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <label htmlFor="grade" className="text-right text-sm font-medium">Grade</label>
                                        <Input id="grade" value={newStudent.grade} onChange={e => setNewStudent({ ...newStudent, grade: e.target.value })} className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <label htmlFor="parent" className="text-right text-sm font-medium">Parent</label>
                                        <Input id="parent" value={newStudent.parent} onChange={e => setNewStudent({ ...newStudent, parent: e.target.value })} className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <label htmlFor="phone" className="text-right text-sm font-medium">Phone</label>
                                        <Input id="phone" value={newStudent.phone} onChange={e => setNewStudent({ ...newStudent, phone: e.target.value })} className="col-span-3" />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button type="submit" onClick={handleAddStudent}>Save changes</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>All Students</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Student Info</TableHead>
                                <TableHead>ID / Roll No</TableHead>
                                <TableHead>Grade</TableHead>
                                <TableHead>Parent Info</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {loading ? (
                                <TableRow>
                                    <TableCell colSpan={6} className="text-center py-10">Loading students...</TableCell>
                                </TableRow>
                            ) : filteredStudents.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={6} className="text-center py-10 text-muted-foreground">No students found matching your search.</TableCell>
                                </TableRow>
                            ) : (
                                filteredStudents.map((student) => (
                                    <TableRow key={student.id}>
                                        <TableCell>
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-bold text-secondary-foreground">
                                                    {student.name ? student.name.charAt(0) : '?'}
                                                </div>
                                                <span className="font-semibold">{student.name}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="font-mono text-muted-foreground">{student.id}</TableCell>
                                        <TableCell>{student.grade}</TableCell>
                                        <TableCell>
                                            <div>{student.parent}</div>
                                            <div className="text-xs text-muted-foreground">{student.phone}</div>
                                        </TableCell>
                                        <TableCell>
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold 
                        ${student.status === 'Active' ? 'bg-emerald-100 text-emerald-700' :
                                                    student.status === 'Inactive' ? 'bg-slate-100 text-slate-600' :
                                                        'bg-amber-100 text-amber-700'}`}>
                                                {student.status}
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="icon" onClick={() => handleDelete(student.id)}>
                                                <Trash2 size={18} className="text-red-500" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
