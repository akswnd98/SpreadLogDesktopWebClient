import SignUpProcess from '..';
import 'reflect-metadata';
import { injectable } from 'inversify';

@injectable()
export default class EmailSent extends SignUpProcess {
  generateNextCommand () {
    return undefined;
  }

  async doEsc () {

  }
}
