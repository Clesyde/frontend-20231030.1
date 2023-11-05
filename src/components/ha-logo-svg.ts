import { css, CSSResultGroup, LitElement, html, TemplateResult } from "lit";
import { customElement } from "lit/decorators";

@customElement("ha-logo-svg")
export class HaLogoSvg extends LitElement {
  protected render(): TemplateResult {
    return html`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="192px" height="192px" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g><path style="opacity:1" fill="#fefdfd" d="M -0.5,-0.5 C 63.5,-0.5 127.5,-0.5 191.5,-0.5C 191.5,63.5 191.5,127.5 191.5,191.5C 127.5,191.5 63.5,191.5 -0.5,191.5C -0.5,127.5 -0.5,63.5 -0.5,-0.5 Z"/></g>
    <g><path style="opacity:1" fill="#d3966d" d="M 101.5,9.5 C 101.5,11.5 101.5,13.5 101.5,15.5C 71.9953,15.1686 42.6619,15.5019 13.5,16.5C 12.502,44.9951 12.1687,73.6618 12.5,102.5C 10.5,102.5 8.5,102.5 6.5,102.5C 6.5,71.5 6.5,40.5 6.5,9.5C 38.1667,9.5 69.8333,9.5 101.5,9.5 Z"/></g>
    <g><path style="opacity:1" fill="#edc4a8" d="M 101.5,9.5 C 102.468,11.6074 102.802,13.9407 102.5,16.5C 72.8333,16.5 43.1667,16.5 13.5,16.5C 42.6619,15.5019 71.9953,15.1686 101.5,15.5C 101.5,13.5 101.5,11.5 101.5,9.5 Z"/></g>
    <g><path style="opacity:1" fill="#9d9d9d" d="M 99.5,41.5 C 94.5783,42.2795 89.5783,43.2795 84.5,44.5C 85.347,43.0337 86.6803,42.2004 88.5,42C 92.1516,41.5014 95.8183,41.3347 99.5,41.5 Z"/></g>
    <g><path style="opacity:1" fill="#595858" d="M 99.5,41.5 C 117.137,41.598 131.97,47.9314 144,60.5C 144.667,61.5 144.667,62.5 144,63.5C 140.019,67.6463 135.686,71.313 131,74.5C 109.978,55.1694 89.6443,55.836 70,76.5C 60.3332,94.9103 63.1666,111.077 78.5,125C 98.0433,136.957 115.543,134.457 131,117.5C 135.26,121.049 139.427,124.716 143.5,128.5C 144.583,129.365 144.749,130.365 144,131.5C 141.833,135 139,137.833 135.5,140C 130.232,143.132 124.899,145.965 119.5,148.5C 111.603,150.161 103.603,150.827 95.5,150.5C 67.3077,147.144 50.4744,131.477 45,103.5C 42.9848,78.0272 53.1514,59.1939 75.5,47C 78.5214,46.1506 81.5214,45.3173 84.5,44.5C 89.5783,43.2795 94.5783,42.2795 99.5,41.5 Z"/></g>
    <g><path style="opacity:1" fill="#d1946b" d="M 183.5,90.5 C 183.5,121.167 183.5,151.833 183.5,182.5C 151.833,182.5 120.167,182.5 88.5,182.5C 88.5,180.833 88.5,179.167 88.5,177.5C 118.005,177.831 147.338,177.498 176.5,176.5C 177.498,148.005 177.831,119.338 177.5,90.5C 179.5,90.5 181.5,90.5 183.5,90.5 Z"/></g>
    <g><path style="opacity:1" fill="#ddb193" d="M 183.5,90.5 C 181.5,90.5 179.5,90.5 177.5,90.5C 177.831,119.338 177.498,148.005 176.5,176.5C 176.5,147.5 176.5,118.5 176.5,89.5C 179.059,89.1984 181.393,89.5318 183.5,90.5 Z"/></g>
    <g><path style="opacity:1" fill="#a4a4a4" d="M 119.5,148.5 C 117.438,149.776 115.104,150.61 112.5,151C 106.651,151.818 100.985,151.652 95.5,150.5C 103.603,150.827 111.603,150.161 119.5,148.5 Z"/></g>
    <g><path style="opacity:1" fill="#ecbc9c" d="M 176.5,176.5 C 147.338,177.498 118.005,177.831 88.5,177.5C 88.5,179.167 88.5,180.833 88.5,182.5C 120.167,182.5 151.833,182.5 183.5,182.5C 151.671,183.498 119.671,183.832 87.5,183.5C 87.5,181.167 87.5,178.833 87.5,176.5C 117.167,176.5 146.833,176.5 176.5,176.5 Z"/></g>
    </svg>`;
  }

  static get styles(): CSSResultGroup {
    return css`
      :host {
        display: var(--ha-icon-display, inline-flex);
        align-items: center;
        justify-content: center;
        position: relative;
        vertical-align: middle;
        fill: currentcolor;
        width: var(--mdc-icon-size, 24px);
        height: var(--mdc-icon-size, 24px);
      }
      svg {
        width: 100%;
        height: 100%;
        pointer-events: none;
        display: block;
      }
    `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    "ha-logo-svg": HaLogoSvg;
  }
}
