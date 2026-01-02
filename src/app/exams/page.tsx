'use client';
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import StatsCard from '@/components/StatsCard';
import StatusBadge from '@/components/StatusBadge';
import { Calendar, CheckCircle, Download, Plus, FileText, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,

} from "@/components/ui/dialog";

interface Exam {
    id: string;
    title: string;
    date: string;
    status: string;
    type: string;
}

interface Result {
    id: string;
    student: string;
    examId: string;
    subject: string;
    marks: string;
    total: string;
    grade: string;
    status: 'Pass' | 'Fail';
}

export default function ExamsPage() {
    const [exams, setExams] = useState<Exam[]>([]);
    const [results, setResults] = useState<Result[]>([]);
    const [, setLoading] = useState(true);
    const [openExamDialog, setOpenExamDialog] = useState(false);

    // New Exam State
    const [newExam, setNewExam] = useState({ title: '', date: '', type: '1st' });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [examsRes, resultsRes] = await Promise.all([
                fetch('/api/exams'),
                fetch('/api/exams?type=results')
            ]);

            setExams(await examsRes.json());
            setResults(await resultsRes.json());
            setLoading(false);
        } catch (error) {
            console.error('Failed to fetch data', error);
            setLoading(false);
        }
    };

    const handleCreateExam = async () => {
        if (!newExam.title || !newExam.date) return;

        try {
            const res = await fetch('/api/exams', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...newExam, dataType: 'exam', status: 'Scheduled' })
            });

            if (res.ok) {
                setOpenExamDialog(false);
                fetchData();
                setNewExam({ title: '', date: '', type: '1st' });
            }
        } catch (error) {
            console.error('Failed to create exam', error);
        }
    };

    const downloadResults = () => {
        const headers = ["ID", "Student Name", "Exam ID", "Subject", "Marks", "Total", "Grade", "Status"];
        const csvContent = [
            headers.join(","),
            ...results.map(r => [r.id, r.student, r.examId, r.subject, r.marks, r.total, r.grade, r.status].join(","))
        ].join("\n");

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `academic-results-${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
    };

    return (
        <div className="space-y-6">
            <Header title="Exams & Results" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatsCard
                    title="Upcoming Exams"
                    value={exams.filter(e => e.status === 'Scheduled').length}
                    icon={Calendar}
                    description="Scheduled for this term"
                    className="bg-indigo-600 text-white"
                    iconClassName="bg-white/10 text-white"
                />
                <StatsCard
                    title="Results Published"
                    value={results.length}
                    icon={FileText}
                    description="Total result records"
                    iconClassName="bg-emerald-50 text-emerald-500"
                />
                <StatsCard
                    title="Avg. Performance"
                    value="B+"
                    icon={CheckCircle}
                    description="Class average grade"
                    iconClassName="bg-amber-50 text-amber-500"
                />
            </div>

            <Tabs defaultValue="schedule" className="w-full space-y-4">
                <TabsList>
                    <TabsTrigger value="schedule">Examination Schedule</TabsTrigger>
                    <TabsTrigger value="results">Results Management</TabsTrigger>
                </TabsList>

                {/* Exam Schedule Tab */}
                <TabsContent value="schedule">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle>Exam Calendar</CardTitle>
                            <Dialog open={openExamDialog} onOpenChange={setOpenExamDialog}>
                                <DialogTrigger asChild>
                                    <Button className="gap-2 bg-slate-800 text-white hover:bg-slate-700">
                                        <Plus size={16} /> Schedule Exam
                                    </Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Schedule New Exam</DialogTitle>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid gap-2">
                                            <label className="text-sm font-medium">Exam Title</label>
                                            <Input
                                                value={newExam.title}
                                                onChange={(e) => setNewExam({ ...newExam, title: e.target.value })}
                                                placeholder="e.g. Science Mid-Term"
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <label className="text-sm font-medium">Exam Date</label>
                                            <Input
                                                type="date"
                                                value={newExam.date}
                                                onChange={(e) => setNewExam({ ...newExam, date: e.target.value })}
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <label className="text-sm font-medium">Exam Type</label>
                                            <select
                                                value={newExam.type}
                                                onChange={(e) => setNewExam({ ...newExam, type: e.target.value })}
                                                className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                            >
                                                <option value="1st">1st Term</option>
                                                <option value="2nd">2nd Term</option>
                                                <option value="Final">Final</option>
                                            </select>
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button variant="ghost" onClick={() => setOpenExamDialog(false)}>Cancel</Button>
                                        <Button onClick={handleCreateExam} className="bg-indigo-600 text-white">Schedule</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Exam ID</TableHead>
                                        <TableHead>Title</TableHead>
                                        <TableHead>Type</TableHead>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {exams.map((exam) => (
                                        <TableRow key={exam.id}>
                                            <TableCell className="font-mono text-xs text-slate-500">{exam.id}</TableCell>
                                            <TableCell className="font-medium">{exam.title}</TableCell>
                                            <TableCell>
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium 
                                                    ${exam.type === 'Final' ? 'bg-purple-100 text-purple-700' : 'bg-slate-100 text-slate-700'}`}>
                                                    {exam.type} Term
                                                </span>
                                            </TableCell>
                                            <TableCell>{exam.date}</TableCell>
                                            <TableCell>
                                                <StatusBadge status={exam.status} />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Results Tab */}
                <TabsContent value="results">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle>Student Results</CardTitle>
                                <CardDescription>View, manage and export student grades.</CardDescription>
                            </div>
                            <Button variant="outline" className="gap-2" onClick={downloadResults}>
                                <Download size={16} /> Download All Results
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <div className="flex gap-4 mb-4">
                                <div className="relative flex-1">
                                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                                    <Input placeholder="Search student or subject..." className="pl-9" />
                                </div>
                            </div>

                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Student</TableHead>
                                        <TableHead>Exam ID</TableHead>
                                        <TableHead>Subject</TableHead>
                                        <TableHead>Marks</TableHead>
                                        <TableHead>Grade</TableHead>
                                        <TableHead>Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {results.map((res) => (
                                        <TableRow key={res.id}>
                                            <TableCell className="font-medium">{res.student}</TableCell>
                                            <TableCell className="text-slate-500 text-xs">{res.examId}</TableCell>
                                            <TableCell>{res.subject}</TableCell>
                                            <TableCell>{res.marks} / {res.total}</TableCell>
                                            <TableCell>
                                                <span className={`font-bold ${res.grade.startsWith('A') ? 'text-emerald-600' :
                                                        res.grade === 'F' ? 'text-red-500' : 'text-slate-700'
                                                    }`}>{res.grade}</span>
                                            </TableCell>
                                            <TableCell>
                                                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${res.status === 'Pass' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                                                    }`}>
                                                    {res.status}
                                                </span>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
