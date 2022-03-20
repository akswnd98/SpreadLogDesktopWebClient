import 'reflect-metadata';
import { injectable } from 'inversify';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';
import EBCodeMirrorEditor from '@/src/EBCodeMirrorEditor';
import ChangeHandler from './Handler/Change';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { Root as MdastRoot } from 'mdast-util-from-markdown/lib';
import { toHast } from 'mdast-util-to-hast';
import { Root as HastRoot } from 'mdast-util-to-hast/lib';
import { toHtml } from 'hast-util-to-html';
import ScrollHandler from './Handler/Scroll';
import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import RendererDecorator from './RendererDecorator';
import EditorRenderer from '@/src/EBCodeMirrorEditor/Renderer';

export type PayloadParam = {
} & ParentConstructorParam;

@injectable()
export default class Editor extends EBCodeMirrorEditor {
  mdast!: MdastRoot;
  hast!: HastRoot;
  editorPreviewScrollMap: [number, number][] = [];

  constructor () {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
    });
    this.registerRenderer(new RendererDecorator(new EditorRenderer({ editor: this.editor })));
    this.registerAttributes([
      new ChangeHandler({
        editor: this,
      }),
      new ScrollHandler({
        editor: this,
      }),
    ]);
    this.update();
  }

  setMarkdown (md: string) {
    this.editor.setValue(md);
    this.update();
  }

  update () {
    const md = this.editor.getValue();
    this.mdast = fromMarkdown(md);
    this.hast = toHast(this.mdast)! as HastRoot;
    this.shadowRoot!.getElementById('preview')!.innerHTML = toHtml(this.hast);
    this.updateScrollMap();
  }

  updateScrollMap () {
    const preview = this.shadowRoot!.getElementById('preview')! as HTMLDivElement;
    const hastElements = this.hast.children.filter((v) => v.type === 'element');
    this.editorPreviewScrollMap = [];
    for (let i = 0, j = 0; i < this.mdast.children.length && j < hastElements.length; ) {
      if (
        this.mdast.children[i].position?.start.line === hastElements[j].position?.start.line
        && i === 0 || this.mdast.children[i].position?.start.line !== this.mdast.children[i - 1].position?.start.line
        && j === 0 || hastElements[j].position?.start.line !== hastElements[j - 1].position?.start.line
      ) {
        this.editorPreviewScrollMap.push([ this.editor.heightAtLine(this.mdast.children[i].position?.start.line!, 'local'), (preview.children[j] as HTMLElement).offsetTop ]);
      }
      if (this.mdast.children[i].position!.start.line > hastElements[j].position!.start.line) {
        j++;
      } else if (this.mdast.children[i].position!.start.line < hastElements[j].position!.start.line) {
        i++;
      } else {
        i++;
        j++;
      }
    }
  }
}

customElements.define('eb-editor-popup-editor', Editor);
