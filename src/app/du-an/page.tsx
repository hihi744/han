import type { Metadata } from "next";
import { PageIntro } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Dự án",
};

// Placeholder: Đơm Hoa will add its projects here.
export default function ProjectsPage() {
  return <PageIntro title="Dự án" body="Nội dung đang được cập nhật." />;
}
