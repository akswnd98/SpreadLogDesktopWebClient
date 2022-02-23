import { unmanaged } from 'inversify';
import * as VisNetwork from 'vis-network/standalone';
import Attribute from '..';
import VisNetworkWrapper from '@/src/VisNetworkWrapper';

export default abstract class Handler extends Attribute {
  abstract eventName: VisNetwork.NetworkEvents;

  constructor () {
    super();
  }

  register (network: VisNetworkWrapper) {
    network.on(this.eventName, (params: any) => {
      this.handle(params);
    });
  }

  unregister (network: VisNetworkWrapper) {
  }

  abstract handle (params: any): Promise<void>;
}
