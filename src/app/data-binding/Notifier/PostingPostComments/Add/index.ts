import Notifier from '@/src/owl-data-binding/Notifier';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { CommentType } from '../../../Model/PostingPostComments';

export type EventType = CommentType;

@injectable()
export default class AddNotifier extends Notifier {
  constructor () {
    super({
      observers: new Set([

      ]),
    });
  }

  async notify (event: EventType) {
    await super.notify(event);
  }
}
