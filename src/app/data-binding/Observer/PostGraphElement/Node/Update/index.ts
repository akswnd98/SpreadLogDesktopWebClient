import Static from '@/src/app/inversify.config';
import INotifier from '@/src/owl-data-binding/INotifier';
import IObserver from '@/src/owl-data-binding/IObserver';
import PostGraphElement from '@/src/app/App/Body/AccountPage/PostGraph';
import { SYMBOLS } from '@/src/app/symbols';

export type EventType = {
  id: number;
  title: string;
};

export default class UpdateNode implements IObserver {
  async update (subject: INotifier, payload: EventType) {
    Static.instance.get<PostGraphElement>(SYMBOLS.PostGraphElement).nodes.update({ id: payload.id, label: payload.title });
  }
}
