import { SYMBOLS } from '@/src/admin/types';
import EBContextMenuPopup, { CordType } from '@/src/elements/ContextMenuPopup';
import CssClass from '@/src/elements/PopupInterface/CssClass';
import { inject, injectable } from 'inversify';
import EmptyBody from './EmptyBody';

@injectable()
export default class ContextMenuPopup extends EBContextMenuPopup {
  constructor () {
    super({
      element: new EmptyBody(),
      popupInterface: new CssClass({ showTimeClasses: [ 'show' ], hideTimeClasses: [ 'hide' ] }),
    });
  }
}

customElements.define('context-menu-popup', ContextMenuPopup);
