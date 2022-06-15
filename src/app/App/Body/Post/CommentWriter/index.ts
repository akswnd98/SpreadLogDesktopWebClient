import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import { html, render } from 'lit-html';
import TextAreaInput from './Handler/TextArea/Input';
import Getter from '@/src/app/data-binding/Operator/PostingPostComments/Getter';
import { SYMBOLS } from '@/src/app/symbols';
import Click from './Handler/WriteButton/Click';
import AccountGetter from '@/src/app/data-binding/Operator/Account/Getter';
import Adder from '@/src/app/data-binding/Operator/PostingPostComments/Adder';
import PostingPostId from '@/src/app/data-binding/Model/PostingPostId';

export type PayloadParam = {
  getter: Getter;
} & ParentConstructorParam;

@injectable()
export default class CommentWriter extends Element {
  constructor (
    @inject(SYMBOLS.PostingPostCommentsGetter) getter: Getter,
    @inject(SYMBOLS.AccountGetter) accountGetter: AccountGetter,
    @inject(SYMBOLS.PostingPostId) postingPostId: PostingPostId,
    @inject(SYMBOLS.PostingPostCommentsAdder) adder: Adder,
  ) {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
      getter,
    } as PayloadParam);
    this.registerAttributes([
      new TextAreaInput({ commentWriter: this }),
      new Click({ commentWriter: this, accountGetter, adder, postingPostId }),
    ]);
  }

  initialRender (payload: PayloadParam) {
    super.initialRender(payload);
    render(
      html`
        <p id='head'>${payload.getter.get().length}개의 댓글</p>
        <textarea id='textarea'></textarea>
        <div id='write-button-wrapper'>
          <div id='write-button'>댓글 작성</div>
        </div>
      `,
      this.rootElement,
    );
  }
}

customElements.define('post-comment-writer', CommentWriter);
