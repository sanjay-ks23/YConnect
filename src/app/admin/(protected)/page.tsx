import { getSupabaseServiceClient } from "@/lib/supabase/server";
import { GraduationCap, Building2, MessageSquare, CalendarClock } from "lucide-react";

export default async function AdminOverviewPage() {
    const supabase = getSupabaseServiceClient();

    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const [studentsCount, startupsCount, messagesCount, todayCount] = await Promise.all([
        supabase.from("student_applications").select("id", { count: "exact", head: true }),
        supabase.from("startup_applications").select("id", { count: "exact", head: true }),
        supabase.from("contact_messages").select("id", { count: "exact", head: true }),
        Promise.all([
            supabase.from("student_applications").select("id", { count: "exact", head: true }).gte("created_at", startOfDay.toISOString()),
            supabase.from("startup_applications").select("id", { count: "exact", head: true }).gte("created_at", startOfDay.toISOString()),
            supabase.from("contact_messages").select("id", { count: "exact", head: true }).gte("created_at", startOfDay.toISOString()),
        ]).then(([s, st, m]) => (s.count ?? 0) + (st.count ?? 0) + (m.count ?? 0)),
    ]);

    const stats = [
        { label: "Students", value: studentsCount.count ?? 0, icon: GraduationCap, color: "text-vibrant-crimson", bg: "bg-vibrant-crimson/10" },
        { label: "Startups", value: startupsCount.count ?? 0, icon: Building2, color: "text-vibrant-blue", bg: "bg-vibrant-blue/10" },
        { label: "Messages", value: messagesCount.count ?? 0, icon: MessageSquare, color: "text-vibrant-green-dark", bg: "bg-vibrant-green/10" },
        { label: "Today's Submissions", value: todayCount, icon: CalendarClock, color: "text-vibrant-orange-dark", bg: "bg-vibrant-orange/10" },
    ];

    return (
        <div>
            <h1 className="text-3xl font-display font-medium text-[#001738] mb-8">Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-white rounded-[2rem] p-6 border border-gray-100 shadow-sm">
                        <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center mb-4`}>
                            <stat.icon className={`w-6 h-6 ${stat.color}`} />
                        </div>
                        <p className="text-3xl font-display font-medium text-[#001738]">{stat.value}</p>
                        <p className="text-sm text-[#001738]/50 font-medium mt-1">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
