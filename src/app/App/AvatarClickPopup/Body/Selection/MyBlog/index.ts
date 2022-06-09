import 'reflect-metadata';
import { injectable } from 'inversify';
import Selection from '..';
import { render, html } from 'lit-html';
import { ConstructorParam } from '@/src/owl-element/Element';
import Click from './Handler/Click';

@injectable()
export default class MyBlog extends Selection {
  constructor () {
    super({
      attributes: [
        new Click(),
      ],
    });
  }

  initialRender (payload: ConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        내 블로그
      `,
      this.rootElement,
    );
  }
}

customElements.define('click-popup-body-my-blog-selection', MyBlog);
