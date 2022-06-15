import Operator from '@/src/owl-data-binding/Operator';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '@/src/app/symbols';
import PostingPostComments, { DataType, CommentType } from '../../../Model/PostingPostComments';
import AddNotifier from '../../../Notifier/PostingPostComments/Add';

@injectable()
export default class  Adder extends Operator<DataType> {
  notifier: AddNotifier;

  constructor (
    @inject(SYMBOLS.PostingPostComments) model: PostingPostComments,
    @inject(SYMBOLS.PostingPostCommentsAddNotifier) notifier: AddNotifier,
  ) {
    super({
      model,
    });
    this.notifier = notifier;
  }

  async add (comment: CommentType) {
    this.data.list.push(comment);
    await this.notifier.notify(comment);
  }
}
