import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { html, render } from 'lit-html';
import imageIcon from '@/assets/images/image.svg';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import Handler from './Handler';

export type ConstructorParam = {

} & ParentConstructorParam;

@injectable()
export default class Image extends Element {
  constructor (payload: ConstructorParam) {
    super({
      ...payload,
      attributes: [
        new Style({ styles: styles.toString() }),
        new Handler(),
      ],
    });
  }

  initialRender (payload: ConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        <img src=${imageIcon} />
      `,
      this.rootElement,
    );
  }
}

customElements.define('editor-popup-body-toolbar-image', Image);
