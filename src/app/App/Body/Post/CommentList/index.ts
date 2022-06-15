import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { html, render } from 'lit-html';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import Comment from './Comment';
import { SYMBOLS } from '@/src/app/symbols';
import Getter from '@/src/app/data-binding/Operator/PostingPostComments/Getter';

export type PayloadParam = {
  getter: Getter;
} & ParentConstructorParam;

@injectable()
export default class CommentList extends Element {
  constructor (
    @inject(SYMBOLS.PostingPostCommentsGetter) getter: Getter,
  ) {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
      getter,
    } as PayloadParam);
  }

  initialRender (payload: PayloadParam) {
    super.initialRender(payload);
    render(
      html`
        ${payload.getter.get().map((v) => html`${new Comment(v)}`)}
      `,
      this.rootElement,
    );
  }
}

customElements.define('post-comment-list', CommentList);
