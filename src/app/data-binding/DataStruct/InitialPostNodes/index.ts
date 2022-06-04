export type NodeType = {
  id: number;
  accountId: number;
  title: string;
  firstUpload: Date;
  lastUpdate: Date;
};

type InitialPostNodes = NodeType[];

export default InitialPostNodes;
