import { render, html } from 'lit-html';
import EBElement from '@/src/EBElement';
import EBLayout from '..';

export type ChildElementsType = {
  [key: string]: EBElement;
};

export default class EBVerticalDictLayout extends EBLayout<ChildElementsType> {
  render (element: EBElement, childElements: ChildElementsType) {
    render(
      html`
        ${Object.entries(childElements).map(([key, childElement]) => html`<div id='${key}'>${childElement}</div>`)}
      `,
      element.rootElement,
    );
  }
}
