import ContainerElement from '@/src/elements/ContainerElement';
import VerticalLayout, { ChildElementsType } from '@/src/elements/Layout/VerticalLayout';
import 'reflect-metadata';
import { injectable } from 'inversify';
import LogoButton from './Logo';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import RightButton from './Right';

@injectable()
export default class Navigator extends ContainerElement<ChildElementsType> {
  constructor () {
    super({
      childElements: [
        new LogoButton(),
        new RightButton(),
      ],
      layout: new VerticalLayout(),
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
    });
  }
}

customElements.define('sl-navigator', Navigator);
