import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { html, render } from 'lit-html';
import Exit from '../buttons/Exit';
import Publish from '../buttons/Publish';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';

export type ConstructorParam = {
} & ParentConstructorParam;

@injectable()
export default class Bottom extends EBElement {
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

customElements.define('eb-editor-popup-body-editor-bottom', Bottom);
