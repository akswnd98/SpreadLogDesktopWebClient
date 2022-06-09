import AvatarElement, { ConstructorParam as AvatarParam } from './Avatar';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import { html, render } from 'lit-html';

export type ConstructorParam =
  AvatarParam;

export type PayloadParam =
  ConstructorParam
  & ParentConstructorParam;

@injectable()
export default class AvatarWithPopup extends Element {
  constructor (payload: ConstructorParam) {
    super({
      ...payload,
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
    });
  }

  initialRender (payload: PayloadParam) {
    super.initialRender(payload);
    render(
      html`
        <div id='avatar-wrapper'>
          ${new AvatarElement({ nickname: payload.nickname })}
        </div>
      `,
      this.rootElement,
    );
  }
}

customElements.define('account-avatar-with-popup', AvatarWithPopup);
