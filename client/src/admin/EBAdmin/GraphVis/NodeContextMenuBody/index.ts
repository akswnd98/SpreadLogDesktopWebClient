import EBContextMenuBody from '@/src/EBContextMenuPopup/BasicContextMenuBody';
import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import { SYMBOLS } from '@/src/admin/types';
import Delete from './Delete';

@injectable()
export default class Body extends EBContextMenuBody {
  constructor (
    @inject(SYMBOLS.NodeContextMenuDeleteSelection) deleteSelection: Delete,
  ) {
    super({
      childElements: [
        deleteSelection,
      ],
    });
  }
}

customElements.define('graph-vis-node-context-menu-body', Body);
