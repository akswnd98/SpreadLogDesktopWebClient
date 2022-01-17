import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import { html, render } from 'lit-html';
import EBNewDialogBodyStatic from './EBNewDialogBody/static';
import x24Icon from '@/assets/images/x-24.svg';
import Model from './EBNewDialogBody/NameInputSync/Model';

export type ConstructorParam = {
  model: Model;
} & ParentConstructorParam;

export default class EBNewDialog extends EBElement {
  model!: Model;

  constructor (payload: ConstructorParam) {
    super(payload);
  }

  initField (payload: ConstructorParam) {
    this.model = payload.model;
  }

  initialRender () {
    render(
      html`
        <div class='total-margin'>
          <div class='top'>
            <p>new node</p>
            <img src=${x24Icon} id='close' />
          </div>
          <hr>
          <div class='body'>
            ${EBNewDialogBodyStatic.generate({ model: this.model })}
          </div>
          <hr>
          <div class='bottom'>
            <div class='ok'>확인</div>
          </div>
        </div>
      `,
      this.rootElement,
    );
  }
}

customElements.define('eb-new-dialog', EBNewDialog);
