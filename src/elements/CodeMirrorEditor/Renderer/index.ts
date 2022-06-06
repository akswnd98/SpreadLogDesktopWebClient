import Renderer from '@/src/owl-element/Renderer';
import 'reflect-metadata';
import { injectable } from 'inversify';
import CodeMirrorEditor from '..';
import { render, html } from 'lit-html';

export type ConstructorParam = {
};

@injectable()
export default class EditorRenderer extends Renderer {
  constructor (payload: ConstructorParam) {
    super();
  }

  render (element: CodeMirrorEditor) {
    render(
      html`
        ${element.editor.getWrapperElement()}
      `,
      element.rootElement,
    );
  }
}
