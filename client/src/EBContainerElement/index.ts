import EBElement, { ConstructorParam as ParentConstructorParam } from '../EBElement';
import EBLayout from '../EBLayout';

export type ConstructorParam<ChildElements> = {
  childElements: ChildElements;
  layout: EBLayout<ChildElements>;
} & ParentConstructorParam;

export default class EBContainerElement<ChildElements> extends EBElement {
  layout: EBLayout<ChildElements>;
  childElements: ChildElements;

  constructor (payload: ConstructorParam<ChildElements>) {
    super(payload);
    this.layout = payload.layout;
    this.childElements = payload.childElements;
  }

  initialRender (payload: ConstructorParam<ChildElements>) {
    super.initialRender(payload);
    payload.layout.render(this, payload.childElements);
  }
}
