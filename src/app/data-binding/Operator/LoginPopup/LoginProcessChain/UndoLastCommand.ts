import RawUndoLastCommand from '@/src/owl-data-binding/Operator/CommandStateChain/UndoLastCommand';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '@/src/app/symbols';
import LoginProcessChain from '../../../Model/LoginPopup/LoginProcessChain';

@injectable()
export default class UndoLastCommand extends RawUndoLastCommand {
  constructor (
    @inject(SYMBOLS.LoginProcessChain) model: LoginProcessChain,
  ) {
    super({
      model,
    });
  }
}
