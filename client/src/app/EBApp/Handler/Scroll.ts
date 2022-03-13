import Handler, { ConstructorParam as ParentConstructorParam } from '@/src/EBAttribute/Handler';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Static from '../../inversify.config';
import EBApp from '..';
import { SYMBOLS } from '../../types';

@injectable()
export default class Scroll extends Handler<'scroll'> {
  eventName: 'scroll' = 'scroll';

  prevScrollTop: number = 0;

  constructor () {
    super({
      id: 'root',
    });
  }

  async handle (event: Event) {
    const root = Static.instance.get<EBApp>(SYMBOLS.EBApp).rootElement;
    const nav = Static.instance.get<EBApp>(SYMBOLS.EBApp).shadowRoot!.getElementById('navWrapper')!;
    if (root.scrollTop > 140) {
      if (root.scrollTop > this.prevScrollTop) {
        nav.style.top = `${Math.max(-60, nav.offsetTop - root.scrollTop + this.prevScrollTop)}px`;
      } else {
        nav.style.top = `${Math.min(0, nav.offsetTop - root.scrollTop + this.prevScrollTop)}px`;
      }
    } else {
      nav.style.top = `${Math.max(-60, 80 - root.scrollTop)}px`;
    }
    this.prevScrollTop = root.scrollTop;
  }
}
