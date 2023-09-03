---
layout: doc
title: Git Sync Local Branches With Remote.
description: Keep your local Git repository up-to-date and clutter-free by using 'git fetch --prune' to synchronize with remote changes while removing deleted branches.
head:
  - - meta
    - name: keywords
      content: git fetch git-prune
  - - meta
    - name: og:type
      content: article
  - - meta
    - name: og:url
      content: https://muathye.com/snippets/2023-09-03-git-sync-local-branches-with-remote
  - - meta
    - name: og:title
      content: Git Sync Local Branches With Remote.
  - - meta
    - name: og:description
      content: Keep your local Git repository up-to-date and clutter-free by using 'git fetch --prune' to synchronize with remote changes while removing deleted branches.
  - - meta
    - name: og:image
      content: https://muathye.com/snippets/2023-09-03/git-sync-local-branches-with-remote.png
---

![An image](/snippets/2023-09-03/git-sync-local-branches-with-remote.png)

[ray.so](https://ray.so/#code=Z2l0IGZldGNoIC0tcHJ1bmU&title=Git+fetch&theme=sunset&language=powershell)

# Git Sync Local Branches With Remote

The git fetch --prune command is used in the Git version control system to update your local repository with changes from a remote repository while also removing any references to remote branches that have been deleted on the remote.

```sh
git fetch --prune
```

I have the following local branches:

![An image](/snippets/2023-09-03/local-branches-before-git-fetch-prune.png)

While remote branches are:

![An image](/snippets/2023-09-03/remote-branches.png)

Now, the magic moment: When you use git fetch --prune:

![An image](/snippets/2023-09-03/when-git-fetch-prune.png)

Observe how local branches are now synchronized with the remote:

![An image](/snippets/2023-09-03/local-branches-after-git-fetch-prune.png)

That's the secret recipe—keeping things neat and tidy in your local repo 😉.

<div style="display: flex;justify-content: end;">
<a href="https://twitter.com/intent/tweet?url=https://muathye.com/snippets/2023-09-03-git-sync-local-branches-with-remote&text=Drop All Tables Of A Database" target="_blank"><img style="height: 32px; padding: 0 5px;" title="Share on twitter" src="/images/social/twitter.svg" /></a>
<a href="https://api.whatsapp.com/send?text=https://muathye.com/snippets/2023-09-03-git-sync-local-branches-with-remote" target="_blank"><img style="height: 32px; padding: 0 5px;" title="Share on whatsapp" src="/images/social/whatsapp.svg"/></a>
<a href="https://www.facebook.com/sharer/sharer.php?u=https://muathye.com/snippets/2023-09-03-git-sync-local-branches-with-remote" target="_blank"><img style="height: 32px; padding: 0 5px;" title="Share on facebook" src="/images/social/facebook.svg" /></a>
</div>
