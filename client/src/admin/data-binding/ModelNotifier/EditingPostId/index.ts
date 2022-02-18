import ModelNotifier from '@/src/data-binding/ModelNotifier';
import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import EditingPostIdModel, { DataType } from '../../Model/EditingPostId';
import EditingPostIdObserver from '../../Observer/EditingPostId';
import { SYMBOLS } from '@/src/admin/types';

@injectable()
export default class EditingPostId extends ModelNotifier<DataType> {
  constructor (
    @inject(SYMBOLS.EditingPostId) model: EditingPostIdModel,
    @inject(SYMBOLS.EditingPostIdObserver) observer: EditingPostIdObserver,
  ) {
    super ({
      model,
    });
    this.attachObserver(observer);
  }

  async notify (event: number) {
    await super.notify(event);
  }

  async setId (id: number) {
    this.model.data.id = id;
    await this.notify(id);
  }
}
