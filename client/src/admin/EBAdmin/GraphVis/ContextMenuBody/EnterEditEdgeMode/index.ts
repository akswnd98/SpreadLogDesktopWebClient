import IconSelection from '@/src/EBContextMenuPopup/BasicContextMenuBody/IconSelection';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import Static from '@/src/admin/inversify.config';
import GraphVis from '../..';
import { SYMBOLS } from '@/src/admin/types';
import pencil from '@/assets/images/pencil.svg';

@injectable()
export default class EnterEditEdgeMode extends IconSelection {
  mode: boolean = false;

  constructor () {
    super({
      text: 'Toggle edit edge mode',
      icon: pencil,
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
