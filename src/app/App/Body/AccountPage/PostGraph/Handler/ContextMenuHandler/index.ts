import Handler from '@/src/owl-element/Attribute/Handler';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import ContextMenuPopup from '@/src/elements/ContextMenuPopup';
import { SYMBOLS } from '@/src/app/symbols';
import Static from '@/src/app/inversify.config';
import ContextMenuBody from './ContextMenuBody';

@injectable()
export default class ContextMenu extends Handler<'contextmenu'> {
  eventName: 'contextmenu' = 'contextmenu';

  body: ContextMenuBody;

  constructor () {
    super({ id: 'root' });
    this.body = new ContextMenuBody();
  }

  async handle (event: MouseEvent) {
    event.preventDefault();
    const popup = Static.instance.get<ContextMenuPopup>(SYMBOLS.ContextMenuPopup);
    popup.show({ x: event.clientX, y: event.clientY }, this.body);
  }
}
