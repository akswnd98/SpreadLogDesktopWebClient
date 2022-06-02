import RawReceiveCommand from '@/src/owl-data-binding/Operator/CommandStateChain/ReceiveCommand';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '@/src/app/symbols';
import SignUpProcessChain from '../../../Model/LoginPopup/SignUpProcessChain';

@injectable()
export default class ReceiveCommand extends RawReceiveCommand {
  constructor (
    @inject(SYMBOLS.SignUpProcessChain) model: SignUpProcessChain,
  ) {
    super({
      model,
    });
  }
}
