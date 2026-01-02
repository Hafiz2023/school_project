import { NextResponse } from 'next/server';

let invoices = [
    { id: 'INV-001', student: 'Alina Khan', amount: '$1,200', date: 'Oct 01, 2024', status: 'Paid', method: 'Credit Card' },
    { id: 'INV-002', student: 'Bilal Ahmed', amount: '$1,200', date: 'Oct 05, 2024', status: 'Pending', method: 'Bank Transfer' },
    { id: 'INV-003', student: 'Zara Malik', amount: '$1,500', date: 'Oct 10, 2024', status: 'Overdue', method: 'Cash' },
    { id: 'INV-004', student: 'Omar Farooq', amount: '$1,200', date: 'Oct 12, 2024', status: 'Paid', method: 'Credit Card' },
    { id: 'INV-005', student: 'Hira Shah', amount: '$1,100', date: 'Oct 15, 2024', status: 'Paid', method: 'Online' },
];

export async function GET() {
    return NextResponse.json(invoices);
}

export async function POST(request: Request) {
    const body = await request.json();
    const newInvoice = {
        id: `INV-${String(invoices.length + 1).padStart(3, '0')}`,
        ...body,
    };
    invoices.push(newInvoice);
    return NextResponse.json(newInvoice, { status: 201 });
}
