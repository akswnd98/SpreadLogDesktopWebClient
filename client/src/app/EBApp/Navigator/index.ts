import EBContainerElement from '@/src/EBContainerElement';
import EBVirticalLayout, { ChildElementsType } from '@/src/EBLayout/EBVerticalLayout';
import 'reflect-metadata';
import { injectable } from 'inversify';
import EBVerticalLayout from '@/src/EBLayout/EBVerticalLayout';
import LogoButton from './LogoButton';
import ListButton from './ListButton';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';
import RightButton from './RightButton';

@injectable()
export default class Navigator extends EBContainerElement<ChildElementsType> {
  constructor () {
    super({
      childElements: [
        new ListButton(),
        new LogoButton(),
        new RightButton(),
      ],
      layout: new EBVerticalLayout(),
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
    });
  }
}

customElements.define('eb-navigator', Navigator);
