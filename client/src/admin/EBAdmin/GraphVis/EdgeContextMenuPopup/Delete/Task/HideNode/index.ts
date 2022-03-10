import Node from '@/src/Task/Node';
import 'reflect-metadata';
import { injectable } from 'inversify';
import ServerNode from '../ServerNode';
import { SYMBOLS } from '@/src/admin/types';
import Static from '@/src/admin/inversify.config';
import EdgeContextMenuPopup from '../../..'

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
    const popup = Static.instance.get<EdgeContextMenuPopup>(SYMBOLS.EdgeContextMenuPopup);
    popup.hide();
  }

  async handleFail () {
    console.log('HideNode.handleFail()');
  }
}
