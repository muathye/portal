/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-3589c0c5'], (function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "404.html",
    "revision": "79ae7a3ed3c019016ffcaf91805cc91f"
  }, {
    "url": "android-chrome-192x192.png",
    "revision": "8b6f412bda677ba08ec46492d2dbbb23"
  }, {
    "url": "android-chrome-512x512.png",
    "revision": "951e66101f8ab8db77e9a2986a28af9a"
  }, {
    "url": "apple-touch-icon.png",
    "revision": "25ab1e6e2615ec76f1febb7ecacf1ba4"
  }, {
    "url": "articles.html",
    "revision": "7254beec2b94e058299daeb6f946de4e"
  }, {
    "url": "articles/2022-08-20-gitmoji.html",
    "revision": "91ceff2a1ca007c3a9f89e2b9627b20d"
  }, {
    "url": "articles/2022-08-21-realtime-input-validation.html",
    "revision": "03098082918169bc326e5539dacda439"
  }, {
    "url": "articles/2022-11-24-change-default-Laravel-breeze-in-login.html",
    "revision": "529b4ff1cb434d42c7141ae9291be1e1"
  }, {
    "url": "articles/2022-12-23-laravel-nested-eager-loading-on-polymorphic-relationships.html",
    "revision": "e6e6d1ae584aa8f57c89940c75542997"
  }, {
    "url": "articles/2022-12-26-add-bootstrap-datepicker-in-modal.html",
    "revision": "ab9356304da67c72872010019f269d60"
  }, {
    "url": "articles/2022-12-26/modal-datetime-picker.png",
    "revision": "15769119e7cce9ba9a116fac03e9f5d6"
  }, {
    "url": "articles/2022-12-27-chatgpt-arabic-morning-azkar.html",
    "revision": "a71de8d5d71e37967aa8e0919ddc9a3f"
  }, {
    "url": "articles/2022-12-27/morning-azkar.png",
    "revision": "6f92ec237639cc9874eef93d02fd24ec"
  }, {
    "url": "articles/2023-03-08-mini-self-hosted-version-chatgpt.html",
    "revision": "1850275740998882cc054629d9dd1c4d"
  }, {
    "url": "articles/2023-03-08/mini-self-hosted-verison-chatgpt.png",
    "revision": "a20d809a2b93470f70bed0c150f3502c"
  }, {
    "url": "articles/2023-03-09-from-javascript-to-mastring-nodejs.html",
    "revision": "0845ba70d9da24b42da73c20cf382e62"
  }, {
    "url": "articles/2023-04-10-add-ssh-to-bitbucket-for-windows.html",
    "revision": "0c52a0a61b002402db04dfb8fc9f1566"
  }, {
    "url": "articles/2023-04-17-export-vscode-extensions-list-and-download-them.html",
    "revision": "9db2634349cb5d9cc4d170e7678d68d8"
  }, {
    "url": "articles/2023-04-23-how-to-use-google-maps-api-to-choose-a-location-on-your-website.html",
    "revision": "06e7d473771d8f599ae02b25026bf6d4"
  }, {
    "url": "articles/2023-04-24/add-deploy-key.png",
    "revision": "d3f730d15093bdf2f47998f05704b31d"
  }, {
    "url": "articles/2023-04-24/deploy-key.png",
    "revision": "377de964ceb368d49736a0fe7a55e89a"
  }, {
    "url": "articles/2023-04-24/deploy-keys.png",
    "revision": "930fb68e72b4cb135cab92b7d1cfca3c"
  }, {
    "url": "articles/2023-04-24/ssh-clone-url.png",
    "revision": "104c5e43ba39312783c03db8f71d3e69"
  }, {
    "url": "articles/2023-04-25/419-page-expired.png",
    "revision": "9d61d2526077ba165148c154ab8853a7"
  }, {
    "url": "articles/2023-05-17-bard-database-schema-and-implementation-in-mysql.html",
    "revision": "3e25c9df977b217b6d6bb886e844ef3b"
  }, {
    "url": "articles/2023-05-22-how-to-create-a-command-line-password-generator-with-nodejs.html",
    "revision": "328ed06c53952f68b3dcca753542cfb9"
  }, {
    "url": "articles/2023-05-22/muath-ye-password-generator.png",
    "revision": "a54a570b09f66e44aef3dfc23c9055a1"
  }, {
    "url": "articles/2023-05-22/one-time-password.png",
    "revision": "28ade83e54cd48c1d8563fb301a9baba"
  }, {
    "url": "assets/app.a61e2ebf.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-08-20-gitmoji.md.bffed7c6.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-08-20-gitmoji.md.bffed7c6.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-08-21-realtime-input-validation.md.671f2dd9.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-08-21-realtime-input-validation.md.671f2dd9.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-11-24-change-default-Laravel-breeze-in-login.md.e686986d.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-11-24-change-default-Laravel-breeze-in-login.md.e686986d.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-23-laravel-nested-eager-loading-on-polymorphic-relationships.md.a0b059f4.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-23-laravel-nested-eager-loading-on-polymorphic-relationships.md.a0b059f4.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-26-add-bootstrap-datepicker-in-modal.md.a2b314a6.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-26-add-bootstrap-datepicker-in-modal.md.a2b314a6.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-27-chatgpt-arabic-morning-azkar.md.853b023c.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-27-chatgpt-arabic-morning-azkar.md.853b023c.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-03-08-mini-self-hosted-version-chatgpt.md.7986f640.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-03-08-mini-self-hosted-version-chatgpt.md.7986f640.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-03-09-from-javascript-to-mastring-nodejs.md.06a95c43.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-03-09-from-javascript-to-mastring-nodejs.md.06a95c43.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-10-add-ssh-to-bitbucket-for-windows.md.c4013232.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-10-add-ssh-to-bitbucket-for-windows.md.c4013232.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-17-export-vscode-extensions-list-and-download-them.md.7e2ca668.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-17-export-vscode-extensions-list-and-download-them.md.7e2ca668.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-23-how-to-use-google-maps-api-to-choose-a-location-on-your-website.md.db17af0d.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-23-how-to-use-google-maps-api-to-choose-a-location-on-your-website.md.db17af0d.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-17-bard-database-schema-and-implementation-in-mysql.md.7840f7f1.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-17-bard-database-schema-and-implementation-in-mysql.md.7840f7f1.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-22-how-to-create-a-command-line-password-generator-with-nodejs.md.151a12fa.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-22-how-to-create-a-command-line-password-generator-with-nodejs.md.151a12fa.lean.js",
    "revision": null
  }, {
    "url": "assets/articles.md.4466aef8.js",
    "revision": null
  }, {
    "url": "assets/articles.md.4466aef8.lean.js",
    "revision": null
  }, {
    "url": "assets/en_index.md.d4c2802c.js",
    "revision": null
  }, {
    "url": "assets/en_index.md.d4c2802c.lean.js",
    "revision": null
  }, {
    "url": "assets/index.md.300743d6.js",
    "revision": null
  }, {
    "url": "assets/index.md.300743d6.lean.js",
    "revision": null
  }, {
    "url": "assets/inter-cyrillic-ext.0877b0d9.woff2",
    "revision": null
  }, {
    "url": "assets/inter-cyrillic.f8750142.woff2",
    "revision": null
  }, {
    "url": "assets/inter-greek-ext.3e6f6728.woff2",
    "revision": null
  }, {
    "url": "assets/inter-greek.117e1956.woff2",
    "revision": null
  }, {
    "url": "assets/inter-italic-cyrillic-ext.33bd5a8e.woff2",
    "revision": null
  }, {
    "url": "assets/inter-italic-cyrillic.ea42a392.woff2",
    "revision": null
  }, {
    "url": "assets/inter-italic-greek-ext.4fbe9427.woff2",
    "revision": null
  }, {
    "url": "assets/inter-italic-greek.8f4463c4.woff2",
    "revision": null
  }, {
    "url": "assets/inter-italic-latin-ext.bd8920cc.woff2",
    "revision": null
  }, {
    "url": "assets/inter-italic-latin.bd3b6f56.woff2",
    "revision": null
  }, {
    "url": "assets/inter-italic-vietnamese.6ce511fb.woff2",
    "revision": null
  }, {
    "url": "assets/inter-latin-ext.7cc429bc.woff2",
    "revision": null
  }, {
    "url": "assets/inter-latin.4fe6132f.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-cyrillic-ext.e75737ce.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-cyrillic.5f2c6c8c.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-greek-ext.ab0619bc.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-greek.d5a6d92a.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-latin-ext.0030eebd.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-latin.2ed14f66.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-vietnamese.14ce25a6.woff2",
    "revision": null
  }, {
    "url": "assets/inter-vietnamese.2c644a25.woff2",
    "revision": null
  }, {
    "url": "assets/projects.md.fc84db5e.js",
    "revision": null
  }, {
    "url": "assets/projects.md.fc84db5e.lean.js",
    "revision": null
  }, {
    "url": "assets/resume.md.57aae160.js",
    "revision": null
  }, {
    "url": "assets/resume.md.57aae160.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-16-retrieve-related-tables-of-a-specific-table-in-mysql.md.1012e42c.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-16-retrieve-related-tables-of-a-specific-table-in-mysql.md.1012e42c.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-21-convert-png-and-jpg-to-webp.md.8e3ff8c7.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-21-convert-png-and-jpg-to-webp.md.8e3ff8c7.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-23-how-to-zip-or-unzip-files-from-the-linux-terminal.md.dd597186.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-23-how-to-zip-or-unzip-files-from-the-linux-terminal.md.dd597186.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets.md.cebe2c21.js",
    "revision": null
  }, {
    "url": "assets/snippets.md.cebe2c21.lean.js",
    "revision": null
  }, {
    "url": "assets/style.2da44ed4.css",
    "revision": null
  }, {
    "url": "en/index.html",
    "revision": "518115fe983518401199d0d07ea2fad5"
  }, {
    "url": "favicon-16x16.png",
    "revision": "d4de349fd29d46f50aeac6cb294ae991"
  }, {
    "url": "favicon-32x32.png",
    "revision": "8a8623ddf50c485ce105569baa5c2afd"
  }, {
    "url": "favicon.ico",
    "revision": "d3091d363d8b52c41c1f227d8105dfaf"
  }, {
    "url": "images/background/docs-dark@tinypng.1bbe175e.png",
    "revision": null
  }, {
    "url": "images/muathye.png",
    "revision": "da6a18db9204b5d051aaf7e225105b8b"
  }, {
    "url": "images/muathye.svg",
    "revision": "8b8e61771570c80c5470b1adaf2c44ee"
  }, {
    "url": "index.html",
    "revision": "736bbb3a05c5895dd723447311e0a7f7"
  }, {
    "url": "masked-icon.svg",
    "revision": "8b8e61771570c80c5470b1adaf2c44ee"
  }, {
    "url": "mstile-150x150.png",
    "revision": "f020256b2109323117574ed955e15b13"
  }, {
    "url": "projects.html",
    "revision": "6e2925279a9968348c66238425476db4"
  }, {
    "url": "projects/eazycare.app/new-logo.svg",
    "revision": "8bcc0aef753052adae872ffae4e45ac4"
  }, {
    "url": "projects/mokasweets.com/mokasweets-logo.svg",
    "revision": "c70f81c8d6ac2f8a1b670ef749cfb820"
  }, {
    "url": "projects/OpenSale/open-sale.svg",
    "revision": "a7590fa654f4499d1d36ad147630556d"
  }, {
    "url": "projects/sdelivery.co/dark.png",
    "revision": "47b561ffb45d803e592be20b255f7b00"
  }, {
    "url": "projects/sdelivery.co/light.png",
    "revision": "da1ff181df734f37f8e3c13dbab91dbc"
  }, {
    "url": "pwa-192x192.png",
    "revision": "8b6f412bda677ba08ec46492d2dbbb23"
  }, {
    "url": "pwa-512x512.png",
    "revision": "951e66101f8ab8db77e9a2986a28af9a"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "resume.html",
    "revision": "d126b64dd420ecd95bfe965bdbcfdd68"
  }, {
    "url": "robots.txt",
    "revision": "5e0bd1c281a62a380d7a948085bfe2d1"
  }, {
    "url": "safari-pinned-tab.svg",
    "revision": "896ff3300aa31eae3864243b6f116f66"
  }, {
    "url": "snippets.html",
    "revision": "3330105b28886d09061677436df01998"
  }, {
    "url": "snippets/2023-05-16-retrieve-related-tables-of-a-specific-table-in-mysql.html",
    "revision": "0afd8ae87826c3cf6e53b713629fde5e"
  }, {
    "url": "snippets/2023-05-16/retrieve-related-tables-of-a-specific-table-in-mysql.png",
    "revision": "ba013ed07b09fbf3c05eb1aa158c5a3f"
  }, {
    "url": "snippets/2023-05-21-convert-png-and-jpg-to-webp.html",
    "revision": "a1a6bd2d8b5d0af33deed638438d001b"
  }, {
    "url": "snippets/2023-05-21/convert-png-and-jpg-to-webp.png",
    "revision": "9667e96bae19de5d23ef82768548f6c4"
  }, {
    "url": "snippets/2023-05-23-how-to-zip-or-unzip-files-from-the-linux-terminal.html",
    "revision": "fb86c5912c47811bb6ee365dfe7d70fc"
  }, {
    "url": "snippets/2023-05-23/how-to-zip-or-unzip-files-from-the-linux-terminal.png",
    "revision": "ded43dc04062ed2d54fe342abaab9a72"
  }, {
    "url": "pwa-192x192.png",
    "revision": "8b6f412bda677ba08ec46492d2dbbb23"
  }, {
    "url": "pwa-512x512.png",
    "revision": "951e66101f8ab8db77e9a2986a28af9a"
  }, {
    "url": "manifest.webmanifest",
    "revision": "b1eec4280dc7c7f0bca6689acb26fb4b"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
