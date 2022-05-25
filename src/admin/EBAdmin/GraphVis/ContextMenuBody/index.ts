import BasicContextMenuBody from '@/src/EBContextMenuPopup/BasicContextMenuBody';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '@/src/admin/types';
import NewSelection from './New';
import EnterEditEdgeModeSelection from './EnterEditEdgeMode';

@injectable()
export default class Body extends BasicContextMenuBody {
  constructor (
    @inject(SYMBOLS.ContextMenuNewSelection) newSelection: NewSelection,
    @inject(SYMBOLS.ContextMenuEnterEditEdgeModeSelection) enterEditEdgeModeSelection: EnterEditEdgeModeSelection,
  ) {
    super({
      childElements: [
        newSelection,
        enterEditEdgeModeSelection,
      ],
    });
  }
}

customElements.define('graph-vis-context-menu-body', Body);
