import { injectable, inject, named } from 'inversify';
import 'reflect-metadata';
import EBAdmin from '.';
import { TYPES } from './types';
import { TYPES as EBGraphVisTYPES } from './EBGraphVis/types';
import EBLayout from '@/src/EBLayout';
import EBAttribute from '@/src/EBAttribute';
import EBElement from '@/src/EBElement';

@injectable()
export default class Inversified extends EBAdmin {
  constructor (
    @inject(TYPES.style) @named(TYPES.namespace) style: EBAttribute,
    @inject(TYPES.layout) @named(TYPES.namespace) layout: EBLayout<EBElement[]>,
    @inject(EBGraphVisTYPES.element) @named(EBGraphVisTYPES.namespace) graphVis: EBElement,
  ) {
    super({
      attributes: [ style ],
      layout,
      childElements: [ graphVis ],
    });
  }
}

customElements.define('eb-admin', Inversified);
