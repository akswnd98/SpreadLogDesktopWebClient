import RuleBaseGenerator from '@/src/app/data-binding/RuleBaseGenerator';
import BasicContextMenuBody from '@/src/elements/ContextMenuPopup/BasicContextMenuBody';
import Interface from '@/src/app/data-binding/RuleBaseGenerator/Interface';
import Rule from '@/src/app/data-binding/RuleBaseGenerator/Rule';
import MyPageRule from '@/src/app/data-binding/RuleBaseGenerator/Rule/MyPageRule';
import MyInterface from './Interface/My';

export default class Generator extends RuleBaseGenerator<void, any, void> {
  ruleInterfacePair: [Rule<void>, Interface<any, void>][] = [
    [new MyPageRule(), new MyInterface()],
  ];
}
