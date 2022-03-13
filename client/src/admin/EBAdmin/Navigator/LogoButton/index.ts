import EBElement from '@/src/EBElement';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import { html, render } from 'lit-html';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';

@injectable()
export default class LogoButton extends EBElement {
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
        <p>Spread Log</p>
      `,
      this.rootElement,
    );
  }
}

customElements.define('admin-nav-logo-button', LogoButton);
