import Element from '@/src/owl-element/Element';

export default abstract class PopupInterface {
  abstract show (element: Element): void;
  abstract hide (element: Element): void;
}
