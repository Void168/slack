"use client";
import { useWorkspaceId } from "@/hooks/use-workspace-id";

const WorkspaceIdPage = () => {
  const workspaceId = useWorkspaceId();

  return <div>Id</div>;
};

export default WorkspaceIdPage;
