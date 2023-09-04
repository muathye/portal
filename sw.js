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
    "revision": "cd4c303f2cedd5cb5f6d59000a643882"
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
    "revision": "58e1a88185d3b6464e3a879e2bfbc4c2"
  }, {
    "url": "articles/2022-08-20-gitmoji.html",
    "revision": "6d369f155e320fa8d2b4af6493ff8b97"
  }, {
    "url": "articles/2022-08-20/gitmoji.png",
    "revision": "10cd81bec38ca2930018b1f612ab1e28"
  }, {
    "url": "articles/2022-08-21-realtime-input-validation.html",
    "revision": "fa031edfc8f678067a942ae079d25e60"
  }, {
    "url": "articles/2022-11-24-change-default-Laravel-breeze-in-login.html",
    "revision": "b2a52b735db46f1304ae87a48ca44a96"
  }, {
    "url": "articles/2022-11-24/change-default-Laravel-breeze-in-login.png",
    "revision": "29cc24877843dc2457df756c84676659"
  }, {
    "url": "articles/2022-12-23-laravel-nested-eager-loading-on-polymorphic-relationships.html",
    "revision": "d70aca268f54c897b36f6b0ba91d4d73"
  }, {
    "url": "articles/2022-12-23/laravel-nested-eager-loading-on-polymorphic-relationships.png",
    "revision": "8bda2d16e3c3ac285adb9ec4fdb1a58c"
  }, {
    "url": "articles/2022-12-26-add-bootstrap-datepicker-in-modal.html",
    "revision": "47a299a588278e8b70ab3e894d445a64"
  }, {
    "url": "articles/2022-12-26/modal-datetime-picker.png",
    "revision": "15769119e7cce9ba9a116fac03e9f5d6"
  }, {
    "url": "articles/2022-12-27-chatgpt-arabic-morning-azkar.html",
    "revision": "4058728990532af9f5eee6cc74ae9656"
  }, {
    "url": "articles/2022-12-27/morning-azkar.png",
    "revision": "6f92ec237639cc9874eef93d02fd24ec"
  }, {
    "url": "articles/2023-03-08-mini-self-hosted-version-chatgpt.html",
    "revision": "3edee77288ea7d2cc1ab3fecf910ee96"
  }, {
    "url": "articles/2023-03-08/mini-self-hosted-verison-chatgpt.png",
    "revision": "a20d809a2b93470f70bed0c150f3502c"
  }, {
    "url": "articles/2023-03-09-from-javascript-to-mastring-nodejs.html",
    "revision": "2812dba1028fe008787ff79dd1344568"
  }, {
    "url": "articles/2023-03-09/from-javascript-to-mastring-nodejs.png",
    "revision": "270f55fffea36219b66a63fbe03ff497"
  }, {
    "url": "articles/2023-04-10-add-ssh-to-bitbucket-for-windows.html",
    "revision": "00e46264cefce483dd447ea5a2788c9c"
  }, {
    "url": "articles/2023-04-17-export-vscode-extensions-list-and-download-them.html",
    "revision": "8e2fe022cf734e8d60df9f23b6045ae1"
  }, {
    "url": "articles/2023-04-23-how-to-use-google-maps-api-to-choose-a-location-on-your-website.html",
    "revision": "84fc6e748feceafbb229169ec611eeda"
  }, {
    "url": "articles/2023-04-23/how-to-use-google-maps-api-to-choose-a-location-on-your-website.png",
    "revision": "857eca260d5fb369e5498a84df7ee9fb"
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
    "revision": "6db2f252555f9bdd022e846ac588495d"
  }, {
    "url": "articles/2023-05-17/bard-database-schema-and-implementation-in-mysql.png",
    "revision": "f3b073b6f10f42fb3a52fe5bda4268dd"
  }, {
    "url": "articles/2023-05-22-how-to-create-a-command-line-password-generator-with-nodejs.html",
    "revision": "8af8eda1f0dab86f32db8deb6ef1e8ba"
  }, {
    "url": "articles/2023-05-22/muath-ye-password-generator.png",
    "revision": "a54a570b09f66e44aef3dfc23c9055a1"
  }, {
    "url": "articles/2023-05-22/one-time-password.png",
    "revision": "28ade83e54cd48c1d8563fb301a9baba"
  }, {
    "url": "articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-1.html",
    "revision": "46fcb5f17810b33ce1cf33e51d5e443f"
  }, {
    "url": "articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-2.html",
    "revision": "c6ea5d46302d5e3dd1d5fd33fa094b3c"
  }, {
    "url": "articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-3.html",
    "revision": "a4aa00c128abe79e56035d4f67690f97"
  }, {
    "url": "articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-4.html",
    "revision": "1f170a3783dae8610da79004d85eca20"
  }, {
    "url": "articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-5.html",
    "revision": "4ed23af7ae342b453bb2285a24337183"
  }, {
    "url": "articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-6.html",
    "revision": "bb9f0725cd4aa62c62da42fca77b8a10"
  }, {
    "url": "articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-7.html",
    "revision": "2547d90fc5b328cee753e0acc9169a66"
  }, {
    "url": "articles/2023-05-30/chatgpt-conversation.png",
    "revision": "8202149fb8f9212b7f474cb1aa830dfa"
  }, {
    "url": "articles/2023-08-13-hosting-nodejs-app-on-shared-hosting.html",
    "revision": "18017057715ac5dd5246fdcd7f6244c0"
  }, {
    "url": "articles/2023-08-25-exploring-mysql-command-to-retrieve-all-columns-of-all-tables-with-available-options.html",
    "revision": "819805e57c699a08e8fa76b2804effe8"
  }, {
    "url": "assets/app.7cbf48e7.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-08-20-gitmoji.md.2cb11464.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-08-20-gitmoji.md.2cb11464.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-08-21-realtime-input-validation.md.eed93552.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-08-21-realtime-input-validation.md.eed93552.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-11-24-change-default-Laravel-breeze-in-login.md.2689e40d.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-11-24-change-default-Laravel-breeze-in-login.md.2689e40d.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-23-laravel-nested-eager-loading-on-polymorphic-relationships.md.73379128.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-23-laravel-nested-eager-loading-on-polymorphic-relationships.md.73379128.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-26-add-bootstrap-datepicker-in-modal.md.bfc211b9.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-26-add-bootstrap-datepicker-in-modal.md.bfc211b9.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-27-chatgpt-arabic-morning-azkar.md.eacf9758.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-27-chatgpt-arabic-morning-azkar.md.eacf9758.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-03-08-mini-self-hosted-version-chatgpt.md.262269a4.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-03-08-mini-self-hosted-version-chatgpt.md.262269a4.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-03-09-from-javascript-to-mastring-nodejs.md.b4c45f4b.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-03-09-from-javascript-to-mastring-nodejs.md.b4c45f4b.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-10-add-ssh-to-bitbucket-for-windows.md.b908c55c.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-10-add-ssh-to-bitbucket-for-windows.md.b908c55c.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-17-export-vscode-extensions-list-and-download-them.md.0222d6b8.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-17-export-vscode-extensions-list-and-download-them.md.0222d6b8.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-23-how-to-use-google-maps-api-to-choose-a-location-on-your-website.md.93e50e32.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-23-how-to-use-google-maps-api-to-choose-a-location-on-your-website.md.93e50e32.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-17-bard-database-schema-and-implementation-in-mysql.md.05dafe8a.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-17-bard-database-schema-and-implementation-in-mysql.md.05dafe8a.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-22-how-to-create-a-command-line-password-generator-with-nodejs.md.cfda23df.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-22-how-to-create-a-command-line-password-generator-with-nodejs.md.cfda23df.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-1.md.6b198112.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-1.md.6b198112.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-2.md.04667f5f.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-2.md.04667f5f.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-3.md.33357479.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-3.md.33357479.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-4.md.b50cf7a2.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-4.md.b50cf7a2.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-5.md.b04c82b1.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-5.md.b04c82b1.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-6.md.85701682.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-6.md.85701682.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-7.md.13deedc4.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-7.md.13deedc4.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-08-13-hosting-nodejs-app-on-shared-hosting.md.cd841e4b.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-08-13-hosting-nodejs-app-on-shared-hosting.md.cd841e4b.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-08-25-exploring-mysql-command-to-retrieve-all-columns-of-all-tables-with-available-options.md.cc4bf136.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-08-25-exploring-mysql-command-to-retrieve-all-columns-of-all-tables-with-available-options.md.cc4bf136.lean.js",
    "revision": null
  }, {
    "url": "assets/articles.md.9c9fd4c7.js",
    "revision": null
  }, {
    "url": "assets/articles.md.9c9fd4c7.lean.js",
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
    "url": "assets/chunks/muath-ye-password-generator.6ab5a0fb.js",
    "revision": null
  }, {
    "url": "assets/chunks/theme.089036e4.js",
    "revision": null
  }, {
    "url": "assets/en_index.md.1da6de14.js",
    "revision": null
  }, {
    "url": "assets/en_index.md.1da6de14.lean.js",
    "revision": null
  }, {
    "url": "assets/index.md.40f8eb7e.js",
    "revision": null
  }, {
    "url": "assets/index.md.40f8eb7e.lean.js",
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
    "url": "assets/projects.md.315e6bc3.js",
    "revision": null
  }, {
    "url": "assets/projects.md.315e6bc3.lean.js",
    "revision": null
  }, {
    "url": "assets/resume.md.05ebc32d.js",
    "revision": null
  }, {
    "url": "assets/resume.md.05ebc32d.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-02-14-extend-laravel-validator-morph-exists.md.d4117085.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-02-14-extend-laravel-validator-morph-exists.md.d4117085.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-01-git-update-last-commit-message.md.f0d5204b.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-01-git-update-last-commit-message.md.f0d5204b.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-19-array-destructuring-in-php.md.19c4f809.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-19-array-destructuring-in-php.md.19c4f809.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-19-git-developers-list.md.a08e19b5.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-19-git-developers-list.md.a08e19b5.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-19-import-db-using-command-line.md.3d01856e.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-19-import-db-using-command-line.md.3d01856e.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-04-15-laravel-model-truncate.md.8ccda4b7.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-04-15-laravel-model-truncate.md.8ccda4b7.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-04-17-export-vscode-extensions-list.md.263ffb2b.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-04-17-export-vscode-extensions-list.md.263ffb2b.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-16-retrieve-related-tables-of-a-specific-table-in-mysql.md.ae02b356.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-16-retrieve-related-tables-of-a-specific-table-in-mysql.md.ae02b356.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-21-convert-png-and-jpg-to-webp.md.8eada7fc.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-21-convert-png-and-jpg-to-webp.md.8eada7fc.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-23-how-to-zip-or-unzip-files-from-the-linux-terminal.md.7c1fd8dd.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-23-how-to-zip-or-unzip-files-from-the-linux-terminal.md.7c1fd8dd.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-25-drop-all-constraints-from-all-tables-of-a-database.md.10c50417.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-25-drop-all-constraints-from-all-tables-of-a-database.md.10c50417.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-25-drop-all-tables-of-a-database.md.a97cbb97.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-25-drop-all-tables-of-a-database.md.a97cbb97.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-08-03-disable-composer-https-on-project.md.9c8f728e.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-08-03-disable-composer-https-on-project.md.9c8f728e.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-09-03-git-sync-local-branches-with-remote.md.dc377395.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-09-03-git-sync-local-branches-with-remote.md.dc377395.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets.md.603440ed.js",
    "revision": null
  }, {
    "url": "assets/snippets.md.603440ed.lean.js",
    "revision": null
  }, {
    "url": "assets/style.4ebf1563.css",
    "revision": null
  }, {
    "url": "en/index.html",
    "revision": "393830c293e7423a83d4163dd77c131f"
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
    "revision": "ed53f7d3014ff2c7890cbded5f187f26"
  }, {
    "url": "masked-icon.svg",
    "revision": "8b8e61771570c80c5470b1adaf2c44ee"
  }, {
    "url": "mstile-150x150.png",
    "revision": "f020256b2109323117574ed955e15b13"
  }, {
    "url": "projects.html",
    "revision": "b846818a53c69155ebd664f620b03c25"
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
    "revision": "1e388d345bab6ce8d7a5b46577211aa0"
  }, {
    "url": "robots.txt",
    "revision": "5e0bd1c281a62a380d7a948085bfe2d1"
  }, {
    "url": "safari-pinned-tab.svg",
    "revision": "896ff3300aa31eae3864243b6f116f66"
  }, {
    "url": "snippets.html",
    "revision": "25bd62ee6b383d5ea30b28c83e0dfe42"
  }, {
    "url": "snippets/2023-02-14-extend-laravel-validator-morph-exists.html",
    "revision": "864f009ff9dfb018fe99fe37c890eacb"
  }, {
    "url": "snippets/2023-02-14/extend-laravel-validator-morph-exists.png",
    "revision": "939cac5b2999fa54ead181c8895af485"
  }, {
    "url": "snippets/2023-03-01-git-update-last-commit-message.html",
    "revision": "e7e398271a836843b143d3b9247cd70f"
  }, {
    "url": "snippets/2023-03-01/git-update-last-commit-message.png",
    "revision": "d0fd23ca23359fe078f2706e35f683fa"
  }, {
    "url": "snippets/2023-03-19-array-destructuring-in-php.html",
    "revision": "4b31700aff5f2267500e1e7805a4a5e1"
  }, {
    "url": "snippets/2023-03-19-git-developers-list.html",
    "revision": "d613a07f43e8c982d8532888dfc2aed8"
  }, {
    "url": "snippets/2023-03-19-import-db-using-command-line.html",
    "revision": "9f08daaec3511adc3d8fe78016f5bafd"
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
    "revision": "334911cff0393ff3d7e38fdb93dd4463"
  }, {
    "url": "snippets/2023-04-15/laravel-model-truncate.png",
    "revision": "03fb50de2aed2566cd6c9891d4fcd55c"
  }, {
    "url": "snippets/2023-04-17-export-vscode-extensions-list.html",
    "revision": "08a29bf465cb4ff642130c1b6465ed76"
  }, {
    "url": "snippets/2023-04-17/export-vscode-extensions-list.png",
    "revision": "091bcdd30203b678f62c45f34c5a34a3"
  }, {
    "url": "snippets/2023-05-16-retrieve-related-tables-of-a-specific-table-in-mysql.html",
    "revision": "1a41dbf11bf31bf7ff33b5ce67fcf3f5"
  }, {
    "url": "snippets/2023-05-16/retrieve-related-tables-of-a-specific-table-in-mysql.png",
    "revision": "ba013ed07b09fbf3c05eb1aa158c5a3f"
  }, {
    "url": "snippets/2023-05-21-convert-png-and-jpg-to-webp.html",
    "revision": "45c9d5e6377c829ed7398205d03c2160"
  }, {
    "url": "snippets/2023-05-21/convert-png-and-jpg-to-webp.png",
    "revision": "9667e96bae19de5d23ef82768548f6c4"
  }, {
    "url": "snippets/2023-05-23-how-to-zip-or-unzip-files-from-the-linux-terminal.html",
    "revision": "bf4d8b9b17a70613a42eaca71d8e96b9"
  }, {
    "url": "snippets/2023-05-23/how-to-zip-or-unzip-files-from-the-linux-terminal.png",
    "revision": "ded43dc04062ed2d54fe342abaab9a72"
  }, {
    "url": "snippets/2023-05-25-drop-all-constraints-from-all-tables-of-a-database.html",
    "revision": "c96e8b2fa44039386cbc1becdb83b5d5"
  }, {
    "url": "snippets/2023-05-25-drop-all-tables-of-a-database.html",
    "revision": "e7d884dd661bcb4e3332539c2a87890c"
  }, {
    "url": "snippets/2023-08-03-disable-composer-https-on-project.html",
    "revision": "9615215037c9e41a99831e4ec44b2b87"
  }, {
    "url": "snippets/2023-08-03/disable-composer-https-on-project.png",
    "revision": "8947df78d8895937f77cf7e8a331da69"
  }, {
    "url": "snippets/2023-09-03-git-sync-local-branches-with-remote.html",
    "revision": "16b5464158be0ae14827272121b87cea"
  }, {
    "url": "snippets/2023-09-03/git-sync-local-branches-with-remote.png",
    "revision": "550e38ba21e6a5705d4413e1b773e366"
  }, {
    "url": "snippets/2023-09-03/local-branches-after-git-fetch-prune.png",
    "revision": "264dd41514ea4bffde374ea0efd83d0b"
  }, {
    "url": "snippets/2023-09-03/local-branches-before-git-fetch-prune.png",
    "revision": "bf876882e2fc6470600350e744425a89"
  }, {
    "url": "snippets/2023-09-03/remote-branches.png",
    "revision": "911554955b419363ed6f42ea00ca8a6f"
  }, {
    "url": "snippets/2023-09-03/when-git-fetch-prune.png",
    "revision": "ed0785030217c76e7b7f5d4a235b08a1"
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
