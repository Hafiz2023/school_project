'use client';
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import StatsCard from '@/components/StatsCard';
import StatusBadge from '@/components/StatusBadge';
import { Banknote, Users, Clock, CheckCircle, Plus, DollarSign, Trash2, Edit, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
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
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose,
    DialogDescription
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PayrollRecord {
    id: string;
    teacher: string;
    role: string;
    salary: string;
    status: 'Paid' | 'Pending' | 'Processing';
    date: string;
}

export default function PayrollPage() {
    const [records, setRecords] = useState<PayrollRecord[]>([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentId, setCurrentId] = useState<string | null>(null);

    // Form state
    const [formData, setFormData] = useState({
        teacher: '',
        role: '',
        salary: '',
        status: 'Pending'
    });

    useEffect(() => {
        fetchPayroll();
    }, []);

    const fetchPayroll = async () => {
        try {
            const res = await fetch('/api/payroll');
            const data = await res.json();
            setRecords(data);
            setLoading(false);
        } catch (error) {
            console.error('Failed to fetch payroll', error);
            setLoading(false);
        }
    };

    const handleOpenAdd = () => {
        setIsEditing(false);
        setFormData({ teacher: '', role: '', salary: '', status: 'Pending' });
        setOpen(true);
    };

    const handleOpenEdit = (record: PayrollRecord) => {
        setIsEditing(true);
        setCurrentId(record.id);
        setFormData({
            teacher: record.teacher,
            role: record.role,
            salary: record.salary.toString().replace(/[^0-9.]/g, ''),
            status: record.status
        });
        setOpen(true);
    };

    const handleSubmit = async () => {
        if (!formData.teacher || !formData.salary) return;

        try {
            const url = isEditing ? `/api/payroll/${currentId}` : '/api/payroll';
            const method = isEditing ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setOpen(false);
                fetchPayroll();
            }
        } catch (error) {
            console.error('Failed to save payroll record', error);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this record?")) return;

        try {
            const res = await fetch(`/api/payroll/${id}`, { method: 'DELETE' });
            if (res.ok) fetchPayroll();
        } catch (error) {
            console.error('Failed to delete record', error);
        }
    };

    // Stats
    const parseAmount = (amountStr: string) => {
        return parseFloat(amountStr.replace(/[^0-9.-]+/g, "")) || 0;
    };

    const totalPayout = records.reduce((acc, curr) => acc + parseAmount(curr.salary), 0);
    const pendingCount = records.filter(r => r.status === 'Pending').length;
    const paidCount = records.filter(r => r.status === 'Paid').length;

    // Table Row Component for reuse
    const PayrollRow = ({ record }: { record: PayrollRecord }) => (
        <TableRow key={record.id} className="group hover:bg-slate-50 transition-colors">
            <TableCell className="font-mono text-xs text-slate-500">{record.id}</TableCell>
            <TableCell className="font-medium text-slate-900">{record.teacher}</TableCell>
            <TableCell className="text-slate-600">{record.role}</TableCell>
            <TableCell>{record.date}</TableCell>
            <TableCell className="font-bold text-slate-800">${record.salary}</TableCell>
            <TableCell>
                <StatusBadge status={record.status} />
            </TableCell>
            <TableCell className="text-right">
                <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50" onClick={() => handleOpenEdit(record)}>
                        <Edit size={16} />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-red-400 hover:text-red-600 hover:bg-red-50" onClick={() => handleDelete(record.id)}>
                        <Trash2 size={16} />
                    </Button>
                </div>
            </TableCell>
        </TableRow>
    );

    return (
        <div className="space-y-6">
            <Header title="Payroll Management" />

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatsCard
                    title="Total Payroll"
                    value={`$${totalPayout.toLocaleString()}`}
                    icon={DollarSign}
                    description="Total salaries listed"
                    className="bg-emerald-600 text-white"
                    iconClassName="bg-white/10 text-white"
                />
                <StatsCard
                    title="Pending Payments"
                    value={pendingCount}
                    icon={Clock}
                    description="To be processed"
                    iconClassName="bg-amber-50 text-amber-500"
                />
                <StatsCard
                    title="Processed"
                    value={paidCount}
                    icon={CheckCircle}
                    description="Completed transfers"
                    iconClassName="bg-indigo-50 text-indigo-500"
                />
            </div>

            {/* Main Content with Tabs */}
            <Tabs defaultValue="all" className="w-full space-y-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <TabsList>
                        <TabsTrigger value="all">All Records</TabsTrigger>
                        <TabsTrigger value="pending" className="gap-2">
                            Pending <span className="bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full text-[10px]">{pendingCount}</span>
                        </TabsTrigger>
                        <TabsTrigger value="processed" className="gap-2">
                            Processed <span className="bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-full text-[10px]">{paidCount}</span>
                        </TabsTrigger>
                    </TabsList>

                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger asChild>
                            <Button onClick={handleOpenAdd} className="gap-2 bg-slate-800 text-white hover:bg-slate-700">
                                <Plus size={16} /> Process Payment
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[500px]">
                            <DialogHeader>
                                <DialogTitle>{isEditing ? 'Edit Payment Record' : 'Process New Salary'}</DialogTitle>
                                <DialogDescription>Enter the payment details for the staff member.</DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid gap-2">
                                    <label className="text-sm font-medium">Teacher / Staff Name</label>
                                    <Input
                                        value={formData.teacher}
                                        onChange={(e) => setFormData({ ...formData, teacher: e.target.value })}
                                        placeholder="e.g. John Smith"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <label className="text-sm font-medium">Role</label>
                                    <Input
                                        value={formData.role}
                                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                        placeholder="e.g. Math Teacher"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="grid gap-2">
                                        <label className="text-sm font-medium">Amount ($)</label>
                                        <Input
                                            value={formData.salary}
                                            onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                                            placeholder="3200"
                                            type="number"
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <label className="text-sm font-medium">Status</label>
                                        <select
                                            value={formData.status}
                                            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                            className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                        >
                                            <option value="Pending">Pending</option>
                                            <option value="Paid">Paid</option>
                                            <option value="Processing">Processing</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <DialogFooter>
                                <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
                                <Button onClick={handleSubmit} className="bg-emerald-600 hover:bg-emerald-700 text-white">
                                    {isEditing ? 'Update Record' : 'Confirm Payment'}
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>

                <Card>
                    <CardContent className="p-0">
                        {loading ? (
                            <div className="p-12 text-center text-slate-500">Loading payroll data...</div>
                        ) : (
                            <>
                                <TabsContent value="all" className="m-0">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Ref ID</TableHead>
                                                <TableHead>Staff Name</TableHead>
                                                <TableHead>Role</TableHead>
                                                <TableHead>Month</TableHead>
                                                <TableHead>Amount</TableHead>
                                                <TableHead>Status</TableHead>
                                                <TableHead className="text-right">Actions</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {records.map(r => <PayrollRow key={r.id} record={r} />)}
                                        </TableBody>
                                    </Table>
                                </TabsContent>
                                <TabsContent value="pending" className="m-0">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Ref ID</TableHead>
                                                <TableHead>Staff Name</TableHead>
                                                <TableHead>Role</TableHead>
                                                <TableHead>Month</TableHead>
                                                <TableHead>Amount</TableHead>
                                                <TableHead>Status</TableHead>
                                                <TableHead className="text-right">Actions</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {records.filter(r => r.status === 'Pending').map(r => <PayrollRow key={r.id} record={r} />)}
                                        </TableBody>
                                    </Table>
                                </TabsContent>
                                <TabsContent value="processed" className="m-0">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Ref ID</TableHead>
                                                <TableHead>Staff Name</TableHead>
                                                <TableHead>Role</TableHead>
                                                <TableHead>Month</TableHead>
                                                <TableHead>Amount</TableHead>
                                                <TableHead>Status</TableHead>
                                                <TableHead className="text-right">Actions</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {records.filter(r => r.status === 'Paid').map(r => <PayrollRow key={r.id} record={r} />)}
                                        </TableBody>
                                    </Table>
                                </TabsContent>
                            </>
                        )}
                    </CardContent>
                </Card>
            </Tabs>
        </div>
    );
}
