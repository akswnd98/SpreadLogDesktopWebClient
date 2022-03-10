import EBElement from '@/src/EBElement';
import { injectable } from 'inversify';

@injectable()
export default class EmptyBody extends EBElement {
  constructor () {
    super({});
  }
}

customElements.define('context-menu-empty-body', EmptyBody);
