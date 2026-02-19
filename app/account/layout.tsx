import { AccountSidebar } from "../_components/AccountSidebar";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <h1 className="mb-6 font-heading text-2xl font-bold text-text">
        My Account
      </h1>
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
        <AccountSidebar />
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
