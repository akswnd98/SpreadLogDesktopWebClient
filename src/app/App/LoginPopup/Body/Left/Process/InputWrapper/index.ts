import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { html, render } from 'lit-html';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';

export type ConstructorParam = {
} & ParentConstructorParam;

@injectable()
export default class InputWrapper extends Element {
  constructor (payload: ConstructorParam) {
    super({
      ...payload,
      attributes: [
        ...payload.attributes !== undefined ? payload.attributes : [],
        new Style({ styles: styles.toString() }),
      ],
    });
  }

  initialRender (payload: ConstructorParam) {
    super.initialRender(payload);
    render(
      html`
      `,
      this.rootElement,
    );
  }

  slideInputToNext (curInputWrapperId: string, nextInputWrapperId: string) {
    const curDiv = this.shadowRoot!.getElementById(curInputWrapperId)! as HTMLDivElement;
    const nextDiv = this.shadowRoot!.getElementById(nextInputWrapperId)! as HTMLDivElement;
    curDiv.classList.remove(
      'input-wrapper-slide-from-right',
      'input-wrapper-slide-to-left',
      'input-wrapper-slide-from-left',
      'input-wrapper-slide-to-right',
    );
    curDiv.classList.add('input-wrapper-slide-to-left');
    nextDiv.classList.remove(
      'input-wrapper-slide-from-right',
      'input-wrapper-slide-to-left',
      'input-wrapper-slide-from-left',
      'input-wrapper-slide-to-right',
    );
    nextDiv.classList.add('input-wrapper-slide-from-right');
  }

  slideInputToPrev (curInputWrapperId: string, prevInputWrapperId: string) {
    const prevDiv = this.shadowRoot!.getElementById(prevInputWrapperId)! as HTMLDivElement;
    const curDiv = this.shadowRoot!.getElementById(curInputWrapperId)! as HTMLDivElement;
    prevDiv.classList.remove(
      'input-wrapper-slide-from-right',
      'input-wrapper-slide-to-left',
      'input-wrapper-slide-from-left',
      'input-wrapper-slide-to-right',
    );
    prevDiv.classList.add('input-wrapper-slide-from-left');
    curDiv.classList.remove(
      'input-wrapper-slide-from-right',
      'input-wrapper-slide-to-left',
      'input-wrapper-slide-from-left',
      'input-wrapper-slide-to-right',
    );
    curDiv.classList.add('input-wrapper-slide-to-right');
  }
  
  slideInputToLeft (inputWrapperId: string) {
    const div = this.shadowRoot!.getElementById(inputWrapperId)! as HTMLDivElement;
    div.classList.remove(
      'input-wrapper-slide-from-right',
      'input-wrapper-slide-to-left',
      'input-wrapper-slide-from-left',
      'input-wrapper-slide-to-right',
    );
    div.classList.add('input-wrapper-slide-to-left');
  }

  slideInputFromLeft (inputWrapperId: string) {
    const div = this.shadowRoot!.getElementById(inputWrapperId)! as HTMLDivElement;
    div.classList.remove(
      'input-wrapper-slide-from-right',
      'input-wrapper-slide-to-left',
      'input-wrapper-slide-from-left',
      'input-wrapper-slide-to-right',
    );
    div.classList.add('input-wrapper-slide-from-left');
  }
}

customElements.define('login-popup-left-input-wrapper', InputWrapper);
