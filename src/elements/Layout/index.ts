import Element from '@/src/owl-element/Element';

export default abstract class Layout<ChildElements> {
  abstract render (element: Element, childElements: ChildElements): void;
}
