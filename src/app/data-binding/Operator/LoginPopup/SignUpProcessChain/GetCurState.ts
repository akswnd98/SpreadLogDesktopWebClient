import RawGetCurState from '@/src/owl-data-binding/Operator/CommandStateChain/GetCurState';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '@/src/app/symbols';
import SignUpProcessChain from '../../../Model/LoginPopup/SignUpProcessChain';
import BaseState from '../../../State/LoginPopup/SignUpProcess/Base';
import SignUpProcessState from '../../../State/LoginPopup/SignUpProcess';

@injectable()
export default class GetCurState extends RawGetCurState {
  constructor (
    @inject(SYMBOLS.SignUpProcessChain) model: SignUpProcessChain,
  ) {
    super({
      model,
    });
  }
  
  get state (): SignUpProcessState {
    return super.state as SignUpProcessState;
  }

  protected get baseState () {
    return new BaseState();
  }
}
