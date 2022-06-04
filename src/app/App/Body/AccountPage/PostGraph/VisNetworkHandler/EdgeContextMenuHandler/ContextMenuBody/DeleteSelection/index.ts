import IconSelection from '@/src/elements/ContextMenuPopup/BasicContextMenuBody/IconSelection';
import 'reflect-metadata';
import { injectable } from 'inversify';
import trash from '@/assets/images/trash.svg';
import Static from '@/src/app/inversify.config';
import Getter from '@/src/app/data-binding/Operator/EdgeContextMenuSelectedId/Getter';
import { SYMBOLS } from '@/src/app/symbols';
import DeleteEdge from '@/src/app/data-binding/Operator/PostGraph/DeleteEdge';
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
    try {
      const id = Static.instance.get<Getter>(SYMBOLS.EdgeContextMenuSelectedIdGetter).get();
      await axios.post('/api/post/account/deleteEdge', { id });
      Static.instance.get<DeleteEdge>(SYMBOLS.PostGraphDeleteEdge).delete(id);
    } catch (e) {
      console.log(e);
      throw Error('DeleteSelection.handleDeleteClick failed');
    }
  }
}

customElements.define('edge-context-menu-new-selection', DeleteSelection);
