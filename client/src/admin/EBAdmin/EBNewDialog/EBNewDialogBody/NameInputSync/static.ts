import NameInputStatic from './NameInput/static';
import Handler from './NameInput/Handler';
import Model from './Model';
import EBObserverDecorator from '@/src/EBObserverDecorator';

export type GenerationParam = {
  model: Model;
};

export default class Static {
  static generate (payload: GenerationParam) {
    const nameInput = new EBObserverDecorator({ originElement: NameInputStatic.generate({ model: payload.model }) });
    const handler = new Handler({ model: payload.model, observer: nameInput, id: 'name' });
    nameInput.registerAttribute(handler);
    payload.model.attachObserver(nameInput);
    return nameInput;
  }
}
