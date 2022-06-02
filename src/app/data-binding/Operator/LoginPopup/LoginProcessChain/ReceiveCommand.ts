import RawReceiveCommand from '@/src/owl-data-binding/Operator/CommandStateChain/ReceiveCommand';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '@/src/app/symbols';
import LoginProcessChain from '../../../Model/LoginPopup/LoginProcessChain';

@injectable()
export default class ReceiveCommand extends RawReceiveCommand {
  constructor (
    @inject(SYMBOLS.LoginProcessChain) model: LoginProcessChain,
  ) {
    super({
      model,
    });
  }
}
