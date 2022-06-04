export type EdgeType = {
  id: number;
  accountId: number;
  fromId: number;
  toId: number;
};

type InitialPostEdges = EdgeType[];

export default InitialPostEdges;
