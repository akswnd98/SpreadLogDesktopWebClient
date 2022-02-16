import EBBasicSelection from '@/src/EBContextMenuPopup/EBBasicSelection';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import EBNewDialogPopup from '../../../EBNewDialogPopup';
import { SYMBOLS } from '@/src/admin/types';

@injectable()
export default class NewSelection extends EBBasicSelection {
  popup: EBNewDialogPopup;

  constructor (
    @inject(SYMBOLS.EBNewDialogPopup) popup: EBNewDialogPopup,
  ) {
    super({
      text: 'New',
      handleClick: () => { this.handleNewClick(); },
    });
    this.popup = popup;
  }

  handleNewClick () {
    this.popup.show();
  }
}

customElements.define('eb-graph-vis-new-selection', NewSelection);
