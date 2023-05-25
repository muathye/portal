---
layout: doc
title: Import DB Using Command Line
description: A command line for mysql to import db from any sql file.
head:
  - - meta
    - name: keywords
      content: mysql import database
  - - meta
    - name: og:type
      content: article
  - - meta
    - name: og:url
      content: https://muathye.com/snippets/2023-03-19-import-db-using-command-line
  - - meta
    - name: og:title
      content: Import DB Using Command Line
  - - meta
    - name: og:description
      content: A command line for mysql to import db from any sql file.
  - - meta
    - name: og:image
      content: https://muathye.com/snippets/2023-03-19/import-db-using-command-line.png
---

![An image](/snippets/2023-03-19/import-db-using-command-line.png)

[ray.so](https://ray.so/#code=IyBpbXBvcnQgZGIgdXNpbmcgY29tbWFuZCBsaW5lCm15c3FsIC11IHVzZXJuYW1lIC1wIGRhdGFiYXNlX25hbWUgPCBmaWxlLnNxbA&darkMode=true&background=true&title=import-db-using-command-line.bat&language=powershell&padding=64)

# Import DB Using Command Line

A command line for mysql to import db from any sql file.

```sh
# import db using command line
mysql -u username -p database_name < file.sql
```
