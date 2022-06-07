import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import { injectable } from 'inversify';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import { toHtml } from 'hast-util-to-html';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { gfm } from 'micromark-extension-gfm';
import { gfmFromMarkdown } from 'mdast-util-gfm';
import { toHast } from 'mdast-util-to-hast';
import { HastNode } from 'mdast-util-to-hast/lib';
import renderMathInElement from 'katex/dist/contrib/auto-render';
import katexStyles from 'katex/dist/katex.min.css'

@injectable()
export default class Body extends Element {
  constructor() {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
        new Style({ styles: katexStyles.toString() })
      ],
    });
  }

  initialRender (payload: ParentConstructorParam) {
    super.initialRender(payload);
  }

  setMarkdown (data: string) {
    const mdast = fromMarkdown(data, {
      mdastExtensions: [ gfmFromMarkdown() ],
      extensions: [ gfm() ],
    });
    const hast = toHast(mdast)! as HastNode;
    this.rootElement.innerHTML = toHtml(hast);
    renderMathInElement(this.rootElement, {
      delimiters: [
        {left: '$$', right: '$$', display: true},
        {left: '$', right: '$', display: false},
        {left: '\\(', right: '\\)', display: false},
        {left: '\\[', right: '\\]', display: true},
      ],
    });
  }
}

customElements.define('app-post-body', Body);
