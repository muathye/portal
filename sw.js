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
    "revision": "064636fc88dd5397c88a81f54253b441"
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
    "revision": "514a7e3fdc187661f6ea71e68760d1ae"
  }, {
    "url": "articles/2022-08-20-gitmoji.html",
    "revision": "58037038a217871f73dd3407c7b038ae"
  }, {
    "url": "articles/2022-08-21-realtime-input-validation.html",
    "revision": "8ebf9512cd48823ed45896b9502c708e"
  }, {
    "url": "articles/2022-11-24-change-default-Laravel-breeze-in-login.html",
    "revision": "d221e207deea93d2354a77e05e712c1f"
  }, {
    "url": "articles/2022-12-23-laravel-nested-eager-loading-on-polymorphic-relationships.html",
    "revision": "88a346da6b3427434f169b4b5dd9e48f"
  }, {
    "url": "articles/2022-12-26-add-bootstrap-datepicker-in-modal.html",
    "revision": "f1d226df0a011c1e715c31d73109264d"
  }, {
    "url": "articles/2022-12-26/modal-datetime-picker.png",
    "revision": "15769119e7cce9ba9a116fac03e9f5d6"
  }, {
    "url": "articles/2022-12-27-chatgpt-arabic-morning-azkar.html",
    "revision": "adf5ba5b81f4f298c4ebbcc3ab4e3467"
  }, {
    "url": "articles/2022-12-27/morning-azkar.png",
    "revision": "6f92ec237639cc9874eef93d02fd24ec"
  }, {
    "url": "articles/2023-03-08-mini-self-hosted-version-chatgpt.html",
    "revision": "d919c31173165965cfbf37cb337cbe22"
  }, {
    "url": "articles/2023-03-08/mini-self-hosted-verison-chatgpt.png",
    "revision": "a20d809a2b93470f70bed0c150f3502c"
  }, {
    "url": "articles/2023-03-09-from-javascript-to-mastring-nodejs.html",
    "revision": "4ee2e8c8877b2a467d320e1179042e4e"
  }, {
    "url": "articles/2023-04-10-add-ssh-to-bitbucket-for-windows.html",
    "revision": "94897a1b192533accdb9b0653ca5f43e"
  }, {
    "url": "articles/2023-04-17-export-vscode-extensions-list-and-download-them.html",
    "revision": "9e5651db2343f99bda7d4c1aa2744011"
  }, {
    "url": "articles/2023-04-23-how-to-use-google-maps-api-to-choose-a-location-on-your-website.html",
    "revision": "2e16661347f90931f66585bc2a0ddbb5"
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
    "revision": "22bb92645dadd44f842d32d2316d5e81"
  }, {
    "url": "articles/2023-05-22-how-to-create-a-command-line-password-generator-with-nodejs.html",
    "revision": "e5164c8d648be182ecc689228725911b"
  }, {
    "url": "articles/2023-05-22/muath-ye-password-generator.png",
    "revision": "a54a570b09f66e44aef3dfc23c9055a1"
  }, {
    "url": "articles/2023-05-22/one-time-password.png",
    "revision": "28ade83e54cd48c1d8563fb301a9baba"
  }, {
    "url": "articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-1.html",
    "revision": "e530470377bdabcdc763d9a0ec33cbbc"
  }, {
    "url": "assets/app.05a9f497.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-08-20-gitmoji.md.0c5d2303.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-08-20-gitmoji.md.0c5d2303.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-08-21-realtime-input-validation.md.61d0692d.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-08-21-realtime-input-validation.md.61d0692d.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-11-24-change-default-Laravel-breeze-in-login.md.b252c26d.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-11-24-change-default-Laravel-breeze-in-login.md.b252c26d.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-23-laravel-nested-eager-loading-on-polymorphic-relationships.md.30e399ef.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-23-laravel-nested-eager-loading-on-polymorphic-relationships.md.30e399ef.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-26-add-bootstrap-datepicker-in-modal.md.07aec0aa.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-26-add-bootstrap-datepicker-in-modal.md.07aec0aa.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-27-chatgpt-arabic-morning-azkar.md.79da09a3.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-27-chatgpt-arabic-morning-azkar.md.79da09a3.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-03-08-mini-self-hosted-version-chatgpt.md.0741cc5f.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-03-08-mini-self-hosted-version-chatgpt.md.0741cc5f.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-03-09-from-javascript-to-mastring-nodejs.md.a986bd87.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-03-09-from-javascript-to-mastring-nodejs.md.a986bd87.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-10-add-ssh-to-bitbucket-for-windows.md.addc7679.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-10-add-ssh-to-bitbucket-for-windows.md.addc7679.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-17-export-vscode-extensions-list-and-download-them.md.05c75537.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-17-export-vscode-extensions-list-and-download-them.md.05c75537.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-23-how-to-use-google-maps-api-to-choose-a-location-on-your-website.md.6fb6ccf9.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-23-how-to-use-google-maps-api-to-choose-a-location-on-your-website.md.6fb6ccf9.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-17-bard-database-schema-and-implementation-in-mysql.md.dd225085.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-17-bard-database-schema-and-implementation-in-mysql.md.dd225085.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-22-how-to-create-a-command-line-password-generator-with-nodejs.md.0166e984.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-22-how-to-create-a-command-line-password-generator-with-nodejs.md.0166e984.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-1.md.ce776999.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-1.md.ce776999.lean.js",
    "revision": null
  }, {
    "url": "assets/articles.md.bea9790b.js",
    "revision": null
  }, {
    "url": "assets/articles.md.bea9790b.lean.js",
    "revision": null
  }, {
    "url": "assets/chunks/facebook.cfa388ff.js",
    "revision": null
  }, {
    "url": "assets/en_index.md.3a89d77d.js",
    "revision": null
  }, {
    "url": "assets/en_index.md.3a89d77d.lean.js",
    "revision": null
  }, {
    "url": "assets/index.md.f0caaf98.js",
    "revision": null
  }, {
    "url": "assets/index.md.f0caaf98.lean.js",
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
    "url": "assets/projects.md.a743850a.js",
    "revision": null
  }, {
    "url": "assets/projects.md.a743850a.lean.js",
    "revision": null
  }, {
    "url": "assets/resume.md.91c3822d.js",
    "revision": null
  }, {
    "url": "assets/resume.md.91c3822d.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-02-14-extend-laravel-validator-morph-exists.md.3c8b61a8.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-02-14-extend-laravel-validator-morph-exists.md.3c8b61a8.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-01-git-update-last-commit-message.md.02bf4b3b.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-01-git-update-last-commit-message.md.02bf4b3b.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-19-array-destructuring-in-php.md.e24a7ab4.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-19-array-destructuring-in-php.md.e24a7ab4.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-19-git-developers-list.md.02e89652.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-19-git-developers-list.md.02e89652.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-19-import-db-using-command-line.md.52c083ed.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-19-import-db-using-command-line.md.52c083ed.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-04-15-laravel-model-truncate.md.073795de.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-04-15-laravel-model-truncate.md.073795de.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-04-17-export-vscode-extensions-list.md.2fd85c2d.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-04-17-export-vscode-extensions-list.md.2fd85c2d.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-16-retrieve-related-tables-of-a-specific-table-in-mysql.md.9d9bf4b4.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-16-retrieve-related-tables-of-a-specific-table-in-mysql.md.9d9bf4b4.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-21-convert-png-and-jpg-to-webp.md.c6658a83.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-21-convert-png-and-jpg-to-webp.md.c6658a83.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-23-how-to-zip-or-unzip-files-from-the-linux-terminal.md.486e261b.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-23-how-to-zip-or-unzip-files-from-the-linux-terminal.md.486e261b.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-25-drop-all-constraints-from-all-tables-of-a-database.md.128d4590.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-25-drop-all-constraints-from-all-tables-of-a-database.md.128d4590.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-25-drop-all-tables-of-a-database.md.7ed933d9.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-25-drop-all-tables-of-a-database.md.7ed933d9.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets.md.1b43b1e0.js",
    "revision": null
  }, {
    "url": "assets/snippets.md.1b43b1e0.lean.js",
    "revision": null
  }, {
    "url": "assets/style.2da44ed4.css",
    "revision": null
  }, {
    "url": "en/index.html",
    "revision": "29ce6709bd6680db1668bf9960654494"
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
    "url": "images/social/-whatsapp.svg",
    "revision": "234019d7bdbb6acd61390f7183d8be01"
  }, {
    "url": "images/social/facebook.svg",
    "revision": "0285d2419a0d4d968fd0c42a626375e8"
  }, {
    "url": "images/social/twitter.svg",
    "revision": "aa62a94150d2b3d7319242b2af3cdddc"
  }, {
    "url": "images/social/whatsapp.svg",
    "revision": "81d17cd619d70863a1b5745105efe45c"
  }, {
    "url": "index.html",
    "revision": "d4ff425131be76dfb0d62b1d87f1bb9e"
  }, {
    "url": "masked-icon.svg",
    "revision": "8b8e61771570c80c5470b1adaf2c44ee"
  }, {
    "url": "mstile-150x150.png",
    "revision": "f020256b2109323117574ed955e15b13"
  }, {
    "url": "projects.html",
    "revision": "5d0066fb6e24f85c905ec2ea7777fffb"
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
    "revision": "e1a4d3b5a1214431e4e3c2728a92efe6"
  }, {
    "url": "robots.txt",
    "revision": "5e0bd1c281a62a380d7a948085bfe2d1"
  }, {
    "url": "safari-pinned-tab.svg",
    "revision": "896ff3300aa31eae3864243b6f116f66"
  }, {
    "url": "snippets.html",
    "revision": "cb92a132f133baf7201195bb5a4c94e1"
  }, {
    "url": "snippets/2023-02-14-extend-laravel-validator-morph-exists.html",
    "revision": "e3e573649f33f4495b825128b54fa308"
  }, {
    "url": "snippets/2023-02-14/extend-laravel-validator-morph-exists.png",
    "revision": "939cac5b2999fa54ead181c8895af485"
  }, {
    "url": "snippets/2023-03-01-git-update-last-commit-message.html",
    "revision": "4a449b30bf61ea4cfdef5c174fd11316"
  }, {
    "url": "snippets/2023-03-01/git-update-last-commit-message.png",
    "revision": "d0fd23ca23359fe078f2706e35f683fa"
  }, {
    "url": "snippets/2023-03-19-array-destructuring-in-php.html",
    "revision": "9c5baba4d74d4ca01a6f3e21f35b2aca"
  }, {
    "url": "snippets/2023-03-19-git-developers-list.html",
    "revision": "be9758871f5bbd8055f0d4942fa188cb"
  }, {
    "url": "snippets/2023-03-19-import-db-using-command-line.html",
    "revision": "b52ff0abf771242e213cb1a2f914ae6b"
  }, {
    "url": "snippets/2023-03-19/array-destructuring-in-php.png",
    "revision": "0f54243abc003e410c54bb2d33f95ce6"
  }, {
    "url": "snippets/2023-03-19/git-developers-list.png",
    "revision": "751127d4712464cbb9e4949c06dc001e"
  }, {
    "url": "snippets/2023-03-19/import-db-using-command-line.png",
    "revision": "4b06dbffd38f7118d3a87063b5a2d657"
  }, {
    "url": "snippets/2023-04-15-laravel-model-truncate.html",
    "revision": "a777b30f61062368d1fe3f4c44e5147a"
  }, {
    "url": "snippets/2023-04-15/laravel-model-truncate.png",
    "revision": "03fb50de2aed2566cd6c9891d4fcd55c"
  }, {
    "url": "snippets/2023-04-17-export-vscode-extensions-list.html",
    "revision": "4f56fbe5361bcd8dee5d5a4942f088d2"
  }, {
    "url": "snippets/2023-04-17/export-vscode-extensions-list.png",
    "revision": "091bcdd30203b678f62c45f34c5a34a3"
  }, {
    "url": "snippets/2023-05-16-retrieve-related-tables-of-a-specific-table-in-mysql.html",
    "revision": "5f1ee885bc4ab10a6e68aa767933e5d7"
  }, {
    "url": "snippets/2023-05-16/retrieve-related-tables-of-a-specific-table-in-mysql.png",
    "revision": "ba013ed07b09fbf3c05eb1aa158c5a3f"
  }, {
    "url": "snippets/2023-05-21-convert-png-and-jpg-to-webp.html",
    "revision": "b158065128b14746a13577b178a38a6e"
  }, {
    "url": "snippets/2023-05-21/convert-png-and-jpg-to-webp.png",
    "revision": "9667e96bae19de5d23ef82768548f6c4"
  }, {
    "url": "snippets/2023-05-23-how-to-zip-or-unzip-files-from-the-linux-terminal.html",
    "revision": "242cd21b4b48939ab3a2601bad053b92"
  }, {
    "url": "snippets/2023-05-23/how-to-zip-or-unzip-files-from-the-linux-terminal.png",
    "revision": "ded43dc04062ed2d54fe342abaab9a72"
  }, {
    "url": "snippets/2023-05-25-drop-all-constraints-from-all-tables-of-a-database.html",
    "revision": "e1ec2e22818347b27bb686619484c581"
  }, {
    "url": "snippets/2023-05-25-drop-all-tables-of-a-database.html",
    "revision": "fe5cf5c7fb1f4bad10ed677519486129"
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
