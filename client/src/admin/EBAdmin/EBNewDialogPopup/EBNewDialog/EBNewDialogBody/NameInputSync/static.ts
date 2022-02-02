import NameInputSync from '.';
import Model from './Model';

export type GenerationParam = {
  model: Model;
};

export default class Static {
  static generate (payload: GenerationParam) {
    const nameInputSync = new NameInputSync(payload);
    payload.model.attachObserver(nameInputSync);
    return nameInputSync;
  }
}
