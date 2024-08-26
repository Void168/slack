"use client";

import { useEffect, useState } from "react";

import { CreateWorkSpaceModal } from "@/features/workspace/components/create-workspace-modal";

export const Modals = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  
  return (
    <>
      <CreateWorkSpaceModal />
    </>
  );
};
