import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { html, render } from 'lit-html';
import Exit from '../buttons/Exit';
import Publish from '../buttons/Publish';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';

export type ConstructorParam = {
} & ParentConstructorParam;

@injectable()
export default class Bottom extends Element {
  constructor (payload: ConstructorParam) {
    super({
      ...payload,
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
    });
  }

  initialRender (payload: ConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        ${new Exit({})}
        ${new Publish({})}
      `,
      this.rootElement,
    );
  }
}

customElements.define('editor-popup-body-editor-bottom', Bottom);
