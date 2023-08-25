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
define(['./workbox-3d51fe70'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "404.html",
    "revision": "002789b225bcba5369d92a361867092b"
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
    "revision": "0b4043eba1fe628cbaa75d7360cdf3eb"
  }, {
    "url": "articles/2022-08-20-gitmoji.html",
    "revision": "34af7c1d83e9b1b845fa55f9d3fa5bf6"
  }, {
    "url": "articles/2022-08-21-realtime-input-validation.html",
    "revision": "ec35625049757ab16ffce760122e3d1f"
  }, {
    "url": "articles/2022-11-24-change-default-Laravel-breeze-in-login.html",
    "revision": "a636e756690d9bf8b8ada5da9204d0b9"
  }, {
    "url": "articles/2022-12-23-laravel-nested-eager-loading-on-polymorphic-relationships.html",
    "revision": "e388c5ba2c9a6930c4817dd529f39e11"
  }, {
    "url": "articles/2022-12-26-add-bootstrap-datepicker-in-modal.html",
    "revision": "86341c42fb6735c250035f3fea5dd22f"
  }, {
    "url": "articles/2022-12-26/modal-datetime-picker.png",
    "revision": "15769119e7cce9ba9a116fac03e9f5d6"
  }, {
    "url": "articles/2022-12-27-chatgpt-arabic-morning-azkar.html",
    "revision": "98f068600f1239ead3b6b8a8deb1c828"
  }, {
    "url": "articles/2022-12-27/morning-azkar.png",
    "revision": "6f92ec237639cc9874eef93d02fd24ec"
  }, {
    "url": "articles/2023-03-08-mini-self-hosted-version-chatgpt.html",
    "revision": "17f66909cecd619b573ab0db6170d8da"
  }, {
    "url": "articles/2023-03-08/mini-self-hosted-verison-chatgpt.png",
    "revision": "a20d809a2b93470f70bed0c150f3502c"
  }, {
    "url": "articles/2023-03-09-from-javascript-to-mastring-nodejs.html",
    "revision": "f44a0c05f844db73bb555557fd3c078c"
  }, {
    "url": "articles/2023-04-10-add-ssh-to-bitbucket-for-windows.html",
    "revision": "4e4d90e71ab658f4f4e305d4255d9f7c"
  }, {
    "url": "articles/2023-04-17-export-vscode-extensions-list-and-download-them.html",
    "revision": "1eb07182fb428814f6f89aa66396f769"
  }, {
    "url": "articles/2023-04-23-how-to-use-google-maps-api-to-choose-a-location-on-your-website.html",
    "revision": "dae0a7361a2beeb088b5661eac812ef5"
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
    "revision": "37d9828913808e9ee679cbe105276900"
  }, {
    "url": "articles/2023-05-22-how-to-create-a-command-line-password-generator-with-nodejs.html",
    "revision": "19b429dafe7a4ae1bcdd8fd9f26bc12a"
  }, {
    "url": "articles/2023-05-22/muath-ye-password-generator.png",
    "revision": "a54a570b09f66e44aef3dfc23c9055a1"
  }, {
    "url": "articles/2023-05-22/one-time-password.png",
    "revision": "28ade83e54cd48c1d8563fb301a9baba"
  }, {
    "url": "articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-1.html",
    "revision": "ef69376b8706f472dace46a904960dd5"
  }, {
    "url": "articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-2.html",
    "revision": "921edb7a601cc6d8c0c724868e393e15"
  }, {
    "url": "articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-3.html",
    "revision": "fe18f18403a671e5739ecf098c33fffe"
  }, {
    "url": "articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-4.html",
    "revision": "6644818b157b9b6be6f0fbe7705c53c2"
  }, {
    "url": "articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-5.html",
    "revision": "43f69685d985aa901a569c3b9e42147a"
  }, {
    "url": "articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-6.html",
    "revision": "a8d628c7662e5a1779cb59a2ea587c18"
  }, {
    "url": "articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-7.html",
    "revision": "15b3ff11693eed7a51dfd124f2e22ff9"
  }, {
    "url": "articles/2023-05-30/chatgpt-conversation.png",
    "revision": "8202149fb8f9212b7f474cb1aa830dfa"
  }, {
    "url": "articles/2023-08-25-exploring-mysql-command-to-retrieve-all-columns-of-all-tables-with-available-options.html",
    "revision": "0434bb4fa76695240e5f4305914bd3ed"
  }, {
    "url": "assets/app.7cbf48e7.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-08-20-gitmoji.md.78cbcd3e.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-08-20-gitmoji.md.78cbcd3e.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-08-21-realtime-input-validation.md.bd7630cb.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-08-21-realtime-input-validation.md.bd7630cb.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-11-24-change-default-Laravel-breeze-in-login.md.f46b4c75.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-11-24-change-default-Laravel-breeze-in-login.md.f46b4c75.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-23-laravel-nested-eager-loading-on-polymorphic-relationships.md.d9e2c0a4.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-23-laravel-nested-eager-loading-on-polymorphic-relationships.md.d9e2c0a4.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-26-add-bootstrap-datepicker-in-modal.md.b5a71ba5.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-26-add-bootstrap-datepicker-in-modal.md.b5a71ba5.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-27-chatgpt-arabic-morning-azkar.md.8c7a8efc.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-27-chatgpt-arabic-morning-azkar.md.8c7a8efc.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-03-08-mini-self-hosted-version-chatgpt.md.dca2d00c.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-03-08-mini-self-hosted-version-chatgpt.md.dca2d00c.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-03-09-from-javascript-to-mastring-nodejs.md.52ad2f8a.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-03-09-from-javascript-to-mastring-nodejs.md.52ad2f8a.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-10-add-ssh-to-bitbucket-for-windows.md.568ce5f9.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-10-add-ssh-to-bitbucket-for-windows.md.568ce5f9.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-17-export-vscode-extensions-list-and-download-them.md.49351642.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-17-export-vscode-extensions-list-and-download-them.md.49351642.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-23-how-to-use-google-maps-api-to-choose-a-location-on-your-website.md.f5b70f13.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-23-how-to-use-google-maps-api-to-choose-a-location-on-your-website.md.f5b70f13.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-17-bard-database-schema-and-implementation-in-mysql.md.bc5b201f.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-17-bard-database-schema-and-implementation-in-mysql.md.bc5b201f.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-22-how-to-create-a-command-line-password-generator-with-nodejs.md.3cf91282.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-22-how-to-create-a-command-line-password-generator-with-nodejs.md.3cf91282.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-1.md.a07bcfa1.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-1.md.a07bcfa1.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-2.md.8977d1ca.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-2.md.8977d1ca.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-3.md.caba3545.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-3.md.caba3545.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-4.md.744474af.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-4.md.744474af.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-5.md.20b85e69.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-5.md.20b85e69.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-6.md.6fdf088f.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-6.md.6fdf088f.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-7.md.34aeedc6.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-7.md.34aeedc6.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-08-25-exploring-mysql-command-to-retrieve-all-columns-of-all-tables-with-available-options.md.da2e73dd.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-08-25-exploring-mysql-command-to-retrieve-all-columns-of-all-tables-with-available-options.md.da2e73dd.lean.js",
    "revision": null
  }, {
    "url": "assets/articles.md.9bba9e2f.js",
    "revision": null
  }, {
    "url": "assets/articles.md.9bba9e2f.lean.js",
    "revision": null
  }, {
    "url": "assets/chunks/chatgpt-prompt-engineering-for-developers-part-1.242329a7.js",
    "revision": null
  }, {
    "url": "assets/chunks/facebook.9107dbc3.js",
    "revision": null
  }, {
    "url": "assets/chunks/framework.0c55f2c5.js",
    "revision": null
  }, {
    "url": "assets/chunks/theme.089036e4.js",
    "revision": null
  }, {
    "url": "assets/en_index.md.189c35dd.js",
    "revision": null
  }, {
    "url": "assets/en_index.md.189c35dd.lean.js",
    "revision": null
  }, {
    "url": "assets/index.md.7567d28e.js",
    "revision": null
  }, {
    "url": "assets/index.md.7567d28e.lean.js",
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
    "url": "assets/projects.md.8568c44f.js",
    "revision": null
  }, {
    "url": "assets/projects.md.8568c44f.lean.js",
    "revision": null
  }, {
    "url": "assets/resume.md.d385b613.js",
    "revision": null
  }, {
    "url": "assets/resume.md.d385b613.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-02-14-extend-laravel-validator-morph-exists.md.fa3eea6b.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-02-14-extend-laravel-validator-morph-exists.md.fa3eea6b.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-01-git-update-last-commit-message.md.96befed5.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-01-git-update-last-commit-message.md.96befed5.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-19-array-destructuring-in-php.md.a0f1c2c3.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-19-array-destructuring-in-php.md.a0f1c2c3.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-19-git-developers-list.md.b7e6296d.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-19-git-developers-list.md.b7e6296d.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-19-import-db-using-command-line.md.f0b4fce0.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-19-import-db-using-command-line.md.f0b4fce0.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-04-15-laravel-model-truncate.md.c33e2b15.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-04-15-laravel-model-truncate.md.c33e2b15.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-04-17-export-vscode-extensions-list.md.6a916341.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-04-17-export-vscode-extensions-list.md.6a916341.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-16-retrieve-related-tables-of-a-specific-table-in-mysql.md.1cac9669.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-16-retrieve-related-tables-of-a-specific-table-in-mysql.md.1cac9669.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-21-convert-png-and-jpg-to-webp.md.a464583c.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-21-convert-png-and-jpg-to-webp.md.a464583c.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-23-how-to-zip-or-unzip-files-from-the-linux-terminal.md.6835538e.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-23-how-to-zip-or-unzip-files-from-the-linux-terminal.md.6835538e.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-25-drop-all-constraints-from-all-tables-of-a-database.md.c9fbd5c2.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-25-drop-all-constraints-from-all-tables-of-a-database.md.c9fbd5c2.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-25-drop-all-tables-of-a-database.md.2fa3a658.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-25-drop-all-tables-of-a-database.md.2fa3a658.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-08-03-disable-composer-https-on-project.md.1585f101.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-08-03-disable-composer-https-on-project.md.1585f101.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets.md.63941160.js",
    "revision": null
  }, {
    "url": "assets/snippets.md.63941160.lean.js",
    "revision": null
  }, {
    "url": "assets/style.a25a1e82.css",
    "revision": null
  }, {
    "url": "en/index.html",
    "revision": "3b40f7a8cb560d04af34bab96703add2"
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
    "revision": "9f35dcf7bac68dc2ba140e9fed8c6a5c"
  }, {
    "url": "masked-icon.svg",
    "revision": "8b8e61771570c80c5470b1adaf2c44ee"
  }, {
    "url": "mstile-150x150.png",
    "revision": "f020256b2109323117574ed955e15b13"
  }, {
    "url": "projects.html",
    "revision": "0225a797c71f7a3523ad11e4a4f7a0a4"
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
    "revision": "ef6def2a732fe46a08e332c68caed653"
  }, {
    "url": "robots.txt",
    "revision": "5e0bd1c281a62a380d7a948085bfe2d1"
  }, {
    "url": "safari-pinned-tab.svg",
    "revision": "896ff3300aa31eae3864243b6f116f66"
  }, {
    "url": "snippets.html",
    "revision": "02e60e1cc0f1d85ce5e74212dd1905ce"
  }, {
    "url": "snippets/2023-02-14-extend-laravel-validator-morph-exists.html",
    "revision": "7cfbdf4d29b396e9c805c1ef832e5436"
  }, {
    "url": "snippets/2023-02-14/extend-laravel-validator-morph-exists.png",
    "revision": "939cac5b2999fa54ead181c8895af485"
  }, {
    "url": "snippets/2023-03-01-git-update-last-commit-message.html",
    "revision": "355628350352e38a8b33646ebd119019"
  }, {
    "url": "snippets/2023-03-01/git-update-last-commit-message.png",
    "revision": "d0fd23ca23359fe078f2706e35f683fa"
  }, {
    "url": "snippets/2023-03-19-array-destructuring-in-php.html",
    "revision": "751b433b0d3bfc6e1f3ebafaf7ec3d94"
  }, {
    "url": "snippets/2023-03-19-git-developers-list.html",
    "revision": "ed63d86250a5e5422c8afa69970b5abd"
  }, {
    "url": "snippets/2023-03-19-import-db-using-command-line.html",
    "revision": "dbabc018abf94ed6034c40de7898aeaf"
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
    "revision": "c26877e25ad342315c630eb8c4f87698"
  }, {
    "url": "snippets/2023-04-15/laravel-model-truncate.png",
    "revision": "03fb50de2aed2566cd6c9891d4fcd55c"
  }, {
    "url": "snippets/2023-04-17-export-vscode-extensions-list.html",
    "revision": "81eda938028b5effcb41b8acf4c23f6c"
  }, {
    "url": "snippets/2023-04-17/export-vscode-extensions-list.png",
    "revision": "091bcdd30203b678f62c45f34c5a34a3"
  }, {
    "url": "snippets/2023-05-16-retrieve-related-tables-of-a-specific-table-in-mysql.html",
    "revision": "321917f19180a7ca8ab10e1d4d364daf"
  }, {
    "url": "snippets/2023-05-16/retrieve-related-tables-of-a-specific-table-in-mysql.png",
    "revision": "ba013ed07b09fbf3c05eb1aa158c5a3f"
  }, {
    "url": "snippets/2023-05-21-convert-png-and-jpg-to-webp.html",
    "revision": "cbca7c64b28c7c70a9ae9263c4f37f72"
  }, {
    "url": "snippets/2023-05-21/convert-png-and-jpg-to-webp.png",
    "revision": "9667e96bae19de5d23ef82768548f6c4"
  }, {
    "url": "snippets/2023-05-23-how-to-zip-or-unzip-files-from-the-linux-terminal.html",
    "revision": "3ac308e402f6cb1b7525a9eeac76be99"
  }, {
    "url": "snippets/2023-05-23/how-to-zip-or-unzip-files-from-the-linux-terminal.png",
    "revision": "ded43dc04062ed2d54fe342abaab9a72"
  }, {
    "url": "snippets/2023-05-25-drop-all-constraints-from-all-tables-of-a-database.html",
    "revision": "ef4285caf9579fcfb8eb977d612cd9aa"
  }, {
    "url": "snippets/2023-05-25-drop-all-tables-of-a-database.html",
    "revision": "d341f14b58a7186a772bc9906b3dd2d3"
  }, {
    "url": "snippets/2023-08-03-disable-composer-https-on-project.html",
    "revision": "24a40caa16f2aefa209894d146206201"
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
