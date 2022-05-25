import IObserver from '@/src/data-binding/IObserver';
import INotifier from '@/src/data-binding/INotifier';
import EBGraphVis from '@/src/admin/EBAdmin/GraphVis';
import 'reflect-metadata';
import { inject, injectable, unmanaged } from 'inversify';
import { SYMBOLS } from '@/src/admin/types';
import GraphVis from '@/src/admin/EBAdmin/GraphVis';

export type EventType = number;

export type ConstructorParam = {
  ebGraphVis: EBGraphVis;
};

@injectable()
export default class DeleteNode implements IObserver {
  ebGraphVis: EBGraphVis;

  constructor (
    @inject(SYMBOLS.EBGraphVis) ebGraphVis: GraphVis,
  ) {
    this.ebGraphVis = ebGraphVis;
  }

  async update (subject: INotifier, event: EventType) {
    this.ebGraphVis.edges.remove(event);
  }
}
