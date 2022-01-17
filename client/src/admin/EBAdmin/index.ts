import EBElement from '@/src/EBElement';
import 'reflect-metadata';
import EBContainerElement, { ConstructorParam as ParentConstructorParam} from '@/src/EBContainerElement';
import { injectable, unmanaged } from 'inversify';

export type ConstructorParam = {
} & ParentConstructorParam<EBElement[]>;

@injectable()
export default class EBAdmin extends EBContainerElement<EBElement[]> {
  constructor (@unmanaged() payload: ConstructorParam) {
    super(payload);
  }
}
