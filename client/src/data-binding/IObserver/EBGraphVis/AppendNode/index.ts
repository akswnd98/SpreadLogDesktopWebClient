import IObserver from '@/src/data-binding/IObserver';
import INotifier from '@/src/data-binding/INotifier';
import EBGraphVis from '@/src/admin/EBAdmin/EBGraphVis';
import Node from '@/src/data-binding/Model/PostGraph/Node';
import 'reflect-metadata';
import { injectable } from 'inversify';

export type EventType = Node;

export type ConstructorParam = {
  ebGraphVis: EBGraphVis;
};

@injectable()
export default class AppendNode implements IObserver {
  ebGraphVis: EBGraphVis;

  constructor (payload: ConstructorParam) {
    this.ebGraphVis = payload.ebGraphVis;
  }

  update (subject: INotifier, event: EventType) {
    this.ebGraphVis.nodes.add([{ id: event.data.id, label: event.data.title }]);
    // this.ebGraphVis.nodes.update([{ id: event.data.id, label: event.data.title }]);
    // this.ebGraphVis.network.editNode();
    // this.ebGraphVis.nodes.add({ id: 5, label: 'nice' });
    console.log(this.ebGraphVis.nodes.get());
  }
}
