'use client'
// This is the route for the upload page in the portfolio items section of the dashboard
import UploadForm from "@/app/uploads/components/UploadForm"
import BreadcrumbBar from "@/components/breadcrumber"
import { SidebarProvider } from "@/components/ui/sidebar"
import { SidebarInset } from "@/components/ui/sidebar"

export default function UploadPage() {
  return (
    <>
    <SidebarProvider>
      <SidebarInset>
    <div>
      <BreadcrumbBar />
      <div className="flex items-center justify-between mt-6 ml-4 gap-2 mb-3">
          <div>
            <h1 className="text-3xl font-heading font-medium text-white">Upload Portfolio Item</h1>
            <p className="mt-1 text-gray-400">Add new work to your portfolio collection</p>
          </div>
        </div> 
      <UploadForm />
      </div>
      </SidebarInset>
      </SidebarProvider>
    </>
  )
}
