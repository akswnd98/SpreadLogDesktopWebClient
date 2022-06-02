import 'reflect-metadata';
import { injectable } from 'inversify';
import StateTransitionCommand from '@/src/owl-data-binding/Command/Undoable/StateTransition';
import State from '@/src/owl-data-binding/State';

@injectable()
export default abstract class LoginProcess extends State {
  abstract generateNextCommand (): StateTransitionCommand | undefined;

  abstract doEsc (): Promise<void>;
}
