import { NextResponse } from 'next/server';

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> } // Adapted for Next.js 15+ where params might be a promise
) {
    // Mock deletion 
    const { id } = await params;

    return NextResponse.json({ message: 'Invoice deleted', id });
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const body = await request.json();
    const { id } = await params;

    return NextResponse.json({ id, ...body });
}
