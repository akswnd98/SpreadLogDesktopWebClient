import Model from '@/src/data-binding/Model';
import 'reflect-metadata';
import { injectable } from 'inversify';

export type DataType = {
  id: number;
  title: string;
  body: string;
  firstUpload: Date;
  lastUpdate: Date;
};

@injectable()
export default class EditingPost extends Model<DataType> {
  constructor () {
    super({
      data: {
        id: -1,
        title: '',
        body: '',
        firstUpload: new Date(),
        lastUpdate: new Date(),
      },
    });
  }
}
