import { NextResponse } from 'next/server';

let classrooms = [
    { id: 'CLS-001', name: 'Class 10-A', subject: 'Mathematics', teacher: 'Mr. Wilson', students: 32, time: '09:00 AM', room: '301', color: 'border-l-4 border-l-indigo-500' },
    { id: 'CLS-002', name: 'Class 9-B', subject: 'Physics', teacher: 'Mrs. Davis', students: 28, time: '10:45 AM', room: '204', color: 'border-l-4 border-l-pink-500' },
    { id: 'CLS-003', name: 'Class 11-Sci', subject: 'Chemistry', teacher: 'Dr. Brown', students: 30, time: '01:00 PM', room: 'Lab 1', color: 'border-l-4 border-l-blue-500' },
    { id: 'CLS-004', name: 'Class 12-Arts', subject: 'English Lit', teacher: 'Ms. Taylor', students: 25, time: '02:45 PM', room: '105', color: 'border-l-4 border-l-orange-500' },
];

export async function GET() {
    return NextResponse.json(classrooms);
}

export async function POST(request: Request) {
    const body = await request.json();
    const newClass = {
        id: `CLS-${String(classrooms.length + 1).padStart(3, '0')}`,
        students: 0,
        color: 'border-l-4 border-l-emerald-500', // Default color for new classes
        ...body,
    };
    classrooms.push(newClass);
    return NextResponse.json(newClass, { status: 201 });
}
