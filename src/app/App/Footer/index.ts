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
        <img src=${github}></img>Open source:&nbsp;<a href='https://github.com/akswnd98/EB'>https://github.com/akswnd98/EB</a>
      `,
      this.rootElement,
    );
  }
}

customElements.define('eb-footer', Footer);
