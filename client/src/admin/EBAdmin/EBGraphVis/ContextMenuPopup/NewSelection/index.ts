import EBBasicSelection from '@/src/EBContextMenuPopup/EBBasicSelection';
import EBNewDialogPopupSingleton from '../../../EBNewDialogPopup/singleton';

export default class NewSelection extends EBBasicSelection {
  constructor () {
    super({
      text: 'New',
      handleClick: () => { this.handleNewClick(); },
    })
  }

  handleNewClick () {
    EBNewDialogPopupSingleton.instance.show();
  }
}

customElements.define('eb-graph-vis-new-selection', NewSelection);
