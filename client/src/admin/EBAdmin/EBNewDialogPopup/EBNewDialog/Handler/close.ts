import Handler, { ConstructorParam as ParentConstructorParam } from '@/src/EBAttribute/Handler';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '@/src/admin/types';
import EBNewDialogPopup from '../..';

export type ConstructorParam = {
} & ParentConstructorParam;

@injectable()
export default class Close extends Handler<'click'> {
  eventName: 'click' = 'click';
  // popup: EBNewDialogPopup;

  constructor (
    // @inject(SYMBOLS.EBNewDialogPopup) popup: EBNewDialogPopup,
  ) {
    super({ id: 'close' });
    // this.popup = popup;
  }

  handle () {
    // this.popup.hide();
  }
}
