import { injectable } from 'inversify';
import BasicContextMenuBody from '@/src/elements/ContextMenuPopup/BasicContextMenuBody';
import DeleteSelection from './DeleteSelection';

@injectable()
export default class ContextMenuBody extends BasicContextMenuBody {
  constructor () {
    super({
      childElements: [
        new DeleteSelection(),
      ],
    });
  }
}

customElements.define('post-graph-node-context-menu-body', ContextMenuBody);
