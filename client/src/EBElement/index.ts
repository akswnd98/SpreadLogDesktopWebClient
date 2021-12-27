import EBAttribute from '../EBAttribute';
import RawEBElement from '../RawEBElement';

export type ConstructorParam = {
  attributes: EBAttribute[];
};

export default abstract class EBElement extends RawEBElement {
  constructor (payload: ConstructorParam) {
    super();
    this.registerAttributes(payload.attributes);
  }

  registerAttributes (ebAttributes: EBAttribute[]) {
    ebAttributes.forEach((v) => { v.register(this); });
  }
}
