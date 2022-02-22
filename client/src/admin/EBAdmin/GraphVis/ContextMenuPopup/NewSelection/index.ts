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
      handleClick: async () => { await this.handleNewClick(); },
    });
    this.popup = popup;
  }

  async handleNewClick () {
    this.popup.show();
  }
}

customElements.define('eb-graph-vis-new-selection', NewSelection);
