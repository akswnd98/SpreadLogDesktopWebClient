import EBElement from '@/src/EBElement';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import { html, render } from 'lit-html';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';
import ClickHandler from './Handler/Click';

@injectable()
export default class LogoButton extends EBElement {
  constructor () {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
        new ClickHandler(),
      ],
    });
  }

  initialRender (payload: ParentConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        Spread Log
      `,
      this.rootElement,
    );
  }
}

customElements.define('logo-button', LogoButton);
