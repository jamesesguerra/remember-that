import { Navbar } from "@/components/layout/navbar/navbar";

export default function EntriesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
