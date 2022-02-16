import { SYMBOLS } from '@/src/admin/types';
import EBContextMenuPopup from '@/src/EBContextMenuPopup';
import { inject, injectable } from 'inversify';
import NewSelection from './NewSelection';

@injectable()
export default class ContextMenuPopup extends EBContextMenuPopup {
  constructor (
    @inject(SYMBOLS.ContextMenuNewSelection) newSelection: NewSelection,
  ) {
    super({
      childElements: [ newSelection ],
    });
  }
}

customElements.define('context-menu-popup', ContextMenuPopup);
