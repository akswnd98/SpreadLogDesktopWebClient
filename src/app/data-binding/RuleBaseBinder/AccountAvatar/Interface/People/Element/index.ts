import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import { html, render } from 'lit-html';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import navPerson from '@/assets/images/nav-person.svg';
import ClickHandler from './Handler/Click';

@injectable()
export default class PeopleElement extends Element {
  constructor () {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
        new ClickHandler(),
      ],
    });
  }

  initialRender (payload: ParentConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        <img src=${navPerson}></img>
      `,
      this.rootElement,
    );
  }
}

customElements.define('nav-people', PeopleElement);
