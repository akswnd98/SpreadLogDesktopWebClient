import Notifier from '@/src/owl-data-binding/Notifier';
import UpdateNode from '@/src/app/data-binding/Observer/PostGraphElement/Node/Update';

export type EventType = {
  id: number;
  title: string;
};

export default class PostGraphNodeUpdateTitleNotifier extends Notifier {
  constructor () {
    super({
      observers: new Set([
        new UpdateNode(),
      ]),
    });
  }

  async notify (event: EventType) {
    await super.notify(event);
  }
}
