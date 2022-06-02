import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/symbols';
import 'reflect-metadata';
import { injectable } from 'inversify';
import StateTransitionCommand from '@/src/owl-data-binding/Command/Undoable/StateTransition';
import PasswdState from '@/src/app/data-binding/State/LoginPopup/LoginProcess/Passwd';
import axios from 'axios';
import CurrentLoginEmailGetter from '@/src/app/data-binding/Operator/CurrentLoginEmail/Getter';
import CurrentLoginPasswdGetter from '@/src/app/data-binding/Operator/CurrentLoginPasswd/Getter';

@injectable()
export default class PasswdToUserConfermed extends StateTransitionCommand {
  constructor () {
    super();
  }

  async execute () {
    try {
      const email = Static.instance.get<CurrentLoginEmailGetter>(SYMBOLS.CurrentLoginEmailGetter).get();
      const pw = Static.instance.get<CurrentLoginPasswdGetter>(SYMBOLS.CurrentLoginPasswdGetter).get();
      const rst = (await axios.post('/api/account/email/login', { email, pw })).data.result;
      if (!rst) {
        throw Error('login failed');
      }
      window.location.href = '/';
    } catch (e) {
      console.log(e);
      throw Error('LoginProcess.UserConfermedCommand.execute failed');
    }
  }

  async unexecute () {
    
  }

  generateNextState () {
    return new PasswdState();
  }
}
