---
layout: doc
title: Disable composer https on a project.
description: This is helpfull when you got blocked on https of composer.
head:
  - - meta
    - name: keywords
      content: composer disable-tls secure-http
  - - meta
    - name: og:type
      content: article
  - - meta
    - name: og:url
      content: https://muathye.com/snippets/2023-08-03-disable-composer-https-on-project
  - - meta
    - name: og:title
      content: Disable composer https on a project.
  - - meta
    - name: og:description
      content: This is helpfull when you got blocked on https of composer.
  - - meta
    - name: og:image
      content: https://muathye.com/snippets/2023-08-03/disable-composer-https-on-project.png
---

![An image](/snippets/2023-08-03/disable-composer-https-on-project.png)

[ray.so](https://ray.so/#code=ewogICAgIm5hbWUiOiAibGFyYXZlbC9sYXJhdmVsIiwKICAgIC8vIC4uLgogICAgImNvbmZpZyI6IHsKICAgICAgICAvLyAuLi4KICAgICAgICAiZGlzYWJsZS10bHMiOiB0cnVlLAogICAgICAgICJzZWN1cmUtaHR0cCI6IGZhbHNlCiAgICB9LAogICAgLy8gLi4uCn0K&title=composer.json&theme=breeze)

# Disable composer https on a project

If your network does not work well with https, you can use following snippet:

```json
{
    "name": "laravel/laravel",
    // ...
    "config": {
        // ...
        "disable-tls": true,
        "secure-http": false
    },
    // ...
}
```

<div style="display: flex;justify-content: end;">
<a href="https://twitter.com/intent/tweet?url=https://muathye.com/snippets/2023-08-03-disable-composer-https-on-project&text=Drop All Tables Of A Database" target="_blank"><img style="height: 32px; padding: 0 5px;" title="Share on twitter" src="/images/social/twitter.svg" /></a>
<a href="https://api.whatsapp.com/send?text=https://muathye.com/snippets/2023-08-03-disable-composer-https-on-project" target="_blank"><img style="height: 32px; padding: 0 5px;" title="Share on whatsapp" src="/images/social/whatsapp.svg"/></a>
<a href="https://www.facebook.com/sharer/sharer.php?u=https://muathye.com/snippets/2023-08-03-disable-composer-https-on-project" target="_blank"><img style="height: 32px; padding: 0 5px;" title="Share on facebook" src="/images/social/facebook.svg" /></a>
</div>
