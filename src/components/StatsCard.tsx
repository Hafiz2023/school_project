import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatsCardProps {
    title: string;
    value: string | number;
    icon: LucideIcon;
    description?: string;
    trend?: string;
    className?: string;
    iconClassName?: string;
}

export default function StatsCard({
    title,
    value,
    icon: Icon,
    description,
    trend,
    className,
    iconClassName
}: StatsCardProps) {
    return (
        <Card className={cn("border-none shadow-sm", className)}>
            <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <p className={cn("text-sm font-medium", className?.includes('text-white') ? "text-indigo-100" : "text-slate-500")}>
                            {title}
                        </p>
                        <h3 className={cn("text-3xl font-bold mt-1", className?.includes('text-white') ? "text-white" : "text-slate-800")}>
                            {value}
                        </h3>
                    </div>
                    <div className={cn("p-2 rounded-lg", iconClassName || "bg-slate-100 text-slate-500")}>
                        <Icon size={24} />
                    </div>
                </div>
                {(description || trend) && (
                    <div className={cn("text-sm", className?.includes('text-white') ? "text-indigo-100" : "text-slate-500")}>
                        {trend && <span className="font-medium mr-1">{trend}</span>}
                        {description}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
