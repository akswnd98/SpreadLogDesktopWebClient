import Handler from '@/src/owl-element/Attribute/Handler';
import 'reflect-metadata';
import { injectable } from 'inversify';
import CommentWriter from '../..';
import axios from 'axios';
import AccountGetter from '@/src/app/data-binding/Operator/Account/Getter';
import PostingPostId from '@/src/app/data-binding/Model/PostingPostId';
import Adder from '@/src/app/data-binding/Operator/PostingPostComments/Adder';

export type ConstructorParam = {
  commentWriter: CommentWriter;
  accountGetter: AccountGetter;
  postingPostId: PostingPostId;
  adder: Adder;
};

injectable()
export default class Click extends Handler<'click'> {
  eventName: 'click' = 'click';
  commentWriter: CommentWriter;
  accountGetter: AccountGetter;
  postingPostId: PostingPostId;
  adder: Adder;

  constructor (payload: ConstructorParam) {
    super({ id: 'write-button' });
    this.commentWriter = payload.commentWriter;
    this.accountGetter = payload.accountGetter;
    this.postingPostId = payload.postingPostId;
    this.adder = payload.adder;
  }

  async handle (event: Event) {
    const textarea = this.commentWriter.shadowRoot!.getElementById('textarea')! as HTMLTextAreaElement;
    const body = textarea.value;
    const rst = (await axios.post('/api/post/comment/account/writeComment', { postId: this.postingPostId.get(), body })).data;
    await this.adder.add({
      id: rst.id,
      firstUpload: rst.firstUpload,
      body,
      accountId: this.accountGetter.get().id,
      accountNickname: this.accountGetter.get().nickname,
    });
    textarea.value = '';
  }
}
