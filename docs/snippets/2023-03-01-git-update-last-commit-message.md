---
layout: doc
title: Git Update Last Commit Message
description: A command to update the message of your last commit, because either it didn't look conventional or meaningful.
head:
  - - meta
    - name: keywords
      content: git command commit
  - - meta
    - name: og:type
      content: article
  - - meta
    - name: og:url
      content: https://muathye.com/snippets/2023-03-01-git-update-last-commit-message
  - - meta
    - name: og:title
      content: Git Update Last Commit Message
  - - meta
    - name: og:description
      content: A command to update the message of your last commit, because either it didn't look conventional or meaningful.
  - - meta
    - name: og:image
      content: https://muathye.com/snippets/2023-03-01/git-update-last-commit-message.png
---

![An image](/snippets/2023-03-01/git-update-last-commit-message.png)

[ray.so](https://ray.so/#code=Z2l0IGNvbW1pdCAtLWFtZW5kIC1tICJVcGRhdGVkIG1lc3NhZ2Ui&darkMode=true&background=true&title=git-update-last-commit-message.bat&language=shell&padding=64)

# Git Update Last Commit Message

If you want to update the message of your last commit, because either it didn't look conventional or meaningful, use this command to edit it:

```sh
git commit --amend -m "Updated message"
```
