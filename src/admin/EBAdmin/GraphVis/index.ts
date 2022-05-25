import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import * as VisNetwork from 'vis-network/standalone';
import Style from '@/src/elements/EBAttribute/Style';
import styles from './index.scss';
import ContextMenuHandler from './Handler/ContextMenu';
import EBGraphVis, { ConstructorParam as ParentConstructorParam } from '@/src/EBGraphVis';
import { SYMBOLS } from '../../types';
import { SYMBOLS as BasicSYMBOLS } from '@/src/symbols';
import PostGraph from '@/src/data-binding/Model/PostGraph';
import VisNetworkWrapper from '@/src/VisNetworkWrapper';
import NodeContextMenuHandler from './VisNetworkHandler/NodeContextMenu';
import NodeDoubleClick from './VisNetworkHandler/NodeDoubleClick';
import options from './visNetworkOptions';
import EdgeContextMenuHandler from './VisNetworkHandler/EdgeContextMenu';

export type ConstructorParam = {
} & ParentConstructorParam;

@injectable()
export default class GraphVis extends EBGraphVis {
  nodes: VisNetwork.DataSet<VisNetwork.Node>;
  edges: VisNetwork.DataSet<VisNetwork.Edge>;
  network: VisNetworkWrapper;

  constructor (
    @inject(BasicSYMBOLS.PostGraph) postGraph: PostGraph,
    @inject(SYMBOLS.ContextMenuHandler) contextMenuHandler: ContextMenuHandler,
  ) {
    super({
      attributes: [
        new Style({ styles: styles.toString()}),
        contextMenuHandler,
      ],
    });
    this.nodes = new VisNetwork.DataSet(
      Array.from(postGraph.data.nodes.values()).map((v) => {
        return { id: v.data.id, label: v.data.title };
      }),
    );
    this.edges = new VisNetwork.DataSet(
      Array.from(postGraph.data.edges.values()).map((v) => {
        return { id: v.data.id, from: v.data.fromId, to: v.data.toId, arrows: { to: { enabled: true, type: 'arrow' } } };
      }),
    );
    this.network = new VisNetworkWrapper({
      container: this.rootElement,
      data: {
        nodes: this.nodes,
        edges: this.edges,
      },
      attributes: [
        new NodeContextMenuHandler(),
        new NodeDoubleClick(),
        new EdgeContextMenuHandler(),
      ],
      options,
    });
  }
}

customElements.define('graph-vis', GraphVis);
