import Handler, { ConstructorParam as ParentConstructorParam } from '@/src/EBAttribute/Handler';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '@/src/admin/types';
import EBNewDialogPopup from '../..';
import Static from '@/src/admin/inversify.config';

export type ConstructorParam = {
} & ParentConstructorParam;

@injectable()
export default class Close extends Handler<'click'> {
  eventName: 'click' = 'click';

  constructor () {
    super({ id: 'close' });
  }

  async handle () {
    const popup = Static.instance.get<EBNewDialogPopup>(SYMBOLS.EBNewDialogPopup);
    popup.hide();
  }
}
