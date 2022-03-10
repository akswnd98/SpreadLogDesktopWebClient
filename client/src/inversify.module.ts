import { AsyncContainerModule, interfaces } from 'inversify';
import { SYMBOLS } from './types';
import { getAllNodeSummary, getAllEdge } from './api/post';
import Node from '@/src/data-binding/Model/PostGraph/Node/inversified';
import Edge from '@/src/data-binding/Model/PostGraph/Edge/inversified';
import { DataType as PostNodeDataType } from '@/src/data-binding/Model/PostGraph/Node';
import { DataType as PostEdgeDataType } from '@/src/data-binding/Model/PostGraph/Edge';
import PostGraph from './data-binding/Model/PostGraph/inversified';
import { ParameterizableNewable } from './inversify';

const module = new AsyncContainerModule(
  async (
    bind: interfaces.Bind,
  ) => {
    bind<PostNodeDataType[]>(SYMBOLS.PostNodeSummaries).toConstantValue(
      await getAllNodeSummary(),
    );
    bind<PostEdgeDataType[]>(SYMBOLS.PostEdges).toConstantValue(
      await getAllEdge(),
    );
    bind<PostGraph>(SYMBOLS.PostGraph).to(PostGraph).inSingletonScope();
    bind<ParameterizableNewable<Node, ConstructorParameters<typeof Node>>>(SYMBOLS.PostNodeNewable).toConstructor(Node);
    bind<ParameterizableNewable<Edge, ConstructorParameters<typeof Edge>>>(SYMBOLS.PostEdgeNewable).toConstructor(Edge);
  }
);

export default module;
