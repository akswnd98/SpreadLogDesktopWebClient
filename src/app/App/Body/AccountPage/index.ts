import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import 'reflect-metadata';
import { inject, injectable, unmanaged } from 'inversify';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import { html, render } from 'lit-html';
import PostGraphElement from './PostGraph';
import { SYMBOLS } from '@/src/app/symbols';

export type ConstructorParam = {
  postGraphElement: PostGraphElement;
};

export type PayloadParam =
  ConstructorParam
  & ParentConstructorParam;

@injectable()
export default class AccountPage extends Element {
  nickname!: string;

  constructor (@unmanaged() payload: ConstructorParam) {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
      postGraphElement: payload.postGraphElement,
    } as PayloadParam);
  }

  initialRender (payload: PayloadParam) {
    super.initialRender(payload);
    render(
      html`
        ${payload.postGraphElement}
      `,
      this.rootElement,
    );
  }
}

customElements.define('app-body-account-page', AccountPage);
