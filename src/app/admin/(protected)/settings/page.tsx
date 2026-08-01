import { getSupabaseServiceClient } from "@/lib/supabase/server";
import { getSupabaseServerAuthClient } from "@/lib/supabase/serverAuth";
import { ManageAdmins } from "./ManageAdmins";

export default async function AdminSettingsPage() {
    const authClient = await getSupabaseServerAuthClient();
    const {
        data: { user },
    } = await authClient.auth.getUser();

    const service = getSupabaseServiceClient();
    const { data: admins } = await service.from("admin_users").select("email, role").order("created_at", { ascending: true });

    return (
        <div>
            <h1 className="text-3xl font-display font-medium text-[#001738] mb-8">Settings</h1>
            <ManageAdmins admins={admins ?? []} currentUserEmail={user?.email ?? ""} />
        </div>
    );
}
