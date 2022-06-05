import { injectable } from 'inversify';
import BasicContextMenuBody from '@/src/elements/ContextMenuPopup/BasicContextMenuBody';
import NewSelection from './NewSelection';
import EnterEditEdgeMode from './EnterEditEdgeMode';

@injectable()
export default class ContextMenuBody extends BasicContextMenuBody {
  constructor () {
    super({
      childElements: [
        new NewSelection(),
        new EnterEditEdgeMode(),
      ],
    });
  }
}

customElements.define('post-graph-context-menu-body', ContextMenuBody);
