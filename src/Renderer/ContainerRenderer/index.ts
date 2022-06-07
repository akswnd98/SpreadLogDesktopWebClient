import Renderer from '..';
import Raw from '../../Element/Raw';

export type ConstructorParam = {
  renderers: Renderer[];
};

export default class ContainerRenderer extends Renderer {
  renderers: Renderer[];

  constructor (payload: ConstructorParam) {
    super();
    this.renderers = payload.renderers;
  }

  render (element: Raw) {
    this.render(element);
    this.renderers.forEach((renderer) => {
      renderer.render(element);
    });
  }
}
