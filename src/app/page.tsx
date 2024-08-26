"use client";

import { UserButton } from "@/features/auth/components/use-button";
import { useCreateWorkSpaceModal } from "@/features/workspace/store/use-create-workspace-modal";
import { useGetWorkSpaces } from "@/features/workspace/api/use-get-workspaces";
import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const [open, setOpen] = useCreateWorkSpaceModal();

  const { data, isLoading } = useGetWorkSpaces();

  const workspaceId = useMemo(() => data?.[0]?._id, [data]);

  useEffect(() => {
    if (isLoading) return;

    if (workspaceId) {
      router.replace(`/workspace/${workspaceId}`)
    } else if(!open) {
      setOpen(true)
    } 
  }, [isLoading, workspaceId, open, setOpen, router]);

  return (
    <div>
      <UserButton />
    </div>
  );
}
