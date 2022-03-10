import IObserver from '@/src/data-binding/IObserver';
import { DataType } from '@/src/data-binding/Model/PostGraph/Edge';
import AddPostEdgeNotifier from '@/src/admin/data-binding/ModelNotifier/AddPostEdge';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Static from '@/src/admin/inversify.config';
import { SYMBOLS } from '@/src/admin/types';
import EBGraphVis from '@/src/admin/EBAdmin/GraphVis';

@injectable()
export default class AddPostEdge implements IObserver {
  async update (subject: AddPostEdgeNotifier, event: DataType) {
    Static.instance.get<EBGraphVis>(SYMBOLS.EBGraphVis).edges.add({ from: event.fromId, to: event.toId, arrows: { to: { enabled: true, type: 'arrow' } } });
  }
}
