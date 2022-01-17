import EBAttribute, { ConstructorParam as ParentConstructorParam } from '@/src/EBAttribute';
import EBElement from '@/src/EBElement';
import { injectable, unmanaged } from 'inversify';
import 'reflect-metadata';

export type ConstructorParam = {
  styles: string;
} & ParentConstructorParam;

@injectable()
export default class Style extends EBAttribute {
  styleElement: HTMLStyleElement;

  constructor (@unmanaged() payload: ConstructorParam) {
    super();
    this.styleElement = document.createElement<'style'>('style');
    this.styleElement.textContent = payload.styles;
  }

  register (element: EBElement) {
    element.shadowRoot!.appendChild(this.styleElement);
  }

  unregister (element: EBElement) {
    element.shadowRoot!.removeChild(this.styleElement);
  }
}
