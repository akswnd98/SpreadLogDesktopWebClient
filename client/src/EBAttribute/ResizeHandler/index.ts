import EBElement from '@/src/EBElement';
import EBAttribute, { ConstructorParam as ParentConstructorParam } from '..';

export type ConstructorParam = {
} & ParentConstructorParam;

export default abstract class ResizeHandler extends EBAttribute {
  protected registeredHandler?: (event: UIEvent) => void;

  register (element: EBElement) {
    this.registeredHandler = (event: UIEvent) => { this.handle(event); };
    window.addEventListener('resize', this.registeredHandler);
  }

  unregister(element: EBElement): void {
    if (this.registeredHandler === undefined) return;
    window.removeEventListener('resize', this.registeredHandler);
    this.registeredHandler = undefined;
  }

  abstract handle (event: UIEvent): void;
}
