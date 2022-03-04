import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { html, render } from 'lit-html';
import ContinueButton from './ContinueButton';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';

@injectable()
export default class ContinueButtonWrapper extends EBElement {
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
        ${new ContinueButton()}
      `,
      this.rootElement,
    );
  }
}

customElements.define('continue-button-wrapper', ContinueButtonWrapper);
