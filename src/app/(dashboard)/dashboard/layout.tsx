import { SidebarProvider } from "@/components/ui/sidebar"
import Sidebar from "@/components/sidebar"
import type React from "react"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <div className="flex h-screen">
                <Sidebar />
                <main className="flex-1 overflow-auto p-6">{children}</main>
            </div>
        </SidebarProvider>
    )
}

