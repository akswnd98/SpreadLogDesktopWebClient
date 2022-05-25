import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';
import EBElement, { ConstructorParam as ParentConstructorParam } from '../EBElement';

export type ConstructorParam = {
  childElements: EBElement[];
} & ParentConstructorParam;

@injectable()
export default class EBListElement extends EBElement {
  childElements: EBElement[];

  constructor (@unmanaged() payload: ConstructorParam) {
    super(payload);
    this.childElements = [];
    payload.childElements.forEach((element) => {
      this.appendChildElement(element);
    });
  }

  appendChildElement (element: EBElement) {
    this.childElements.push(element);
    this.rootElement.appendChild(element);
  }

  appendChildElementAt (element: EBElement, idx: number) {
    try {
      this.childElements.splice(idx, 0, element);
      this.rootElement.insertBefore(element, this.rootElement.children[idx].nextSibling);
    } catch (e) {
      console.log(e);
      throw Error('EBListElement.appendChildElementAt failed');
    }
  }

  removeChildElement (element: EBElement) {
    this.childElements.splice(this.childElements.indexOf(element), 1);
    this.rootElement.removeChild(element);
  }

  removeChildElementAt (idx: number) {
    try {
      this.rootElement.removeChild(this.childElements[idx]);
      this.childElements.splice(idx, 1);
    } catch (e) {
      console.log(e);
      throw Error('EBListElement.removeChildElementAt failed');
    }
  }

  removeAllChildElement () {
    this.childElements.forEach((element, idx) => {
      this.removeChildElementAt(idx);
    });
  }
}
