import Interface from '@/src/app/data-binding/RuleBaseBinder/Interface';
import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/symbols';
import Element from '@/src/owl-element/Element';
import AvatarElement from './Element';
import { InterfaceParam } from '..';

export default class Avatar extends Interface<InterfaceParam> {
  async bind (param: InterfaceParam) {
    param.bind<Element>(SYMBOLS.AccountAvatarElement).toDynamicValue(() => new AvatarElement({ nickname: param.nickname }));
  }
}
