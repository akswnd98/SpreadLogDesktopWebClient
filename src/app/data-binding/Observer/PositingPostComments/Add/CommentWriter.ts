import INotifier from '@/src/owl-data-binding/INotifier';
import IObserver from '@/src/owl-data-binding/IObserver';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { EventType } from '../../../Notifier/PostingPostComments/Add';
import { render, html } from 'lit-html';
import Comment from '@/src/app/App/Body/Post/CommentList/Comment';
import CommentWriter from '@/src/app/App/Body/Post/CommentWriter';
import Getter from '../../../Operator/PostingPostComments/Getter';

export type ConstructorParam = {
  commentWriter: CommentWriter;
  getter: Getter;
};

@injectable()
export default class CommentWriterObserver implements IObserver {
  commentWriter: CommentWriter;
  getter: Getter;

  constructor (payload: ConstructorParam) {
    this.commentWriter = payload.commentWriter;
    this.getter = payload.getter;
  }

  async update (subject: INotifier, event: EventType) {
    this.commentWriter.shadowRoot!.getElementById('head')!.innerHTML = `${this.getter.get().length}개의 댓글`;
  }
}
