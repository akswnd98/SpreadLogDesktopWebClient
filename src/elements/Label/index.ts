import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { html, render } from 'lit-html';

export type ConstructorParam = {
  text: string;
} & ParentConstructorParam;

@injectable()
export default class Label extends Element {
  constructor (payload: ConstructorParam) {
    super({
      ...payload,
      attributes: [
        new Style({ styles: styles.toString() }),
        ...payload.attributes ? payload.attributes : [],
      ],
    });
  }

  initialRender (payload: ConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        ${payload.text}
      `,
      this.rootElement,
    );
  }
}

customElements.define('sl-label', Label);
