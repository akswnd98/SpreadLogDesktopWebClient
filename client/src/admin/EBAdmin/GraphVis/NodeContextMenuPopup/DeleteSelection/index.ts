import EBBasicSelection from '@/src/EBContextMenuPopup/EBBasicSelection';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import EBNewDialogPopup from '../../../EBNewDialogPopup';
import { SYMBOLS } from '@/src/admin/types';
import axios, { AxiosResponse } from 'axios';
import { DeleteByIdRequest, DeleteByIdResponse } from '@/common/api/post';
import Static from '@/src/admin/inversify.config';
import NodeContextMenuSelectedId from '@/src/data-binding/Model/NodeContextMenuSelectedId';
import DeleteTask from './DeleteTask';

@injectable()
export default class DeleteSelection extends EBBasicSelection {
  constructor () {
    super({
      text: 'Delete',
      handleClick: async () => { await this.handleDeleteClick(); },
    });
  }

  async handleDeleteClick () {
    const task = new DeleteTask();
    task.readyTask();
    await task.doTask();
  }
}

customElements.define('eb-graph-vis-node-delete-selection', DeleteSelection);
