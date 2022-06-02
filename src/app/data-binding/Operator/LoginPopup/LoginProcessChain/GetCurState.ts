import RawGetCurState from '@/src/owl-data-binding/Operator/CommandStateChain/GetCurState';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '@/src/app/symbols';
import LoginProcessChain from '../../../Model/LoginPopup/LoginProcessChain';
import BaseState from '../../../State/LoginPopup/LoginProcess/Base';
import LoginProcessState from '../../../State/LoginPopup/LoginProcess';

@injectable()
export default class GetCurState extends RawGetCurState {
  constructor (
    @inject(SYMBOLS.LoginProcessChain) model: LoginProcessChain,
  ) {
    super({
      model,
    });
  }

  get state (): LoginProcessState {
    return super.state as LoginProcessState;
  }

  protected get baseState () {
    return new BaseState();
  }
}
