import { injectable, unmanaged } from 'inversify';
import 'reflect-metadata';
import EBElement, { ConstructorParam as ParentConstructorParam } from '../EBElement';
import EBLayout from '../EBLayout';

export type ConstructorParam<ChildElements> = {
  childElements: ChildElements;
  layout: EBLayout<ChildElements>;
} & ParentConstructorParam;

@injectable()
export default class EBContainerElement<ChildElements> extends EBElement {
  layout!: EBLayout<ChildElements>;
  childElements!: ChildElements;

  constructor (@unmanaged() payload: ConstructorParam<ChildElements>) {
    super(payload);
  }

  initField (payload: ConstructorParam<ChildElements>) {
    this.layout = payload.layout;
    this.childElements = payload.childElements;
  }

  initialRender () {
    super.initialRender();
    this.layout.render(this, this.childElements);
  }
}
