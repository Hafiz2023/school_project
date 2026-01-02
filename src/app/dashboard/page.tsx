'use client';
import React from 'react';
import Header from '@/components/Header';
import StatCard from '@/components/StatCard';
import { Users, GraduationCap, DollarSign, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Dashboard() {
  const stats = [
    { title: 'Total Students', value: '2,543', trend: '12%', trendUp: true, icon: Users, color: '#4f46e5' },
    { title: 'Total Teachers', value: '145', trend: '4%', trendUp: true, icon: GraduationCap, color: '#ec4899' },
    { title: 'Total Revenue', value: '$45,200', trend: '2.5%', trendUp: false, icon: DollarSign, color: '#10b981' },
    { title: 'Active Courses', value: '38', trend: '8%', trendUp: true, icon: BookOpen, color: '#f59e0b' },
  ];

  return (
    <div>
      <Header title="Admin Dashboard" />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart Area */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-bold">Revenue Overview</CardTitle>
            <select className="border border-input rounded-md text-sm p-1 text-muted-foreground outline-none bg-background">
              <option>This Year</option>
              <option>Last Year</option>
            </select>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between gap-2 px-2">
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((h, i) => (
                <div key={i} className="w-full bg-indigo-50 dark:bg-indigo-900/20 rounded-t-sm relative group cursor-pointer transition-all hover:bg-indigo-100 dark:hover:bg-indigo-900/40" style={{ height: '100%' }}>
                  <div
                    className="absolute bottom-0 left-0 w-full bg-indigo-500 rounded-t-sm transition-all duration-500 group-hover:bg-indigo-600"
                    style={{ height: `${h}%` }}
                  ></div>
                  <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded pointer-events-none transition-opacity">
                    ${h}k
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-xs text-muted-foreground px-2">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
              <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity / Side Panel */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-bold">Recent Students</CardTitle>
            <button className="text-primary text-sm font-medium hover:underline">View All</button>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              {[
                { name: 'Sarah Wilson', grade: 'Grade 10', date: 'Oct 24', color: 'bg-orange-100 text-orange-600' },
                { name: 'James Anderson', grade: 'Grade 12', date: 'Oct 23', color: 'bg-blue-100 text-blue-600' },
                { name: 'Michael Brown', grade: 'Grade 9', date: 'Oct 22', color: 'bg-green-100 text-green-600' },
                { name: 'Emily Davis', grade: 'Grade 11', date: 'Oct 21', color: 'bg-purple-100 text-purple-600' },
                { name: 'William Taylor', grade: 'Grade 10', date: 'Oct 20', color: 'bg-pink-100 text-pink-600' },
              ].map((student, i) => (
                <div key={i} className="flex items-center justify-between p-2 hover:bg-muted/50 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${student.color} flex items-center justify-center font-bold text-xs`}>
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{student.name}</div>
                      <div className="text-xs text-muted-foreground">{student.grade}</div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">{student.date}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
