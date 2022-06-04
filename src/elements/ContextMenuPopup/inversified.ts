import ContextMenuPopup from '.';
import CssClass from '../PopupInterface/CssClass';
import EmptyContextMenuBody from './EmptyContextMenuBody';

export default class Inversified extends ContextMenuPopup {
  constructor () {
    super({
      element: new EmptyContextMenuBody(),
      popupInterface: new CssClass({
        showTimeClasses: ['show'],
        hideTimeClasses: ['hide'],
      }),
    });
  }
}

customElements.define('context-menu-popup-inversified', Inversified);
