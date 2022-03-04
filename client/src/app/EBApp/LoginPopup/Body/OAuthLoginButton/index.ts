import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { html, render } from 'lit-html';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';

export type ConstructorParam = {
  svgUrl: string;
  text: string;
} & ParentConstructorParam;

@injectable()
export default class OAuthLoginButton extends EBElement {
  constructor (payload: ConstructorParam) {
    super({
      ...payload,
      attributes: [
        new Style({ styles: styles.toString() }),
        ...payload.attributes ? payload.attributes : [],
      ],
    });
  }

  initialRender (payload: ConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        <img width=50px height=50px src=${payload.svgUrl}></img>
        <div id='textPart'>${payload.text}</div>
      `,
      this.rootElement,
    );
  }
}

customElements.define('oauth-login-button', OAuthLoginButton);
