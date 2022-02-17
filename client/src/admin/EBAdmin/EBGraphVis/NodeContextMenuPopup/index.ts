import { SYMBOLS } from '@/src/admin/types';
import EBContextMenuPopup from '@/src/EBContextMenuPopup';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import DeleteSelection from './DeleteSelection';
import Selection from './Selection';

@injectable()
export default class ContextMenuPopup extends EBContextMenuPopup {
  constructor (
    @inject(SYMBOLS.DeleteSelection) deleteSelection: DeleteSelection,
  ) {
    super({
      childElements: [ deleteSelection ],
    });
  }
}

customElements.define('node-context-menu-popup', ContextMenuPopup);
