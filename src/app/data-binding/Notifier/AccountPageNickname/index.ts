import Notifier from '@/src/owl-data-binding/Notifier';
import 'reflect-metadata';
import { injectable } from 'inversify';
import NavLogoObserver from '../../Observer/NavLogo';

@injectable()
export default class AccountPageNicknameNotifier extends Notifier {
  constructor () {
    super({
      observers: new Set([
        new NavLogoObserver(),
      ]),
    });
  }
}
