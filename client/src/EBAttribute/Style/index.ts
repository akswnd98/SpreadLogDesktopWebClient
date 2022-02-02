import EBAttribute, { ConstructorParam as ParentConstructorParam } from '@/src/EBAttribute';
import EBElement from '@/src/EBElement';

export type ConstructorParam = {
  styles: string;
} & ParentConstructorParam;

export default class Style extends EBAttribute {
  styleElement: HTMLStyleElement;

  constructor (payload: ConstructorParam) {
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
