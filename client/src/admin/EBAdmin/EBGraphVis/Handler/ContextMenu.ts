import SimpleHandler from '@/src/EBAttribute/SimpleHandler';
import { injectable } from 'inversify';
import 'reflect-metadata';

@injectable()
export default class Handler extends SimpleHandler<'contextmenu'> {
  constructor () {
    super({ id: 'root', eventName: 'contextmenu', handler: (event) => { this.handleContextMenu(event); } });
  }

  handleContextMenu (event: MouseEvent) {
    // event.preventDefault();
    // const popup = EBContextMenuPopupSingleton.instance;
    // popup.removeAllChildElement();
    // EBGraphVisStatic.popupSelectionList.forEach((selection) => { popup.appendChildElement(selection) });
    // EBContextMenuPopupSingleton.instance.show({ x: event.clientX, y: event.clientY });
  }
}
