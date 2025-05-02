import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `ddd-card`
 *
 * @demo index.html
 * @element ddd-card
 */
export class PortfolioCard extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "portfolio-card";
  }

  constructor() {
    super();
    this.title = "";
    this.image = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      dddPrimary: { type: String, attribute: "ddd-primary" },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          color: var(--ddd-theme-primary);
          background-color: (-ddd-theme-default-limestoneGray);
          font-family: var(--ddd-font-navigation);
          text-align: center;
          justify-content: center;
          display: flex;
        }
        .wrapper {
          margin: 0;
          padding: 0;
          width: 300px;
          height: 300px;
          background-color: var(--ddd-theme-default-limestoneGray);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .card {
          background-color: var(--ddd-theme-default-white);
          height: 280px;
          border: 3px solid var(--ddd-theme-primary);
          padding: var(--ddd-spacing-0);
          margin: var(--ddd-spacing-2);
          overflow: hidden;
          border-radius: var(--ddd-radius-md);
          box-shadow: var(--ddd-boxShadow-sm);
          justify-content: space-between;
          display: grid;
          box-sizing: border-box;
          text-align: center;
          display: block;
          justify-content: center;
          align-items: center;
        }

        .card-image {
          width: 100%;
          height: 200px;
          overflow: hidden;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          border-bottom: 12px solid var(--ddd-theme-default-nittanyNavy);
        }
        .card-image img {
          width: auto;
          height: 100%;
          display: block;
          align-items: center;
          justify-content: center;
        }

        .button-container {
          text-align: center;
          margin-top: auto;
          padding-bottom: var(--ddd-spacing-4);
        }
        button {
          background-color: var(--ddd-theme-default-link);
          color: var(--ddd-theme-default-white);
          text-align: center;
          display: inline-block;
          font-size: var(--ddd-font-size-4xs);
          padding: var(--ddd-spacing-4);
          border-radius: var(--ddd-radius-md);
          width: 85%;
          box-sizing: border-box;
          margin: 0;
          cursor: pointer;
          border: none;
        }
        button:hover {
          background-color: var(--ddd-theme-default-nittanyNavy);
          color: var(--ddd-theme-default-white);
        }
        h2 {
          padding-left: var(--ddd-spacing-4);
          color: var(--ddd-theme-default-nittanyNavy);
          font-size: 24px;
          margin-top: 4px;
        }
        p {
          font-size: var(--ddd-font-size-1);
          color: var(--ddd-theme-primary);
          margin: 0;
          text-align: left;
          border-top: 0px;
        }
        .card-title {
          margin: 0px;
        }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="wrapper">
        <div class="card">
          <div class="card-image">
            <img
              src="${this.getAttribute("card-image") ||
              "data:image/png;base64,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"}"
              alt="${this.title}"
            />
          </div>

          <div class="card-title">
            <h2>${this.title}</h2>
          </div>
          <div class="card-text">
            <slot></slot>
          </div>
          <div class="button-container">
            <a
              href="https://www.linkedin.com/in/dylan-abke/"
              target="_blank"
              rel="noopener"
            >
              <button id="LinkedIn">LinkedIn</button>
            </a>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * haxProperties integration via file reference
   */
}

globalThis.customElements.define(PortfolioCard.tag, PortfolioCard);
