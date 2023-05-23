---
layout: doc
title: How to Create a Command-Line Password Generator with Node.js And Deploy it to npmjs
description: In this tutorial, we'll show you how to create a command-line password generator that allows users to generate strong passwords of any length and including any combination of symbols, numbers, and capital letters.
head:
  - - meta
    - name: keywords
      content: command-line password-generator strong-password
  - - meta
    - name: og:type
      content: article
  - - meta
    - name: og:url
      content: /articles/2023-05-22-how-to-create-a-command-line-password-generator-with-nodejs
  - - meta
    - name: og:title
      content: How to Create a Command-Line Password Generator with Node.js And Deploy it to npmjs
  - - meta
    - name: og:description
      content: In this tutorial, we'll show you how to create a command-line password generator that allows users to generate strong passwords of any length and including any combination of symbols, numbers, and capital letters.
  - - meta
    - name: og:image
      content: /articles/2023-05-22/muath-ye-password-generator.png
---

![An image](/articles/2023-05-22/muath-ye-password-generator.png)

# How to Create a Command-Line Password Generator with Node.js And Deploy it to npmjs

Are you tired of coming up with weak passwords that are easy to guess? Do you struggle to come up with secure passwords that meet all the requirements? If so, why not create your own password generator using Node.js and `yargs`?

In this tutorial, we'll show you how to create a command-line password generator that allows users to generate strong passwords of any length and including any combination of symbols, numbers, and capital letters. Not only is this a useful tool to have in your arsenal, but it's also a fun project to work on.

::: tip
Installation

```sh
npm install -g muath-ye/password-generator
```

Simple Usage

```sh
passgen
```
> ofgxephzylbv

Advanced Usage

```sh
passgen -c -l 18
```
> lAzngo$++Gpev%QE#D

:::

## Step 1: Setting up the Project

The first step is to create a new Node.js project. Open up your terminal and create a new directory for your project:

```sh
mkdir password-generator
```

```sh
cd password-generator
```

Next, initialize a new Node.js project and install the necessary dependencies:

```sh
npm init -y
```

```sh
npm install yargs crypto
```

We'll be using the `yargs` module to parse command-line arguments and the `crypto` module to generate random passwords.

## Step 2: Writing the Code

Now that we've set up our project and installed the necessary dependencies, it's time to write some code. Open up your favorite text editor and create a new file called `index.js`. This is where we'll write our password generator code.

First, let's require the necessary modules at the top of our file:

```javascript
const crypto = require('crypto');
const yargs = require('yargs');
```

Next, let's define our `generatePassword` function. This function will take an options object as its argument, which will include the length of the password as well as options for including symbols, numbers, and capital letters.

```javascript
const generatePassword = ({ length = 12, symbols = false, numbers = false, uppercase = false, complex = false }) => {
  let characters = 'abcdefghijklmnopqrstuvwxyz';
  if (symbols || complex) {
    characters += '!@#$%^&*()_+-=';
  }
  if (numbers || complex) {
    characters += '0123456789';
  }
  if (uppercase || complex) {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  const buffer = crypto.randomBytes(length);
  const password = Array.from(buffer)
    .map(byte => characters[byte % characters.length])
    .join('');
  return password;
};
```

This function generates a password of the specified length, including symbols, numbers, and/or capital letters if the corresponding options are set to `true`. The `crypto.randomBytes` method is used to generate a buffer of random bytes, which are then mapped to characters in the `characters` string using the modulus operator.

Now, let's define our `yargs` options. We'll add options for `length`, `symbols`, `numbers`, `uppercase` and `complex`, each with a default value of `false`.

```javascript
const argv = yargs
  .option('length', {
    alias: 'l',
    description: 'Length of the password',
    type: 'number',
    default: 12
  })
  .option('symbols', {
    alias: 's',
    description: 'Include symbols',
    type: 'boolean',
    default: false
  })
  .option('numbers', {
    alias: 'n',
    description: 'Include numbers',
    type: 'boolean',
    default: false
 })
  .option('uppercase', {
    alias: 'u',
    description: 'Include uppercase letters',
    type: 'boolean',
    default: false
  })
  .option('complex', {
    alias: 'c',
    description: 'Include uppercase, symbols and numbers letters',
    type: 'boolean',
    default: false
  })
  .help()
  .alias('help', 'h')
  .argv;
```

The .help() method adds a --help option to your tool, which can be used to display a help message. The .alias('help', 'h') method adds a -h alias for the --help option.

Lastly, let's call our `generatePassword` function with the options passed in by the user and print the resulting password to the console.

```javascript
console.log(generatePassword({
  length: argv.length,
  symbols: argv.symbols,
  numbers: argv.numbers,
  uppercase: argv.uppercase
}));
```

## Step 3: Testing the Tool

Now that we've written our code, let's test our tool to make sure it's working as expected. In your terminal, run the following command:

```sh
node index.js
```

This should generate a random password of 12 characters, consisting only of lowercase letters.

To generate a password with specific options, pass the corresponding flags to the `node index.js` command. For example, to generate a password with a length of 20 characters, including symbols and numbers but not uppercase letters, run the following command:

```sh
node index.js --length 20 --symbols --numbers
```

Or you can pass the option aliases:

```sh
node index.js -l 20 -s -n
```

This should generate a random password of 20 characters, including symbols and numbers but not uppercase letters.

And that's it! You've now created your own command-line password generator using Node.js and yargs. This tool is a useful addition to your security arsenal, and it's also a fun project to work on. Now you can generate strong passwords quickly and easily, without having to come up with them yourself.

We hope you found this tutorial helpful and informative. Remember to always use strong passwords and keep them safe. Happy coding!

## Step 4: Deploy the tool to packages

To publish your package on the NPM registry, you need to have an account. If you don't have an account, visit the [NPM sign up](https://www.npmjs.com/signup) page to create yours.

### Update the package.json File

Open your package.json file and add a bin property to specify the location of your command-line script.

```json
{
  "name": "@muath-ye/password-generator",
  "version": "1.0.0",
  "description": "Generates a strong password",
  "bin": {
    "passgen": "./index.js"
  },
  "preferGlobal": true,
  "author": "Muath Alsowadi",
  "repository": "muath-ye/passgen",
  "license": "MIT",
  "dependencies": {
    "yargs": "^17.1.1",
    "crypto": "^1.0.1"
  }
}
```

This tells Node.js where to find the script that will be executed when the user types the command `passgen`.

### Install npm Globally

To make your package available globally, you need to have npm installed globally on your machine. If you don't have it installed, you can download and install it from the official website [www.npmjs.com/get-npm](https://www.npmjs.com/get-npm).

::: tip
Run `npm link` to create a symbolic link between your package and the global node_modules directory on your system.

```sh
npm link
```

Then you can your tool before publishing it to npmjs.

```sh
passgen
```

:::

::: tip
Run `npm unlink` to remove the created symbolic link.

```sh
npm unlink
```

If you want to remove your package entirely from your system, you can run the following commands:

```sh
npm uninstall -g muath-ye/password-generator
```

:::

### Publish Your Package

Run the following command to publish your package to the npm registry:

```sh
npm login
```

The command `npm login` will prompt you to enter your npm username and password. If you don't have an account, you can create one on the website [npmjs.com/signup](https://www.npmjs.com/signup).

You will be asked for one-time password 
![An image](/articles/2023-05-22/one-time-password.png)

```sh
npm publish --access public
```

The command `npm publish --access public` will publish your package to the npm registry and make it available for anyone to download and use.

### Install Your Package

To install your package globally, run the following command:

```sh
npm install -g password-generator
```

This will install your package globally and make it available as a command-line tool.

### Try Your Package

To use your package, open up your terminal and type the following command:

```sh
passgent --help
```

This should display the help message for your `password generator` tool, indicating that your package was installed and is working correctly.

Congratulations! You have successfully created a command-line `password generator` with Node.js and yargs, and deployed it as a global package to the npm registry.
