import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import * as VisNetwork from 'vis-network/standalone';
import Style from '@/src/elements/EBAttribute/Style';
import styles from './index.scss';
import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import VisNetworkWrapper from '@/src/VisNetworkWrapper';

export type ConstructorParam = {
} & ParentConstructorParam;

@injectable()
export default abstract class EBGraphVis extends EBElement {
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
