import INotifier from '@/src/owl-data-binding/INotifier';
import IObserver from '@/src/owl-data-binding/IObserver';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { EventType } from '../../../Notifier/PostingPostComments/Set';
import { render, html } from 'lit-html';
import Comment from '@/src/app/App/Body/Post/CommentList/Comment';
import CommentWriter from '@/src/app/App/Body/Post/CommentWriter';

export type ConstructorParam = {
  commentWriter: CommentWriter;
};

@injectable()
export default class CommentWriterObserver implements IObserver {
  commentWriter: CommentWriter;

  constructor (payload: ConstructorParam) {
    this.commentWriter = payload.commentWriter;
  }

  async update (subject: INotifier, event: EventType) {
    this.commentWriter.shadowRoot!.getElementById('head')!.innerHTML = `${event.length}개의 댓글`;
  }
}
