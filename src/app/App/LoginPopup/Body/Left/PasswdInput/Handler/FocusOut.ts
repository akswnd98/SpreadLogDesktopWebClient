import Handler, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Attribute/Handler';
import BaseInput from '..';

export type ConstructorParam = {
  baseInput: BaseInput;
  defaultValue: string;
};

export default class FocusOut extends Handler<'focusout'> {
  eventName: 'focusout' = 'focusout';
  baseInput: BaseInput;
  defaultValue: string;

  constructor (payload: ConstructorParam) {
    super({
      id: 'input-box',
    });
    this.baseInput = payload.baseInput;
    this.defaultValue = payload.defaultValue;
  }

  async handle (event: FocusEvent) {
    const inputBox = this.baseInput.shadowRoot!.getElementById('input-box')! as HTMLInputElement;
    if (this.baseInput.isDefault) {
      inputBox.setAttribute('type', 'text');
    }
  }
}
