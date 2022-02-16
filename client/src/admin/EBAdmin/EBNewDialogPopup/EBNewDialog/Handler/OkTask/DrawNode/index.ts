import Node from '@/src/Task/Node';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import AppendNode from '@/src/data-binding/ModelNotifier/PostGraph/AppendNode';
import { SYMBOLS } from '@/src/admin/types';
import Static from '@/src/admin/inversify.config';
import EBNewDialogPopup from '../../../..';
import NewNode from '@/src/admin/data-binding/Model/NewNode';
import PostNode from '@/src/data-binding/Model/PostGraph/Node/inversified';
import { ParameterizableNewable } from '@/src/inversify';

@injectable()
export default class DrawNode extends Node {
  private nominal!: void;

  nextNodes: [] = [];

  prevNodes: {} = {};

  constructor () {
    super();
  }

  doTask () {
    console.log('DrawNode.doTask()');
    // const popup = Static.instance.get<EBNewDialogPopup>(SYMBOLS.EBNewDialogPopup);
    const appendNode = Static.instance.get<AppendNode>(SYMBOLS.PostGraphAppendNodeNotifier);
    const input = Static.instance.get<NewNode>(SYMBOLS.NewNodeModel);
    const NodeNewable = Static.instance.get<ParameterizableNewable<PostNode, ConstructorParameters<typeof PostNode>>>(SYMBOLS.PostNodeNewable);
    appendNode.append(new NodeNewable(3, input.data.title));
  }

  handleFail () {
    console.log('DrawNode.handleFail()');
  }
}
