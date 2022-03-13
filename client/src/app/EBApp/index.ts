import { html, render } from 'lit-html';
import EBElement, { ConstructorParam as ParentConstructorParam } from '../../EBElement';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import Navigator from './Navigator';
import background from '@/assets/images/plane-background.svg';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';
import { SYMBOLS } from '../types';
import Body from './Body';
import ScrollHandler from './Handler/Scroll';
import Footer from './Footer';

export type PayloadParam = {
  body: Body;
} & ParentConstructorParam;

@injectable()
export default class EBApp extends EBElement {
  constructor (
    @inject(SYMBOLS.EBAppBody) body: Body,
  ) {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
        new ScrollHandler(),
      ],
      body,
    } as PayloadParam);
  }

  initialRender (payload: PayloadParam) {
    super.initialRender(payload);
    render(
      html`
        <div id='navWrapper'>
          ${new Navigator()}
        </div>
        <img id='background' src=${background}></img>
        <div id='long'>
          ${payload.body}
          ${new Footer()}
        </div>
      `,
      this.rootElement,
    );
  }
}

customElements.define('eb-app', EBApp);
