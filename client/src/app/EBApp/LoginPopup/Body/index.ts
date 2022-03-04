import EBElement from '@/src/EBElement';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';
import EBContainerElement from '@/src/EBContainerElement';
import EBVerticalDictLayout, { ChildElementsType } from '@/src/EBLayout/EBVerticalDictLayout';
import LoginLabel from './LoginLabel';
import EmailAddressLabel from './EmailAddressLabel';
import HorizontalLine from './HorizontalLine';
import ContinueButtonWrapper from './ContinueButtonWrapper';
import HorizontalLineWithText from './HorizontalLineWithText';
import OAuthLoginButton from './OAuthLoginButton';
import kakaoLogo from '@/assets/images/kakao.svg';
import kakaoStyles from './OAuthLoginButton/kakao.scss';
import googleLogo from '@/assets/images/google.svg';
import googleStyles from './OAuthLoginButton/google.scss';
import naverLogo from '@/assets/images/naver.svg';
import naverStyles from './OAuthLoginButton/naver.scss';
import emailLogo from '@/assets/images/envelope-fill.svg';
import emailStyles from './OAuthLoginButton/email.scss';
import EmailAddressInput from './EmailAddressInput';


@injectable()
export default class Body extends EBContainerElement<ChildElementsType> {
  constructor () {
    super({
      childElements: {
        loginLabel: new LoginLabel(),
        emailAddressLabel: new EmailAddressLabel(),
        emailAddressInput: new EmailAddressInput(),
        emailAddress: new HorizontalLine({ width: '430px' }),
        continueButtonWrapper: new ContinueButtonWrapper(),
        orLine: new HorizontalLineWithText({ width: '430px', text: 'OR' }),
        kakaoButton: new OAuthLoginButton({ svgUrl: kakaoLogo, text: 'Login with Kakao', attributes: [ new Style({ styles: kakaoStyles.toString() }) ] }),
        googleButton: new OAuthLoginButton({ svgUrl: googleLogo, text: 'Login with Google', attributes: [ new Style({ styles: googleStyles.toString() }) ] }),
        naverButton: new OAuthLoginButton({ svgUrl: naverLogo, text: 'Login with Naver', attributes: [ new Style({ styles: naverStyles.toString() }) ] }),
        emailButton: new OAuthLoginButton({ svgUrl: emailLogo, text: 'Signup with Email', attributes: [ new Style({ styles: emailStyles.toString() }) ] }),
      },
      layout: new EBVerticalDictLayout(),
      attributes: [ new Style({ styles: styles.toString() }) ],
    });
  }
}

customElements.define('login-popup-body', Body);
