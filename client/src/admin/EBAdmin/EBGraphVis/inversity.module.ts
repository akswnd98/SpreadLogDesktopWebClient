import { ContainerModule } from 'inversify';
import { TYPES } from './types';
import Style from './Style';
import EBAttribute from '@/src/EBAttribute';
import ContextMenuHandler from './Handler/ContextMenu';
import EBElement from '@/src/EBElement';
import EBGraphVis from './inversified';

const module = new ContainerModule(
  (bind) => {
    bind<EBElement>(TYPES.element).to(EBGraphVis).whenTargetNamed(TYPES.namespace);
    bind<EBAttribute>(TYPES.style).to(Style).whenTargetNamed(TYPES.namespace);;
    bind<EBAttribute>(TYPES.contextMenuHandler).to(ContextMenuHandler).whenTargetNamed(TYPES.namespace);;
  }
);

export { module };
