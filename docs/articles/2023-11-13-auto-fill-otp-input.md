---
layout: doc
title: Implementing Auto-fill OTP Input with JavaScript
date: 2023-11-13
author: Muath Alsowadi
gravatar: 19684bc9c928dffa64f9c23efb31ba86
twitter: '@muathye'
description: Learn how to implement an auto-fill OTP input with JavaScript for a seamless user experience.
head:
  - - meta
    - name: keywords
      content: JavaScript, OTP, Web Development
  - - meta
    - name: og:type
      content: article
  - - meta
    - name: og:url
      content: https://muathye.com/articles/2023-11-13/auto-fill-otp-input
  - - meta
    - name: og:title
      content: Implementing Auto-fill OTP Input with JavaScript
  - - meta
    - name: og:description
      content: Learn how to implement an auto-fill OTP input with JavaScript for a seamless user experience.
  - - meta
    - name: og:image
      content: https://muathye.com/articles/2023-11-13/auto-fill-otp-input.webp
---

![An image](/articles/2023-11-13/auto-fill-otp-input.webp)

[DALL-E.3](https://www.bing.com/images/create/a-wallpaper-with-the-text-otp-and-a-smartphone-sho/6551cf167ad8480f9fb2f8f25ae669ef?id=RNmUcSyaZ5H4%2fl6E7F%2fOsg%3d%3d&view=detailv2&idpp=genimg&idpclose=1&FORM=SYDBIC)

# Implementing Auto-fill OTP Input with JavaScript

In this tutorial, we'll explore how to create a user-friendly auto-fill OTP input with 6-digit as an example using JavaScript.

This solution enhances the user experience by allowing users to seamlessly insert their OTP while automatically navigating through each input field.

## Getting Started

To begin, create an HTML form with six input fields for the OTP digits. We'll use JavaScript to handle the input events and manage the flow between the input fields.

```html
<form id="otpForm" action="submit_action.php" method="post">
    <label for="otp1">OTP:</label>
    <input type="text" id="otp1" maxlength="1" oninput="moveToNext(this, 'otp2')" onpaste="handlePaste(this, event)">

    <input type="text" id="otp2" maxlength="1" oninput="moveToNext(this, 'otp3')">

    <input type="text" id="otp3" maxlength="1" oninput="moveToNext(this, 'otp4')">

    <input type="text" id="otp4" maxlength="1" oninput="moveToNext(this, 'otp5')">

    <input type="text" id="otp5" maxlength="1" oninput="moveToNext(this, 'otp6')">

    <input type="text" id="otp6" maxlength="1" oninput="submitFormIfComplete()">
</form>
```

## Auto-focus to the Next Input

Have you noticed that when you entering a number to the first OTP inputs, the next input automatically focused. To make this smooth process, we'll put the following script to automatically move the focus to the next input field after a digit is inserted.

```js
function moveToNext(currentInput, nextInputId) {
    if (currentInput.value.length === currentInput.maxLength) {
        document.getElementById(nextInputId).focus();
    }
}
```

## Handling Pasting

What if a user pastes a 6-digit OTP! This mean we need to enhance the script to handle pasting the entire OTP at once. So the script will distribute each digit into the corresponding input fields.

```js
function handlePaste(input, event) {
    let pastedText = (event.clipboardData || window.clipboardData).getData('text');

    // Check if pasted text is a 6-digit number
    if (/^\d{6}$/.test(pastedText)) {
        for (let i = 1; i <= 6; i++) {
            document.getElementById('otp' + i).value = pastedText.charAt(i - 1);
        }
        // Prevent the default paste behavior
        event.preventDefault();
    }
}
```

## Submitting the Form

Now we want to check if the user complete entering the six digits, so we'll implement a function to check that and submit the form.

```js
function submitFormIfComplete() {
    let otp = '';
    for (let i = 1; i <= 6; i++) {
        otp += document.getElementById('otp' + i).value;
    }

    if (otp.length === 6) {
        document.getElementById('otpForm').submit();
    }
}
```

## Conclusion

The importance of implementing an auto-fill OTP input with JavaScript can greatly enhance the user experience, providing a seamless and efficient way for users to enter their OTPs. Feel free to customize the full code on my profile on [codepen.com](https://codepen.io/muathye/pen/YzBQvYN) to suit your specific requirements.

Happy coding!
