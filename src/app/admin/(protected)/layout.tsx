import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getSupabaseServerAuthClient } from "@/lib/supabase/serverAuth";
import { getSupabaseServiceClient } from "@/lib/supabase/server";
import { AdminSidebar } from "./AdminSidebar";

export default async function AdminProtectedLayout({ children }: { children: ReactNode }) {
    const supabase = await getSupabaseServerAuthClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user || !user.email) {
        redirect("/admin/login");
    }

    const serviceClient = getSupabaseServiceClient();
    const { data: adminUser } = await serviceClient
        .from("admin_users")
        .select("email, role")
        .eq("email", user.email)
        .maybeSingle();

    if (!adminUser) {
        redirect("/admin/unauthorized");
    }

    return (
        <div className="min-h-screen bg-[#F6F4FB] flex">
            <AdminSidebar userEmail={user.email} />
            <main className="flex-1 p-6 md:p-10 overflow-x-hidden">{children}</main>
        </div>
    );
}
