import 'reflect-metadata';
import { injectable } from 'inversify';
import IconSelection from '@/src/EBContextMenuPopup/BasicContextMenuBody/IconSelection';
import DeleteTask from './Task';
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

customElements.define('edge-context-menu-delete-item', Delete);
