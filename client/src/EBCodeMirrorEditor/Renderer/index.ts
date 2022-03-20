import Renderer from '@/src/Renderer';
import 'reflect-metadata';
import { injectable } from 'inversify';
import EBCodeMirrorEditor from '@/src/EBCodeMirrorEditor';
import { render, html } from 'lit-html';

export type ConstructorParam = {
};

@injectable()
export default class EditorRenderer extends Renderer {
  constructor (payload: ConstructorParam) {
    super();
  }

  render (element: EBCodeMirrorEditor) {
    render(
      html`
        ${element.editor.getWrapperElement()}
      `,
      element.rootElement,
    );
  }
}
