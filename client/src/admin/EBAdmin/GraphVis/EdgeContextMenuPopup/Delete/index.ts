import 'reflect-metadata';
import { injectable } from 'inversify';
import EBBasicSelection from '@/src/EBContextMenuPopup/EBBasicSelection';
import DeleteTask from './Task';

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

customElements.define('edge-context-menu-delete-item', Delete);
