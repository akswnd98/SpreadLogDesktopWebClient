import { Container } from 'inversify';
import 'reflect-metadata';
import { TYPES } from './types';
import EBAdmin from './inversified';
import EBAttribute from '@/src/EBAttribute';
import Style from './Style';
import EBLayout from '@/src/EBLayout';
import EBElement from '@/src/EBElement';
import EBGraphVisStatic from './EBGraphVis/static';
import EBVerticalLayout from '@/src/EBLayout/EBVerticalLayout/Inversified';
import { module as ebGraphVisContainerModule } from './EBGraphVis/inversity.module';

const container = new Container();

container.bind<EBAdmin>(TYPES.element).to(EBAdmin).whenTargetNamed(TYPES.namespace);

container.bind<EBAttribute>(TYPES.style).to(Style).whenTargetNamed(TYPES.namespace);

container.bind<EBLayout<EBElement[]>>(TYPES.layout).to(EBVerticalLayout).whenTargetNamed(TYPES.namespace);

container.load(ebGraphVisContainerModule);

export { container };
