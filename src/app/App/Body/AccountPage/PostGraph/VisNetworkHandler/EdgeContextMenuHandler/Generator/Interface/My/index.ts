import Interface from '@/src/app/data-binding/RuleBaseGenerator/Interface';
import BasicContextMenuBody from '@/src/elements/ContextMenuPopup/BasicContextMenuBody';
import ContextMenuBody from './Element';

export default class MyInterface extends Interface<void, BasicContextMenuBody> {
  async generate () {
    return new ContextMenuBody();
  }
}
