import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { html, render } from 'lit-html';

@injectable()
export default class FrontPage extends Element {
  constructor () {
    super({

    });
  }

  initialRender (payload: ParentConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        <div>환영합니다</div>
      `,
      this.rootElement,
    );
  }
}

customElements.define('front-page', FrontPage);
