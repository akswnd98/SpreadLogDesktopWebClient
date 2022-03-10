import Task, { Check, OverIncludeCheck } from '@/src/Task';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import DrawNode from './DrawNode';
import HideNode from './HideNode';
import ServerNode from './ServerNode';

type Nodes = {
  draw: DrawNode;
  server: ServerNode;
  hide: HideNode;
};

type Checked = Check<DeleteTask>;

type OverIncludeChecked = OverIncludeCheck<DeleteTask>;

@injectable()
export default class DeleteTask extends Task {
  readonly nodes: Nodes;

  readonly prevNodesMap = {
    draw: {
      server: 'server',
    },
    server: {
    },
    hide: {
      server: 'server',
    },
  } as const;

  constructor () {
    super();
    this.nodes = {
      draw: new DrawNode(),
      server: new ServerNode(),
      hide: new HideNode(),
    };
  }
}
