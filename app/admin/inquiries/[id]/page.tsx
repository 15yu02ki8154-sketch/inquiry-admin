import { notFound } from "next/navigation";
import { InquiryDetailClient } from "./InquiryDetailClient";
import { inquiries, type Inquiry } from "../../inquiriesData";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const numericId = Number(id);
  
  const inquiry = inquiries.find((item: Inquiry) => item.id === numericId);
  
  if (!inquiry) {
    notFound();
  }

  return <InquiryDetailClient id={id} />;
}
