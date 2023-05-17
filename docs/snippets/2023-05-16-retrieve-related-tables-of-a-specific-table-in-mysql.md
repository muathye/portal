![An image](/snippets/2023-05-16/retrieve-related-tables-of-a-specific-table-in-mysql.png)

[chalk.ist](https://chalk.ist)

# Retrieve Related Tables Of A Specific Table In Mysql

```sql
SELECT DISTINCT TABLE_NAME
FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE REFERENCED_TABLE_NAME = 'your_table_name'
AND TABLE_SCHEMA = 'your_database_name';
```
