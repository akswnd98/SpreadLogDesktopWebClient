import { injectable } from 'inversify';
import BasicContextMenuBody from '@/src/elements/ContextMenuPopup/BasicContextMenuBody';
import DeleteSelection from './DeleteSelection';
import GotoPostSelection from './GotoPostSelection';

@injectable()
export default class ContextMenuBody extends BasicContextMenuBody {
  constructor () {
    super({
      childElements: [
        new GotoPostSelection(),
        new DeleteSelection(),
      ],
    });
  }
}

customElements.define('post-graph-node-context-menu-body', ContextMenuBody);
