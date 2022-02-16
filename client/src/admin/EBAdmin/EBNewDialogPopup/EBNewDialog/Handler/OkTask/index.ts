import Task, { Check, OverIncludeCheck } from '@/src/Task';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import DrawNode from './DrawNode';
import HideNode from './HideNode';
import ServerNode from './ServerNode';
import { SYMBOLS } from '@/src/admin/types';
import Static, { hello } from '@/src/admin/inversify.config';

type Nodes = {
  draw: DrawNode;
  server: ServerNode;
  hide: HideNode;
};

type Checked = Check<OkTask>;

type OverIncludeChecked = OverIncludeCheck<OkTask>;

console.log(hello);

@injectable()
export default class OkTask extends Task {
  readonly nodes: Nodes;

  readonly prevNodesMap = {
    draw: {},
    server: {
      draw: 'draw',
    },
    hide: {
      server: 'server',
    },
  } as const;

  constructor (
    @inject(SYMBOLS.NewDialogOkDrawNode) draw: DrawNode,
    // (SYMBOLS.NewDialogOkHideNode) hide: HideNode,
  ) {
    super();
    this.nodes = {
      draw,
      server: new ServerNode(),
      // hide,
      hide: new HideNode(),
    };
  }
}
