import { getSupabaseServiceClient } from "@/lib/supabase/server";
import { StatusSelect, NotesEditor } from "../RecordControls";

export default async function AdminStartupsPage() {
    const supabase = getSupabaseServiceClient();
    const { data: applications } = await supabase
        .from("startup_applications")
        .select("*")
        .order("created_at", { ascending: false });

    return (
        <div>
            <h1 className="text-3xl font-display font-medium text-[#001738] mb-8">Startup Requirements</h1>
            <div className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-gray-50 text-left text-[#001738]/50 uppercase text-xs tracking-wide">
                                <th className="px-6 py-4 font-bold">Company</th>
                                <th className="px-6 py-4 font-bold">Duration</th>
                                <th className="px-6 py-4 font-bold">Budget</th>
                                <th className="px-6 py-4 font-bold">Status</th>
                                <th className="px-6 py-4 font-bold">Notes</th>
                                <th className="px-6 py-4 font-bold">Submitted</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications?.map((app) => (
                                <tr key={app.id} className="border-t border-gray-50 hover:bg-gray-50/50 align-top">
                                    <td className="px-6 py-4">
                                        <p className="font-bold text-[#001738]">{app.company_name}</p>
                                        <p className="text-[#001738]/50">{app.contact_person} · {app.email}</p>
                                        <p className="text-[#001738]/40 text-xs">{app.country}</p>
                                    </td>
                                    <td className="px-6 py-4 text-[#001738]/70">{app.duration ?? "—"}</td>
                                    <td className="px-6 py-4 text-[#001738]/70">{app.budget ?? "—"}</td>
                                    <td className="px-6 py-4">
                                        <StatusSelect table="startup_applications" id={app.id} status={app.status} notes={app.notes} />
                                    </td>
                                    <td className="px-6 py-4">
                                        <NotesEditor table="startup_applications" id={app.id} status={app.status} notes={app.notes} />
                                    </td>
                                    <td className="px-6 py-4 text-[#001738]/50 whitespace-nowrap">
                                        {new Date(app.created_at).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))}
                            {(!applications || applications.length === 0) && (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-[#001738]/40">
                                        No startup requirements yet.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
