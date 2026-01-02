import { NextResponse } from 'next/server';

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    // Mock deletion – in handle production this would delete from DB
    const { id } = await params;

    // Return success response with the ID of deleted item
    return NextResponse.json({ message: 'Student deleted', id });
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const body = await request.json();
    const { id } = await params;

    // Return updated mock response
    return NextResponse.json({ id, ...body });
}
