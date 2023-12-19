# exposure
A set of web automatic exposure buried point solutions.
when page load, the plugin will auto call the callback function if dom intersection. in the callback,you can collect data for reporting.

## Features

-   🚀 1KB Component average size
-   🚀 Native script
-   🚀 Zero third-party dependencies
-   💪 Written in TypeScript
-   📖 Extensive documentation and demos
-   🍭 Support all project
-   🍭 Support Tree Shaking

## Installation

```sh
npm i @zhengxy/exposure
```
Using `yarn`

```bash
yarn add @zhengxy/exposure;
```

Using `pnpm`
```bash
pnpm add @zhengxy/exposure;
```


## Quickstart

Using ESM

```typescript
// import Api
import Exposure from "@zhengxy/exposure";
```

Using CommonJs

```js
const Exposure = require("@zhengxy/exposure");
```

Using iife

```html
<script src="pathto/dist/index.browser.js"></script>
```
## Getting Started

```typescript
    const dom = document.getElementsById("elementId");
    const exposure = new Exposure();
    dom.addEventListener("click",add)
    function add() {
        let a = 1;
        exposure.observe(ds.item(3),()=>{
            console.log(a);
        });
    }
```

## Browser support
 We use `interactionObvser` api for support, if you want use in some very old browsers,The easiest way to load the IntersectionObserver polyfill and have it work in the widest range of browsers is via polyfill.io, which will automatically include dependencies where necessary:
 ```javascript
<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"></script>
```
With these polyfills, IntersectionObserver has been tested and known to work in the following browsers:
<table>
  <tr>
    <td align="center">
      <img src="https://raw.github.com/alrra/browser-logos/39.2.2/src/chrome/chrome_48x48.png" alt="Chrome"><br>
      ✔
    </td>
    <td align="center">
      <img src="https://raw.github.com/alrra/browser-logos/39.2.2/src/firefox/firefox_48x48.png" alt="Firefox"><br>
      ✔
    </td>
    <td align="center">
      <img src="https://raw.github.com/alrra/browser-logos/39.2.2/src/safari/safari_48x48.png" alt="Safari"><br>
      6+
    </td>
    <td align="center">
      <img src="https://raw.github.com/alrra/browser-logos/39.2.2/src/edge/edge_48x48.png" alt="Edge"><br>
      ✔
    </td>
    <td align="center">
      <img src="https://raw.github.com/alrra/browser-logos/39.2.2/src/archive/internet-explorer_7-8/internet-explorer_7-8_48x48.png" alt="Internet Explorer"><br>
      7+
    </td>
    <td align="center">
      <img src="https://raw.github.com/alrra/browser-logos/39.2.2/src/opera/opera_48x48.png" alt="Opera"><br>
      ✔
    </td>
    <td align="center">
      <img src="https://raw.github.com/alrra/browser-logos/39.2.2/src/android/android_48x48.png" alt="Android"><br>
      4.4+
    </td>
  </tr>
</table>
