// ...existing code...
import { UserProfile } from "@clerk/nextjs"
import {Navbar } from "@/components/dashboard/Navbar";
import { Sidebar } from "@/components/dashboard/Sidebar";

export default function setting(){
    return(
        <div>
            <Navbar />
            <Sidebar />
            <main className="ml-60 pt-20 min-h-screen flex items-center justify-center">
                <div className="w-full max-w-3xl p-6">
                    <UserProfile appearance={{}} />
                </div>
            </main>
        </div>
    )
}
// ...existing code...