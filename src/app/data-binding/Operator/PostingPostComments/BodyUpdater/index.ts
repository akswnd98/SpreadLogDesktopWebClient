import Operator from '@/src/owl-data-binding/Operator';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '@/src/app/symbols';
import PostingPostComments, { DataType, CommentType } from '../../../Model/PostingPostComments';

@injectable()
export default class BodyUpdater extends Operator<DataType> {

  constructor (
    @inject(SYMBOLS.PostingPostComments) model: PostingPostComments,
  ) {
    super({
      model,
    });
  }

  async update (idx: number, body: string) {
    this.data.list[idx].body = body;
  }
}
