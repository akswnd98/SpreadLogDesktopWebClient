import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';
import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { html, render } from 'lit-html';

export type ConstructorParam = {
  text: string;
  width: string;
} & ParentConstructorParam;

@injectable()
export default class HorizontalLineWithText extends EBElement {
  text: string;

  constructor (payload: ConstructorParam) {
    super({
      ...payload,
      attributes: [
        new Style({ styles: styles.toString() }),
        ...payload.attributes ? payload.attributes : [],
      ],
    });
    this.text = payload.text;
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

customElements.define('horizontal-line-with-text', HorizontalLineWithText);
