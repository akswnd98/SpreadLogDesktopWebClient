import { render, html } from 'lit-html';
import EBElement from '@/src/EBElement';
import EBLayout from '..';

export default class EBVerticalDictLayout extends EBLayout<{[key: string]: EBElement}> {
  render (element: EBElement, childElements: {[key: string]: EBElement}) {
    const rootElement = element.rootElement;
    Object.entries(childElements).forEach(([key, element]) => {
      element.id = key;
      render(
        html`
          ${element}
        `,
        rootElement,
      );
    });
  }
}
