import { render, html } from "lit-html";

export default class Test extends HTMLElement {
  virtualDom: HTMLDivElement;

  constructor () {
    super();
    this.attachShadow({ mode: 'open' });
    this.virtualDom = document.createElement<'div'>('div');
    render(
      html`
        <div id='root'>
          hello world
          <style>
            #root {
              color: red;
            }
          </style>
        </div>
      `,
      this.virtualDom,
    );
  }

  connectedCallback () {
    this.shadowRoot!.appendChild(this.virtualDom);
  }
}

customElements.define('temp-test', Test);
