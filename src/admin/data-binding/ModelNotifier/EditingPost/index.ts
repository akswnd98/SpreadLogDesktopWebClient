import EditingPostModel, { DataType } from '../../Model/EditingPost';
import ModelNotifier from '@/src/data-binding/ModelNotifier';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '@/src/admin/types';
import EditingPostObserver from '@/src/admin/data-binding/Observer/EditingPost';

@injectable()
export default class EditingPost extends ModelNotifier<DataType> {
  constructor (
    @inject(SYMBOLS.EditingPost) model: EditingPostModel,
    @inject(SYMBOLS.EditingPostObserver) observer: EditingPostObserver,
  ) {
    super({
      model,
    });
    this.attachObserver(observer);
  }

  async notify (event: DataType) {
    await super.notify(event);
  }

  async setData (data: DataType) {
    this.model.data = data;
    await this.notify(data);
  }
}
