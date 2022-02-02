import EBAttribute from '../EBAttribute';
import RawEBElement, { ConstructorParam as ParentConstructorParam } from '@/src/RawEBElement';
import 'reflect-metadata';

export type ConstructorParam = {
  attributes?: EBAttribute[];
} & ParentConstructorParam;

export default class EBElement extends RawEBElement {
  constructor (payload: ConstructorParam) {
    super(payload);
    if (payload.attributes !== undefined)
      this.registerAttributes(payload.attributes);
  }

  registerAttributes (ebAttributes: EBAttribute[]) {
    try {
      ebAttributes.forEach((v) => { this.registerAttribute(v) });
    } catch (e) {
      console.log(e);
      throw Error('EBElement.registerAttributes failed');
    }
  }

  registerAttribute (ebAttribute: EBAttribute) {
    try {
      ebAttribute.register(this);
    } catch (e) {
      console.log(e);
      throw Error('EBElement.registerAttribute failed');
    }
  }
}
