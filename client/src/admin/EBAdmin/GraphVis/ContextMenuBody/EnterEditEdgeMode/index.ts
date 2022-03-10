import EBBasicSelection from '@/src/EBContextMenuPopup/BasicContextMenuBody/EBBasicSelection';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import Static from '@/src/admin/inversify.config';
import GraphVis from '../..';
import { SYMBOLS } from '@/src/admin/types';

@injectable()
export default class EnterEditEdgeMode extends EBBasicSelection {
  mode: boolean = false;

  constructor () {
    super({
      text: 'Toggle edit edge mode',
      handleClick: async () => { await this.handleClick(); },
    });
  }

  async handleClick () {
    const network = Static.instance.get<GraphVis>(SYMBOLS.EBGraphVis).network;
    if (this.mode) {
      console.log('when mode on');
      network.disableEditMode();
    } else {
      console.log('when mode off');
      network.enableEditMode();
      network.addEdgeMode();
    }
    this.mode = !this.mode;
  }
}

customElements.define('eb-graph-vis-enter-edit-edge-mode-selection', EnterEditEdgeMode);
