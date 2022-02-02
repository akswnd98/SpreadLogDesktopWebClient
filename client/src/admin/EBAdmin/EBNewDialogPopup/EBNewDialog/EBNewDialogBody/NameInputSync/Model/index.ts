import Notifier, { ConstructorParam as ParentConstructorParam } from '@/src/Notifier';
import Observer from '@/src/Observer';

export type ConstructorParam = {
  name: string;
} & ParentConstructorParam;

export default class Model extends Notifier {
  protected fName: string;

  constructor (payload: ConstructorParam) {
    super(payload);
    this.fName = payload.name;
  }

  get name () {
    return this.fName;
  }

  setName (name: string, origin: Observer) {
    this.fName = name;
    this.notify(origin);
  }
}
