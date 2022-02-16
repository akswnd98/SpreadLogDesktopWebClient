import Handler from '@/src/EBAttribute/Handler';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Static from '@/src/admin/inversify.config';
import NewNode from '@/src/admin/data-binding/Model/NewNode';
import { SYMBOLS } from '@/src/admin/types';

@injectable()
export default class InputHandler extends Handler<'input'> {
  eventName: 'input' = 'input';

  constructor () {
    super({
      id: 'input',
    });
  }

  handle (event: HTMLElementEventMap['input']) {
    if (event.target === null) return;
    const model = Static.instance.get<NewNode>(SYMBOLS.NewNodeModel);
    model.data.title = (event.target as HTMLInputElement).value;
  }
}
