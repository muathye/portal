---
layout: doc
title: Laravel Nested Eager Loading on Polymorphic Relationships
date: 2022-12-23
author: Muath Alsowadi
gravatar: 19684bc9c928dffa64f9c23efb31ba86
twitter: '@muathye'
description: Sometimes you need to eager load different relationships depending on the type of model on a polymorphic relationship.
head:
  - - meta
    - name: keywords
      content: bootstrap modal datepicker
  - - meta
    - name: og:type
      content: article
  - - meta
    - name: og:url
      content: https://muathye.com/articles/2022-12-23-laravel-nested-eager-loading-on-polymorphic-relationships
  - - meta
    - name: og:title
      content: Laravel Nested Eager Loading on Polymorphic Relationships
  - - meta
    - name: og:description
      content: Sometimes you need to eager load different relationships depending on the type of model on a polymorphic relationship.
  - - meta
    - name: og:image
      content: https://muathye.com/articles/2022-12-23/laravel-nested-eager-loading-on-polymorphic-relationships.png
---

![An image](/articles/2022-12-23/laravel-nested-eager-loading-on-polymorphic-relationships.png)

# Laravel Nested Eager Loading on Polymorphic Relationships

Sometimes you need to eager load different relationships depending on the type of model on a polymorphic relationship.

::: tip
This is super easy to do with the `morphWith` method.
:::

For example: you have two type of users `seller` and `buyer`, the eager load relationship for `seller` is the `product` and the eager load relationship for `buyer` is the `order`.

- First setup the Models.

```php
class Seller extends Model
{
    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
```

```php
class Buyer extends Model
{
    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}
```

```php
class Profile extends Model
{
    public function user()
    {
        return $this->morphTo();
    }
}
```

- Then load the relations like the following:

```php
Profile:with('user', function (MorphTo $morphTo) {
    // Eager load the products for seller
    // and orders for buyer 👇
    $morphTo->morphWith([
        Seller::class => ['products'],
        Buyer::class => ['orders'],
    ]);
})->get();
```