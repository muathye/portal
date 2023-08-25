---
layout: doc
title: Exploring MySQL Command to Retrieve All Columns of All Tables with Available Options
description: Explore the versatile MySQL command to retrieve comprehensive column information from all tables in your database, with options to sort, filter by data type, and exclude system tables.
head:
  - - meta
    - name: keywords
      content: database-structure column-retrieval sql-query
  - - meta
    - name: og:type
      content: article
  - - meta
    - name: og:url
      content: https://muathye.com/articles/2023-05-22-how-to-create-a-command-line-password-generator-with-nodejs
  - - meta
    - name: og:title
      content: Exploring MySQL Command to Retrieve All Columns of All Tables with Available Options
  - - meta
    - name: og:description
      content: Explore the versatile MySQL command to retrieve comprehensive column information from all tables in your database, with options to sort, filter by data type, and exclude system tables.
  - - meta
    - name: og:image
      content: https://muathye.com/articles/2023-08-25/exploring-mysql-command-to-retrieve-all-columns-of-all-tables-with-available-options.webp
---

![An image](/articles/2023-08-25/exploring-mysql-command-to-retrieve-all-columns-of-all-tables-with-available-options.webp)

# Exploring MySQL Command to Retrieve All Columns of All Tables with Available Options

Image By [svstudioart](https://www.freepik.com/author/svstudioart) on [freepik](https://www.freepik.com/free-ai-image/creative-cloud-concept-glass-cube-cloudscape-digital-metaverse-infrastructure_40583133.htm#fromView=search&term=database&page=1&position=49)

MySQL databases serve as the backbone of many applications, housing vast amounts of data across numerous tables. Sometimes, you need a comprehensive overview of the columns within these tables. In this article, we'll dive into the MySQL command to retrieve all columns of all tables, exploring various options that allow you to fine-tune your data retrieval.

[[toc]]

## Introduction

The primary command we'll use for this purpose is based on SQL queries, which provide immense flexibility for data manipulation.

```sql
SELECT TABLE_NAME, COLUMN_NAME
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = 'your_database_name';
```

Replace `'your_database_name'` with your specific database's name. This command fetches the table and column names from the `INFORMATION_SCHEMA.COLUMNS` table, allowing you to inspect the database's structure.

To make this command even more versatile, let's explore different options you can incorporate:

## Retrieving All Column Information

If you need to retrieve all available information about columns, including data type, key constraints, and more, use the following query:

```sql
SELECT *
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = 'your_database_name';
```

## Sorting the Results

You can order the results alphabetically by table name and column name using the `ORDER BY` clause:

```sql
SELECT TABLE_NAME, COLUMN_NAME
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = 'your_database_name'
ORDER BY TABLE_NAME, COLUMN_NAME;
```

## Filtering by Data Type

To retrieve columns of a specific data type (e.g., only integer columns), you can use the `DATA_TYPE` column in the `INFORMATION_SCHEMA.COLUMNS` table:

```sql
SELECT TABLE_NAME, COLUMN_NAME
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = 'your_database_name'
AND DATA_TYPE = 'int';
```

## Excluding System Tables

If you want to exclude system-generated tables (e.g., those starting with "sys_"), you can apply a filter:

```sql
SELECT TABLE_NAME, COLUMN_NAME
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = 'your_database_name'
AND TABLE_NAME NOT LIKE 'sys_%';
```

By harnessing the power of SQL queries and the `INFORMATION_SCHEMA.COLUMNS` table, you can obtain comprehensive information about columns, sort the results, filter by data type, and exclude system tables. Whether you're a developer, DBA, or analyst, understanding these options empowers you to efficiently navigate and utilize your MySQL database's data.
