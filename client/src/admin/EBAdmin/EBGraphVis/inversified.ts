import EBAttribute from '@/src/EBAttribute';
import { inject, injectable, named } from 'inversify';
import 'reflect-metadata';
import EBGraphVis from '.';
import { TYPES } from './types';

@injectable()
export default class Inversified extends EBGraphVis {
  constructor (
    @inject(TYPES.style) @named(TYPES.namespace) style: EBAttribute,
    @inject(TYPES.contextMenuHandler) @named(TYPES.namespace) contextMenuHandler: EBAttribute,
  ) {
    super({
      attributes: [
        style, contextMenuHandler,
      ],
    });
  }
}

customElements.define('eb-graph-vis', Inversified);
