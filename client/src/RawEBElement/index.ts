import EBAttribute from '../EBAttribute';

export default abstract class RawEBElement extends HTMLElement {
  constructor () {
    super();
    this.attachShadow({ mode: 'open' });
    this.initialRender();
  }

  abstract initialRender (): void;
}
