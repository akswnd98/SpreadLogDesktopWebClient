import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';
import Model, { ConstructorParam as ParentConstructorParam } from '@/src/owl-data-binding/Model';

export type DataType = {
  id: number;
};

export type ConstructorParam = {
} & ParentConstructorParam<DataType>;

@injectable()
export default class EdgeContextMenuSelectedId extends Model<DataType> {
  constructor () {
    super({
      data: {
        id: -1,
      },
    });
  }
}
