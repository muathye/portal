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
    "revision": "483bbea3d5724b8dd063f1b6944a446f"
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
    "revision": "be5aa95f1ab0cf08d02b793821c378f2"
  }, {
    "url": "articles/2022-08-20-gitmoji.html",
    "revision": "14ce71315d83c4f6c43f51a433e9d7d2"
  }, {
    "url": "articles/2022-08-21-realtime-input-validation.html",
    "revision": "8338248985ac21b00d335b209201ffe8"
  }, {
    "url": "articles/2022-11-24-change-default-Laravel-breeze-in-login.html",
    "revision": "bf6c4bc924373c1bdb02328bff4134b3"
  }, {
    "url": "articles/2022-12-23-laravel-nested-eager-loading-on-polymorphic-relationships.html",
    "revision": "29c45bb9f045789111fea2adfb0fc233"
  }, {
    "url": "articles/2022-12-26-add-bootstrap-datepicker-in-modal.html",
    "revision": "3e7516c42e38d18ae5766a34a8826468"
  }, {
    "url": "articles/2022-12-26/modal-datetime-picker.png",
    "revision": "15769119e7cce9ba9a116fac03e9f5d6"
  }, {
    "url": "articles/2022-12-27-chatgpt-arabic-morning-azkar.html",
    "revision": "ca43fa9124a563adf9ff7a27fe570612"
  }, {
    "url": "articles/2022-12-27/morning-azkar.png",
    "revision": "6f92ec237639cc9874eef93d02fd24ec"
  }, {
    "url": "articles/2023-03-08-mini-self-hosted-version-chatgpt.html",
    "revision": "31ee2c18d60de2a42a96d00b2c043725"
  }, {
    "url": "articles/2023-03-08/mini-self-hosted-verison-chatgpt.png",
    "revision": "a20d809a2b93470f70bed0c150f3502c"
  }, {
    "url": "articles/2023-03-09-from-javascript-to-mastring-nodejs.html",
    "revision": "09b0e88d0e47c2a09d523d59f9c9abdc"
  }, {
    "url": "articles/2023-04-10-add-ssh-to-bitbucket-for-windows.html",
    "revision": "844025fcf6f40dd480d44627fed9c430"
  }, {
    "url": "articles/2023-04-17-export-vscode-extensions-list-and-download-them.html",
    "revision": "85319e45c5094148ee4432fabc81d8c4"
  }, {
    "url": "articles/2023-04-23-how-to-use-google-maps-api-to-choose-a-location-on-your-website.html",
    "revision": "ad45123b98bb91b47b656305deee9a83"
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
    "revision": "cc1fc35669803d3ed2bd8b5842f82245"
  }, {
    "url": "articles/2023-05-22-how-to-create-a-command-line-password-generator-with-nodejs.html",
    "revision": "8300fa2757dd8779fd93acdb255e0082"
  }, {
    "url": "articles/2023-05-22/muath-ye-password-generator.png",
    "revision": "a54a570b09f66e44aef3dfc23c9055a1"
  }, {
    "url": "articles/2023-05-22/one-time-password.png",
    "revision": "28ade83e54cd48c1d8563fb301a9baba"
  }, {
    "url": "articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-1.html",
    "revision": "7ebf92813b0504c814ed703cefe52faa"
  }, {
    "url": "assets/app.a61e2ebf.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-08-20-gitmoji.md.8f7b4395.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-08-20-gitmoji.md.8f7b4395.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-08-21-realtime-input-validation.md.7b8b7dff.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-08-21-realtime-input-validation.md.7b8b7dff.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-11-24-change-default-Laravel-breeze-in-login.md.87fd7236.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-11-24-change-default-Laravel-breeze-in-login.md.87fd7236.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-23-laravel-nested-eager-loading-on-polymorphic-relationships.md.70947ec5.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-23-laravel-nested-eager-loading-on-polymorphic-relationships.md.70947ec5.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-26-add-bootstrap-datepicker-in-modal.md.9c9df699.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-26-add-bootstrap-datepicker-in-modal.md.9c9df699.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-27-chatgpt-arabic-morning-azkar.md.44095603.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-27-chatgpt-arabic-morning-azkar.md.44095603.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-03-08-mini-self-hosted-version-chatgpt.md.0c983803.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-03-08-mini-self-hosted-version-chatgpt.md.0c983803.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-03-09-from-javascript-to-mastring-nodejs.md.7a45f5eb.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-03-09-from-javascript-to-mastring-nodejs.md.7a45f5eb.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-10-add-ssh-to-bitbucket-for-windows.md.6135a2e7.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-10-add-ssh-to-bitbucket-for-windows.md.6135a2e7.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-17-export-vscode-extensions-list-and-download-them.md.82b95126.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-17-export-vscode-extensions-list-and-download-them.md.82b95126.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-23-how-to-use-google-maps-api-to-choose-a-location-on-your-website.md.b09574e3.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-23-how-to-use-google-maps-api-to-choose-a-location-on-your-website.md.b09574e3.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-17-bard-database-schema-and-implementation-in-mysql.md.ac06a0a4.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-17-bard-database-schema-and-implementation-in-mysql.md.ac06a0a4.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-22-how-to-create-a-command-line-password-generator-with-nodejs.md.9bcd6ddb.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-22-how-to-create-a-command-line-password-generator-with-nodejs.md.9bcd6ddb.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-1.md.af7ced05.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-1.md.af7ced05.lean.js",
    "revision": null
  }, {
    "url": "assets/articles.md.be777129.js",
    "revision": null
  }, {
    "url": "assets/articles.md.be777129.lean.js",
    "revision": null
  }, {
    "url": "assets/chunks/facebook.cfa388ff.js",
    "revision": null
  }, {
    "url": "assets/en_index.md.d794d9a6.js",
    "revision": null
  }, {
    "url": "assets/en_index.md.d794d9a6.lean.js",
    "revision": null
  }, {
    "url": "assets/index.md.19995d38.js",
    "revision": null
  }, {
    "url": "assets/index.md.19995d38.lean.js",
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
    "url": "assets/projects.md.9ba81df0.js",
    "revision": null
  }, {
    "url": "assets/projects.md.9ba81df0.lean.js",
    "revision": null
  }, {
    "url": "assets/resume.md.402768ce.js",
    "revision": null
  }, {
    "url": "assets/resume.md.402768ce.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-02-14-extend-laravel-validator-morph-exists.md.55fe4fcf.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-02-14-extend-laravel-validator-morph-exists.md.55fe4fcf.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-01-git-update-last-commit-message.md.37e744b0.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-01-git-update-last-commit-message.md.37e744b0.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-19-array-destructuring-in-php.md.877a83a5.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-19-array-destructuring-in-php.md.877a83a5.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-19-git-developers-list.md.4c1ce73d.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-19-git-developers-list.md.4c1ce73d.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-19-import-db-using-command-line.md.a843dfd7.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-19-import-db-using-command-line.md.a843dfd7.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-04-15-laravel-model-truncate.md.d02fabdb.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-04-15-laravel-model-truncate.md.d02fabdb.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-04-17-export-vscode-extensions-list.md.f1797ffc.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-04-17-export-vscode-extensions-list.md.f1797ffc.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-16-retrieve-related-tables-of-a-specific-table-in-mysql.md.a75e4277.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-16-retrieve-related-tables-of-a-specific-table-in-mysql.md.a75e4277.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-21-convert-png-and-jpg-to-webp.md.0547ebcc.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-21-convert-png-and-jpg-to-webp.md.0547ebcc.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-23-how-to-zip-or-unzip-files-from-the-linux-terminal.md.64cf179b.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-23-how-to-zip-or-unzip-files-from-the-linux-terminal.md.64cf179b.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-25-drop-all-constraints-from-all-tables-of-a-database.md.ee43a9ce.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-25-drop-all-constraints-from-all-tables-of-a-database.md.ee43a9ce.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-25-drop-all-tables-of-a-database.md.99bc3d17.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-25-drop-all-tables-of-a-database.md.99bc3d17.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-08-03-disable-composer-https-on-project.md.e0fc1a2c.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-08-03-disable-composer-https-on-project.md.e0fc1a2c.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets.md.6df2dd62.js",
    "revision": null
  }, {
    "url": "assets/snippets.md.6df2dd62.lean.js",
    "revision": null
  }, {
    "url": "assets/style.191f67bc.css",
    "revision": null
  }, {
    "url": "en/index.html",
    "revision": "7b4750e4eb060fad3d7e3fb29c278af4"
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
    "url": "fonts/IBM_Plex_Sans_Arabic/OFL.txt",
    "revision": "9309839bb3892d6e429009cb8c29fb75"
  }, {
    "url": "fonts/Readex_Pro/OFL.txt",
    "revision": "6f6f25c6d9e88e0c24abfa2de9f25000"
  }, {
    "url": "fonts/Readex_Pro/README.txt",
    "revision": "e846a9ac3dab6ed8f8f86fae2dfb9fa5"
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
    "revision": "2ab678263d5cf63183aea873c31e5de8"
  }, {
    "url": "masked-icon.svg",
    "revision": "8b8e61771570c80c5470b1adaf2c44ee"
  }, {
    "url": "mstile-150x150.png",
    "revision": "f020256b2109323117574ed955e15b13"
  }, {
    "url": "projects.html",
    "revision": "d36fb8c8b910766a17b53f99d541ac2e"
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
    "revision": "74c22fbdbe0ff6554f3a1bf6ff827e7e"
  }, {
    "url": "robots.txt",
    "revision": "5e0bd1c281a62a380d7a948085bfe2d1"
  }, {
    "url": "safari-pinned-tab.svg",
    "revision": "896ff3300aa31eae3864243b6f116f66"
  }, {
    "url": "snippets.html",
    "revision": "72d7e50d08ac32726e1c00467e7715cd"
  }, {
    "url": "snippets/2023-02-14-extend-laravel-validator-morph-exists.html",
    "revision": "5d296b8c43b62cbc392ce3eee39344ca"
  }, {
    "url": "snippets/2023-02-14/extend-laravel-validator-morph-exists.png",
    "revision": "939cac5b2999fa54ead181c8895af485"
  }, {
    "url": "snippets/2023-03-01-git-update-last-commit-message.html",
    "revision": "8d8c31170c3164e9c6b5bed1fe4dc2a7"
  }, {
    "url": "snippets/2023-03-01/git-update-last-commit-message.png",
    "revision": "d0fd23ca23359fe078f2706e35f683fa"
  }, {
    "url": "snippets/2023-03-19-array-destructuring-in-php.html",
    "revision": "d75b1e234c4898e28ea01b7bd2ebeba4"
  }, {
    "url": "snippets/2023-03-19-git-developers-list.html",
    "revision": "f228399b3fddcf4b37e8a55ee91b6a2d"
  }, {
    "url": "snippets/2023-03-19-import-db-using-command-line.html",
    "revision": "0f723e42a2b5474cd78efe3b53a4b88e"
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
    "revision": "1ed8352b96498d0e1f90e66ed7325bec"
  }, {
    "url": "snippets/2023-04-15/laravel-model-truncate.png",
    "revision": "03fb50de2aed2566cd6c9891d4fcd55c"
  }, {
    "url": "snippets/2023-04-17-export-vscode-extensions-list.html",
    "revision": "0eb4cf1d577efcf2217f1abeb4178f2f"
  }, {
    "url": "snippets/2023-04-17/export-vscode-extensions-list.png",
    "revision": "091bcdd30203b678f62c45f34c5a34a3"
  }, {
    "url": "snippets/2023-05-16-retrieve-related-tables-of-a-specific-table-in-mysql.html",
    "revision": "690538dd121787ced76eaacff9915ba2"
  }, {
    "url": "snippets/2023-05-16/retrieve-related-tables-of-a-specific-table-in-mysql.png",
    "revision": "ba013ed07b09fbf3c05eb1aa158c5a3f"
  }, {
    "url": "snippets/2023-05-21-convert-png-and-jpg-to-webp.html",
    "revision": "ce123a2b5e99a6e15d2cc584dc33ce15"
  }, {
    "url": "snippets/2023-05-21/convert-png-and-jpg-to-webp.png",
    "revision": "9667e96bae19de5d23ef82768548f6c4"
  }, {
    "url": "snippets/2023-05-23-how-to-zip-or-unzip-files-from-the-linux-terminal.html",
    "revision": "3e48481ad35999799c89ef597f8db87c"
  }, {
    "url": "snippets/2023-05-23/how-to-zip-or-unzip-files-from-the-linux-terminal.png",
    "revision": "ded43dc04062ed2d54fe342abaab9a72"
  }, {
    "url": "snippets/2023-05-25-drop-all-constraints-from-all-tables-of-a-database.html",
    "revision": "12d7f25b1dd839fd42a38919fc512dd0"
  }, {
    "url": "snippets/2023-05-25-drop-all-tables-of-a-database.html",
    "revision": "52bb3d31d85827f649dbe7112b252396"
  }, {
    "url": "snippets/2023-08-03-disable-composer-https-on-project.html",
    "revision": "0b682420221ea1da477a72cf6d6a893d"
  }, {
    "url": "snippets/2023-08-03/disable-composer-https-on-project.png",
    "revision": "8947df78d8895937f77cf7e8a331da69"
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
