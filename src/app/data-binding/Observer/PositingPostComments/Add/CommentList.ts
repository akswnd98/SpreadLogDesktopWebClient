import INotifier from '@/src/owl-data-binding/INotifier';
import IObserver from '@/src/owl-data-binding/IObserver';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { EventType } from '../../../Notifier/PostingPostComments/Add';
import CommentList from '@/src/app/App/Body/Post/CommentList';
import { render, html } from 'lit-html';
import Comment from '@/src/app/App/Body/Post/CommentList/Comment';
import Getter from '../../../Operator/PostingPostComments/Getter';

export type ConstructorParam = {
  commentList: CommentList;
  getter: Getter;
};

@injectable()
export default class CommentListObserver implements IObserver {
  commentList: CommentList;
  getter: Getter;

  constructor (payload: ConstructorParam) {
    this.commentList = payload.commentList;
    this.getter = payload.getter;
  }

  async update (subject: INotifier, event: EventType) {
    render(
      html`
        ${this.getter.get().map((v) => html`${new Comment(v)}`)}
      `,
      this.commentList.rootElement,
    );
  }
}
