import Notifier from '@/src/owl-data-binding/Notifier';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Title from '../../Observer/Editor/Title';
import Body from '../../Observer/Editor/Body';

export type EventType = {
  id: number;
  accountId: number;
  title: string;
  body: string;
  firstUpload: Date;
  lastUpdate: Date;
};

@injectable()
export default class EditingPostId extends Notifier {
  constructor () {
    super({
      observers: new Set([
        new Title(),
        new Body(),
      ]),
    });
  }

  async notify (event: EventType) {
    await super.notify(event);
  }
}
