import BasicContextMenuBody from '@/src/EBContextMenuPopup/BasicContextMenuBody';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '@/src/admin/types';
import NewSelection from './New';

@injectable()
export default class Body extends BasicContextMenuBody {
  constructor (
    @inject(SYMBOLS.ContextMenuNewSelection) newSelection: NewSelection,
  ) {
    super({
      childElements: [
        newSelection,
      ],
    });
  }
}

customElements.define('graph-vis-context-menu-body', Body);
