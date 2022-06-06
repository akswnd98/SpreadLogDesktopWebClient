import EditorRenderer from '@/src/elements/CodeMirrorEditor/Renderer';
import CodeMirrorEditor from '@/src/elements/CodeMirrorEditor';
import { html, render } from 'lit-html';
import Renderer from '@/src/Renderer';
import Bottom from './Bottom';
import Toolbar from './Toolbar';

export default class RendererDecorator extends Renderer {
  originRenderer: EditorRenderer;

  constructor (renderer: EditorRenderer) {
    super();
    this.originRenderer = renderer;
  }

  render (element: CodeMirrorEditor) {
    this.originRenderer.render(element);
    render(
      html`
        <div id='leftWrapper'>
          <div id='toolbarWrapper'>
            ${new Toolbar()}
          </div>
          <div id='editorWrapper'>
            ${Array.from(element.rootElement.children).map((v) => html`${v}`)}
          </div>
          <div id='bottomWrapper'>
            ${new Bottom({})}
          </div>
        </div>
        <div id='rightWrapper'>
          <div id='preview'></div>
        </div>
      `,
      element.rootElement,
    );
  }
}
