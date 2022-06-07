import IconSelection from '@/src/elements/ContextMenuPopup/BasicContextMenuBody/IconSelection';
import 'reflect-metadata';
import { injectable } from 'inversify';
import trash from '@/assets/images/trash.svg';
import Static from '@/src/app/inversify.config';
import Getter from '@/src/app/data-binding/Operator/NodeContextMenuSelectedId/Getter';
import { SYMBOLS } from '@/src/app/symbols';
import DeleteNode from '@/src/app/data-binding/Operator/PostGraph/DeleteNode';
import axios from 'axios';

@injectable()
export default class GotoPostSelection extends IconSelection {
  constructor () {
    super({
      text: 'goto post',
      icon: trash,
      handleClick: async () => { await this.handleClick(); },
    });
  }

  async handleClick () {
    const id = Static.instance.get<Getter>(SYMBOLS.NodeContextMenuSelectedIdGetter).get();
    location.href = `/post/${id}`;
  }
}

customElements.define('node-context-menu-goto-post-selection', GotoPostSelection);
