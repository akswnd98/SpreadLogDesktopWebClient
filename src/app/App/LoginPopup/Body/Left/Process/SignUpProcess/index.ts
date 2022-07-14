import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import { html, render } from 'lit-html';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import SignUpButton from './SignUpButton';
import { SYMBOLS } from '@/src/app/symbols';
import InputWrapper from './InputWrapper/inversified';
import EnterHandler from './WindowHandler/Enter';

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
        new EnterHandler(),
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
              <div id='error'>
                <div id='email-error'>
                  이메일이 이미 존재합니다.
                </div>
                <div id='passwd-error'>
                  비밀번호 규칙을 다시 확인해 주세요.
                </div>
                <div id='passwd-check-error'>
                  페스워드가 일치하지 않습니다.
                </div>
                <div id='nickname-error'>
                  닉네임이 이미 존재합니다.
                </div>
                <div id='email-send-error'>
                  이메일을 다시 확인해 주세요
                </div>
              </div>
              <div id='passwd-rule' class='inactive'>
                <div>&middot&nbsp10자리 이상</div>
                <div>&middot&nbsp대소문자, 숫자, 특수문자 조합</div>
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
