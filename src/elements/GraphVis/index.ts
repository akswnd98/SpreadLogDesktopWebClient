import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import * as VisNetwork from 'vis-network/standalone';
import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';

export type ConstructorParam = {
} & ParentConstructorParam;

@injectable()
export default abstract class GraphVis extends Element {
  abstract nodes: VisNetwork.DataSet<VisNetwork.Node>;
  abstract edges: VisNetwork.DataSet<VisNetwork.Edge>;
  abstract network: VisNetwork.Network;

  constructor (payload: ConstructorParam) {
    super({
      ...payload,
      attributes: [
        ...(payload.attributes ? payload.attributes : []),
        new Style({ styles: styles.toString()}),
      ],
    });
  }
}
