import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { html, render } from 'lit-html';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';

export type ConstructorParam = {
} & ParentConstructorParam;

@injectable()
export default class Login extends EBElement {
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
        <form action='/checkAdmin' method='get'>
          <input type='password' name='token' />
          <input type='submit' />
        </form>
      `,
      this.rootElement,
    );
  }
}

customElements.define('admin-login', Login);
