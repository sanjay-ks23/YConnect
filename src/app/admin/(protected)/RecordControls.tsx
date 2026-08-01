"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Download, Loader2, Pencil } from "lucide-react";

const STATUS_OPTIONS = ["pending", "reviewed", "shortlisted", "rejected", "matched"];
const CONTACT_STATUS_OPTIONS = ["pending", "reviewed", "resolved"];

interface RecordControlsProps {
    table: "student_applications" | "startup_applications" | "contact_messages";
    id: string;
    status: string;
    notes: string | null;
}

export function StatusSelect({ table, id, status }: RecordControlsProps) {
    const [value, setValue] = useState(status);
    const [isSaving, setIsSaving] = useState(false);
    const router = useRouter();
    const options = table === "contact_messages" ? CONTACT_STATUS_OPTIONS : STATUS_OPTIONS;

    const handleChange = async (newStatus: string) => {
        setValue(newStatus);
        setIsSaving(true);
        await fetch("/api/admin/update-record", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ table, id, status: newStatus }),
        });
        setIsSaving(false);
        router.refresh();
    };

    const statusColors: Record<string, string> = {
        pending: "bg-gray-100 text-gray-600",
        reviewed: "bg-blue-100 text-blue-700",
        shortlisted: "bg-amber-100 text-amber-700",
        rejected: "bg-red-100 text-red-700",
        matched: "bg-green-100 text-green-700",
        resolved: "bg-green-100 text-green-700",
    };

    return (
        <div className="flex items-center gap-2">
            <select
                value={value}
                disabled={isSaving}
                onChange={(e) => handleChange(e.target.value)}
                className={`text-xs font-bold uppercase tracking-wide rounded-full px-3 py-1.5 border-0 outline-none cursor-pointer ${statusColors[value] ?? "bg-gray-100 text-gray-600"}`}
            >
                {options.map((opt) => (
                    <option key={opt} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>
            {isSaving && <Loader2 className="w-3 h-3 animate-spin text-gray-400" />}
        </div>
    );
}

export function NotesEditor({ table, id, notes }: RecordControlsProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(notes ?? "");
    const [isSaving, setIsSaving] = useState(false);
    const router = useRouter();

    const handleSave = async () => {
        setIsSaving(true);
        try {
            await fetch("/api/admin/update-record", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ table, id, notes: value }),
            });
            setIsEditing(false);
            router.refresh();
        } finally {
            setIsSaving(false);
        }
    };

    const handleCancel = () => {
        setValue(notes ?? "");
        setIsEditing(false);
    };

    if (isEditing) {
        return (
            <div className="flex flex-col gap-2 min-w-[180px]">
                <textarea
                    autoFocus
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Add a note for the team..."
                    className="w-full text-xs p-2.5 rounded-xl border border-gray-200 focus:border-vibrant-blue outline-none resize-none min-h-[64px] bg-white"
                />
                <div className="flex gap-2">
                    <button
                        onClick={handleSave}
                        disabled={isSaving}
                        className="flex items-center gap-1 text-xs font-bold text-white bg-vibrant-blue px-3 py-1.5 rounded-full disabled:opacity-50"
                    >
                        {isSaving && <Loader2 className="w-3 h-3 animate-spin" />}
                        Save
                    </button>
                    <button
                        onClick={handleCancel}
                        disabled={isSaving}
                        className="text-xs font-bold text-gray-400 hover:text-gray-600 px-3 py-1.5 rounded-full hover:bg-gray-100 transition-colors"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        );
    }

    return (
        <button
            onClick={() => setIsEditing(true)}
            className="flex items-start gap-1.5 text-left group max-w-[180px]"
        >
            {notes ? (
                <span className="text-xs text-[#001738]/60 line-clamp-2 group-hover:text-[#001738]">{notes}</span>
            ) : (
                <span className="text-xs text-gray-300 group-hover:text-vibrant-blue italic">Add note</span>
            )}
            <Pencil className="w-3 h-3 text-gray-300 group-hover:text-vibrant-blue flex-shrink-0 mt-0.5" />
        </button>
    );
}

export function ResumeDownloadButton({ resumePath }: { resumePath: string }) {
    const [isLoading, setIsLoading] = useState(false);

    const handleDownload = async () => {
        setIsLoading(true);
        try {
            const res = await fetch("/api/admin/resume-url", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ path: resumePath }),
            });
            const body = await res.json();
            if (body.url) {
                window.open(body.url, "_blank", "noopener,noreferrer");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <button
            onClick={handleDownload}
            disabled={isLoading}
            className="flex items-center gap-1.5 text-xs font-bold text-vibrant-blue hover:underline disabled:opacity-50"
        >
            {isLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Download className="w-3.5 h-3.5" />}
            Resume
        </button>
    );
}
