import Element from '@/src/owl-element/Element';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import ContainerElement from '@/src/owl-element/Element/ContainerElement';
import VerticalLayout, { ChildElementsType } from '@/src/elements/Layout/VerticalLayout';
import Search from './Search';
import ViewGraph from './ViewGraph';
import { SYMBOLS } from '@/src/app/symbols';

@injectable()
export default class RightButton extends ContainerElement<ChildElementsType> {
  constructor (
    @inject(SYMBOLS.AccountAvatarElement) accountAvatarElement: Element,
  ) {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
      layout: new VerticalLayout(),
      childElements: [
        new Search(),
        new ViewGraph(),
        accountAvatarElement,
      ],
    });
    console.log(accountAvatarElement);
  }
}

customElements.define('nav-right', RightButton);
