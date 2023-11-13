---
layout: doc
title: Convert png and jpg to webp
date: 2023-05-21
author: Muath Alsowadi
gravatar: 19684bc9c928dffa64f9c23efb31ba86
twitter: '@muathye'
description: A tool to convert images.
head:
  - - meta
    - name: keywords
      content: image convert png jpg webp
  - - meta
    - name: og:type
      content: article
  - - meta
    - name: og:url
      content: https://muathye.com/snippets/2023-05-21-convert-png-and-jpg-to-webp.html
  - - meta
    - name: og:title
      content: Convert png and jpg to webp
  - - meta
    - name: og:description
      content: A tool to convert images.
  - - meta
    - name: og:image
      content: https://muathye.com/snippets/2023-05-21/convert-png-and-jpg-to-webp.png
---

![An image](/snippets/2023-05-21/convert-png-and-jpg-to-webp.png)

[chalk.ist](https://chalk.ist)

# Convert png and jpg to webp

This is a command written in a batch file or command prompt for Windows operating system.

The command starts with a "for" loop that loops through all files in the current directory that have a ".png", ".jpg" or ".jpeg" extension.

For each file that matches this criteria, the command uses the "cwebp" tool to convert the file to the WebP image format with a quality level of 80.

The output file is named using the original file name (without the ".png", ".jpg" or ".jpeg" extension) and with a ".webp" extension.

So essentially, this command is converting all PNG , JPG or JPEG image files in the current directory to WebP format with a quality level of 80.

:::tip Download link
Use this link to download the [cwebp](https://developers.google.com/speed/webp/docs/precompiled) tool.
:::

Convert png to webp
```bat
for %%i in (*.png) do cwebp -q 80 "%%i" -o "%%~ni.webp"
```

Convert jpg to webp
```bat
for %%i in (*.jpg) do cwebp -q 80 "%%i" -o "%%~ni.webp"
```

Convert jpeg to webp
```bat
for %%i in (*.jpeg) do cwebp -q 80 "%%i" -o "%%~ni.webp"
```

Convert png , jpg and jpeg to webp
```bat
for %%i in (*.png) do cwebp -q 80 "%%i" -o "%%~ni.webp"
for %%i in (*.jpg) do cwebp -q 80 "%%i" -o "%%~ni.webp"
for %%i in (*.jpeg) do cwebp -q 80 "%%i" -o "%%~ni.webp"
```