import { ConstructorParam as NodeConstructorParam } from '@/client/src/data-binding/Model/PostGraph/Node';

export type GetAllNodeSummary = {
  ret: NodeConstructorParam[];
};

export interface PostPayload {
  title: string;
  body: string;
};

export interface GetByIdPayload {
  id: number;
};
