---
layout: doc
title: Drop All Constraints From All Tables Of A Database
date: 2023-05-25
author: Muath Alsowadi
gravatar: 19684bc9c928dffa64f9c23efb31ba86
twitter: '@muathye'
description: This SQL script drops certain types of constraints from all tables in the database.
head:
  - - meta
    - name: keywords
      content: sqlserver tables-constraints sql-query
  - - meta
    - name: og:type
      content: article
  - - meta
    - name: og:url
      content: https://muathye.com/snippets/2023-05-25-drop-all-constraints-from-all-tables-of-a-database
  - - meta
    - name: og:title
      content: Drop All Constraints From All Tables Of A Database
  - - meta
    - name: og:description
      content: This SQL script drops certain types of constraints from all tables in the database.
  - - meta
    - name: og:image
      content: https://muathye.com/snippets/2023-05-25/drop-all-constraints-from-all-tables-of-a-database.webp
---

![An image](/snippets/2023-05-25/drop-all-constraints-from-all-tables-of-a-database.webp)

[ray.so](https://ray.so/#code=REVDTEFSRSBAc3FsIE5WQVJDSEFSKE1BWCk7ClNFVCBAc3FsID0gTicnOwoKU0VMRUNUIEBzcWwgPSBAc3FsICsgTicKICBBTFRFUiBUQUJMRSAnICsgUVVPVEVOQU1FKHMubmFtZSkgKyBOJy4nCiAgKyBRVU9URU5BTUUodC5uYW1lKSArIE4nIERST1AgQ09OU1RSQUlOVCAnCiAgKyBRVU9URU5BTUUoYy5uYW1lKSArICc7JwpGUk9NIHN5cy5vYmplY3RzIEFTIGMKSU5ORVIgSk9JTiBzeXMudGFibGVzIEFTIHQKT04gYy5wYXJlbnRfb2JqZWN0X2lkID0gdC5bb2JqZWN0X2lkXQpJTk5FUiBKT0lOIHN5cy5zY2hlbWFzIEFTIHMgCk9OIHQuW3NjaGVtYV9pZF0gPSBzLltzY2hlbWFfaWRdCldIRVJFIGMuW3R5cGVdIElOICgnRCcsJ0MnLCdGJywnUEsnLCdVUScpCk9SREVSIEJZIGMuW3R5cGVdOwoKUFJJTlQgQHNxbDsKRVhFQyBzeXMuc3BfZXhlY3V0ZXNxbCBAc3FsOw&width=708&theme=sunset&title=Drop+all+constraints+from+all+tables+of+a+database)

# Drop All Constraints From All Tables Of A Database

This is a SQL script that generates a dynamic SQL statement to drop all constraints of certain types (D: Default constraints, C: Check constraints, F: Foreign Key constraints, PK: Primary Key constraints, UQ: Unique constraints) from all tables in the database.

The script first declares a variable called @sql of type NVARCHAR(MAX) and initializes it to an empty string. Then it selects all the constraints of the specified types from the system tables and builds a dynamic SQL statement by concatenating the ALTER TABLE statement with the names of the schema, table, and constraint, and appends it to @sql.

Finally, the script prints the generated SQL statement to the console using the PRINT statement. If you want to execute the generated SQL statement, you can uncomment the last line of the script, which uses the sp_executesql stored procedure to execute the dynamic SQL statement.

```sql
DECLARE @sql NVARCHAR(MAX);
SET @sql = N'';

SELECT @sql = @sql + N'
  ALTER TABLE ' + QUOTENAME(s.name) + N'.'
  + QUOTENAME(t.name) + N' DROP CONSTRAINT '
  + QUOTENAME(c.name) + ';'
FROM sys.objects AS c
INNER JOIN sys.tables AS t
ON c.parent_object_id = t.[object_id]
INNER JOIN sys.schemas AS s 
ON t.[schema_id] = s.[schema_id]
WHERE c.[type] IN ('D','C','F','PK','UQ')
ORDER BY c.[type];

PRINT @sql;
--EXEC sys.sp_executesql @sql;
```

<div style="display: flex;justify-content: end;">
<a href="https://twitter.com/intent/tweet?url=https://muathye.com/snippets/2023-05-25-drop-all-constraints-from-all-tables-of-a-database&text=Drop All Constraints From All Tables Of A Database" target="_blank"><img style="height: 32px; padding: 0 5px;" title="Share on twitter" src="/images/social/twitter.svg" /></a>
<a href="https://api.whatsapp.com/send?text=https://muathye.com/snippets/2023-05-25-drop-all-constraints-from-all-tables-of-a-database" target="_blank"><img style="height: 32px; padding: 0 5px;" title="Share on whatsapp" src="/images/social/whatsapp.svg"/></a>
<a href="https://www.facebook.com/sharer/sharer.php?u=https://muathye.com/snippets/2023-05-25-drop-all-constraints-from-all-tables-of-a-database" target="_blank"><img style="height: 32px; padding: 0 5px;" title="Share on facebook" src="/images/social/facebook.svg" /></a>
</div>
