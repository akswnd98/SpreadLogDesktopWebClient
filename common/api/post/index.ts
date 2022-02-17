import { ConstructorParam as NodeConstructorParam } from '@/client/src/data-binding/Model/PostGraph/Node';

export type GetAllNodeSummary = {
  ret: NodeConstructorParam[];
};

export interface AppendPostNodeRequest {
  title: string;
  body: string;
};

export interface AppendPostNodeResponse {
  id: number;
};

export interface DeleteByIdRequest {
  id: number;
};

export interface DeleteByIdResponse {
  error: boolean;
};
