---
layout: doc
title: Laravel Model Truncate
description: Remove all records and reset id identity.
head:
  - - meta
    - name: keywords
      content: laravel model truncate
  - - meta
    - name: og:type
      content: article
  - - meta
    - name: og:url
      content: https://muathye.com/snippets/2023-04-15-laravel-model-truncate
  - - meta
    - name: og:title
      content: Laravel Model Truncate
  - - meta
    - name: og:description
      content: Remove all records and reset id identity.
  - - meta
    - name: og:image
      content: https://muathye.com/snippets/2023-04-15/laravel-model-truncate.png
---

![An image](/snippets/2023-04-15/laravel-model-truncate.png)

[ray.so](https://ray.so/#code=Ly8gVG8gdHJhbmNhdGUgKGVtcHR5KSB1c2VycyB0YWJsZQoKVXNlcjo6dHJ1bmNhdGUoKTs&darkMode=true&background=true&title=export-vscode-extensions-list.bat&language=powershell&padding=64)

# Laravel Model Truncate

Remove all records and reset id incremental column identity.

```sh
// To trancate (empty) users table

User::truncate();
```
