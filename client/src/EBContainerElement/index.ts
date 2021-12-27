import EBElement, { ConstructorParam as ParentConstructorParam } from '../EBElement';
import EBLayout from '../EBLayout';

export type ConstructorParam = {
  childElements: EBElement[];
  layout: EBLayout;
} & ParentConstructorParam;

export default abstract class EBContainerElement extends EBElement {
  layout: EBLayout;
  childElements: EBElement[];

  constructor (payload: ConstructorParam) {
    super(payload);
    this.layout = payload.layout;
    this.childElements = payload.childElements;
    this.layout.render(this, this.childElements);
  }
}
