import React from 'react';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatusBadgeProps {
    status: string;
    className?: string;
}

export default function StatusBadge({ status, className }: StatusBadgeProps) {
    const getStatusStyles = (status: string) => {
        const normalized = status.toLowerCase();
        if (normalized === 'paid' || normalized === 'active' || normalized === 'completed') {
            return 'bg-emerald-100 text-emerald-700';
        }
        if (normalized === 'pending' || normalized === 'probation') {
            return 'bg-amber-100 text-amber-700';
        }
        if (normalized === 'overdue' || normalized === 'inactive' || normalized === 'rejected') {
            return 'bg-red-100 text-red-700';
        }
        return 'bg-slate-100 text-slate-700';
    };

    const getIcon = (status: string) => {
        const normalized = status.toLowerCase();
        if (normalized === 'paid' || normalized === 'active') return CheckCircle;
        if (normalized === 'pending' || normalized === 'probation') return Clock;
        if (normalized === 'overdue' || normalized === 'inactive') return AlertCircle;
        return null;
    };

    const Icon = getIcon(status);

    return (
        <span className={cn(
            "px-2 py-1 rounded-full text-xs font-semibold flex w-fit items-center gap-1",
            getStatusStyles(status),
            className
        )}>
            {Icon && <Icon size={12} />}
            {status}
        </span>
    );
}
