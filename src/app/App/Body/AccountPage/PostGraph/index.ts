import GraphVis from '@/src/elements/GraphVis';
import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import * as VisNetwork from 'vis-network/standalone';
import VisNetworkWrapper from '@/src/VisNetworkWrapper';
import { SYMBOLS } from '@/src/app/symbols';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import PostGraphGetAllNodes from '@/src/app/data-binding/Operator/PostGraph/GetAllNodes';
import PostGraphGetAllEdges from '@/src/app/data-binding/Operator/PostGraph/GetAllEdges';
import ContextMenuHandler from './Handler/ContextMenuHandler';
import NodeContextMenuHandler from './VisNetworkHandler/NodeContextMenuHandler';
import EdgeContextMenuHandler from './VisNetworkHandler/EdgeContextMenuHandler';
import options from './visNetworkOptions';

@injectable()
export default class PostGraph extends GraphVis {
  nodes: VisNetwork.DataSet<VisNetwork.Node>;
  edges: VisNetwork.DataSet<VisNetwork.Edge>;
  network: VisNetworkWrapper;

  constructor (
    @inject(SYMBOLS.PostGraphGetAllNodes) getAllNodes: PostGraphGetAllNodes,
    @inject(SYMBOLS.PostGraphGetAllEdges) getAllEdges: PostGraphGetAllEdges,
  ) {
    super({
      attributes: [
        new Style({ styles: styles.toString()}),
        new ContextMenuHandler(),
      ],
    });
    this.nodes = new VisNetwork.DataSet(
      getAllNodes.get().map((v) => {
        return { id: v.id, label: v.title };
      }),
    );
    this.edges = new VisNetwork.DataSet(
      getAllEdges.get().map((v) => {
        return { id: v.id, from: v.fromId, to: v.toId, arrows: { to: { enabled: true, type: 'arrow' } } };
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
        new EdgeContextMenuHandler(),
      ],
      options,
    });
  }
}

customElements.define('account-page-post-graph', PostGraph);
