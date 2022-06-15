import 'reflect-metadata';
import inversify, { injectable, inject } from 'inversify';
import { SYMBOLS } from '@/src/app/symbols';
import PostGraph from '.';
import type { ParameterizableNewable } from '@/src/inversify';
import type InitialPostNodes from '../../DataStruct/InitialPostNodes';
import type InitialPostEdges from '../../DataStruct/InitialPostEdges';
import { type NodeType } from '../../DataStruct/InitialPostNodes';
import { type EdgeType } from '../../DataStruct/InitialPostEdges';

@injectable()
export default class Inversified extends PostGraph {
  constructor (
    // @inject(SYMBOLS.InitialPostNodes) initialPostNodes: InitialPostNodes,
    // @inject(SYMBOLS.InitialPostEdges) InitialPostEdges: InitialPostEdges,
  ) {
    super({
      // data: {
      //   nodes: new Map<number, NodeType>(initialPostNodes.map((v) => [v.id, v])),
      //   edges: new Map<number, EdgeType>(InitialPostEdges.map((v) => [v.id, v])),
      // },
      data: {
        nodes: new Map<number, NodeType>(),
        edges: new Map<number, EdgeType>(),
      },
    });
  }
}
