"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { inquiries as initialInquiries, type Inquiry, type InquiryStatus } from "./inquiriesData";

interface InquiriesContextType {
  inquiries: Inquiry[];
  updateInquiryStatus: (id: number, status: InquiryStatus) => void;
}

const InquiriesContext = createContext<InquiriesContextType | undefined>(undefined);

export function InquiriesProvider({ children }: { children: ReactNode }) {
  const [inquiries, setInquiries] = useState<Inquiry[]>(initialInquiries);

  const updateInquiryStatus = (id: number, status: InquiryStatus) => {
    setInquiries((prev) =>
      prev.map((inquiry) =>
        inquiry.id === id ? { ...inquiry, status } : inquiry
      )
    );
  };

  return (
    <InquiriesContext.Provider value={{ inquiries, updateInquiryStatus }}>
      {children}
    </InquiriesContext.Provider>
  );
}

export function useInquiries() {
  const context = useContext(InquiriesContext);
  if (context === undefined) {
    throw new Error("useInquiries must be used within an InquiriesProvider");
  }
  return context;
}
