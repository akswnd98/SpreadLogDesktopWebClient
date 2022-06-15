import Operator from '@/src/owl-data-binding/Operator';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '@/src/app/symbols';
import PostingPostComments, { DataType, CommentType } from '../../../Model/PostingPostComments';
import SetNotifier from '../../../Notifier/PostingPostComments/Set';

@injectable()
export default class Setter extends Operator<DataType> {
  notifier: SetNotifier;

  constructor (
    @inject(SYMBOLS.PostingPostComments) model: PostingPostComments,
    @inject(SYMBOLS.PostingPostCommentsSetNotifier) notifier: SetNotifier,
  ) {
    super({
      model,
    });
    this.notifier = notifier;
  }

  async set (comments: CommentType[]) {
    this.data.list = comments;
    await this.notifier.notify(comments);
  }
}
