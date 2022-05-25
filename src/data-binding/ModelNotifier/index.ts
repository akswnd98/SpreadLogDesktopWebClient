import { injectable, unmanaged } from 'inversify';
import Model from '../Model';
import Notifier, { ConstructorParam as ParentConstructorParam } from '../Notifier';

export type ConstructorParam<DataType> = {
  model: Model<DataType>
} & ParentConstructorParam;

@injectable()
export default class ModelNotifier<DataType> extends Notifier {
  model: Model<DataType>;

  constructor (@unmanaged() payload: ConstructorParam<DataType>) {
    super(payload);
    this.model = payload.model;
  }
}
