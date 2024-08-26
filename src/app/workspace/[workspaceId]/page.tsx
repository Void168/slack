"use client";
import { useGetWorkSpace } from "@/features/workspace/api/use-get-workspace";
import { useWorkspaceId } from "@/hooks/use-workspace-id";

const WorkspaceIdPage = () => {
  const workspaceId = useWorkspaceId();

  const { data } = useGetWorkSpace({id: workspaceId})

  return <div>{JSON.stringify(data)}</div>;
};

export default WorkspaceIdPage;
