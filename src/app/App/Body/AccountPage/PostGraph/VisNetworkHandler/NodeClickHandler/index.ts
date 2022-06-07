import VisNetworkHandler from '@/src/VisNetworkWrapper/Attribute/Handler'
import Generator from './Generator';

export default class Handler extends VisNetworkHandler {
  eventName: 'click' = 'click';

  constructor () {
    super();
  }

  async handle (params: any) {
    await (new Generator()).generate(undefined, params);
  }
}
