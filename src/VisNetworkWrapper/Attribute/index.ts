import VisNetworkWrapper from '@/src/VisNetworkWrapper';

export default abstract class Attribute {
  abstract register (network: VisNetworkWrapper): void;
  abstract unregister (network: VisNetworkWrapper): void;
}
