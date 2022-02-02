import Task, { Check, OverIncludeCheck } from '@/src/Task';
import DrawNode from './DrawNode';
import HideNode from './HideNode';
import ServerNode from './ServerNode';

type Nodes = {
  draw: DrawNode;
  server: ServerNode;
  hide: HideNode;
};

type Checked = Check<OkTask>;

type OverIncludeChecked = OverIncludeCheck<OkTask>;

export default class OkTask extends Task {
  readonly nodes: Nodes = {
    draw: new DrawNode(),
    server: new ServerNode(),
    hide: new HideNode(),
  };

  readonly prevNodesMap = {
    draw: {},
    server: {
      draw: 'draw',
    },
    hide: {
      server: 'server',
    },
  } as const;
}
