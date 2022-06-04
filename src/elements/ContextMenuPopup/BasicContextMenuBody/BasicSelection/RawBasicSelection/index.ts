import { html, render } from 'lit-html';
import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';

export type ConstructorParam = {
  text: string;
} & ParentConstructorParam;

@injectable()
export default class RawBasicSelection extends Element {
  text: string;

  constructor (@unmanaged() payload: ConstructorParam) {
    super(payload);
    this.text = payload.text;
  }

  initialRender (payload: ConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        <div id='text'>${payload.text}</div>
      `,
      this.rootElement,
    );
  }
}
