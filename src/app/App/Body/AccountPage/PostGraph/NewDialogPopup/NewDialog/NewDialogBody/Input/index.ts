import 'reflect-metadata';
import { inject, injectable, unmanaged } from 'inversify';
import InputHandler from './Handler';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import { render, html } from 'lit-html';
import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';

export type ConstructorParam = {
} & ParentConstructorParam;

export default class Input extends Element {
  constructor () {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
    });
    this.registerAttribute(new InputHandler({ input: this }));
  }

  initialRender(payload: ConstructorParam) {
    render(
      html`
        <input id='input' />
      `,
      this.rootElement,
    );
  }
}

customElements.define('eb-new-dialog-body-input', Input);
