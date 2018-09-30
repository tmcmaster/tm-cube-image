import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `tm-cube-image`
 * Polymer web component for generating cube images
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class TmCubeImage extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'tm-cube-image',
      },
    };
  }
}

window.customElements.define('tm-cube-image', TmCubeImage);
