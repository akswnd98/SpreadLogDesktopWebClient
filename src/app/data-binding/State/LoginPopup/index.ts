import 'reflect-metadata';
import { injectable } from 'inversify';
import State from '@/src/owl-data-binding/State';

@injectable()
export default abstract class LoginPopup extends State {
  abstract back (): Promise<void>;

  abstract doEnter (): Promise<void>;

  abstract doEsc (): Promise<void>;
}
