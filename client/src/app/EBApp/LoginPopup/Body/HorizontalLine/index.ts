import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';
import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { html, render } from 'lit-html';

export type ConstructorParam = {
  width: string;
} & ParentConstructorParam;

@injectable()
export default class HorizontalLine extends EBElement {
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
        <hr width='${payload.width}'>
      `,
      this.rootElement,
    );
  }
}

customElements.define('horizontal-line', HorizontalLine);
