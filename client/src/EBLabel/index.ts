import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';
import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import { injectable } from 'inversify';
import 'reflect-metadata';
import { html, render } from 'lit-html';

export type ConstructorParam = {
  text: string;
} & ParentConstructorParam;

@injectable()
export default class EBLabel extends EBElement {
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

customElements.define('eb-label', EBLabel);
