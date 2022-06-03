import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import * as VisNetwork from 'vis-network/standalone';
import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';

export type ConstructorParam = {
  nodes: VisNetwork.DataSet<VisNetwork.Node>;
  edges: VisNetwork.DataSet<VisNetwork.Edge>;
  network: VisNetwork.Network;
} & ParentConstructorParam;

@injectable()
export default class GraphVis extends Element {
  nodes: VisNetwork.DataSet<VisNetwork.Node>;
  edges: VisNetwork.DataSet<VisNetwork.Edge>;
  network: VisNetwork.Network;

  constructor (payload: ConstructorParam) {
    super({
      ...payload,
      attributes: [
        ...(payload.attributes ? payload.attributes : []),
        new Style({ styles: styles.toString()}),
      ],
    });
    this.nodes = payload.nodes;
    this.edges = payload.edges;
    this.network = payload.network;
  }
}

customElements.define('graph-vis', GraphVis);
