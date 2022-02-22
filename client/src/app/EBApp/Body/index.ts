import EBContainerElement from '@/src/EBContainerElement';
import EBVerticalLayout, { ChildElementsType } from '@/src/EBLayout/EBVerticalLayout';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '../../types';
import GraphVis from './GraphVis';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';

@injectable()
export default class Body extends EBContainerElement<ChildElementsType> {
  constructor (
    @inject(SYMBOLS.GraphVis) graphVis: GraphVis,
  ) {
    super({
      childElements: [
        graphVis,
      ],
      layout: new EBVerticalLayout(),
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
    });
  }
}

customElements.define('eb-app-body', Body);
