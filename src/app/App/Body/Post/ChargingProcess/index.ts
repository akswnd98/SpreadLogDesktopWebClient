import Element from '@/src/owl-element/Element';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import { ConstructorParam } from '@/src/owl-element/Element/Raw';
import { html, render } from 'lit-html';
import Static from '@/src/app/inversify.config';
import PrevPosts from '@/src/app/data-binding/Model/PrevPosts';
import { SYMBOLS } from '@/src/app/symbols';
import PrevPost from './PrevPost';
import ClickHide from './Handler/ClickHide';
import ClickShow from './Handler/ClickShow';

injectable()
export default class ChargingProcess extends Element {
  constructor () {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
    });
    this.registerAttributes([
      new ClickHide({ chargingProcess: this }),
      new ClickShow({ chargingProcess: this }),
    ]);
  }

  initialRender (payload: ConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        <div>
          <p>이걸 모르시면 당신이 바보 처럼 느껴질 수 있습니다</p>
          <div id='prev-post-list'></div>
          <div id='hide-button'>숨기기</div>
          <div id='show-button'>보이기</div>
        </div>
      `,
      this.rootElement,
    );
  }
}

customElements.define('post-chargin-process', ChargingProcess);
