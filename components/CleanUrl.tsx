"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function CleanUrl() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      window.history.replaceState(null, "", "/");
    }
  }, [pathname]);

  return null;
}
