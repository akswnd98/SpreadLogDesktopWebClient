import RawUndoLastCommand from '@/src/owl-data-binding/Operator/CommandStateChain/UndoLastCommand';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '@/src/app/symbols';
import SignUpProcessChain from '../../../Model/LoginPopup/SignUpProcessChain';

@injectable()
export default class UndoLastCommand extends RawUndoLastCommand {
  constructor (
    @inject(SYMBOLS.SignUpProcessChain) model: SignUpProcessChain,
  ) {
    super({
      model,
    });
  }
}
