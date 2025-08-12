// hooks/useAuthRedirect.ts
"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export function useAuthRedirect() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token && (pathname === "/login" || pathname === "/sign-up")) {
      router.replace("/dashboard");
    } 
    
    if (
      !token &&
      (pathname === "/dashboard" ||
      pathname === "/entries" ||
      pathname === "/entries/new")
    ) {
      router.replace("/login");
    }
  }, [pathname, router]);
}
