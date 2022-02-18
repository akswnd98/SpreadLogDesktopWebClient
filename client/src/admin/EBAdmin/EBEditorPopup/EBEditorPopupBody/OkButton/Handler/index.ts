import Handler from '@/src/EBAttribute/Handler';

export default class Click extends Handler<'click'> {
  eventName: 'click' = 'click';

  async handle (event: HTMLElementEventMap['click']) {
    
  }
}
