import { injectable } from 'inversify';
import BasicContextMenuBody from '../BasicContextMenuBody';

@injectable()
export default class EmptyContextMenuBody extends BasicContextMenuBody {
  constructor () {
    super({
      childElements: [],
    });
  }
}

customElements.define('empty-context-menu-body', EmptyContextMenuBody);
