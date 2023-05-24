---
layout: doc
title: Retrieve Related Tables Of A Specific Table In Mysql
description: You can retrieve related tables of a specific table in your mysql.
head:
  - - meta
    - name: keywords
      content: mysql related-tables sql-query
  - - meta
    - name: og:type
      content: article
  - - meta
    - name: og:url
      content: https://muathye.com/snippets/2023-05-16-retrieve-related-tables-of-a-specific-table-in-mysql
  - - meta
    - name: og:title
      content: Retrieve Related Tables Of A Specific Table In Mysql
  - - meta
    - name: og:description
      content: You can retrieve related tables of a specific table in your mysql.
  - - meta
    - name: og:image
      content: https://muathye.com/snippets/2023-05-16/retrieve-related-tables-of-a-specific-table-in-mysql.png
---

![An image](/snippets/2023-05-16/retrieve-related-tables-of-a-specific-table-in-mysql.png)

[chalk.ist](https://chalk.ist)

# Retrieve Related Tables Of A Specific Table In Mysql

You can retrieve related tables of a specific table in your mysql.

```sql
SELECT DISTINCT TABLE_NAME
FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE REFERENCED_TABLE_NAME = 'your_table_name'
AND TABLE_SCHEMA = 'your_database_name';
```
