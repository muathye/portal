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
    "revision": "9d6e5b1376fc8bdd1502a89c5de0a468"
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
    "revision": "032dcae29f45ac421bf18aa46c588465"
  }, {
    "url": "articles/2022-08-20-gitmoji.html",
    "revision": "68e2a9092b8c5cd149b6d144a2adb437"
  }, {
    "url": "articles/2022-08-21-realtime-input-validation.html",
    "revision": "a4f2616a03c8a056c846b2fe5380a10e"
  }, {
    "url": "articles/2022-11-24-change-default-Laravel-breeze-in-login.html",
    "revision": "885c33b1a844375717312c971b7ddbd1"
  }, {
    "url": "articles/2022-12-23-laravel-nested-eager-loading-on-polymorphic-relationships.html",
    "revision": "bb05f8c3edb34f7c83d81b05ba782f57"
  }, {
    "url": "articles/2022-12-26-add-bootstrap-datepicker-in-modal.html",
    "revision": "be5d908a8d68a2728855d81f4a86aea8"
  }, {
    "url": "articles/2022-12-26/modal-datetime-picker.png",
    "revision": "15769119e7cce9ba9a116fac03e9f5d6"
  }, {
    "url": "articles/2022-12-27-chatgpt-arabic-morning-azkar.html",
    "revision": "5e7c76fa534cc4ee9adfd741c50aaff3"
  }, {
    "url": "articles/2022-12-27/morning-azkar.png",
    "revision": "6f92ec237639cc9874eef93d02fd24ec"
  }, {
    "url": "articles/2023-03-08-mini-self-hosted-version-chatgpt.html",
    "revision": "e3d7cccd8a769f37ace51646f9ce3d43"
  }, {
    "url": "articles/2023-03-08/mini-self-hosted-verison-chatgpt.png",
    "revision": "a20d809a2b93470f70bed0c150f3502c"
  }, {
    "url": "articles/2023-03-09-from-javascript-to-mastring-nodejs.html",
    "revision": "f94559cecf46064b3f4a96ce82a2ac3d"
  }, {
    "url": "articles/2023-04-10-add-ssh-to-bitbucket-for-windows.html",
    "revision": "9ef886e6492053bf7bebec6974da6310"
  }, {
    "url": "articles/2023-04-17-export-vscode-extensions-list-and-download-them.html",
    "revision": "464a9e4bd7851930eec39adea6929558"
  }, {
    "url": "articles/2023-04-23-how-to-use-google-maps-api-to-choose-a-location-on-your-website.html",
    "revision": "8371867a48bce15c535726aa95991745"
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
    "revision": "10eb6eb2af9df5b28008101359bcaf73"
  }, {
    "url": "articles/2023-05-22-how-to-create-a-command-line-password-generator-with-nodejs.html",
    "revision": "cec5ba6f5a84ed113f52d05ccb138023"
  }, {
    "url": "articles/2023-05-22/muath-ye-password-generator.png",
    "revision": "a54a570b09f66e44aef3dfc23c9055a1"
  }, {
    "url": "articles/2023-05-22/one-time-password.png",
    "revision": "28ade83e54cd48c1d8563fb301a9baba"
  }, {
    "url": "articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-1.html",
    "revision": "5d148ab9c98942cdf22f90e4b090b65c"
  }, {
    "url": "articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-2.html",
    "revision": "d85e58c45f3497cb23246a415e7aa748"
  }, {
    "url": "articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-3.html",
    "revision": "52931aa202598ca0ffdb5ca510f6cb1f"
  }, {
    "url": "articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-4.html",
    "revision": "9a24924f510bd6746abde7117b47486d"
  }, {
    "url": "articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-5.html",
    "revision": "fd18f9e1b335ee3272ac330faa651ab8"
  }, {
    "url": "articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-6.html",
    "revision": "3b23ee6f8f8e9477edd245eb57ecc4b0"
  }, {
    "url": "articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-7.html",
    "revision": "8ed2228bdc80d18f9708a4874afafb71"
  }, {
    "url": "articles/2023-05-30/chatgpt-conversation.png",
    "revision": "8202149fb8f9212b7f474cb1aa830dfa"
  }, {
    "url": "articles/2023-08-25-exploring-mysql-command-to-retrieve-all-columns-of-all-tables-with-available-options.html",
    "revision": "f30aaa3ec4d12ae751f3b56d53ed2c32"
  }, {
    "url": "assets/app.7cbf48e7.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-08-20-gitmoji.md.20ff0777.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-08-20-gitmoji.md.20ff0777.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-08-21-realtime-input-validation.md.0e04e537.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-08-21-realtime-input-validation.md.0e04e537.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-11-24-change-default-Laravel-breeze-in-login.md.8bfab1a4.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-11-24-change-default-Laravel-breeze-in-login.md.8bfab1a4.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-23-laravel-nested-eager-loading-on-polymorphic-relationships.md.43844e0f.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-23-laravel-nested-eager-loading-on-polymorphic-relationships.md.43844e0f.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-26-add-bootstrap-datepicker-in-modal.md.06aeb874.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-26-add-bootstrap-datepicker-in-modal.md.06aeb874.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-27-chatgpt-arabic-morning-azkar.md.21f87737.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-27-chatgpt-arabic-morning-azkar.md.21f87737.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-03-08-mini-self-hosted-version-chatgpt.md.77fca4a4.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-03-08-mini-self-hosted-version-chatgpt.md.77fca4a4.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-03-09-from-javascript-to-mastring-nodejs.md.f2cb4367.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-03-09-from-javascript-to-mastring-nodejs.md.f2cb4367.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-10-add-ssh-to-bitbucket-for-windows.md.49182907.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-10-add-ssh-to-bitbucket-for-windows.md.49182907.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-17-export-vscode-extensions-list-and-download-them.md.efedf772.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-17-export-vscode-extensions-list-and-download-them.md.efedf772.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-23-how-to-use-google-maps-api-to-choose-a-location-on-your-website.md.0f0482d1.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-23-how-to-use-google-maps-api-to-choose-a-location-on-your-website.md.0f0482d1.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-17-bard-database-schema-and-implementation-in-mysql.md.dc5234df.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-17-bard-database-schema-and-implementation-in-mysql.md.dc5234df.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-22-how-to-create-a-command-line-password-generator-with-nodejs.md.3fe702b7.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-22-how-to-create-a-command-line-password-generator-with-nodejs.md.3fe702b7.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-1.md.6a3b334a.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-1.md.6a3b334a.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-2.md.f4e5e82a.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-2.md.f4e5e82a.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-3.md.87011f13.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-3.md.87011f13.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-4.md.d40e272e.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-4.md.d40e272e.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-5.md.37aac14f.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-5.md.37aac14f.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-6.md.b0c2064f.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-6.md.b0c2064f.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-7.md.edf0cb40.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-7.md.edf0cb40.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-08-25-exploring-mysql-command-to-retrieve-all-columns-of-all-tables-with-available-options.md.36db3e06.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-08-25-exploring-mysql-command-to-retrieve-all-columns-of-all-tables-with-available-options.md.36db3e06.lean.js",
    "revision": null
  }, {
    "url": "assets/articles.md.a7a158c2.js",
    "revision": null
  }, {
    "url": "assets/articles.md.a7a158c2.lean.js",
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
    "url": "assets/en_index.md.17f571d8.js",
    "revision": null
  }, {
    "url": "assets/en_index.md.17f571d8.lean.js",
    "revision": null
  }, {
    "url": "assets/index.md.7910daeb.js",
    "revision": null
  }, {
    "url": "assets/index.md.7910daeb.lean.js",
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
    "url": "assets/projects.md.abef9846.js",
    "revision": null
  }, {
    "url": "assets/projects.md.abef9846.lean.js",
    "revision": null
  }, {
    "url": "assets/resume.md.9b4bdd76.js",
    "revision": null
  }, {
    "url": "assets/resume.md.9b4bdd76.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-02-14-extend-laravel-validator-morph-exists.md.fe9cfbbe.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-02-14-extend-laravel-validator-morph-exists.md.fe9cfbbe.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-01-git-update-last-commit-message.md.13b688c2.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-01-git-update-last-commit-message.md.13b688c2.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-19-array-destructuring-in-php.md.24c1096f.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-19-array-destructuring-in-php.md.24c1096f.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-19-git-developers-list.md.8fef305a.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-19-git-developers-list.md.8fef305a.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-19-import-db-using-command-line.md.1612a8d2.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-19-import-db-using-command-line.md.1612a8d2.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-04-15-laravel-model-truncate.md.d99a82d5.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-04-15-laravel-model-truncate.md.d99a82d5.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-04-17-export-vscode-extensions-list.md.7e46a109.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-04-17-export-vscode-extensions-list.md.7e46a109.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-16-retrieve-related-tables-of-a-specific-table-in-mysql.md.422e4507.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-16-retrieve-related-tables-of-a-specific-table-in-mysql.md.422e4507.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-21-convert-png-and-jpg-to-webp.md.30c5e3aa.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-21-convert-png-and-jpg-to-webp.md.30c5e3aa.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-23-how-to-zip-or-unzip-files-from-the-linux-terminal.md.d0cbaec9.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-23-how-to-zip-or-unzip-files-from-the-linux-terminal.md.d0cbaec9.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-25-drop-all-constraints-from-all-tables-of-a-database.md.833120ed.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-25-drop-all-constraints-from-all-tables-of-a-database.md.833120ed.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-25-drop-all-tables-of-a-database.md.2fb4ae81.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-25-drop-all-tables-of-a-database.md.2fb4ae81.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-08-03-disable-composer-https-on-project.md.f90ebd38.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-08-03-disable-composer-https-on-project.md.f90ebd38.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-09-03-git-sync-local-branches-with-remote.md.ef5f7e60.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-09-03-git-sync-local-branches-with-remote.md.ef5f7e60.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets.md.ab494768.js",
    "revision": null
  }, {
    "url": "assets/snippets.md.ab494768.lean.js",
    "revision": null
  }, {
    "url": "assets/style.4ebf1563.css",
    "revision": null
  }, {
    "url": "en/index.html",
    "revision": "5ca692b4aabd37ae17dbbb5cd4673eb1"
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
    "revision": "624c1108d69880d866bdc402fe068ec5"
  }, {
    "url": "masked-icon.svg",
    "revision": "8b8e61771570c80c5470b1adaf2c44ee"
  }, {
    "url": "mstile-150x150.png",
    "revision": "f020256b2109323117574ed955e15b13"
  }, {
    "url": "projects.html",
    "revision": "a7ac0586e3ae925c5bf24b798805a764"
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
    "revision": "6546632872da67433c706548fba81fa2"
  }, {
    "url": "robots.txt",
    "revision": "5e0bd1c281a62a380d7a948085bfe2d1"
  }, {
    "url": "safari-pinned-tab.svg",
    "revision": "896ff3300aa31eae3864243b6f116f66"
  }, {
    "url": "snippets.html",
    "revision": "db72abdf0473a76bdaf0f2197ee27932"
  }, {
    "url": "snippets/2023-02-14-extend-laravel-validator-morph-exists.html",
    "revision": "29ee8b82d06d903c7365a5950623bcdf"
  }, {
    "url": "snippets/2023-02-14/extend-laravel-validator-morph-exists.png",
    "revision": "939cac5b2999fa54ead181c8895af485"
  }, {
    "url": "snippets/2023-03-01-git-update-last-commit-message.html",
    "revision": "b430f42defc491ae3b39c4550a251b43"
  }, {
    "url": "snippets/2023-03-01/git-update-last-commit-message.png",
    "revision": "d0fd23ca23359fe078f2706e35f683fa"
  }, {
    "url": "snippets/2023-03-19-array-destructuring-in-php.html",
    "revision": "0e66105f34a9ad370eec718910b49910"
  }, {
    "url": "snippets/2023-03-19-git-developers-list.html",
    "revision": "3bff05e39eebb23d7d11429aa5071023"
  }, {
    "url": "snippets/2023-03-19-import-db-using-command-line.html",
    "revision": "79b941edeb1b3772f1e6e244ffb16b21"
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
    "revision": "da2c782eab85fc5d0bdc3b6f10447b68"
  }, {
    "url": "snippets/2023-04-15/laravel-model-truncate.png",
    "revision": "03fb50de2aed2566cd6c9891d4fcd55c"
  }, {
    "url": "snippets/2023-04-17-export-vscode-extensions-list.html",
    "revision": "edf7f81e62153315cc4cf169a6cf4d43"
  }, {
    "url": "snippets/2023-04-17/export-vscode-extensions-list.png",
    "revision": "091bcdd30203b678f62c45f34c5a34a3"
  }, {
    "url": "snippets/2023-05-16-retrieve-related-tables-of-a-specific-table-in-mysql.html",
    "revision": "69d24421abff9023deb9fa5539625ba0"
  }, {
    "url": "snippets/2023-05-16/retrieve-related-tables-of-a-specific-table-in-mysql.png",
    "revision": "ba013ed07b09fbf3c05eb1aa158c5a3f"
  }, {
    "url": "snippets/2023-05-21-convert-png-and-jpg-to-webp.html",
    "revision": "a898ac1e6ebac0ad1124c10862f73e97"
  }, {
    "url": "snippets/2023-05-21/convert-png-and-jpg-to-webp.png",
    "revision": "9667e96bae19de5d23ef82768548f6c4"
  }, {
    "url": "snippets/2023-05-23-how-to-zip-or-unzip-files-from-the-linux-terminal.html",
    "revision": "77dc2615ec567e32beca7bbaa40942c3"
  }, {
    "url": "snippets/2023-05-23/how-to-zip-or-unzip-files-from-the-linux-terminal.png",
    "revision": "ded43dc04062ed2d54fe342abaab9a72"
  }, {
    "url": "snippets/2023-05-25-drop-all-constraints-from-all-tables-of-a-database.html",
    "revision": "53f3d2acc7488e5a4c4485d3190653a7"
  }, {
    "url": "snippets/2023-05-25-drop-all-tables-of-a-database.html",
    "revision": "1b3e5fe25f2c10e07f474d284b2ce3e7"
  }, {
    "url": "snippets/2023-08-03-disable-composer-https-on-project.html",
    "revision": "d46a075e28782dd019bc3628c1a1c9e8"
  }, {
    "url": "snippets/2023-08-03/disable-composer-https-on-project.png",
    "revision": "8947df78d8895937f77cf7e8a331da69"
  }, {
    "url": "snippets/2023-09-03-git-sync-local-branches-with-remote.html",
    "revision": "090a2867cd9709ff6f541e082ea4da61"
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
