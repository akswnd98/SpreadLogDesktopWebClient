import 'reflect-metadata';
import { injectable } from 'inversify';
import * as VisNetwork from 'vis-network/standalone';
import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';

export type ConstructorParam = {
  nodes: VisNetwork.DataSet<VisNetwork.Node>;
  edges: VisNetwork.DataSet<VisNetwork.Edge>;
} & ParentConstructorParam;

@injectable()
export default class EBGraphVis extends EBElement {
  nodes: VisNetwork.DataSet<VisNetwork.Node>;
  edges: VisNetwork.DataSet<VisNetwork.Edge>;
  network: VisNetwork.Network;

  constructor (payload: ConstructorParam) {
    super(payload);
    this.nodes = payload.nodes;
    this.edges = payload.edges;
    this.network = new VisNetwork.Network(this.rootElement, { nodes: this.nodes, edges: this.edges }, {});
  }
}

customElements.define('eb-graph-vis-raw', EBGraphVis);
