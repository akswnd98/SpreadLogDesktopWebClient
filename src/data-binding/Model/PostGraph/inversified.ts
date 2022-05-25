import 'reflect-metadata';
import inversify, { injectable, inject } from 'inversify';
import { SYMBOLS } from '@/src/symbols';
import PostGraph from '.';
import Node from '@/src/data-binding/Model/PostGraph/Node/inversified';
import Edge from '@/src/data-binding/Model/PostGraph/Edge/inversified';
import { DataType as PostNodeDataType } from '@/src/data-binding/Model/PostGraph/Node';
import { DataType as PostEdgeDataType } from '@/src/data-binding/Model/PostGraph/Edge';
import type { ParameterizableNewable } from '@/src/inversify';

@injectable()
export default class Inversified extends PostGraph {
  constructor (
    @inject(SYMBOLS.PostNodeSummaries) postNodeSummaries: PostNodeDataType[],
    @inject(SYMBOLS.PostEdges) postEdges: PostEdgeDataType[],
    @inject(SYMBOLS.PostNodeNewable) postNodeNewable: ParameterizableNewable<Node, ConstructorParameters<typeof Node>>,
    @inject(SYMBOLS.PostEdgeNewable) postEdgeNewable: ParameterizableNewable<Edge, ConstructorParameters<typeof Edge>>,
  ) {
    super({
      data: {
        nodes: new Map<number, Node>(postNodeSummaries.map((v) => [v.id, new postNodeNewable(v.id, v.title)])),
        edges: new Map<number, Edge>(postEdges.map((v) => [v.id, new postEdgeNewable(v.id, v.fromId, v.toId)])),
      },
    });
  }
}
