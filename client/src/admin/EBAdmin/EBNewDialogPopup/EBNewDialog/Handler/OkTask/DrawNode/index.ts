import Node from '@/src/Task/Node';

export default class DrawNode extends Node {
  private nominal!: void;

  nextNodes: [] = [];

  prevNodes: {} = {};

  doTask () {
    console.log('DrawNode.doTask()');
  }

  handleFail () {
    console.log('DrawNode.handleFail()');
  }
}
