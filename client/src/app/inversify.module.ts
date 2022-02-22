import { interfaces, AsyncContainerModule } from 'inversify';
import { ConstructorParam as PostNodeConstructorParam } from '@/src/data-binding/Model/PostGraph/Node';
import { SYMBOLS } from './types';
import { getAllNodeSummary } from '../api/post';
import EBApp from './EBApp';
import GraphVis from './EBApp/Body/GraphVis';
import EBAppBody from './EBApp/Body';

const module = new AsyncContainerModule(
  async (
    bind: interfaces.Bind,
  ) => {
    bind<EBApp>(SYMBOLS.EBApp).to(EBApp).inSingletonScope();
    bind<EBAppBody>(SYMBOLS.EBAppBody).to(EBAppBody).inSingletonScope();
    bind<GraphVis>(SYMBOLS.GraphVis).to(GraphVis).inSingletonScope();
  }
);

export default module;
