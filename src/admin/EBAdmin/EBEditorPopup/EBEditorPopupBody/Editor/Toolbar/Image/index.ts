import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { html, render } from 'lit-html';
import imageIcon from '@/assets/images/image.svg';
import Style from '@/src/elements/EBAttribute/Style';
import styles from './index.scss';
import Handler from './Handler';

export type ConstructorParam = {

} & ParentConstructorParam;

@injectable()
export default class Image extends EBElement {
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

customElements.define('eb-editor-popup-body-toolbar-image', Image);
