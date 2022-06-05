import Interface from '@/src/app/data-binding/RuleBaseBinder/Interface';
import Element from '@/src/owl-element/Element';
import PeopleElement from './Element';
import { InterfaceParam } from '..';
import { SYMBOLS } from '@/src/app/symbols';

export default class People extends Interface<InterfaceParam> {
  async bind (param: InterfaceParam) {
    param.bind<Element>(SYMBOLS.AccountAvatarElement).toDynamicValue(() => new PeopleElement());
  }
}
