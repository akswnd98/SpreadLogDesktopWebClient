import IconSelection from '@/src/EBContextMenuPopup/BasicContextMenuBody/IconSelection';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import DeleteTask from './DeleteTask';
import trash from '@/assets/images/trash.svg';

@injectable()
export default class Delete extends IconSelection {
  constructor () {
    super({
      text: 'Delete',
      icon: trash,
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
