import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';
import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import Layout from '../Layout';

export type ConstructorParam<ChildElements> = {
  childElements: ChildElements;
  layout: Layout<ChildElements>;
} & ParentConstructorParam;

@injectable()
export default class ContainerElement<ChildElements> extends Element {
  layout: Layout<ChildElements>;
  childElements: ChildElements;

  constructor (@unmanaged() payload: ConstructorParam<ChildElements>) {
    super(payload);
    this.layout = payload.layout;
    this.childElements = payload.childElements;
  }

  initialRender (payload: ConstructorParam<ChildElements>) {
    super.initialRender(payload);
    payload.layout.render(this, payload.childElements);
  }
}

customElements.define('container-element', ContainerElement);
