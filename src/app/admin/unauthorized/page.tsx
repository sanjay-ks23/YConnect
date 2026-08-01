import Link from "next/link";
import { ShieldAlert } from "lucide-react";

export default function UnauthorizedPage() {
    return (
        <div className="min-h-screen bg-[#F6F4FB] flex items-center justify-center p-6">
            <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-12 max-w-md w-full text-center">
                <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-6">
                    <ShieldAlert className="w-8 h-8 text-red-500" />
                </div>
                <h1 className="text-2xl font-display font-medium text-[#001738] mb-2">Access Denied</h1>
                <p className="text-[#001738]/50 mb-8">
                    Your Google account is not authorized to access the YConnect admin dashboard. Contact an existing admin to be added.
                </p>
                <Link href="/admin/login" className="text-vibrant-blue font-bold hover:underline">
                    Back to login
                </Link>
            </div>
        </div>
    );
}
