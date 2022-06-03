import { interfaces, AsyncContainerModule } from 'inversify';
import { SYMBOLS } from './symbols';
import App from './App';
import AppBody from './App/Body';
import AppNavigator from './App/Navigator/inversified';
// import GraphVis from './App/Body/GraphVis';
// import BlogPost from './App/Body/Post/route';
// import PostingId from './data-binding/Model/PostingId';
// import PostingPost from './data-binding/Model/PostingPost';
// import PostingPostNotifier from './data-binding/ModelNotifier/PostingPost';
// import BlogPostObserver from './data-binding/Observer/BlogPost';
import LoginPopup from './App/LoginPopup';
import LoginPopupBody from './App/LoginPopup/Body';
import LoginPopupBodyLeft from './App/LoginPopup/Body/Left';
import LoginPopupBodyRight from './App/LoginPopup/Body/Right';
import LoginProcessElement from './App/LoginPopup/Body/Left/Process/LoginProcess';
import LoginProcessInputWrapper from './App/LoginPopup/Body/Left/Process/LoginProcess/InputWrapper/inversified';
import SignUpProcessElement from './App/LoginPopup/Body/Left/Process/SignUpProcess';
import SignUpProcessInputWrapper from './App/LoginPopup/Body/Left/Process/SignUpProcess/InputWrapper/inversified';

import CurrentLoginEmail from './data-binding/Model/CurrentLoginEmail';
import CurrentLoginPasswd from './data-binding/Model/CurrentLoginPasswd';
import CurrentLoginEmailSetter from './data-binding/Operator/CurrentLoginEmail/Setter';
import CurrentLoginEmailGetter from './data-binding/Operator/CurrentLoginEmail/Getter';
import CurrentLoginPasswdSetter from './data-binding/Operator/CurrentLoginPasswd/Setter';
import CurrentLoginPasswdGetter from './data-binding/Operator/CurrentLoginPasswd/Getter';

import LoginPopupModel from './data-binding/Model/LoginPopup';
import LoginPopupStateGetter from './data-binding/Operator/LoginPopup/StateGetter';
import ChangeLoginPopupStateToLogin from './data-binding/Operator/LoginPopup/ChangeToLoginState';
import ChangeLoginPopupStateToSignUp from './data-binding/Operator/LoginPopup/ChangeToSignUpState';

import LoginProcessBaseState from './data-binding/State/LoginPopup/LoginProcess/Base';
import LoginProcessPasswdState from './data-binding/State/LoginPopup/LoginProcess/Passwd';
import LoginProcessBaseToPasswdCommand from './data-binding/Command/Undoable/LoginPopup/LoginProcess/BaseToPasswd/inversified';
import LoginProcessChain from './data-binding/Model/LoginPopup/LoginProcessChain';
import GetCurLoginProcessState from './data-binding/Operator/LoginPopup/LoginProcessChain/GetCurState';
import ReceiveLoginProcessCommand from './data-binding/Operator/LoginPopup/LoginProcessChain/ReceiveCommand';
import UndoLastLoginProcessCommand from './data-binding/Operator/LoginPopup/LoginProcessChain/UndoLastCommand';

import SignUpProcessBaseState from './data-binding/State/LoginPopup/SignUpProcess/Base';
import SignUpProcessPasswdState from './data-binding/State/LoginPopup/SignUpProcess/Passwd';
import SignUpProcessPasswdCheckState from './data-binding/State/LoginPopup/SignUpProcess/PasswdCheck';
import SignUpProcessNickNameState from './data-binding/State/LoginPopup/SignUpProcess/NickName';
import SignUpConfermedState from './data-binding/State/LoginPopup/SignUpProcess/EmailSent';

import SignUpProcessBaseToPasswdCommand from './data-binding/Command/Undoable/LoginPopup/SignUpProcess/BaseToPasswd/inversified';
import SignUpProcessPasswdToPasswdCheckCommand from './data-binding/Command/Undoable/LoginPopup/SignUpProcess/PasswdToPasswdCheck/inversified';
import SignUpProcessPasswdCheckToNickNameCommand from './data-binding/Command/Undoable/LoginPopup/SignUpProcess/PasswdCheckToNickName/inversified';
import SignUpProcessNickNameToEmailSentCommand from './data-binding/Command/Undoable/LoginPopup/SignUpProcess/NickNameToEmailSent/inversified';

import SignUpProcessChain from './data-binding/Model/LoginPopup/SignUpProcessChain';
import GetCurSignUpProcessState from './data-binding/Operator/LoginPopup/SignUpProcessChain/GetCurState';
import ReceiveSignUpProcessCommand from './data-binding/Operator/LoginPopup/SignUpProcessChain/ReceiveCommand';
import UndoLastSignUpProcessCommand from './data-binding/Operator/LoginPopup/SignUpProcessChain/UndoLastCommand';
import CurrentSignUpEmail from './data-binding/Model/CurrentSignUpEmail';
import CurrentSignUpPasswd from './data-binding/Model/CurrentSignUpPasswd';
import CurrentSignUpPasswdCheck from './data-binding/Model/CurrentSignUpPasswdCheck';
import CurrentSignUpNickname from './data-binding/Model/CurrentSignUpNickname';

import CurrentSignUpEmailSetter from './data-binding/Operator/CurrentSignUpEmail/Setter';
import CurrentSignUpEmailGetter from './data-binding/Operator/CurrentSignUpEmail/Getter';
import CurrentSignUpNicknameSetter from './data-binding/Operator/CurrentSignUpNickname/Setter';
import CurrentSignUpNicknameGetter from './data-binding/Operator/CurrentSignUpNickname/Getter';
import CurrentSignUpPasswdSetter from './data-binding/Operator/CurrentSignUpPasswd/Setter';
import CurrentSignUpPasswdGetter from './data-binding/Operator/CurrentSignUpPasswd/Getter';
import CurrentSignUpPasswdCheckSetter from './data-binding/Operator/CurrentSignUpPasswdCheck/Setter';
import CurrentSignUpPasswdCheckGetter from './data-binding/Operator/CurrentSignUpPasswdCheck/Getter';
import CurrentSignUpCertSerialSetter from './data-binding/Operator/CurrentSignUpCertSerial/Setter';
import CurrentSignUpCertSerialGetter from './data-binding/Operator/CurrentSignUpCertSerial/Getter';

import AccountPageNickname from './data-binding/Model/AccountPageNickname';
import AccountPageNicknameGetter from './data-binding/Operator/AccountPageNickname/Getter';
import AccountPageNicknameSetter from './data-binding/Operator/AccountPageNickname/Setter';

// import PostingPostBodyObserver from '@/src/app/data-binding/Observer/PostingPost/Body';
// import PostingPostTitleObserver from '@/src/app/data-binding/Observer/PostingPost/Title';
// import PostingPostDateObserver from '@/src/app/data-binding/Observer/PostingPost/Date';

const module = new AsyncContainerModule(
  async (
    bind: interfaces.Bind,
  ) => {
    bind<App>(SYMBOLS.App).to(App).inSingletonScope();
    bind<AppBody>(SYMBOLS.AppBody).to(AppBody).inSingletonScope();
    bind<AppNavigator>(SYMBOLS.AppNavigator).to(AppNavigator).inSingletonScope();
    // bind<GraphVis>(SYMBOLS.GraphVis).to(GraphVis).inSingletonScope();
    // bind<BlogPost>(SYMBOLS.BlogPost).to(BlogPost).inSingletonScope();
    // bind<PostingId>(SYMBOLS.PostingId).to(PostingId).inSingletonScope();
    // bind<PostingPost>(SYMBOLS.PostingPost).to(PostingPost).inSingletonScope();
    // bind<PostingPostNotifier>(SYMBOLS.PostingPostNotifier).to(PostingPostNotifier).inSingletonScope();
    // bind<BlogPostObserver>(SYMBOLS.BlogPostObserver).to(BlogPostObserver).inSingletonScope();
    bind<LoginPopup>(SYMBOLS.LoginPopup).to(LoginPopup).inSingletonScope();
    bind<LoginPopupBody>(SYMBOLS.LoginPopupBody).to(LoginPopupBody);
    bind<LoginPopupBodyLeft>(SYMBOLS.LoginPopupBodyLeft).to(LoginPopupBodyLeft).inSingletonScope();
    bind<LoginPopupBodyRight>(SYMBOLS.LoginPopupBodyRight).to(LoginPopupBodyRight).inSingletonScope();
    bind<LoginProcessElement>(SYMBOLS.LoginProcessElement).to(LoginProcessElement).inSingletonScope();
    bind<LoginProcessInputWrapper>(SYMBOLS.LoginProcessInputWrapper).to(LoginProcessInputWrapper).inSingletonScope();
    bind<SignUpProcessElement>(SYMBOLS.SignUpProcessElement).to(SignUpProcessElement).inSingletonScope();
    bind<SignUpProcessInputWrapper>(SYMBOLS.SignUpProcessInputWrapper).to(SignUpProcessInputWrapper).inSingletonScope();

    bind<CurrentLoginEmail>(SYMBOLS.CurrentLoginEmail).to(CurrentLoginEmail).inSingletonScope();
    bind<CurrentLoginPasswd>(SYMBOLS.CurrentLoginPasswd).to(CurrentLoginPasswd).inSingletonScope();
    bind<CurrentSignUpEmail>(SYMBOLS.CurrentSignUpEmail).to(CurrentSignUpEmail).inSingletonScope();
    bind<CurrentSignUpPasswd>(SYMBOLS.CurrentSignUpPasswd).to(CurrentSignUpPasswd).inSingletonScope();
    bind<CurrentSignUpPasswdCheck>(SYMBOLS.CurrentSignUpPasswdCheck).to(CurrentSignUpPasswdCheck).inSingletonScope();
    bind<CurrentSignUpNickname>(SYMBOLS.CurrentSignUpNickname).to(CurrentSignUpNickname).inSingletonScope();

    bind<CurrentLoginEmailSetter>(SYMBOLS.CurrentLoginEmailSetter).to(CurrentLoginEmailSetter).inSingletonScope();
    bind<CurrentLoginEmailGetter>(SYMBOLS.CurrentLoginEmailGetter).to(CurrentLoginEmailGetter).inSingletonScope();
    bind<CurrentLoginPasswdSetter>(SYMBOLS.CurrentLoginPasswdSetter).to(CurrentLoginPasswdSetter).inSingletonScope();
    bind<CurrentLoginPasswdGetter>(SYMBOLS.CurrentLoginPasswdGetter).to(CurrentLoginPasswdGetter).inSingletonScope();
    bind<CurrentSignUpEmailSetter>(SYMBOLS.CurrentSignUpEmailSetter).to(CurrentSignUpEmailSetter).inSingletonScope();
    bind<CurrentSignUpEmailGetter>(SYMBOLS.CurrentSignUpEmailGetter).to(CurrentSignUpEmailGetter).inSingletonScope();
    bind<CurrentSignUpPasswdSetter>(SYMBOLS.CurrentSignUpPasswdSetter).to(CurrentSignUpPasswdSetter).inSingletonScope();
    bind<CurrentSignUpPasswdGetter>(SYMBOLS.CurrentSignUpPasswdGetter).to(CurrentSignUpPasswdGetter).inSingletonScope();
    bind<CurrentSignUpPasswdCheckSetter>(SYMBOLS.CurrentSignUpPasswdCheckSetter).to(CurrentSignUpPasswdCheckSetter).inSingletonScope();
    bind<CurrentSignUpPasswdCheckGetter>(SYMBOLS.CurrentSignUpPasswdCheckGetter).to(CurrentSignUpPasswdCheckGetter).inSingletonScope();
    bind<CurrentSignUpNicknameSetter>(SYMBOLS.CurrentSignUpNicknameSetter).to(CurrentSignUpNicknameSetter).inSingletonScope();
    bind<CurrentSignUpNicknameGetter>(SYMBOLS.CurrentSignUpNicknameGetter).to(CurrentSignUpNicknameGetter).inSingletonScope();
    bind<CurrentSignUpCertSerialSetter>(SYMBOLS.CurrentSignUpCertSerialSetter).to(CurrentSignUpCertSerialSetter).inSingletonScope();
    bind<CurrentSignUpCertSerialGetter>(SYMBOLS.CurrentSignUpCertSerialGetter).to(CurrentSignUpCertSerialGetter).inSingletonScope();

    bind<LoginPopupModel>(SYMBOLS.LoginPopupModel).to(LoginPopupModel).inSingletonScope();
    bind<LoginPopupStateGetter>(SYMBOLS.LoginPopupStateGetter).to(LoginPopupStateGetter).inSingletonScope();
    bind<ChangeLoginPopupStateToLogin>(SYMBOLS.ChangeLoginPopupStateToLogin).to(ChangeLoginPopupStateToLogin).inSingletonScope();
    bind<ChangeLoginPopupStateToSignUp>(SYMBOLS.ChangeLoginPopupStateToSignUp).to(ChangeLoginPopupStateToSignUp).inSingletonScope();

    bind<LoginProcessBaseState>(SYMBOLS.LoginProcessBaseState).to(LoginProcessBaseState).inSingletonScope();
    bind<LoginProcessPasswdState>(SYMBOLS.LoginProcessPasswdState).to(LoginProcessPasswdState).inSingletonScope();

    bind<LoginProcessBaseToPasswdCommand>(SYMBOLS.LoginProcessBaseToPasswdCommand).to(LoginProcessBaseToPasswdCommand).inSingletonScope();
  
    bind<LoginProcessChain>(SYMBOLS.LoginProcessChain).to(LoginProcessChain).inSingletonScope();
    bind<GetCurLoginProcessState>(SYMBOLS.GetCurLoginProcessState).to(GetCurLoginProcessState).inSingletonScope();
    bind<ReceiveLoginProcessCommand>(SYMBOLS.ReceiveLoginProcessCommand).to(ReceiveLoginProcessCommand).inSingletonScope();
    bind<UndoLastLoginProcessCommand>(SYMBOLS.UndoLastLoginProcessCommand).to(UndoLastLoginProcessCommand).inSingletonScope();

    bind<SignUpProcessBaseState>(SYMBOLS.SignUpProcessBaseState).to(SignUpProcessBaseState).inSingletonScope();
    bind<SignUpProcessPasswdState>(SYMBOLS.SignUpProcessPasswdState).to(SignUpProcessPasswdState).inSingletonScope();
    bind<SignUpProcessPasswdCheckState>(SYMBOLS.SignUpProcessPasswdCheckState).to(SignUpProcessPasswdCheckState).inSingletonScope();
    bind<SignUpProcessNickNameState>(SYMBOLS.SignUpProcessNickNameState).to(SignUpProcessNickNameState).inSingletonScope();
    bind<SignUpConfermedState>(SYMBOLS.SignUpConfermedState).to(SignUpConfermedState).inSingletonScope();
  
    bind<SignUpProcessPasswdState>(SYMBOLS.SignUpProcessPasswdState).to(SignUpProcessPasswdState).inSingletonScope();
    bind<SignUpProcessBaseToPasswdCommand>(SYMBOLS.SignUpProcessBaseToPasswdCommand).to(SignUpProcessBaseToPasswdCommand).inSingletonScope();
    bind<SignUpProcessPasswdToPasswdCheckCommand>(SYMBOLS.SignUpProcessPasswdToPasswdCheckCommand).to(SignUpProcessPasswdToPasswdCheckCommand).inSingletonScope();
    bind<SignUpProcessPasswdCheckToNickNameCommand>(SYMBOLS.SignUpProcessPasswdCheckToNickNameCommand).to(SignUpProcessPasswdCheckToNickNameCommand).inSingletonScope();
    bind<SignUpProcessNickNameToEmailSentCommand>(SYMBOLS.SignUpProcessNickNameToEmailSentCommand).to(SignUpProcessNickNameToEmailSentCommand).inSingletonScope();
  
    bind<SignUpProcessChain>(SYMBOLS.SignUpProcessChain).to(SignUpProcessChain).inSingletonScope();
    bind<GetCurSignUpProcessState>(SYMBOLS.GetCurSignUpProcessState).to(GetCurSignUpProcessState).inSingletonScope();
    bind<ReceiveSignUpProcessCommand>(SYMBOLS.ReceiveSignUpProcessCommand).to(ReceiveSignUpProcessCommand).inSingletonScope();
    bind<UndoLastSignUpProcessCommand>(SYMBOLS.UndoLastSignUpProcessCommand).to(UndoLastSignUpProcessCommand).inSingletonScope();

    bind<AccountPageNickname>(SYMBOLS.AccountPageNickname).to(AccountPageNickname).inSingletonScope();
    bind<AccountPageNicknameGetter>(SYMBOLS.AccountPageNicknameGetter).to(AccountPageNicknameGetter).inSingletonScope();
    bind<AccountPageNicknameSetter>(SYMBOLS.AccountPageNicknameSetter).to(AccountPageNicknameSetter).inSingletonScope();

    // bind<PostingPostBodyObserver>(SYMBOLS.PostingPostBodyObserver).to(PostingPostBodyObserver);
    // bind<PostingPostTitleObserver>(SYMBOLS.PostingPostTitleObserver).to(PostingPostTitleObserver);
    // bind<PostingPostDateObserver>(SYMBOLS.PostingPostDateObserver).to(PostingPostDateObserver);
  }
);

export default module;
