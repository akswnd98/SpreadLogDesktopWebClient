import { AsyncContainerModule, interfaces } from 'inversify';
import { SYMBOLS } from './types';
import { getAllNodeSummary } from './api/post';
import Node from '@/src/data-binding/Model/PostGraph/Node/inversified';
import { ConstructorParam as PostNodeConstructorParam } from '@/src/data-binding/Model/PostGraph/Node';
import PostGraph from './data-binding/Model/PostGraph/inversified';
import { ParameterizableNewable } from './inversify';

const module = new AsyncContainerModule(
  async (
    bind: interfaces.Bind,
  ) => {
    bind<PostNodeConstructorParam[]>(SYMBOLS.PostNodeSummaries).toConstantValue(
      await getAllNodeSummary(),
    );
    bind<PostGraph>(SYMBOLS.PostGraph).to(PostGraph).inSingletonScope();
    bind<ParameterizableNewable<Node, ConstructorParameters<typeof Node>>>(SYMBOLS.PostNodeNewable).toConstructor(Node);
  }
);

export default module;
