import 'reflect-metadata';
import { injectable } from 'inversify';
import EBElement from '../EBElement';

export type ConstructorParam = {
};

@injectable()
export default abstract class EBAttribute {
  abstract register (element: EBElement): void;
  abstract unregister (element: EBElement): void;
}
