import Handler, { ConstructorParam as ParentConstructorParam } from '@/src/EBAttribute/Handler';
import EBNewDialogPopupSingleton from '@/src/admin/EBAdmin/EBNewDialogPopup/singleton';

export type ConstructorParam = {
} & ParentConstructorParam;

export default class Close extends Handler<'click'> {
  eventName: 'click' = 'click';

  constructor () {
    super({ id: 'close' });
  }

  handle () {
    EBNewDialogPopupSingleton.instance.hide();
  }
}
