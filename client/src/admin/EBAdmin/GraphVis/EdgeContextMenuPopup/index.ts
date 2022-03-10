import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import EBContextMenuPopup from '@/src/EBContextMenuPopup';
import Delete from './Delete';

@injectable()
export default class Popup extends EBContextMenuPopup {
  constructor () {
    super ({
      childElements: [ new Delete() ],
    });
  }
}

customElements.define('edge-context-menu-popup', Popup);
