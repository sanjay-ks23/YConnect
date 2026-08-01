"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Trash2, UserPlus } from "lucide-react";

interface AdminUser {
    email: string;
    role: string;
}

export function ManageAdmins({ admins, currentUserEmail }: { admins: AdminUser[]; currentUserEmail: string }) {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleAdd = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsSubmitting(true);
        const res = await fetch("/api/admin/manage-admins", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        });
        const body = await res.json();
        setIsSubmitting(false);
        if (!res.ok) {
            setError(body.error || "Failed to add admin");
            return;
        }
        setEmail("");
        router.refresh();
    };

    const handleRemove = async (targetEmail: string) => {
        await fetch("/api/admin/manage-admins", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: targetEmail }),
        });
        router.refresh();
    };

    return (
        <div className="bg-white rounded-[2rem] border border-gray-100 p-8 shadow-sm">
            <h2 className="text-xl font-display font-medium text-[#001738] mb-1">Admin Access</h2>
            <p className="text-sm text-[#001738]/50 mb-6">
                Only whitelisted Google accounts can sign in to this dashboard, regardless of email domain.
            </p>

            <form onSubmit={handleAdd} className="flex gap-3 mb-6">
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@yconnect.info"
                    className="flex-1 h-12 px-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-vibrant-blue focus:bg-white outline-none transition-all text-sm"
                />
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2 px-5 h-12 rounded-xl bg-vibrant-blue text-white font-bold text-sm hover:bg-vibrant-blue-dark transition-all disabled:opacity-50"
                >
                    {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <UserPlus className="w-4 h-4" />}
                    Add
                </button>
            </form>
            {error && <p className="text-sm text-red-500 font-medium mb-4">{error}</p>}

            <div className="space-y-2">
                {admins.map((admin) => (
                    <div key={admin.email} className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50">
                        <div>
                            <p className="font-medium text-[#001738] text-sm">{admin.email}</p>
                            <p className="text-xs text-[#001738]/40 uppercase tracking-wide">{admin.role}</p>
                        </div>
                        {admin.email !== currentUserEmail && (
                            <button onClick={() => handleRemove(admin.email)} className="text-red-400 hover:text-red-600 transition-colors">
                                <Trash2 className="w-4 h-4" />
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
