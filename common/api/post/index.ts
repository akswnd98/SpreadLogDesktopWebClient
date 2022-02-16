import { ConstructorParam as NodeConstructorParam } from '@/client/src/data-binding/Model/PostGraph/Node';

export type GetAllNodeSummary = {
  ret: NodeConstructorParam[];
};

export interface AppendPostNodeRequest {
  title: string;
  body: string;
};

export interface AppendPostNodeResolve {
  id: number;
};

export interface GetByIdPayload {
  id: number;
};
