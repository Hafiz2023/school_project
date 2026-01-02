// Shared mock data store to ensure persistence across different API routes during the session
export const payrollData = [
    { id: 'PAY-001', teacher: 'Ibrahim Khalil', role: 'Senior Math Teacher', salary: '3200', status: 'Paid', date: 'Oct 2025' },
    { id: 'PAY-002', teacher: 'Sarah Ahmed', role: 'Physics Teacher', salary: '2800', status: 'Pending', date: 'Oct 2025' },
    { id: 'PAY-003', teacher: 'Michael Chen', role: 'Computer Science', salary: '3500', status: 'Paid', date: 'Oct 2025' },
    { id: 'PAY-004', teacher: 'Emily Davis', role: 'English Literature', salary: '2900', status: 'Pending', date: 'Oct 2025' },
    { id: 'PAY-005', teacher: 'David Wilson', role: 'History', salary: '2750', status: 'Processing', date: 'Oct 2025' }
];

export const examsData = [
    { id: 'EX-001', title: '1st Term Mid-Year Exam', date: '2025-03-15', status: 'Completed', type: '1st' },
    { id: 'EX-002', title: '2nd Term Assessment', date: '2025-06-20', status: 'Scheduled', type: '2nd' },
    { id: 'EX-003', title: 'Final Annual Examination', date: '2025-12-10', status: 'Scheduled', type: 'Final' }
];

export const resultsData = [
    { id: 'RES-001', student: 'Alina Khan', examId: 'EX-001', subject: 'Mathematics', marks: '85', total: '100', grade: 'A', status: 'Pass' },
    { id: 'RES-002', student: 'Bilal Ahmed', examId: 'EX-001', subject: 'Mathematics', marks: '72', total: '100', grade: 'B', status: 'Pass' },
    { id: 'RES-003', student: 'Zara Malik', examId: 'EX-001', subject: 'Mathematics', marks: '94', total: '100', grade: 'A+', status: 'Pass' },
    { id: 'RES-004', student: 'Omar Farooq', examId: 'EX-001', subject: 'Physics', marks: '65', total: '100', grade: 'C', status: 'Pass' },
    { id: 'RES-005', student: 'Hira Shah', examId: 'EX-001', subject: 'Physics', marks: '38', total: '100', grade: 'F', status: 'Fail' }
];

export const blogData = [
    {
        id: '1',
        slug: 'future-of-edtech-2026',
        title: "The Future of EdTech in 2026",
        excerpt: "How AI and machine learning are personalized learning experiences for students worldwide.",
        content: "Detailed content about AI in education...",
        date: "Jan 15, 2026",
        category: "Trends",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2574&auto=format&fit=crop",
        author: { name: "Sarah Connor", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop" }
    },
    {
        id: '2',
        slug: 'improve-student-engagement',
        title: "5 Ways to Improve Student Engagement",
        excerpt: "Practical tips for teachers to keep students motivated and focused in the classroom.",
        content: "Detailed content about engagement...",
        date: "Jan 10, 2026",
        category: "Teaching",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2670&auto=format&fit=crop",
        author: { name: "Michael Chang", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop" }
    },
    {
        id: '3',
        slug: 'eduprime-v2-release',
        title: "EduPrime Product Update: v2.0 Released",
        excerpt: "Introducing our new AI-powered analytics dashboard and improved mobile app.",
        content: "Detailed content about product update...",
        date: "Jan 05, 2026",
        category: "Product",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        author: { name: "Emily Blunt", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2561&auto=format&fit=crop" }
    },
    {
        id: '4',
        slug: 'importance-of-steam',
        title: "Why STEAM Education Matters More Than Ever",
        excerpt: "Integrating Arts into STEM to foster creativity and innovation in young minds.",
        content: "Detailed content about STEAM...",
        date: "Dec 28, 2025",
        category: "Curriculum",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
        author: { name: "Sarah Connor", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop" }
    },
    {
        id: '5',
        slug: 'cybersecurity-in-schools',
        title: "Cybersecurity Best Practices for Schools",
        excerpt: "Protecting student data in an increasingly digital world.",
        content: "Detailed content about cybersecurity...",
        date: "Dec 20, 2025",
        category: "Technology",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2670&auto=format&fit=crop",
        author: { name: "David Kim", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop" }
    },
    {
        id: '6',
        slug: 'mental-health-awareness',
        title: "Supporting Student Mental Health",
        excerpt: "Creating a supportive environment for students' emotional well-being.",
        content: "Detailed content about mental health...",
        date: "Dec 15, 2025",
        category: "Wellness",
        image: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?q=80&w=2670&auto=format&fit=crop",
        author: { name: "Emily Blunt", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2561&auto=format&fit=crop" }
    }
];
