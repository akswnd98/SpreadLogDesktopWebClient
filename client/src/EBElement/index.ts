import EBAttribute from '../EBAttribute';
import RawEBElement, { ConstructorParam as ParentConstructorParam } from '@/src/RawEBElement';
import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';

export type ConstructorParam = {
  attributes?: EBAttribute[];
} & ParentConstructorParam;

@injectable()
export default class EBElement extends RawEBElement {
  constructor (@unmanaged() payload: ConstructorParam) {
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
