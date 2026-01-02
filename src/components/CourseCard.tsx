import React from 'react';
import { Video, Clock, Trash2 } from 'lucide-react';

interface Course {
    id: string;
    title: string;
    category: string;
    instructor: string;
    progress: number;
    lessons: number;
    hours: number;
    level: string;
    color: string;
}

interface CourseCardProps {
    course: Course;
    onDelete: (id: string, e: React.MouseEvent) => void;
}

/**
 * CourseCard Component
 * Displays individual course information including progress, instructor, and stats.
 * Uses a card-like layout with a colorful header and a clean details section.
 */
export default function CourseCard({ course, onDelete }: CourseCardProps) {
    // Get initial of the instructor's last name for the avatar
    const instructorInitial = course.instructor.split(' ').pop()?.[0] || 'I';

    return (
        <div className="card p-0 overflow-hidden group hover:-translate-y-1 transition-transform duration-300 bg-white border border-slate-200 rounded-lg shadow-sm">
            {/* Card Header with Color from Props */}
            <div className={`h-32 ${course.color} relative p-6 flex flex-col justify-between`}>
                <div className="flex justify-between items-start text-white/90">
                    <span className="text-xs font-bold uppercase tracking-wider bg-black/20 px-2 py-1 rounded">
                        {course.level}
                    </span>
                    <button
                        onClick={(e) => onDelete(course.id, e)}
                        className="bg-white/20 p-1.5 rounded-full hover:bg-white/30 hover:text-red-200 transition-colors"
                        title="Delete Course"
                    >
                        <Trash2 size={16} color="white" />
                    </button>
                </div>
                <h3 className="text-white text-xl font-bold line-clamp-2" title={course.title}>
                    {course.title}
                </h3>
            </div>

            {/* Card Content */}
            <div className="p-6">
                {/* Instructor Info */}
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">
                        {instructorInitial}
                    </div>
                    <div className="text-sm">
                        <div className="text-slate-500 text-xs">Instructor</div>
                        <div className="font-medium text-slate-800">{course.instructor}</div>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="flex justify-between text-xs text-slate-500 mb-4 border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-1">
                        <Video size={14} /> <span>{course.lessons} Lessons</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock size={14} /> <span>{course.hours} Hours</span>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-2 flex justify-between items-center text-sm">
                    <span className="font-semibold text-slate-700">Course Progress</span>
                    <span className="text-indigo-600 font-bold">{course.progress}%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-indigo-500"
                        style={{ width: `${course.progress}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
}
