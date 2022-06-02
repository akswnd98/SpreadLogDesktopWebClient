import 'reflect-metadata';
import { injectable } from 'inversify';
import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import { html, render } from 'lit-html';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import github from '@/assets/images/github.svg';

@injectable()
export default class Footer extends Element {
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
        <div>
          <div>
            <img src=${github}></img>open source desktop client:&nbsp;<a href='https://github.com/akswnd98/SpreadLogDesktopWebClient'>https://github.com/akswnd98/SpreadLogDesktopWebClient</a>
          </div>
          <div>
            <img src=${github}></img>open source api server:&nbsp;<a href='https://github.com/akswnd98/SpreadLogApiServer'>https://github.com/akswnd98/SpreadLogApiServer</a>
          </div>
        </div>
      `,
      this.rootElement,
    );
  }
}

customElements.define('eb-footer', Footer);
