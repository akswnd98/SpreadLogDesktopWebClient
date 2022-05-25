import Renderer from '..';
import RawEBElement from '@/src/RawEBElement';

export type ConstructorParam = {
  renderers: Renderer[];
};

export default class ContainerRenderer extends Renderer {
  renderers: Renderer[];

  constructor (payload: ConstructorParam) {
    super();
    this.renderers = payload.renderers;
  }

  render (element: RawEBElement) {
    this.render(element);
    this.renderers.forEach((renderer) => {
      renderer.render(element);
    });
  }
}
