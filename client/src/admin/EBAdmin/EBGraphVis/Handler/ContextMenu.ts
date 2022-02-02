import ContextMenuPopupSingleton from '../../EBGraphVis/ContextMenuPopup/singleton';
import Handler from '@/src/EBAttribute/Handler';

export default class ContextMenu extends Handler<'contextmenu'> {
  eventName: 'contextmenu' = 'contextmenu';

  constructor () {
    super({ id: 'root' });
  }

  handle (event: MouseEvent) {
    event.preventDefault();
    ContextMenuPopupSingleton.instance.show({ x: event.clientX, y: event.clientY });
  }
}
