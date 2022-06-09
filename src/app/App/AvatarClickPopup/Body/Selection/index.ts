import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import { html, render } from 'lit-html';

export type ConstructorParam = {
} & ParentConstructorParam;

@injectable()
export default class Selection extends Element {
  constructor (payload: ConstructorParam) {
    super({
      ...payload,
      attributes: [
        new Style({ styles: styles.toString() }),
        ...payload.attributes !== undefined ? payload.attributes : [],
      ],
    });
  }

  initialRender (payload: ParentConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        
      `,
      this.rootElement
    );
  }
}

customElements.define('click-popup-body-selection', Selection);
