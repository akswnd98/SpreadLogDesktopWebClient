import { unmanaged } from 'inversify';
import * as VisNetwork from 'vis-network/standalone';
import Attribute from '..';

export type ConstructorParam = {
  eventName: VisNetwork.NetworkEvents;
};

export default abstract class Handler extends Attribute {
  eventName: VisNetwork.NetworkEvents;

  constructor (payload: ConstructorParam) {
    super();
    this.eventName = payload.eventName;
  }

  register (network: VisNetwork.Network) {
    network.on(this.eventName, (params: any) => {
      this.handle(params);
    });
  }

  unregister (network: VisNetwork.Network) {
  }

  abstract handle (params: any): void;
}
