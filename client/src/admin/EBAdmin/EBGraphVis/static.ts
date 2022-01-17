import EBGraphVis from '.';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';
import SimpleHandler from '@/src/EBAttribute/SimpleHandler';
import EBContextMenuPopupSingleton from '@/src/EBContextMenuPopup/singleton';
import EBBasicSelection from '@/src/EBContextMenuPopup/EBBasicSelection';
import EBNewDialogSingleton from '@/src/admin/EBAdmin/EBNewDialog/singleton';

export default class EBGraphVisStatic {
  static popupSelectionList: EBBasicSelection[] = [
    new EBBasicSelection({ text: 'new', attributes: [], handleClick: this.handleNewClick }),
  ];

  static generateEBGraphVis () {
    try {
      return new EBGraphVis({
        attributes: [
          new Style({ styles: styles.toString() }),
          new SimpleHandler({ id: 'root', eventName: 'contextmenu', handler: EBGraphVisStatic.handleContextMenu }),
        ],
      });
    } catch (e) {
      console.log(e);
      throw Error('generateEBGraphVis failed');
    }
  }

  static handleContextMenu (event: MouseEvent) {
    event.preventDefault();
    const popup = EBContextMenuPopupSingleton.instance;
    popup.removeAllChildElement();
    EBGraphVisStatic.popupSelectionList.forEach((selection) => { popup.appendChildElement(selection) });
    EBContextMenuPopupSingleton.instance.show({ x: event.clientX, y: event.clientY });
  }

  static handleNewClick () {
    EBNewDialogSingleton.instance.show();
  }
}
