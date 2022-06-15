import Model from '@/src/owl-data-binding/Model';
import 'reflect-metadata';
import { injectable } from 'inversify';

export type CommentType = {
  id: number;
  accountId: number;
  accountNickname: string;
  body: string;
  firstUpload: Date;
};

export type DataType = {
  list: CommentType[];
};

@injectable()
export default class PostingPostComments extends Model<DataType> {
  constructor () {
    super({
      data: {
        list: [],
      },
    });
  }
}
