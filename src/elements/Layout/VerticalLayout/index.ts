import { render, html } from 'lit-html';
import Element from '@/src/owl-element/Element';
import Layout from '..';

export type ChildElementsType = Element[];

export default class EBVerticalLayout extends Layout<ChildElementsType> {
  render (element: Element, childElements: ChildElementsType) {
    render(
      html`
        ${childElements.map((childElement) => html`<div class='childElement'>${childElement}</div>`)}
      `,
      element.rootElement,
    );
  }
}
