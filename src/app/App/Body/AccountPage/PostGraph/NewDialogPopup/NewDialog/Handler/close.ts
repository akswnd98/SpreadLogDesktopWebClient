import Handler, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Attribute/Handler';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '@/src/app/symbols';
import Static from '@/src/app/inversify.config';
import NewDialogPopup from '../..';

export type ConstructorParam = {
} & ParentConstructorParam;

@injectable()
export default class Close extends Handler<'click'> {
  eventName: 'click' = 'click';

  constructor () {
    super({ id: 'close' });
  }

  async handle () {
    Static.instance.get<NewDialogPopup>(SYMBOLS.PostGraphNewNodeDialogPopup).hide();
  }
}
