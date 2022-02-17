import Task, { Check, OverIncludeCheck } from '@/src/Task';
import DrawNode from './DrawNode';
import ServerNode from './ServerNode';

type Nodes = {
  server: ServerNode;
  draw: DrawNode;
};

type Checked = Check<DeleteTask>;

type OverIncludeChecked = OverIncludeCheck<DeleteTask>;

export default class DeleteTask extends Task {
  readonly nodes: Nodes;

  readonly prevNodesMap = {
    draw: {
      server: 'server',
    },
    server: {
    },
  } as const;
  
  constructor () {
    super();
    this.nodes = {
      server: new ServerNode(),
      draw: new DrawNode(),
    };
  }
}
