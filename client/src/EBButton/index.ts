import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import { render, html } from 'lit-html';
import Style from '@/src/EBAttribute/Style';
import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';
import styles from './index.scss';

export type ConstructorParam = {
  text: string;
  width: string;
  height: string;
  borderRadius: string;
  backgroundColor: string;
} & ParentConstructorParam;

@injectable()
export default class EBButton extends EBElement {
  text: string;
  width: string;
  height: string;
  borderRadius: string;
  backgroundColor: string;

  constructor (@unmanaged() payload: ConstructorParam) {
    super({
      ...payload,
      attributes: [ ...(payload.attributes ? payload.attributes : []), new Style({ styles: styles.toString() }) ],
    });
    this.text = payload.text;
    this.width = payload.width;
    this.height = payload.height;
    this.borderRadius = payload.borderRadius;
    this.backgroundColor = payload.backgroundColor;
  }

  initialRender (payload: ConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        <p>${payload.text}</p>
      `, this.rootElement,
    );
    this.registerAttribute(new Style({ styles: `
      #root {
        width: ${payload.width};
        height: ${payload.height};
        border-radius: ${payload.borderRadius};
        background-color: ${payload.backgroundColor};
      }
    ` }));
  }
}

customElements.define('eb-button', EBButton);
