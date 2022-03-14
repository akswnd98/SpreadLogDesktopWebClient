import EBElement from '@/src/EBElement';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';
import EBContainerElement from '@/src/EBContainerElement';
import EBVerticalLayout, { ChildElementsType } from '@/src/EBLayout/EBVerticalLayout';
import Login from './Login';
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
        // new Login(),
      ],
    });
  }
}

customElements.define('nav-right', RightButton);
