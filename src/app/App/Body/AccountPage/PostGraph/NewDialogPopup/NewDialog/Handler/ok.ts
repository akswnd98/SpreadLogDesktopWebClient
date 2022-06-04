import Handler, { ConstructorParam as ParentConstructorParam } from '@/src/elements/EBAttribute/Handler';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '@/src/app/symbols';
import Static from '@/src/app/inversify.config';
import NewDialogPopup from '../..';
import CurrentNewNodeTitleGetter from '@/src/app/data-binding/Operator/CurrentNewNodeTitle/Getter';
import AddNode from '@/src/app/data-binding/Operator/PostGraph/AddNode';
import axios from 'axios';

export type ConstructorParam = {
} & ParentConstructorParam;

@injectable()
export default class Ok extends Handler<'click'> {
  eventName: 'click' = 'click';

  constructor () {
    super({ id: 'ok' });
  }

  async handle () {
    try {
      const title = Static.instance.get<CurrentNewNodeTitleGetter>(SYMBOLS.CurrentNewNodeTitleGetter).get();
      const result = (await axios.post('/api/post/account/addNode', { title })).data;
      Static.instance.get<AddNode>(SYMBOLS.PostGraphAddNode).add({ ...result, title });
      Static.instance.get<NewDialogPopup>(SYMBOLS.PostGraphNewNodeDialogPopup).hide();
    } catch (e) {
      console.log(e);
    }
  }
}
