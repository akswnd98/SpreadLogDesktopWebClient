import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { html, render } from 'lit-html';

@injectable()
export default class SpreadIntro extends Element {
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
          <p>전파거북이를</p>
          <p>따라해 보세요</p>
        </div>
        <div id='intro-illustration'>
          
        </div>
      `,
      this.rootElement,
    );
  }
}

customElements.define('front-page-spread-intro', SpreadIntro);
