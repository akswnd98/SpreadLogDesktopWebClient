import 'reflect-metadata';
import { injectable } from 'inversify';
import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import { html, render } from 'lit-html';
import Style from '@/src/elements/EBAttribute/Style';
import styles from './index.scss';
import Handler from './Handler';

export type ConstructorParam = {
} & ParentConstructorParam;

@injectable()
export default class Publish extends EBElement {
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

customElements.define('eb-editor-popup-publish-button', Publish);
