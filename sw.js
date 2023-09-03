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
    "revision": "cd3a5279c51947a6aa5d24c5bc75d7ad"
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
    "revision": "94ca8aa59a1ce0c8c94a677f4bfedac8"
  }, {
    "url": "articles/2022-08-20-gitmoji.html",
    "revision": "42e766b90751d74d474280bef510125c"
  }, {
    "url": "articles/2022-08-21-realtime-input-validation.html",
    "revision": "02b2399e5fc750f40041f6851453728e"
  }, {
    "url": "articles/2022-11-24-change-default-Laravel-breeze-in-login.html",
    "revision": "d0ea22b5e978b449331d64c0606b02c2"
  }, {
    "url": "articles/2022-12-23-laravel-nested-eager-loading-on-polymorphic-relationships.html",
    "revision": "94f1c0ccac055b1708fc846bdeea25bf"
  }, {
    "url": "articles/2022-12-26-add-bootstrap-datepicker-in-modal.html",
    "revision": "ea373428298a3fd6ed248b55310ad15f"
  }, {
    "url": "articles/2022-12-26/modal-datetime-picker.png",
    "revision": "15769119e7cce9ba9a116fac03e9f5d6"
  }, {
    "url": "articles/2022-12-27-chatgpt-arabic-morning-azkar.html",
    "revision": "2768fc80d7d433602db1fdd9971f83be"
  }, {
    "url": "articles/2022-12-27/morning-azkar.png",
    "revision": "6f92ec237639cc9874eef93d02fd24ec"
  }, {
    "url": "articles/2023-03-08-mini-self-hosted-version-chatgpt.html",
    "revision": "27dba6159402eca5dbe470f61103e566"
  }, {
    "url": "articles/2023-03-08/mini-self-hosted-verison-chatgpt.png",
    "revision": "a20d809a2b93470f70bed0c150f3502c"
  }, {
    "url": "articles/2023-03-09-from-javascript-to-mastring-nodejs.html",
    "revision": "e5bcdfe600f0e49e6729ea344c4b6025"
  }, {
    "url": "articles/2023-04-10-add-ssh-to-bitbucket-for-windows.html",
    "revision": "6d6ee3df8b9d86374bc51bb0d6a0c22a"
  }, {
    "url": "articles/2023-04-17-export-vscode-extensions-list-and-download-them.html",
    "revision": "1903af4af6f5577a30d2c228b2dd3276"
  }, {
    "url": "articles/2023-04-23-how-to-use-google-maps-api-to-choose-a-location-on-your-website.html",
    "revision": "9036975bd23c2c45bce9b829bac94eaf"
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
    "revision": "241f3b3b3370c7fd60393904ebf40663"
  }, {
    "url": "articles/2023-05-22-how-to-create-a-command-line-password-generator-with-nodejs.html",
    "revision": "49f2e594694ea3a2c98a2790d004c7c5"
  }, {
    "url": "articles/2023-05-22/muath-ye-password-generator.png",
    "revision": "a54a570b09f66e44aef3dfc23c9055a1"
  }, {
    "url": "articles/2023-05-22/one-time-password.png",
    "revision": "28ade83e54cd48c1d8563fb301a9baba"
  }, {
    "url": "articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-1.html",
    "revision": "8ec2883ecea11c5a82317f16e8f199f0"
  }, {
    "url": "articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-2.html",
    "revision": "a0862f37bdf791b6d41bfc9cea9f3432"
  }, {
    "url": "articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-3.html",
    "revision": "536293531f383d5b877f94a8a777a394"
  }, {
    "url": "articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-4.html",
    "revision": "d577c0d144871da86ed893d37754cf76"
  }, {
    "url": "articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-5.html",
    "revision": "a9998cf2f8e4f432d59b5316af9af2af"
  }, {
    "url": "articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-6.html",
    "revision": "674b152bf28e2bfb6f6fbe8e3c8eea66"
  }, {
    "url": "articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-7.html",
    "revision": "0e18f4498287aba399229ac5991820cd"
  }, {
    "url": "articles/2023-05-30/chatgpt-conversation.png",
    "revision": "8202149fb8f9212b7f474cb1aa830dfa"
  }, {
    "url": "articles/2023-08-25-exploring-mysql-command-to-retrieve-all-columns-of-all-tables-with-available-options.html",
    "revision": "44223f17049f60f8c7bc282648c5525c"
  }, {
    "url": "assets/app.7cbf48e7.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-08-20-gitmoji.md.ad971552.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-08-20-gitmoji.md.ad971552.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-08-21-realtime-input-validation.md.740da4bb.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-08-21-realtime-input-validation.md.740da4bb.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-11-24-change-default-Laravel-breeze-in-login.md.bdebdd18.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-11-24-change-default-Laravel-breeze-in-login.md.bdebdd18.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-23-laravel-nested-eager-loading-on-polymorphic-relationships.md.1e5dc30a.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-23-laravel-nested-eager-loading-on-polymorphic-relationships.md.1e5dc30a.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-26-add-bootstrap-datepicker-in-modal.md.8852ecae.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-26-add-bootstrap-datepicker-in-modal.md.8852ecae.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-27-chatgpt-arabic-morning-azkar.md.857f0b95.js",
    "revision": null
  }, {
    "url": "assets/articles_2022-12-27-chatgpt-arabic-morning-azkar.md.857f0b95.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-03-08-mini-self-hosted-version-chatgpt.md.59b499cf.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-03-08-mini-self-hosted-version-chatgpt.md.59b499cf.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-03-09-from-javascript-to-mastring-nodejs.md.37f3d59b.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-03-09-from-javascript-to-mastring-nodejs.md.37f3d59b.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-10-add-ssh-to-bitbucket-for-windows.md.8299ab4f.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-10-add-ssh-to-bitbucket-for-windows.md.8299ab4f.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-17-export-vscode-extensions-list-and-download-them.md.9e675f20.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-17-export-vscode-extensions-list-and-download-them.md.9e675f20.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-23-how-to-use-google-maps-api-to-choose-a-location-on-your-website.md.f2374198.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-04-23-how-to-use-google-maps-api-to-choose-a-location-on-your-website.md.f2374198.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-17-bard-database-schema-and-implementation-in-mysql.md.c2416af9.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-17-bard-database-schema-and-implementation-in-mysql.md.c2416af9.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-22-how-to-create-a-command-line-password-generator-with-nodejs.md.0347ad26.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-22-how-to-create-a-command-line-password-generator-with-nodejs.md.0347ad26.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-1.md.a8ae5159.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-1.md.a8ae5159.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-2.md.e97f2b2d.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-2.md.e97f2b2d.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-3.md.684ccf78.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-3.md.684ccf78.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-4.md.848601ec.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-4.md.848601ec.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-5.md.caa6505b.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-5.md.caa6505b.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-6.md.adde48db.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-6.md.adde48db.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-7.md.b412942b.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-05-30-chatgpt-prompt-engineering-for-developers-part-7.md.b412942b.lean.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-08-25-exploring-mysql-command-to-retrieve-all-columns-of-all-tables-with-available-options.md.037c2bb1.js",
    "revision": null
  }, {
    "url": "assets/articles_2023-08-25-exploring-mysql-command-to-retrieve-all-columns-of-all-tables-with-available-options.md.037c2bb1.lean.js",
    "revision": null
  }, {
    "url": "assets/articles.md.488b3d70.js",
    "revision": null
  }, {
    "url": "assets/articles.md.488b3d70.lean.js",
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
    "url": "assets/en_index.md.db6aa246.js",
    "revision": null
  }, {
    "url": "assets/en_index.md.db6aa246.lean.js",
    "revision": null
  }, {
    "url": "assets/index.md.1ef265ae.js",
    "revision": null
  }, {
    "url": "assets/index.md.1ef265ae.lean.js",
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
    "url": "assets/projects.md.53e551de.js",
    "revision": null
  }, {
    "url": "assets/projects.md.53e551de.lean.js",
    "revision": null
  }, {
    "url": "assets/resume.md.72c2ed83.js",
    "revision": null
  }, {
    "url": "assets/resume.md.72c2ed83.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-02-14-extend-laravel-validator-morph-exists.md.addeb8b1.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-02-14-extend-laravel-validator-morph-exists.md.addeb8b1.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-01-git-update-last-commit-message.md.0b7f551d.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-01-git-update-last-commit-message.md.0b7f551d.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-19-array-destructuring-in-php.md.ac3e25d9.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-19-array-destructuring-in-php.md.ac3e25d9.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-19-git-developers-list.md.8ffd32e7.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-19-git-developers-list.md.8ffd32e7.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-19-import-db-using-command-line.md.34dbc77d.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-03-19-import-db-using-command-line.md.34dbc77d.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-04-15-laravel-model-truncate.md.94373568.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-04-15-laravel-model-truncate.md.94373568.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-04-17-export-vscode-extensions-list.md.5e130873.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-04-17-export-vscode-extensions-list.md.5e130873.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-16-retrieve-related-tables-of-a-specific-table-in-mysql.md.95719d10.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-16-retrieve-related-tables-of-a-specific-table-in-mysql.md.95719d10.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-21-convert-png-and-jpg-to-webp.md.5d8875cf.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-21-convert-png-and-jpg-to-webp.md.5d8875cf.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-23-how-to-zip-or-unzip-files-from-the-linux-terminal.md.889b8063.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-23-how-to-zip-or-unzip-files-from-the-linux-terminal.md.889b8063.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-25-drop-all-constraints-from-all-tables-of-a-database.md.a6ccd92d.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-25-drop-all-constraints-from-all-tables-of-a-database.md.a6ccd92d.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-25-drop-all-tables-of-a-database.md.0338eab8.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-05-25-drop-all-tables-of-a-database.md.0338eab8.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-08-03-disable-composer-https-on-project.md.10fec0d2.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-08-03-disable-composer-https-on-project.md.10fec0d2.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-09-03-git-sync-local-branches-with-remote.md.33ff90dc.js",
    "revision": null
  }, {
    "url": "assets/snippets_2023-09-03-git-sync-local-branches-with-remote.md.33ff90dc.lean.js",
    "revision": null
  }, {
    "url": "assets/snippets.md.3f06a4e2.js",
    "revision": null
  }, {
    "url": "assets/snippets.md.3f06a4e2.lean.js",
    "revision": null
  }, {
    "url": "assets/style.4ebf1563.css",
    "revision": null
  }, {
    "url": "en/index.html",
    "revision": "d8e1cad121a1ebc9c327887bdd3cd32f"
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
    "revision": "400e8ec6a5d1621bb66e8fa4697dd493"
  }, {
    "url": "masked-icon.svg",
    "revision": "8b8e61771570c80c5470b1adaf2c44ee"
  }, {
    "url": "mstile-150x150.png",
    "revision": "f020256b2109323117574ed955e15b13"
  }, {
    "url": "projects.html",
    "revision": "9c8f7c6a1c0f372048da02e1494e43a1"
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
    "revision": "cb6a4e0c31f3e04f68d899f0ccac713f"
  }, {
    "url": "robots.txt",
    "revision": "5e0bd1c281a62a380d7a948085bfe2d1"
  }, {
    "url": "safari-pinned-tab.svg",
    "revision": "896ff3300aa31eae3864243b6f116f66"
  }, {
    "url": "snippets.html",
    "revision": "a2057358d1e3474e83a89de982b94c48"
  }, {
    "url": "snippets/2023-02-14-extend-laravel-validator-morph-exists.html",
    "revision": "0a04689cc3284b6afe5919cbd649e911"
  }, {
    "url": "snippets/2023-02-14/extend-laravel-validator-morph-exists.png",
    "revision": "939cac5b2999fa54ead181c8895af485"
  }, {
    "url": "snippets/2023-03-01-git-update-last-commit-message.html",
    "revision": "4a6baeccc874a11c97ade12b662c6ad3"
  }, {
    "url": "snippets/2023-03-01/git-update-last-commit-message.png",
    "revision": "d0fd23ca23359fe078f2706e35f683fa"
  }, {
    "url": "snippets/2023-03-19-array-destructuring-in-php.html",
    "revision": "97e8a0e8fdcf18c79cf7dfbb857190c3"
  }, {
    "url": "snippets/2023-03-19-git-developers-list.html",
    "revision": "9765444e12a19f1447b437c8a4158de9"
  }, {
    "url": "snippets/2023-03-19-import-db-using-command-line.html",
    "revision": "9e7705f02580316a985a4d8e8d1cd775"
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
    "revision": "ea2b00eabc24f22e110f326d3a0a07dc"
  }, {
    "url": "snippets/2023-04-15/laravel-model-truncate.png",
    "revision": "03fb50de2aed2566cd6c9891d4fcd55c"
  }, {
    "url": "snippets/2023-04-17-export-vscode-extensions-list.html",
    "revision": "3bbeaa0430482f1f5eb26e7d1ddbd5a1"
  }, {
    "url": "snippets/2023-04-17/export-vscode-extensions-list.png",
    "revision": "091bcdd30203b678f62c45f34c5a34a3"
  }, {
    "url": "snippets/2023-05-16-retrieve-related-tables-of-a-specific-table-in-mysql.html",
    "revision": "7d0b640d512dbc9c6029bcb432a5ad0c"
  }, {
    "url": "snippets/2023-05-16/retrieve-related-tables-of-a-specific-table-in-mysql.png",
    "revision": "ba013ed07b09fbf3c05eb1aa158c5a3f"
  }, {
    "url": "snippets/2023-05-21-convert-png-and-jpg-to-webp.html",
    "revision": "8dc06bb0b82a987decaea95e0a5c16f6"
  }, {
    "url": "snippets/2023-05-21/convert-png-and-jpg-to-webp.png",
    "revision": "9667e96bae19de5d23ef82768548f6c4"
  }, {
    "url": "snippets/2023-05-23-how-to-zip-or-unzip-files-from-the-linux-terminal.html",
    "revision": "16326baac63306679f5bc3b32197ad94"
  }, {
    "url": "snippets/2023-05-23/how-to-zip-or-unzip-files-from-the-linux-terminal.png",
    "revision": "ded43dc04062ed2d54fe342abaab9a72"
  }, {
    "url": "snippets/2023-05-25-drop-all-constraints-from-all-tables-of-a-database.html",
    "revision": "318e1f9409017b85c207f366c1ae90ef"
  }, {
    "url": "snippets/2023-05-25-drop-all-tables-of-a-database.html",
    "revision": "e8127d906e94604f48c0fda26919d232"
  }, {
    "url": "snippets/2023-08-03-disable-composer-https-on-project.html",
    "revision": "435f3f1c6eb0f3af8f1fe45a6ed09ccb"
  }, {
    "url": "snippets/2023-08-03/disable-composer-https-on-project.png",
    "revision": "8947df78d8895937f77cf7e8a331da69"
  }, {
    "url": "snippets/2023-09-03-git-sync-local-branches-with-remote.html",
    "revision": "18ed7a49db87b05b24b936edbad443bd"
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
