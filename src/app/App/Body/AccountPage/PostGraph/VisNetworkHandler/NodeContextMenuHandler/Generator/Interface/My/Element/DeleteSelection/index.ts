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
export default class DeleteSelection extends IconSelection {
  constructor () {
    super({
      text: 'Delete',
      icon: trash,
      handleClick: async () => { await this.handleDeleteClick(); },
    });
  }

  async handleDeleteClick () {
    const id = Static.instance.get<Getter>(SYMBOLS.NodeContextMenuSelectedIdGetter).get();
    await axios.post('/api/post/account/deleteNode', { id });
    Static.instance.get<DeleteNode>(SYMBOLS.PostGraphDeleteNode).delete(id);
  }
}

customElements.define('node-context-menu-new-selection', DeleteSelection);
