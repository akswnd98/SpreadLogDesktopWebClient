import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { html, render } from 'lit-html';
import graphIllustration from '@/assets/images/graph-illustration.svg';

@injectable()
export default class GraphIntro extends Element {
  constructor () {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
    });
  }

  initialRender (payload: ParentConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        <div id='intro-text'>
          <p>배운 내용을</p>
          <p>학습 순서대로 정리해 보세요</p>
        </div>
        <div id='intro-illustration'>
          <img src=${graphIllustration} />
        </div>
      `,
      this.rootElement,
    );
  }
}

customElements.define('front-page-graph-intro', GraphIntro);
