import * as VisNetwork from 'vis-network/standalone';
import Attribute from './Attribute';

export type ConstructorParam = {
  container: HTMLElement;
  data: VisNetwork.Data;
  options?: VisNetwork.Options;
  attributes: Attribute[];
};

export default class Network extends VisNetwork.Network {
  attributes: Attribute[];

  constructor (payload: ConstructorParam) {
    super(payload.container, payload.data, payload.options !== undefined ? payload.options : {});
    this.attributes = payload.attributes;
    this.registerAttributes();
  }

  registerAttributes () {
    this.attributes.forEach((v) => {
      this.registerAttribute(v);
    });
  }

  registerAttribute (attribute: Attribute) {
    attribute.register(this);
  }
}
