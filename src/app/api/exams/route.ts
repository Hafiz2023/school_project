import { NextResponse } from 'next/server';
import { examsData, resultsData } from '@/lib/mockData';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');

    if (type === 'results') {
        return NextResponse.json(resultsData);
    }
    return NextResponse.json(examsData);
}

export async function POST(request: Request) {
    const body = await request.json();
    const type = body.dataType; // 'exam' or 'result'

    if (type === 'result') {
        const newResult = {
            id: `RES-00${resultsData.length + 1}`,
            status: parseInt(body.marks) >= 40 ? 'Pass' : 'Fail',
            ...body
        };
        resultsData.push(newResult);
        return NextResponse.json(newResult, { status: 201 });
    } else {
        const newExam = {
            id: `EX-00${examsData.length + 1}`,
            status: 'Scheduled',
            ...body
        };
        examsData.push(newExam);
        return NextResponse.json(newExam, { status: 201 });
    }
}
