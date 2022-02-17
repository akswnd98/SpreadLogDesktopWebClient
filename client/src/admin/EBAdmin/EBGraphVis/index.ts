import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import * as VisNetwork from 'vis-network/standalone';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';
import EBElement from '@/src/EBElement';
import ContextMenuHandler from './Handler/ContextMenu';
import EBGraphVisRaw, { ConstructorParam as ParentConstructorParam } from '@/src/EBGraphVis';
import { SYMBOLS } from '../../types';
import PostGraph from '@/src/data-binding/Model/PostGraph';
import VisNetworkWrapper from '@/src/VisNetworkWrapper';
import NodeContextMenuHandler from './VisNetworkHandler/NodeContextMenu';

export type ConstructorParam = {
} & ParentConstructorParam;

@injectable()
export default class EBGraphVis extends EBElement {
  nodes: VisNetwork.DataSet<VisNetwork.Node>;
  edges: VisNetwork.DataSet<VisNetwork.Edge>;
  network: VisNetwork.Network;

  constructor (
    @inject(SYMBOLS.PostGraph) postGraph: PostGraph,
    @inject(SYMBOLS.ContextMenuHandler) contextMenuHandler: ContextMenuHandler,
    // @inject(SYMBOLS.NodeContextMenuHandler) nodeContextMenuHandler: NodeContextMenuHandler,
  ) {
    super({
      attributes: [
        new Style({ styles: styles.toString()}),
        contextMenuHandler,
        // nodeContextMenuHandler,
      ],
    });
    this.nodes = new VisNetwork.DataSet(
      Array.from(postGraph.data.nodes.values()).map((v) => {
        return { id: v.data.id, label: v.data.title };
      }),
    );
    this.edges = new VisNetwork.DataSet([]);
    this.network = new VisNetworkWrapper({
      container: this.rootElement,
      data: {
        nodes: this.nodes,
        edges: this.edges,
      },
      attributes: [
        new NodeContextMenuHandler({ eventName: 'oncontext' }),
      ],
    });
  }
}

customElements.define('eb-graph-vis', EBGraphVis);
