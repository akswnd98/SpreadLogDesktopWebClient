import IObserver from '@/src/data-binding/IObserver';
import INotifier from '@/src/data-binding/INotifier';
import EBGraphVis from '@/src/admin/EBAdmin/GraphVis';
import Node from '@/src/app/data-binding/Model/PostGraph/PostGraphNode';
import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';

export type EventType = Node;

export type ConstructorParam = {
  ebGraphVis: EBGraphVis;
};

@injectable()
export default class AppendNode implements IObserver {
  ebGraphVis: EBGraphVis;

  constructor (@unmanaged() payload: ConstructorParam) {
    this.ebGraphVis = payload.ebGraphVis;
  }

  async update (subject: INotifier, event: EventType) {
    this.ebGraphVis.nodes.add([{ id: event.data.id, label: event.data.title }]);
  }
}
