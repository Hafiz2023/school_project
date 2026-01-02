import { NextResponse } from 'next/server';
import { payrollData } from '@/lib/mockData';

export async function GET() {
    return NextResponse.json(payrollData);
}

export async function POST(request: Request) {
    const body = await request.json();
    const newRecord = {
        id: `PAY-00${payrollData.length + 1}`,
        status: 'Pending',
        date: 'Nov 2025',
        ...body,
    };
    payrollData.push(newRecord);
    return NextResponse.json(newRecord, { status: 201 });
}
