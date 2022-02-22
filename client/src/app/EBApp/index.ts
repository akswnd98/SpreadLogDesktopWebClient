import { html, render } from 'lit-html';
import EBElement, { ConstructorParam as ParentConstructorParam } from '../../EBElement';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import Navigator from './Navigator';
import background from '@/assets/images/plane-background.svg';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';
import Static from '../inversify.config';
import { SYMBOLS } from '../types';
import { ConstructorParam as PostNodeConstructorParam } from '@/src/data-binding/Model/PostGraph/Node';
import Body from './Body';

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
      ],
      body,
    } as PayloadParam);
  }

  initialRender (payload: PayloadParam) {
    super.initialRender(payload);
    render(
      html`
        <img id='background' src=${background}></img>
        ${new Navigator()}
        ${payload.body}
      `,
      this.rootElement,
    );
  }
}

customElements.define('eb-app', EBApp);
