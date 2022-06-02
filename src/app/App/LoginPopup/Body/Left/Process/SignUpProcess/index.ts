import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import { html, render } from 'lit-html';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import SignUpButton from './SignUpButton';
import { SYMBOLS } from '@/src/app/symbols';
import InputWrapper from './InputWrapper/inversified';

export type PayloadParam = {
  inputWrapper: InputWrapper
} & ParentConstructorParam;

@injectable()
export default class SignUpProcess extends Element {
  constructor (
    @inject(SYMBOLS.SignUpProcessInputWrapper) inputWrapper: InputWrapper,
  ) {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
      inputWrapper,
    } as PayloadParam);
  }

  initialRender (payload: PayloadParam) {
    super.initialRender(payload);
    render(
      html`
        <div id='guide-div'>
          <div id='sign-up-label'>회원가입</div>
          <div id='main-div'>
            <div id='sign-up-process'>
              <div class='input-wrapper'>
                ${payload.inputWrapper}
              </div>
              <div id='sign-up-button-wrapper'>
                ${new SignUpButton({})}
              </div>
            </div>
            <div id='waiting-email-cert'>
              <div>
                이메일이 발송되었습니다.
                <br>
                회원가입을 완료해주세요!
              </div>
            </div>
          </div>
        </div>
      `,
      this.rootElement,
    );
  }

  slideToNext (curDivId: string, nextDivId: string) {
    const curDiv = this.shadowRoot!.getElementById(curDivId)! as HTMLDivElement;
    const nextDiv = this.shadowRoot!.getElementById(nextDivId)! as HTMLDivElement;
    curDiv.classList.remove(
      'slide-from-right',
      'slide-to-left',
      'slide-from-left',
      'slide-to-right',
    );
    curDiv.classList.add('slide-to-left');
    nextDiv.classList.remove(
      'slide-from-right',
      'slide-to-left',
      'slide-from-left',
      'slide-to-right',
    );
    nextDiv.classList.add('slide-from-right');
  }

  slideToPrev (curDivId: string, prevDivId: string) {
    const curDiv = this.shadowRoot!.getElementById(curDivId)! as HTMLDivElement;
    const prevDiv = this.shadowRoot!.getElementById(prevDivId)! as HTMLDivElement;
    curDiv.classList.remove(
      'slide-from-right',
      'slide-to-left',
      'slide-from-left',
      'slide-to-right',
    );
    curDiv.classList.add('slide-to-right');
    prevDiv.classList.remove(
      'slide-from-right',
      'slide-to-left',
      'slide-from-left',
      'slide-to-right',
    );
    prevDiv.classList.add('slide-from-left');
  }
}

customElements.define('login-popup-signup-process', SignUpProcess);
