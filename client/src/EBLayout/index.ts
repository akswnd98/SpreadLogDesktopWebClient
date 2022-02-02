import EBElement from '../EBElement';

export default abstract class EBLayout<ChildElements> {
  abstract render (element: EBElement, childElements: ChildElements): void;
}
