import IconSelection from '@/src/EBContextMenuPopup/BasicContextMenuBody/IconSelection';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import EBNewDialogPopup from '@/src/admin/EBAdmin/EBNewDialogPopup';
import { SYMBOLS } from '@/src/admin/types';
import plus from '@/assets/images/plus-lg.svg';

@injectable()
export default class NewSelection extends IconSelection {
  popup: EBNewDialogPopup;

  constructor (
    @inject(SYMBOLS.EBNewDialogPopup) popup: EBNewDialogPopup,
  ) {
    super({
      text: 'New',
      icon: plus,
      handleClick: async () => { await this.handleNewClick(); },
    });
    this.popup = popup;
  }

  async handleNewClick () {
    this.popup.show();
  }
}

customElements.define('eb-graph-vis-new-selection', NewSelection);
