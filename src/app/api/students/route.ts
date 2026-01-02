import { NextResponse } from 'next/server';

// Mock database
const students = [
    { id: 'ST-2024-001', name: 'Alina Khan', grade: '10th', parent: 'Tariq Khan', phone: '+92 300 1234567', status: 'Active' },
    { id: 'ST-2024-002', name: 'Bilal Ahmed', grade: '9th', parent: 'Nasir Ahmed', phone: '+92 321 7654321', status: 'Active' },
    { id: 'ST-2024-003', name: 'Zara Malik', grade: '12th', parent: 'Asif Malik', phone: '+92 333 9876543', status: 'Probation' },
    { id: 'ST-2024-004', name: 'Omar Farooq', grade: '11th', parent: 'Farooq Azam', phone: '+92 345 6789012', status: 'Active' },
    { id: 'ST-2024-005', name: 'Hira Shah', grade: '8th', parent: 'Shahid Shah', phone: '+92 301 2345678', status: 'Active' },
    { id: 'ST-2024-006', name: 'Danish Ali', grade: '10th', parent: 'Ali Raza', phone: '+92 312 3456789', status: 'Inactive' },
    { id: 'ST-2024-007', name: 'Fatima Noor', grade: '9th', parent: 'Noor Ahmed', phone: '+92 321 1122334', status: 'Active' },
];

export async function GET() {
    return NextResponse.json(students);
}

export async function POST(request: Request) {
    const body = await request.json();
    const newStudent = {
        id: `ST-2024-${String(students.length + 1).padStart(3, '0')}`,
        ...body,
        status: 'Active' // Default status
    };
    students.push(newStudent);
    return NextResponse.json(newStudent, { status: 201 });
}
