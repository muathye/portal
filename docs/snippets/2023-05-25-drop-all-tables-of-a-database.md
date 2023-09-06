---
layout: doc
title: Drop All Tables Of A Database
date: 2023-05-25
author: Muath Alsowadi
gravatar: 19684bc9c928dffa64f9c23efb31ba86
twitter: '@muathye'
description: The code block drops all base tables in the current database using dynamic SQL.
head:
  - - meta
    - name: keywords
      content: sqlserver drop-tables sql-query
  - - meta
    - name: og:type
      content: article
  - - meta
    - name: og:url
      content: https://muathye.com/snippets/2023-05-25-drop-all-tables-of-a-database
  - - meta
    - name: og:title
      content: Drop All Tables Of A Database
  - - meta
    - name: og:description
      content: The code block drops all base tables in the current database using dynamic SQL.
  - - meta
    - name: og:image
      content: https://muathye.com/snippets/2023-05-25/drop-all-tables-of-a-database.webp
---

![An image](/snippets/2023-05-25/drop-all-tables-of-a-database.webp)

[ray.so](https://ray.so/#code=REVDTEFSRSBAc3FsIE5WQVJDSEFSKG1heCk9JycKClNFTEVDVCBAc3FsICs9ICcgRHJvcCB0YWJsZSAnICsgUVVPVEVOQU1FKFRBQkxFX1NDSEVNQSkgKyAnLicrIFFVT1RFTkFNRShUQUJMRV9OQU1FKSArICc7ICcKRlJPTSAgIElORk9STUFUSU9OX1NDSEVNQS5UQUJMRVMKV0hFUkUgIFRBQkxFX1RZUEUgPSAnQkFTRSBUQUJMRScKCkV4ZWMgU3BfZXhlY3V0ZXNxbCBAc3Fs&width=708&theme=sunset&title=Drop+all+tables+of+a+database)

# Drop All Tables Of A Database

This is a SQL code block written in Microsoft SQL Server.

The code block declares a variable @sql of type NVARCHAR(max) and initializes it to an empty string.

The SELECT statement retrieves the names of all the base tables in the current database using the INFORMATION_SCHEMA.TABLES view. For each table, it concatenates a DROP TABLE statement with the fully qualified table name (i.e., including the schema name) and appends it to the @sql variable using the += operator. The QUOTENAME function is used to properly escape and delimit the table and schema names, which helps to avoid SQL injection attacks.

Finally, the sp_executesql system stored procedure is called with the @sql variable as its argument to execute the dynamically generated SQL code and drop all the tables that were selected by the SELECT statement.

```sql
DECLARE @sql NVARCHAR(max)=''

SELECT @sql += ' Drop table ' + QUOTENAME(TABLE_SCHEMA) + '.'+ QUOTENAME(TABLE_NAME) + '; '
FROM   INFORMATION_SCHEMA.TABLES
WHERE  TABLE_TYPE = 'BASE TABLE'

Exec Sp_executesql @sql
```

<div style="display: flex;justify-content: end;">
<a href="https://twitter.com/intent/tweet?url=https://muathye.com/snippets/2023-05-25-drop-all-tables-of-a-database&text=Drop All Tables Of A Database" target="_blank"><img style="height: 32px; padding: 0 5px;" title="Share on twitter" src="/images/social/twitter.svg" /></a>
<a href="https://api.whatsapp.com/send?text=https://muathye.com/snippets/2023-05-25-drop-all-tables-of-a-database" target="_blank"><img style="height: 32px; padding: 0 5px;" title="Share on whatsapp" src="/images/social/whatsapp.svg"/></a>
<a href="https://www.facebook.com/sharer/sharer.php?u=https://muathye.com/snippets/2023-05-25-drop-all-tables-of-a-database" target="_blank"><img style="height: 32px; padding: 0 5px;" title="Share on facebook" src="/images/social/facebook.svg" /></a>
</div>
