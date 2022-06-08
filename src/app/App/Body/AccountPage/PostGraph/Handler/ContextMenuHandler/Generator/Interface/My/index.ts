import Interface from '@/src/app/data-binding/RuleBaseGenerator/Interface';
import BasicContextMenuBody from '@/src/elements/ContextMenuPopup/BasicContextMenuBody';
import ContextMenuBody from './Element';

export default class MyInterface extends Interface<void, BasicContextMenuBody> {
  body: ContextMenuBody;

  constructor () {
    super();
    this.body = new ContextMenuBody();
  }

  async generate () {
    return this.body;
  }
}
