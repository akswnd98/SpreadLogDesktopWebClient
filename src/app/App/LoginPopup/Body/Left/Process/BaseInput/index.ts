import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import { html, render } from 'lit-html';
import FocusHandler from './Handler/Focus';
import FocusOutHandler from './Handler/FocusOut';
import TabPressHandler from './Handler/TabPress';

export type ConstructorParam = {
  defaultValue: string;
} & ParentConstructorParam;

@injectable()
export default class BaseInput extends Element {
  isDefault: boolean = true;
  defaultValue: string;

  constructor (payload: ConstructorParam) {
    super({
      ...payload,
      attributes: [
        new Style({ styles: styles.toString() }),
        ...payload.attributes ? payload.attributes : [],
      ],
    });
    this.defaultValue = payload.defaultValue;
    this.registerAttribute(new FocusHandler({ baseInput: this }));
    this.registerAttribute(new FocusOutHandler({ baseInput: this, defaultValue: payload.defaultValue }));
    this.registerAttribute(new TabPressHandler());
  }

  initialRender (payload: ConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        <input id='input-box' value=${payload.defaultValue}></input>
        <div id='hor-line'></div>
      `,
      this.rootElement,
    );
  }

  getValue () {
    return (this.shadowRoot!.getElementById('input-box')! as HTMLInputElement).value;
  }
}

customElements.define('login-popup-base-input', BaseInput);
