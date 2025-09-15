import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
  title: "NextCart. - Admin",
  description: "NextCart. - Admin",
};

export default function RootAdminLayout({ children }) {
  return (
    <>
      <AdminLayout>{children}</AdminLayout>
    </>
  );
}
