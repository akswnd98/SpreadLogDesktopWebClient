import 'reflect-metadata';
import inversify, { injectable, inject } from 'inversify';
import { SYMBOLS } from '@/src/admin/types';
import PostGraph from '.';
import Node from '@/src/data-binding/Model/PostGraph/Node/inversified';
import { DataType as PostNodeDataType } from '@/src/data-binding/Model/PostGraph/Node';
import type { ParameterizableNewable } from '@/src/inversify';

@injectable()
export default class Inversified extends PostGraph {
  constructor (
    @inject(SYMBOLS.PostNodeSummaries) postNodeSummaries: PostNodeDataType[],
    @inject(SYMBOLS.PostNodeNewable) postNodeNewable: ParameterizableNewable<Node, ConstructorParameters<typeof Node>>,
  ) {
    super({
      data: {
        nodes: new Set<Node>(postNodeSummaries.map((v) => new postNodeNewable(v.id, v.title))),
      },
    });
  }
}
