import EBBasicSelection from '@/src/EBContextMenuPopup/BasicContextMenuBody/EBBasicSelection';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import DeleteTask from './DeleteTask';

@injectable()
export default class Delete extends EBBasicSelection {
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

customElements.define('eb-graph-vis-node-delete-selection', Delete);
