import { Navbar } from "./_components/navbar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-ful pt-40">{children}</main>
    </div>
  );
}
