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

export interface GetByIdRequest {
  id: number;
};

export interface GetByIdResponse {
  ret: {
    id: number;
    title: string;
    body: string;
    firstUpload: Date;
    lastUpdate: Date;
  };
};
