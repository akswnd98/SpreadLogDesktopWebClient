import INotifier from '@/src/owl-data-binding/INotifier';
import IObserver from '@/src/owl-data-binding/IObserver';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { EventType } from '../../../Notifier/PostingPostComments/Set';
import CommentList from '@/src/app/App/Body/Post/CommentList';
import { render, html } from 'lit-html';
import Comment from '@/src/app/App/Body/Post/CommentList/Comment';

export type ConstructorParam = {
  commentList: CommentList;
};

@injectable()
export default class CommentListObserver implements IObserver {
  commentList: CommentList;

  constructor (payload: ConstructorParam) {
    this.commentList = payload.commentList;
  }

  async update (subject: INotifier, event: EventType) {
    console.log(event);
    render(
      html`
        ${event.map((v) => html`${new Comment(v)}`)}
      `,
      this.commentList.rootElement,
    );
  }
}
