import Node from '@/src/Task/Node';
import DrawNode from '../DrawNode';

export type PrevNodes = {
  draw?: DrawNode;
};

export default class ServerNode extends Node {
  private nominal!: void;

  nextNodes: [] = [];

  prevNodes: PrevNodes = {};

  doTask () {
    console.log('ServerNode.doTask()');
  }

  handleFail () {
    console.log('ServerNode.handleFail()');
  }
}
