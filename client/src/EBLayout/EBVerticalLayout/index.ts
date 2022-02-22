import { render, html } from 'lit-html';
import EBElement from '@/src/EBElement';
import EBLayout from '..';

export type ChildElementsType = EBElement[];

export default class EBVerticalLayout extends EBLayout<ChildElementsType> {
  render (element: EBElement, childElements: ChildElementsType) {
    render(
      html`
        ${childElements.map((childElement) => html`<div>${childElement}</div>`)}
      `,
      element.rootElement,
    );
  }
}
