import RawEBElement from '../RawEBElement';

export default abstract class Renderer {
  abstract render (element: RawEBElement): void;
}
