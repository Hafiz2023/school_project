'use client';
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import StatsCard from '@/components/StatsCard';
import StatusBadge from '@/components/StatusBadge';
import {  Printer, Plus, FileText, CheckCircle, AlertCircle, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
    DialogClose
} from "@/components/ui/dialog";

interface Invoice {
    id: string;
    student: string;
    amount: string;
    date: string;
    status: 'Paid' | 'Pending' | 'Overdue';
    method: string;
}

export default function FeesPage() {
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [loading, setLoading] = useState(true);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    // Form State
    const [newInvoice, setNewInvoice] = useState({
        student: '',
        amount: '',
        status: 'Pending',
        method: 'Cash'
    });

    useEffect(() => {
        fetchInvoices();
    }, []);

    const fetchInvoices = async () => {
        try {
            const res = await fetch('/api/fees');
            const data = await res.json();
            setInvoices(data);
            setLoading(false);
        } catch (error) {
            console.error('Failed to fetch invoices', error);
            setLoading(false);
        }
    };

    const handleCreateInvoice = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/fees', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newInvoice),
            });

            if (res.ok) {
                setIsDialogOpen(false);
                fetchInvoices();
                setNewInvoice({ student: '', amount: '', status: 'Pending', method: 'Cash' });
            }
        } catch (error) {
            console.error('Failed to create invoice', error);
        }
    };

    // ... (previous code)

    const handlePrintInvoice = (invoice: Invoice) => {
        const printWindow = window.open('', '', 'width=800,height=600');
        if (!printWindow) return;

        const htmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Invoice #${invoice.id}</title>
                <style>
                    body { font-family: 'Helvetica', 'Arial', sans-serif; padding: 40px; color: #333; }
                    .header { display: flex; justify-content: space-between; margin-bottom: 40px; border-bottom: 2px solid #eee; padding-bottom: 20px; }
                    .logo { font-size: 24px; font-weight: bold; color: #4f46e5; }
                    .invoice-title { font-size: 32px; font-weight: bold; color: #1e293b; text-align: right; }
                    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 40px; }
                    .label { font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
                    .value { font-size: 16px; font-weight: 500; }
                    .status { display: inline-block; padding: 6px 12px; border-radius: 999px; font-size: 12px; font-weight: bold; text-transform: uppercase; }
                    .status.Paid { background: #d1fae5; color: #047857; }
                    .status.Pending { background: #fef3c7; color: #b45309; }
                    .status.Overdue { background: #fee2e2; color: #b91c1c; }
                    .total-box { background: #f8fafc; padding: 20px; border-radius: 8px; text-align: right; }
                    .total-label { font-size: 14px; color: #64748b; }
                    .total-amount { font-size: 32px; font-weight: bold; color: #4f46e5; }
                    .footer { margin-top: 60px; text-align: center; color: #94a3b8; font-size: 12px; border-top: 1px solid #eee; pt: 20px; }
                </style>
            </head>
            <body>
                <div class="header">
                    <div class="logo">EduPrime Academy</div>
                    <div>
                        <div class="invoice-title">INVOICE</div>
                        <div style="text-align: right; color: #64748b;">#${invoice.id}</div>
                    </div>
                </div>

                <div class="grid">
                    <div>
                        <div class="label">Billed To</div>
                        <div class="value">${invoice.student}</div>
                        <div style="color: #64748b; font-size: 14px; margin-top: 4px;">Student ID: STD-${Math.floor(Math.random() * 1000)}</div>
                    </div>
                    <div style="text-align: right;">
                        <div class="label">Date Issued</div>
                        <div class="value">${invoice.date}</div>
                        <div class="label" style="margin-top: 12px;">Payment Method</div>
                        <div class="value">${invoice.method}</div>
                        <div style="margin-top: 12px;">
                            <span class="status ${invoice.status}">${invoice.status}</span>
                        </div>
                    </div>
                </div>

                <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                    <thead>
                        <tr style="background: #f8fafc; text-align: left;">
                            <th style="padding: 12px; border-bottom: 1px solid #e2e8f0;">Description</th>
                            <th style="padding: 12px; border-bottom: 1px solid #e2e8f0; text-align: right;">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 16px 12px; border-bottom: 1px solid #e2e8f0;">Tuition Fees - Term 1</td>
                            <td style="padding: 16px 12px; border-bottom: 1px solid #e2e8f0; text-align: right;">${invoice.amount}</td>
                        </tr>
                    </tbody>
                </table>

                <div class="total-box">
                    <div class="total-label">Total Amount</div>
                    <div class="total-amount">${invoice.amount}</div>
                </div>

                <div class="footer">
                    <p>Thank you for your business. Please contact admin@eduprime.com for any queries.</p>
                    <p>EduPrime Academy, 123 Education Lane, Knowledge City</p>
                </div>

                <script>
                    window.onload = function() { window.print(); }
                </script>
            </body>
            </html>
        `;

        printWindow.document.write(htmlContent);
        printWindow.document.close();
    };

    const handleDeleteInvoice = async (id: string) => {
        // ... (existing delete logic)
        if (!confirm('Are you sure you want to delete this invoice?')) return;

        try {
            const res = await fetch(`/api/fees/${id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                fetchInvoices();
            }
        } catch (error) {
            console.error('Failed to delete invoice', error);
        }
    };

    // ... (rest of the component)

    // Calculate Stats
    const parseAmount = (amountStr: string) => {
        return parseFloat(amountStr.replace(/[^0-9.-]+/g, "")) || 0;
    };

    const totalRevenue = invoices
        .filter(inv => inv.status === 'Paid')
        .reduce((sum, inv) => sum + parseAmount(inv.amount), 0);

    const pendingCount = invoices.filter(inv => inv.status === 'Pending').length;
    const paidCount = invoices.filter(inv => inv.status === 'Paid').length;
    const collectionRate = invoices.length > 0 ? Math.round((paidCount / invoices.length) * 100) : 0;

    return (
        <div className="space-y-6">
            <Header title="Fees & Invoices" />

            {/* ... stats cards ... */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatsCard
                    title="Total Revenue"
                    value={`$${totalRevenue.toLocaleString()}`}
                    icon={FileText}
                    description="Based on paid invoices"
                    className="bg-indigo-600 text-white"
                    iconClassName="bg-white/10 text-white"
                />
                <StatsCard
                    title="Pending Payments"
                    value={pendingCount}
                    icon={AlertCircle}
                    description={`${pendingCount} invoices pending`}
                    iconClassName="bg-amber-50 text-amber-500"
                />
                <StatsCard
                    title="Paid Invoices"
                    value={paidCount}
                    icon={CheckCircle}
                    description={`${collectionRate}% collection rate`}
                    iconClassName="bg-emerald-50 text-emerald-500"
                />
            </div>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Recent Invoices</CardTitle>
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        {/* ... dialog content ... */}
                        <DialogTrigger asChild>
                            <Button className="gap-2 bg-slate-800 text-white hover:bg-slate-700">
                                <Plus size={16} /> Create Invoice
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Create New Invoice</DialogTitle>
                            </DialogHeader>
                            <form onSubmit={handleCreateInvoice} className="space-y-4">
                                <div>
                                    <label className="text-sm font-medium">Student Name</label>
                                    <Input
                                        required
                                        value={newInvoice.student}
                                        onChange={(e) => setNewInvoice({ ...newInvoice, student: e.target.value })}
                                        className="mt-1"
                                        placeholder="Enter student name"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium">Amount</label>
                                    <Input
                                        required
                                        value={newInvoice.amount}
                                        onChange={(e) => setNewInvoice({ ...newInvoice, amount: e.target.value })}
                                        className="mt-1"
                                        placeholder="$0.00"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-medium">Status</label>
                                        <select
                                            value={newInvoice.status}
                                            onChange={(e) => setNewInvoice({ ...newInvoice, status: e.target.value as Invoice['status'] })}
                                            className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            <option value="Pending">Pending</option>
                                            <option value="Paid">Paid</option>
                                            <option value="Overdue">Overdue</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium">Method</label>
                                        <select
                                            value={newInvoice.method}
                                            onChange={(e) => setNewInvoice({ ...newInvoice, method: e.target.value })}
                                            className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            <option value="Cash">Cash</option>
                                            <option value="Credit Card">Credit Card</option>
                                            <option value="Bank Transfer">Bank Transfer</option>
                                            <option value="Online">Online</option>
                                        </select>
                                    </div>
                                </div>
                                <DialogFooter>
                                    <DialogClose asChild>
                                        <Button variant="ghost" type="button">Cancel</Button>
                                    </DialogClose>
                                    <Button type="submit" className="bg-indigo-600 text-white">Create Invoice</Button>
                                </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>
                </CardHeader>

                <CardContent>
                    {loading ? (
                        <div className="p-8 text-center text-slate-500">Loading invoices...</div>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Invoice ID</TableHead>
                                    <TableHead>Student Name</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Amount</TableHead>
                                    <TableHead>Payment Method</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {invoices.map((inv) => (
                                    <TableRow key={inv.id}>
                                        <TableCell className="font-mono text-indigo-600 font-medium">{inv.id}</TableCell>
                                        <TableCell className="font-medium">{inv.student}</TableCell>
                                        <TableCell className="text-slate-500">{inv.date}</TableCell>
                                        <TableCell className="font-bold">{inv.amount}</TableCell>
                                        <TableCell className="text-slate-500">{inv.method}</TableCell>
                                        <TableCell>
                                            <StatusBadge status={inv.status} />
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8 text-slate-400 hover:text-indigo-600"
                                                    onClick={() => handlePrintInvoice(inv)}
                                                    title="Print / PDF"
                                                >
                                                    <Printer size={16} />
                                                </Button>
                                                <Button variant="ghost" size="icon" onClick={() => handleDeleteInvoice(inv.id)} className="h-8 w-8 text-slate-400 hover:text-red-600">
                                                    <Trash2 size={16} />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </CardContent>
            </Card>
        </div>
    );

}
