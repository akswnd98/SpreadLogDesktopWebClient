import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { html, render } from 'lit-html';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import * as timeago from 'timeago.js';

export type ConstructorParam = {
  accountNickname: string;
  firstUpload: Date;
};

export type PayloadParam =
  ConstructorParam
  & ParentConstructorParam;

@injectable()
export default class Metadata extends Element {
  constructor (payload: ConstructorParam) {
    super({
      ...payload,
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
    } as PayloadParam);
  }

  initialRender (payload: PayloadParam) {
    super.initialRender(payload);
    render(
      html`
        <div id='avatar'></div>
        <div id='name-date-wrapper'>
          <div id='name'>${payload.accountNickname}</div>
          <div id='date'>${timeago.format(payload.firstUpload)}</div>
        </div>
      `,
      this.rootElement,
    );
  }
}

customElements.define('post-comment-post-metadata', Metadata);
