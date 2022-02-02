import { render, html } from 'lit-html';
import EBElement from '@/src/EBElement';
import EBLayout from '..';

export default class EBVerticalLayout extends EBLayout<EBElement[]> {
  render (element: EBElement, childElements: EBElement[]) {
    const rootElement = element.rootElement;
    childElements.forEach((element) => {
      render(
        html`
          ${element}
        `,
        rootElement,
      );
    });
  }
}
