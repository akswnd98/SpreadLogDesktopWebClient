import Handler from '@/src/owl-element/Attribute/Handler';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import ContextMenuPopup from '@/src/elements/ContextMenuPopup';
import { SYMBOLS } from '@/src/app/symbols';
import Static from '@/src/app/inversify.config';
import ContextMenuBody from './Generator/Interface/My/Element';
import AccountGetter from '@/src/app/data-binding/Operator/Account/Getter';
import AccountPageNicknameGetter from '@/src/app/data-binding/Operator/AccountPageNickname/Getter';
import Generator from './Generator';

@injectable()
export default class ContextMenu extends Handler<'contextmenu'> {
  eventName: 'contextmenu' = 'contextmenu';
  handlerGenerator: Generator;

  constructor () {
    super({ id: 'root' });
    this.handlerGenerator = new Generator();
  }

  async handle (event: MouseEvent) {
    event.preventDefault();
    const popup = Static.instance.get<ContextMenuPopup>(SYMBOLS.ContextMenuPopup);
    const generated = await this.handlerGenerator.generate();
    if (generated !== undefined) {
      popup.show({ x: event.clientX, y: event.clientY }, generated);
    }
  }
}
