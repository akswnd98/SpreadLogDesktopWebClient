import Element from '@/src/owl-element/Element';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { ConstructorParam } from '@/src/owl-element/Element/Raw';
import { html, render } from 'lit-html';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import MyBlog from './Selection/MyBlog';
import Logout from './Selection/Logout';

@injectable()
export default class Body extends Element {
  constructor () {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
    });
  }

  initialRender (payload: ConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        ${new MyBlog()}
        ${new Logout()}
      `,
      this.rootElement,
    );
  }
}

customElements.define('avatar-click-popup-body', Body);
