"use client";

import { InquiriesProvider } from "./InquiriesContext";

export function AdminProviders({ children }: { children: React.ReactNode }) {
  return (
    <InquiriesProvider>
      {children}
    </InquiriesProvider>
  );
}
