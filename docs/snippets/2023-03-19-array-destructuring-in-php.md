---
layout: doc
title: Array destructuring in PHP
date: 2023-03-19
author: Muath Alsowadi
gravatar: 19684bc9c928dffa64f9c23efb31ba86
twitter: '@muathye'
description: On PHP you can destructure the array into separate variables.
head:
  - - meta
    - name: keywords
      content: destructure php array
  - - meta
    - name: og:type
      content: article
  - - meta
    - name: og:url
      content: https://muathye.com/snippets/2023-03-19-array-destructuring-in-php
  - - meta
    - name: og:title
      content: Array destructuring in PHP
  - - meta
    - name: og:description
      content: On PHP you can destructure the array into separate variables.
  - - meta
    - name: og:image
      content: https://muathye.com/snippets/2023-03-19/array-destructuring-in-php.png
---

![An image](/snippets/2023-03-19/array-destructuring-in-php.png)

[ray.so](https://ray.so/#code=PD9waHAKLyoqIGdpdGh1Yi5jb20vbXVhdGgteWUgKi8KClskaGksICRuYW1lXSA9IFsnSGVsbG8nLCAnTXVhdGgnXTsKCmVjaG8gJGhpIC4gJyAnIC4gJG5hbWU7IC8vIEhlbGxvIE11YXRo&darkMode=true&background=true&title=array-destructuring-in-php.php&language=php&padding=64)

# Array destructuring in PHP

On PHP you can destructure the array into separate variables.

Note that the word is "destructure", not "destruction" — that's something different

```php
<?php
/** github.com/muath-ye */

[$hi, $name] = ['Hello', 'Muath'];

echo $hi . ' ' . $name; // Hello Muath
```
