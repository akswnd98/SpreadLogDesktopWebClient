import Handler from '@/src/EBAttribute/Handler';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import ContextMenuPopup from '../ContextMenuPopup';
import { SYMBOLS } from '@/src/admin/types';

@injectable()
export default class ContextMenu extends Handler<'contextmenu'> {
  eventName: 'contextmenu' = 'contextmenu';

  popup: ContextMenuPopup;

  constructor (
    @inject(SYMBOLS.ContextMenuPopup) popup: ContextMenuPopup
  ) {
    super({ id: 'root' });
    this.popup = popup;
  }

  async handle (event: MouseEvent) {
    event.preventDefault();
    this.popup.show({ x: event.clientX, y: event.clientY });
  }
}
