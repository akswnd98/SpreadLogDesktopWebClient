import EBDecorator, { ConstructorParam as ParentConstructorParam } from '@/src/EBDecorator';
import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';
import IPopup from '../IPopup';

export type ConstructorParam = {
} & ParentConstructorParam;

@injectable()
export default class EBPopupDecorator extends EBDecorator implements IPopup {
  constructor (@unmanaged() payload: ConstructorParam) {
    super(payload);
  }

  initialRender (payload: ConstructorParam) {
    super.initialRender(payload);
    this.hide();
  }

  show () {
    this.rootElement.classList.remove('hide');
    this.rootElement.classList.add('show');
  }

  hide () {
    this.rootElement.classList.remove('show');
    this.rootElement.classList.add('hide');
  }
}

customElements.define('eb-popup-decorator', EBPopupDecorator);
