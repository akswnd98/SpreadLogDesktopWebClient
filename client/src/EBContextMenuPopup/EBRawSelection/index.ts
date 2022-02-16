import { html, render } from 'lit-html';
import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';

export type ConstructorParam = {
  text: string;
} & ParentConstructorParam;

@injectable()
export default class EBRawSelection extends EBElement {
  text: string;

  constructor (@unmanaged() payload: ConstructorParam) {
    super(payload);
    this.text = payload.text;
  }

  initialRender (payload: ConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        <p>${payload.text}</p>
      `,
      this.rootElement,
    );
  }
}
