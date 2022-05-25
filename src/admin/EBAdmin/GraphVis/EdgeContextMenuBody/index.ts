import BasicContextMenuBody from '@/src/EBContextMenuPopup/BasicContextMenuBody';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '@/src/admin/types';
import Delete from './Delete';

@injectable()
export default class Body extends BasicContextMenuBody {
  constructor (
    @inject(SYMBOLS.EdgeContextMenuDeleteSelection) deleteSelection: Delete,
  ) {
    super({
      childElements: [
        deleteSelection,
      ],
    });
  }
}

customElements.define('graph-vis-edge-context-menu-body', Body);
