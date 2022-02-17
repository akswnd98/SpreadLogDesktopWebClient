import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import styles from './index.scss';
import Style from '@/src/EBAttribute/Style';
import { ConstructorParam } from '@/src/RawEBElement';
import { html, render } from 'lit-html';
import EBEditorPopupBody from './EBEditorPopupBody';
import { SYMBOLS } from '../../types';
import type { ParameterizableNewable } from '@/src/inversify';
import EBButton from '@/src/EBButton';

export type PayloadParam = {
  Body: ParameterizableNewable<EBEditorPopupBody, ConstructorParameters<typeof EBEditorPopupBody>>;
  EBButtonNewable: ParameterizableNewable<EBButton, ConstructorParameters<typeof EBButton>>;
} & ParentConstructorParam;

@injectable()
export default class EBEditorPopup extends EBElement {
  constructor (
    @inject(SYMBOLS.EBEditorPopupBody) Body: ParameterizableNewable<EBEditorPopupBody, ConstructorParameters<typeof EBEditorPopupBody>>,
    @inject(SYMBOLS.EBButton) EBButtonNewable: ParameterizableNewable<EBButton, ConstructorParameters<typeof EBButton>>,
  ) {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
      Body,
      EBButtonNewable,
    } as PayloadParam);
  }

  initialRender (payload: PayloadParam) {
    super.initialRender(payload);
    render(
      html`
        ${new payload.Body(payload.EBButtonNewable)}
      `,
      this.rootElement,
    );
    this.hide();
  }

  show () {
    this.rootElement.classList.remove('hide');
    this.rootElement.classList.add('show');
  }

  hide () {
    this.rootElement.classList.remove('show');
    this.rootElement.classList.add('hide');
  }
}

customElements.define('eb-editor-popup', EBEditorPopup);
