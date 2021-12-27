import EBElement from '../EBElement';

export default abstract class EBLayout {
  abstract render (element: EBElement, childElements: EBElement[]): void;
}
