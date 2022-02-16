import Handler, { ConstructorParam as ParentConstructorParam } from '@/src/EBAttribute/Handler';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import OkTask from './OkTask';
import { SYMBOLS } from '@/src/admin/types';

export type ConstructorParam = {
} & ParentConstructorParam;

@injectable()
export default class Ok extends Handler<'click'> {
  eventName: 'click' = 'click';

  okTask: OkTask;

  constructor (
    @inject(SYMBOLS.NewDialogOkTask) okTask: OkTask,
  ) {
    super({ id: 'ok' });
    this.okTask = okTask;
    this.okTask.readyTask();
  }

  handle () {
    this.okTask.doTask();
  }
}
