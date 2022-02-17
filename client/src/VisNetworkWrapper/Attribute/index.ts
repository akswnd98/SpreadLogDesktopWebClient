import * as VisNetwork from 'vis-network/standalone';

export default abstract class Attribute {
  abstract register (network: VisNetwork.Network): void;
  abstract unregister (network: VisNetwork.Network): void;
}
