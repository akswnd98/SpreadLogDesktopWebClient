import Handler, { ConstructorParam as ParentConstructorParam } from '@/src/EBAttribute/Handler';
import OkTask from './OkTask';

export type ConstructorParam = {
} & ParentConstructorParam;

export default class Ok extends Handler<'click'> {
  eventName: 'click' = 'click';

  okTask: OkTask;

  constructor () {
    super({ id: 'ok' });
    this.okTask = new OkTask();
    this.okTask.readyTask();
  }

  handle () {
    this.okTask.doTask();
  }
}
