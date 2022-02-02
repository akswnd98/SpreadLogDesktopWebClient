import Node from '@/src/Task/Node';
import ServerNode from '../ServerNode';
import EBNewDialogPopupSingleton from '@/src/admin/EBAdmin/EBNewDialogPopup/singleton';

export type PrevNodes = {
  server?: ServerNode;
};

export default class HideNode extends Node {
  private nominal!: void;

  nextNodes: [] = [];

  prevNodes: PrevNodes = {};

  doTask () {
    EBNewDialogPopupSingleton.instance.hide();
    console.log('HideNode.doTask()');
  }

  handleFail () {
    console.log('HideNode.handleFail()');
  }
}
