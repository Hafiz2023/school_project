import { NextResponse } from 'next/server';

const courses = [
    { id: 'CRS-001', title: 'Advanced Mathematics', category: 'Mathematics', instructor: 'Dr. Sarah Wilson', progress: 75, lessons: 24, hours: 48, level: 'Advanced', color: 'bg-indigo-600' },
    { id: 'CRS-002', title: 'Physics Fundamentals', category: 'Science', instructor: 'Prof. James Black', progress: 30, lessons: 18, hours: 36, level: 'Intermediate', color: 'bg-blue-600' },
    { id: 'CRS-003', title: 'World History', category: 'Arts', instructor: 'Ms. Emily Stone', progress: 90, lessons: 32, hours: 64, level: 'Beginner', color: 'bg-amber-600' },
    { id: 'CRS-004', title: 'Computer Science 101', category: 'Computer Science', instructor: 'Mr. David Lee', progress: 15, lessons: 40, hours: 80, level: 'Beginner', color: 'bg-emerald-600' },
    { id: 'CRS-005', title: 'Chemistry Lab', category: 'Science', instructor: 'Dr. Michael Chen', progress: 50, lessons: 12, hours: 24, level: 'Advanced', color: 'bg-rose-600' },
    { id: 'CRS-006', title: 'English Literature', category: 'Arts', instructor: 'Mrs. Olivia Brown', progress: 100, lessons: 20, hours: 40, level: 'Intermediate', color: 'bg-purple-600' },
];

export async function GET() {
    return NextResponse.json(courses);
}

export async function POST(request: Request) {
    const body = await request.json();
    const newCourse = {
        id: `CRS-${String(courses.length + 1).padStart(3, '0')}`,
        progress: 0,
        color: 'bg-indigo-600',
        ...body,
    };
    courses.push(newCourse);
    return NextResponse.json(newCourse, { status: 201 });
}
