import Node from '@/src/Task/Node';
import 'reflect-metadata';
import { injectable } from 'inversify';
import ServerNode from '../ServerNode';
import { SYMBOLS } from '@/src/admin/types';
import EBNewDialogPopup from '../../../..';
import Static from '@/src/admin/inversify.config';

export type PrevNodes = {
  server?: ServerNode;
};

@injectable()
export default class HideNode extends Node {
  private nominal!: void;

  nextNodes: [] = [];

  prevNodes: PrevNodes = {};

  constructor () {
    super();
  }

  async doTask () {
    const popup = Static.instance.get<EBNewDialogPopup>(SYMBOLS.EBNewDialogPopup);
    popup.hide();
  }

  async handleFail () {
    console.log('HideNode.handleFail()');
  }
}
