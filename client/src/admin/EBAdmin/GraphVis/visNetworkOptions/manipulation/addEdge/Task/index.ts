import Task, { Check, OverIncludeCheck } from '@/src/Task';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import DrawNode from './DrawNode';
import ServerNode from './ServerNode';
import { SYMBOLS } from '@/src/admin/types';
import AddPostEdgeDrawNode from './DrawNode';

type Nodes = {
  draw: DrawNode;
  server: ServerNode;
};

type Checked = Check<AddEdgeTask>;

type OverIncludeChecked = OverIncludeCheck<AddEdgeTask>;

@injectable()
export default class AddEdgeTask extends Task {
  readonly nodes: Nodes;

  readonly prevNodesMap = {
    draw: {
      server: 'server',
    },
    server: {
    },
  } as const;

  constructor (
    @inject(SYMBOLS.AddPostEdgeDrawNode) draw: AddPostEdgeDrawNode,
  ) {
    super();
    this.nodes = {
      draw,
      server: new ServerNode(),
    };
  }
}
