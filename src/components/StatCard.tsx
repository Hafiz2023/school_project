import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
    title: string;
    value: string;
    trend: string;
    trendUp: boolean;
    icon: LucideIcon;
    color: string;
}

export default function StatCard({ title, value, trend, trendUp, icon: Icon, color }: StatCardProps) {
    return (
        <div className="card">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
                    <h3 className="text-2xl font-bold text-slate-800">{value}</h3>
                </div>
                <div className={`p-3 rounded-lg ${color} bg-opacity-10 text-white flex items-center justify-center`} style={{ backgroundColor: color + '20', color: color }}>
                    <Icon size={24} />
                </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
                <span className={trendUp ? "text-emerald-600 font-medium" : "text-red-500 font-medium"}>
                    {trendUp ? "↑" : "↓"} {trend}
                </span>
                <span className="text-slate-400 ml-2">vs last month</span>
            </div>
        </div>
    );
}
