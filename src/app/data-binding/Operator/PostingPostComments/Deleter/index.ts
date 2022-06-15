import Operator from '@/src/owl-data-binding/Operator';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '@/src/app/symbols';
import PostingPostComments, { DataType, CommentType } from '../../../Model/PostingPostComments';

@injectable()
export default class Deleter extends Operator<DataType> {

  constructor (
    @inject(SYMBOLS.PostingPostComments) model: PostingPostComments,
  ) {
    super({
      model,
    });
  }

  async delete (idx: number) {
    this.data.list.splice(idx, 1);
  }
}
