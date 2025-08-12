"use client";
import { Navbar } from "@/components/layout/navbar/navbar";
import { useAuthRedirect } from "@/hooks/use-auth-redirect";

export default function EntriesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useAuthRedirect();
  
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
