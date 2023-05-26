---
layout: doc
title: List all developers on a project in Git
description: A command line for git to list all developers of a project.
head:
  - - meta
    - name: keywords
      content: git developers command
  - - meta
    - name: og:type
      content: article
  - - meta
    - name: og:url
      content: https://muathye.com/snippets/2023-03-19-git-developers-list
  - - meta
    - name: og:title
      content: List all developers on a project in Git
  - - meta
    - name: og:description
      content: A command line for git to list all developers of a project.
  - - meta
    - name: og:image
      content: https://muathye.com/snippets/2023-03-19/git-developers-list.png
---

![An image](/snippets/2023-03-19/git-developers-list.png)

[ray.so](https://ray.so/#code=IyBMaXN0IGFsbCBkZXZlbG9wZXJzIG9uIGEgcHJvamVjdCBpbiBHaXQKCmdpdCBsb2cgLS1wcmV0dHk9IiVhbiAlYWUlbiVjbiAlY2UiIHwgc29ydCAtdQ&darkMode=true&background=true&title=git-developers-list.bat&language=powershell&padding=64)

# List all developers on a project in Git

A command line for git to list all developers of a project.

```sh
git log --pretty="%an %ae%n%cn %ce" | sort -u
```
