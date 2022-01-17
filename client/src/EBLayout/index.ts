import { injectable } from 'inversify';
import 'reflect-metadata';
import EBElement from '../EBElement';

@injectable()
export default abstract class EBLayout<ChildElements> {
  abstract render (element: EBElement, childElements: ChildElements): void;
}
