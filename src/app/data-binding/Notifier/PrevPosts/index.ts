import Notifier from '@/src/owl-data-binding/Notifier';
import 'reflect-metadata';
import { injectable } from 'inversify';
import PrevPostsObserver from '../../Observer/PrevPosts';

@injectable()
export default class PrevPosts extends Notifier {
  constructor () {
    super({
      observers: new Set([
        new PrevPostsObserver(),
      ]),
    });
  }
}
