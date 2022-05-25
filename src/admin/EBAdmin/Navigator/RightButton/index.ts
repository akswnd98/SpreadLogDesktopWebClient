import EBElement from '@/src/EBElement';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import Style from '@/src/elements/EBAttribute/Style';
import styles from './index.scss';
import EBContainerElement from '@/src/EBContainerElement';
import EBVerticalLayout, { ChildElementsType } from '@/src/EBLayout/EBVerticalLayout';
import About from './About';

@injectable()
export default class RightButton extends EBContainerElement<ChildElementsType> {
  constructor () {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
      layout: new EBVerticalLayout(),
      childElements: [
        new About(),
      ],
    });
  }
}

customElements.define('admin-nav-right', RightButton);
