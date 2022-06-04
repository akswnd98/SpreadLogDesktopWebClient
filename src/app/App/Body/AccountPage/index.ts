import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import { ConstructorParam } from '@/src/owl-element/Element/Raw';
import { html, render } from 'lit-html';
import PostGraphElement from './PostGraph';
import { SYMBOLS } from '@/src/app/symbols';

export type PayloadParam = {
  postGraphElement: PostGraphElement;
} & ParentConstructorParam;

@injectable()
export default class AccountPage extends Element {
  nickname!: string;

  constructor (
    @inject(SYMBOLS.PostGraphElement) postGraphElement: PostGraphElement,
  ) {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
      postGraphElement,
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
