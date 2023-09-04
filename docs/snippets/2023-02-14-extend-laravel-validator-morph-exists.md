---
layout: doc
title: Extend Laravel Validator Morph Exists
date: 2023-02-14
author: Muath Alsowadi
gravatar: 19684bc9c928dffa64f9c23efb31ba86
twitter: '@muathye'
description: A laravel validator macro that extends validator with as morph_exists.
head:
  - - meta
    - name: keywords
      content: laravel validator morph
  - - meta
    - name: og:type
      content: article
  - - meta
    - name: og:url
      content: https://muathye.com/snippets/2023-02-14-extend-laravel-validator-morph-exists
  - - meta
    - name: og:title
      content: Extend Laravel Validator Morph Exists
  - - meta
    - name: og:description
      content: A laravel validator macro that extends validator with as morph_exists.
  - - meta
    - name: og:image
      content: https://muathye.com/snippets/2023-02-14/extend-laravel-validator-morph-exists.png
---

![An image](/snippets/2023-02-14/extend-laravel-validator-morph-exists.png)

[ray.so](https://ray.so/#code=PD9waHAKLyogdXNlZnVsIHZhbGlkYXRvciBleHRlbmQgYG1vcnBoX2V4aXN0c2AgKi8KVmFsaWRhdG9yOjpleHRlbmQoJ21vcnBoX2V4aXN0cycsIGZ1bmN0aW9uICgkYXR0cmlidXRlLCAkdmFsdWUsICRwYXJhbWV0ZXJzLCAkdmFsaWRhdG9yKQp7CglpZiAoIW9iamVjdFR5cGUgPSBBcnI6OmdldCgkdmFsaWRhdG9yLT5nZXREYXRhKCksICRwYXJhbWV0ZXJzWzBdLCBmYWxzZSkpIHsKCQlyZXR1cm4gZmFsc2U7Cgl9CgkvLyBUaGUgbW9kZWxzIG5hbWVzcGFjZS4KCXJldHVybiAhZW1wdHkocmVzb2x2ZSgnQXBwXFxNb2RlbHNcXCcuJG9iamVjdFR5cGUpLT5maW5kKCR2YWx1ZSkpOwp9KTsKCi8qIFVzYWdlIG9uIGFueSB2YWxpZGF0b3IgcnVsZXMgb3IgRm9ybVJlcXVlc3QgKi8KcHVibGljIGZ1bmN0aW9uIHJ1bGVzKCkKewoJcmV0dXJuIFsKCQknY29tbWVudGFibGVfaWQnID0-IFsncmVxdWlyZWQnLCAnbW9ycGhfZXhpc3RzOmNvbW1lbnRhYmxlX3R5cGUnXSwKCQknY29tbWVudGFibGVfdHlwZScgPT4gWydyZXF1aXJlZCcsICdzdHJpbmcnXSwKCV07Cn0KCi8qKiBnaXRodWIuY29tL211YXRoLXllICov&darkMode=true&background=true&title=extend-laravel-validator-morph-exists.php&language=php&padding=64&width=920)

# Extend Laravel Validator Morph Exists

A laravel validator extends validator with morph_exists.

Useful validator extend `morph_exists`.

Put the following on `app/Http/Providers/AppServiceProvider.php` at `boot` method.

```php
Validator::extend('morph_exists', function ($attribute, $value, $parameters, $validator)
{
  if (!objectType = Arr::get($validator->getData(), $parameters[0], false)) {
    return false;
  }
  // The models namespace.
  return !empty(resolve('App\\Models\\'.$objectType)->find($value));
});
```

Usage on any validator rules or FormRequest.

```php
public function rules()
{
  return [
    'commentable_id' => ['required', 'morph_exists:commentable_type'],
    'commentable_type' => ['required', 'string'],
  ];
}
```
