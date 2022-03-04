import EBElement from '@/src/EBElement';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';
import { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import { html, render } from 'lit-html';
import Handler from './Handler';

@injectable()
export default class Login extends EBElement {
  constructor () {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
        new Handler({ id: 'root' }),
      ],
    });
  }

  initialRender (payload: ParentConstructorParam): void {
    super.initialRender(payload);
    render(
      html`
        <p>Login</p>
      `,
      this.rootElement,
    );
  }

  // initialRender (payload: ParentConstructorParam) {
  //   super.initialRender(payload);
  //   render(
  //     html`
  //       <a href='/login/kakao/auth' router-ignore><p>Login</p></a>
  //     `,
  //     this.rootElement,
  //   );
  // }
}

customElements.define('nav-login', Login);
