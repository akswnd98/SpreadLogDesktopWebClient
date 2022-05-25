import { render, html } from 'lit-html';
import Element from '@/src/owl-element/Element';
import Layout from '..';

export type ChildElementsType = {
  [key: string]: Element;
};

export default class VerticalDictLayout extends Layout<ChildElementsType> {
  render (element: Element, childElements: ChildElementsType) {
    render(
      html`
        ${Object.entries(childElements).map(([key, childElement]) => html`<div id='${key}'>${childElement}</div>`)}
      `,
      element.rootElement,
    );
  }
}
