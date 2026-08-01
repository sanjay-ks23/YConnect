import { getSupabaseServiceClient } from "@/lib/supabase/server";
import { StatusSelect, NotesEditor } from "../RecordControls";

export default async function AdminContactPage() {
    const supabase = getSupabaseServiceClient();
    const { data: messages } = await supabase
        .from("contact_messages")
        .select("*")
        .order("created_at", { ascending: false });

    return (
        <div>
            <h1 className="text-3xl font-display font-medium text-[#001738] mb-8">Contact Messages</h1>
            <div className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-gray-50 text-left text-[#001738]/50 uppercase text-xs tracking-wide">
                                <th className="px-6 py-4 font-bold">From</th>
                                <th className="px-6 py-4 font-bold">Subject</th>
                                <th className="px-6 py-4 font-bold">Message</th>
                                <th className="px-6 py-4 font-bold">Type</th>
                                <th className="px-6 py-4 font-bold">Status</th>
                                <th className="px-6 py-4 font-bold">Notes</th>
                                <th className="px-6 py-4 font-bold">Submitted</th>
                            </tr>
                        </thead>
                        <tbody>
                            {messages?.map((msg) => (
                                <tr key={msg.id} className="border-t border-gray-50 hover:bg-gray-50/50 align-top">
                                    <td className="px-6 py-4">
                                        <p className="font-bold text-[#001738]">{msg.name}</p>
                                        <p className="text-[#001738]/50">{msg.email}</p>
                                    </td>
                                    <td className="px-6 py-4 text-[#001738]/70 font-medium">{msg.subject}</td>
                                    <td className="px-6 py-4 text-[#001738]/70 max-w-[280px]">{msg.message}</td>
                                    <td className="px-6 py-4 text-[#001738]/50 capitalize">{msg.inquiry_type}</td>
                                    <td className="px-6 py-4">
                                        <StatusSelect table="contact_messages" id={msg.id} status={msg.status} notes={msg.notes} />
                                    </td>
                                    <td className="px-6 py-4">
                                        <NotesEditor table="contact_messages" id={msg.id} status={msg.status} notes={msg.notes} />
                                    </td>
                                    <td className="px-6 py-4 text-[#001738]/50 whitespace-nowrap">
                                        {new Date(msg.created_at).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))}
                            {(!messages || messages.length === 0) && (
                                <tr>
                                    <td colSpan={7} className="px-6 py-12 text-center text-[#001738]/40">
                                        No contact messages yet.
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
