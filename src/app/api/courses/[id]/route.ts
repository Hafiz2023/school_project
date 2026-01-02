import { NextResponse } from 'next/server';

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> } // Adapted for Next.js 15+
) {
    const { id } = await params;
    // In a real DB we would delete here. For mock, we rely on the client refreshing.
    return NextResponse.json({ message: 'Course deleted', id });
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const body = await request.json();
    const { id } = await params;
    return NextResponse.json({ id, ...body });
}
