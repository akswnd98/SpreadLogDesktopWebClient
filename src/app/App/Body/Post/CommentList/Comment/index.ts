import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { html, render } from 'lit-html';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import Metadata from './Metadata';

export type ConstructorParam = {
  body: string;
  accountNickname: string;
  firstUpload: Date;
};

export type PayloadParam =
  ConstructorParam
  & ParentConstructorParam;

@injectable()
export default class Comment extends Element {
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
        <div id='wrapper'>
          <div id='metadata-wrapper'>
            ${new Metadata(payload)}
          </div>
          <div id='body-wrapper'>
            ${payload.body}
          </div>
          <!-- <div id='reply-button'>
            답글 달기
          </div> -->
        </div>
        <div id='hor-line'></div>
      `,
      this.rootElement,
    );
  }
}

customElements.define('post-comment', Comment);
