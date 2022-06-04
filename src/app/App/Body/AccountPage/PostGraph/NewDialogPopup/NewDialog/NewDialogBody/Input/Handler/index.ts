import Setter from '@/src/app/data-binding/Operator/CurrentNewNodeTitle/Setter';
import Getter from '@/src/app/data-binding/Operator/CurrentNewNodeTitle/Getter';
import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/symbols';
import Handler from '@/src/owl-element/Attribute/Handler';
import 'reflect-metadata';
import Input from '..';

export type ConstructorParam = {
  input: Input;
};

export default class InputHandler extends Handler<'input'> {
  eventName: 'input' = 'input';
  input: Input;

  constructor (payload: ConstructorParam) {
    super({
      id: 'input',
    });
    this.input = payload.input;
  }

  async handle (event: HTMLElementEventMap['input']) {
    if (event.target === null) return;
    const setter = Static.instance.get<Setter>(SYMBOLS.CurrentNewNodeTitleSetter);
    setter.set((this.input.shadowRoot!.getElementById('input')! as HTMLInputElement).value);
  }
}
