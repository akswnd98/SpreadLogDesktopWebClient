import 'reflect-metadata';
import { injectable } from 'inversify';
import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import { html, render } from 'lit-html';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import Handler from './Handler';

export type ConstructorParam = {
} & ParentConstructorParam;

@injectable()
export default class Publish extends Element {
  constructor (payload: ConstructorParam) {
    super({
      ...payload,
      attributes: [
        new Style({ styles: styles.toString() }),
        new Handler({ id: 'root' }),
      ],
    });
  }

  initialRender (payload: ConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        Publish
      `,
      this.rootElement,
    );
  }
}

customElements.define('editor-popup-publish-button', Publish);
