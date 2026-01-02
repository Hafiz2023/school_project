import { NextResponse } from 'next/server';
import { users } from '@/lib/users';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, password } = body;

        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            return NextResponse.json(
                { message: 'Login successful', user: { name: user.name, email: user.email } },
                { status: 200 }
            );
        } else {
            return NextResponse.json(
                { message: 'Invalid credentials' },
                { status: 401 }
            );
        }
    } catch (_error) {
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}
