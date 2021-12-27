import EBElement from '../RawEBElement';

export type ConstructorParam = {
};

export default abstract class EBAttribute {
  abstract register (element: EBElement): void;
  abstract unregister (element: EBElement): void;
}
