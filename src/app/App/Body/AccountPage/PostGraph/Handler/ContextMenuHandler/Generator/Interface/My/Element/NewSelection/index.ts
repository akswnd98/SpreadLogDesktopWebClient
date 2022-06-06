import IconSelection from '@/src/elements/ContextMenuPopup/BasicContextMenuBody/IconSelection';
import 'reflect-metadata';
import { injectable } from 'inversify';
import plus from '@/assets/images/plus-lg.svg';
import Static from '@/src/app/inversify.config';
import NewDialogPopup from '../../../../../../../NewDialogPopup';
import { SYMBOLS } from '@/src/app/symbols';

@injectable()
export default class NewSelection extends IconSelection {
  constructor () {
    super({
      text: 'New',
      icon: plus,
      handleClick: async () => { await this.handleNewClick(); },
    });
  }

  async handleNewClick () {
    Static.instance.get<NewDialogPopup>(SYMBOLS.PostGraphNewNodeDialogPopup).show();
  }
}

customElements.define('context-menu-new-selection', NewSelection);
