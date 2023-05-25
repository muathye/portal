---
layout: doc
title: Export VSCode Extensions List
description: A command line to export the list of vscode extensions name.
head:
  - - meta
    - name: keywords
      content: vscode extension export
  - - meta
    - name: og:type
      content: article
  - - meta
    - name: og:url
      content: https://muathye.com/snippets/2023-04-17-export-vscode-extensions-list
  - - meta
    - name: og:title
      content: Export VSCode Extensions List
  - - meta
    - name: og:description
      content: A command line to export the list of vscode extensions name.
  - - meta
    - name: og:image
      content: https://muathye.com/snippets/2023-04-17/export-vscode-extensions-list.png
---

![An image](/snippets/2023-04-17/export-vscode-extensions-list.png)

[ray.so](https://ray.so/#code=IyBJbiB2c29kZSB5b3UgY2FuIGV4cG9ydCB0aGUgZXh0ZW5zaW9uIGxpc3QgdG8gZmlsZQoKIyBmb3IgdGhlIGJsdWUgdnNjb2RlCmNvZGUgLS1saXN0LWV4dGVuc2lvbnMgPiBleHRlbnNpb25zLnR4dAoKIyBmb3IgdGhlIGdyZWVuIHZzY29kZQpjb2RlLWluc2lkZXJzIC0tbGlzdC1leHRlbnNpb25zID4gZXh0ZW5zaW9ucy50eHQ&darkMode=true&background=true&title=export-vscode-extensions-list.bat&language=powershell&padding=64)

# Export VSCode Extensions List

A command line to export the list of vscode extensions name.

```sh
# In vsode you can export the extension list to file

# for the blue vscode
code --list-extensions > extensions.txt

# for the green vscode
code-insiders --list-extensions > extensions.txt
```
