import { NextResponse } from 'next/server';
// We need to access the shared data. In a real app, this would be a DB.
// Since we can't easily import the *instance* from the other route file in Next.js app dir without a separate lib file,
// we will assume a simple mock implementation here that might reset if we don't move data to a lib.
// For robustness in this session, I'll move the data to a lib file first.
import { payrollData } from '@/lib/mockData';

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const body = await request.json();

    // Find index
    const index = payrollData.findIndex(p => p.id === id);

    if (index !== -1) {
        payrollData[index] = { ...payrollData[index], ...body };
        return NextResponse.json(payrollData[index]);
    }

    return NextResponse.json({ message: 'Record not found' }, { status: 404 });
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    const index = payrollData.findIndex(p => p.id === id);

    if (index !== -1) {
        const deleted = payrollData.splice(index, 1);
        return NextResponse.json(deleted[0]);
    }

    return NextResponse.json({ message: 'Record not found' }, { status: 404 });
}
