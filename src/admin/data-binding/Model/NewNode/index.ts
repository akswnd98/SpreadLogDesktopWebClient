import Model, { ConstructorParam as ParentConstructorParam } from '@/src/data-binding/Model';
import { injectable } from 'inversify';

export type DataType = {
  title: string;
};

export type ConstructorParam = {
} & ParentConstructorParam<DataType>

@injectable()
export default class NewNode extends Model<DataType> {
  constructor () {
    super({
      data: {
        title: '',
      },
    });
  }
}
