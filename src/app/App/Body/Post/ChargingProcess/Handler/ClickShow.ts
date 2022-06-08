import Handler from '@/src/owl-element/Attribute/Handler';
import 'reflect-metadata';
import { injectable } from 'inversify';
import ChargingProcess from '..';

export type ConstructorParam = {
  chargingProcess: ChargingProcess;
};

@injectable()
export default class ClickShow extends Handler<'click'> {
  eventName: 'click' = 'click';
  chargingProcess: ChargingProcess;

  constructor (payload: ConstructorParam) {
    super({
      id: 'show-button',
    });
    this.chargingProcess = payload.chargingProcess;
  }

  async handle (event: MouseEvent) {
    const showButton = this.chargingProcess.shadowRoot!.getElementById('show-button')! as HTMLDivElement;
    const hideButton = this.chargingProcess.shadowRoot!.getElementById('hide-button')! as HTMLDivElement;
    const prevPostList = this.chargingProcess.shadowRoot!.getElementById('prev-post-list')! as HTMLDivElement;
    showButton.style.display = 'none';
    hideButton.style.display = 'block';
    prevPostList.style.display = 'block';
  }
}
