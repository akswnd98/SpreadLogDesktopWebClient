import Handler, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Attribute/Handler';
import BaseInput from '..';

export type ConstructorParam = {
  baseInput: BaseInput;
};

export default class Focus extends Handler<'focus'> {
  eventName: 'focus' = 'focus';
  baseInput: BaseInput;

  constructor (payload: ConstructorParam) {
    super({
      id: 'input-box',
    });
    this.baseInput = payload.baseInput
  }

  async handle (event: FocusEvent) {
    const inputBox = this.baseInput.shadowRoot!.getElementById('input-box')! as HTMLInputElement;
    inputBox.setAttribute('type', 'password');
  }
}
