import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import { html, render } from 'lit-html';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import ClickHandler from './Handler/Click';

export type ConstructorParam = {
  nickname: string;
};

export type PayloadParam = {
} & ParentConstructorParam
& ConstructorParam;

@injectable()
export default class AvatarElement extends Element {
  constructor (payload: ConstructorParam) {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
        new ClickHandler({ nickname: payload.nickname }),
      ],
      ...payload,
    } as PayloadParam);
  }

  initialRender (payload: PayloadParam) {
    super.initialRender(payload);
    render(
      html`
        <p>${payload.nickname.substring(0, 2)}</p>
      `,
      this.rootElement,
    );
  }
}

customElements.define('nav-avatar', AvatarElement);
