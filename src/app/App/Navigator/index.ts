import ContainerElement from '@/src/owl-element/Element/ContainerElement';
import VerticalLayout, { ChildElementsType } from '@/src/elements/Layout/VerticalLayout';
import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';
import Logo from './Logo';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import RightButton from './Right';

export type ConstructorParam = {
  logo: Logo;
};

@injectable()
export default class Navigator extends ContainerElement<ChildElementsType> {
  logo: Logo;

  constructor (@unmanaged() payload: ConstructorParam) {
    super({
      childElements: [
        payload.logo,
        new RightButton(),
      ],
      layout: new VerticalLayout(),
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
    });
    this.logo = payload.logo;
  }
}

customElements.define('sl-navigator', Navigator);
