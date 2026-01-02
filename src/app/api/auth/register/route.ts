import { NextResponse } from 'next/server';
import { users } from '@/lib/users';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, password } = body;

        if (!name || !email || !password) {
            return NextResponse.json(
                { message: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Check if user already exists
        if (users.find(u => u.email === email)) {
            return NextResponse.json(
                { message: 'User already exists' },
                { status: 409 }
            );
        }

        // Save user
        const newUser = { name, email, password };
        users.push(newUser);

        return NextResponse.json(
            { message: 'User registered successfully', user: { name, email } },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}
