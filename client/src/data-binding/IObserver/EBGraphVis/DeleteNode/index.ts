import IObserver from '@/src/data-binding/IObserver';
import INotifier from '@/src/data-binding/INotifier';
import EBGraphVis from '@/src/admin/EBAdmin/EBGraphVis';
import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';

export type EventType = number;

export type ConstructorParam = {
  ebGraphVis: EBGraphVis;
};

@injectable()
export default class DeleteNode implements IObserver {
  ebGraphVis: EBGraphVis;

  constructor (@unmanaged() payload: ConstructorParam) {
    this.ebGraphVis = payload.ebGraphVis;
  }

  update (subject: INotifier, event: EventType) {
    this.ebGraphVis.nodes.remove(event);
  }
}
