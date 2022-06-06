import IconSelection from '@/src/elements/ContextMenuPopup/BasicContextMenuBody/IconSelection';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/symbols';
import pencil from '@/assets/images/pencil.svg';
import PostGraph from '../../../../../../..';

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
    const network = Static.instance.get<PostGraph>(SYMBOLS.PostGraphElement).network;
    if (this.mode) {
      network.disableEditMode();
    } else {
      network.enableEditMode();
      network.addEdgeMode();
    }
    this.mode = !this.mode;
  }
}

customElements.define('post-graph-enter-edit-edge-mode-selection', EnterEditEdgeMode);
