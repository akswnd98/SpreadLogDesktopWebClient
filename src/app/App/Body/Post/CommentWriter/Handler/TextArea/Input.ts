import Handler from '@/src/owl-element/Attribute/Handler';
import 'reflect-metadata';
import { injectable } from 'inversify';
import CommentWriter from '../..';

export type ConstructorParam = {
  commentWriter: CommentWriter;
};

injectable()
export default class Input extends Handler<'input'> {
  eventName: 'input' = 'input';

  commentWriter: CommentWriter;

  constructor (payload: ConstructorParam) {
    super({ id: 'textarea' });
    this.commentWriter = payload.commentWriter;
  }

  async handle (event: Event) {
    const textarea = this.commentWriter.shadowRoot!.getElementById('textarea')!;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }
}
