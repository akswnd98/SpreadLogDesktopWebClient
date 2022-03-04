import EBElement from '../EBElement';

export default abstract class PopupInterface {
  abstract show (element: EBElement): void;
  abstract hide (element: EBElement): void;
}
