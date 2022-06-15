import Model from '@/src/owl-data-binding/Model';
import 'reflect-metadata';
import { injectable } from 'inversify';

export type DataType = {
  list: PostCommentType[];
};

export type PostCommentType = {
  id: number;
  accountId: number;
  accountNickname: string;
  body: string;
  firstUpload: Date;
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
