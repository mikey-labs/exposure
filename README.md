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
npm i @zaobao/exposure
```
Using `yarn`

```bash
yarn add @zaobao/exposure;
```

Using `pnpm`
```bash
pnpm add @zaobao/exposure;
```


## Quickstart

Using ESM

```typescript
// import Api
import Exposure from "@zaobao/exposure";
```

Using CommonJs

```js
const Exposure = require("@zaobao/exposure");
```

Using iife

```html
<script src="pathto/dist/index.browser.js"></script>
```
## Getting Started

```typescript
type IntersectionObserverInit = {
    root?: Element | Document | null;
    rootMargin?: string;
    threshold?: number | number[];
}
declare class Exposure {
    private Observer;
    constructor(options?: IntersectionObserverInit);
    observe(els: IElement | IElement[], callback: Function): void;
    unobserve(el: IElement | IElement[] | HTMLCollection): void;
    stop(): void;
}

//example
    const doms = document.querySelector(".class");
    const exposure = new Exposure(
        options
    );
    const callback = (isIntersection,stop)=>{
        if(isIntersection){
            stop()
            //todo
        }
    }
    exposure.observe(doms,callback)

```

## Browser support
 We use `interactionObvser` api for support, and add polyfill in very old browser.so you don't do anything for the polyfill，Use it with peace of mind.
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
