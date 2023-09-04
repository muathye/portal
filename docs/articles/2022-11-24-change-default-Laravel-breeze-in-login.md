---
layout: doc
title: How to Change Default Laravel Breeze "email" to "id" in login
date: 2022-11-24
author: Muath Alsowadi
gravatar: 19684bc9c928dffa64f9c23efb31ba86
twitter: '@muathye'
description: How to Change Default Laravel Breeze "email" to "id" in login page and request.
head:
  - - meta
    - name: keywords
      content: laravel breeze auth-scaffolding
  - - meta
    - name: og:type
      content: article
  - - meta
    - name: og:url
      content: https://muathye.com/articles/2022-11-24-change-default-Laravel-breeze-in-login
  - - meta
    - name: og:title
      content: How to Change Default Laravel Breeze "email" to "id" in login
  - - meta
    - name: og:description
      content: How to Change Default Laravel Breeze "email" to "id" in login page and request.
  - - meta
    - name: og:image
      content: https://muathye.com/articles/2022-11-24/change-default-Laravel-breeze-in-login.png
---

![An image](/articles/2022-11-24/change-default-Laravel-breeze-in-login.png)

# How to Change Default Laravel Breeze "email" to "id" in login

In my case I want to change `email` to `id` 
modify the exported  `App\Http\Requests\Auth\LoginRequest` from `breeze` as following:
```php
<?php

namespace App\Http\Requests\Auth;

use Illuminate\Auth\Events\Lockout;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'id' => ['required', 'string'],
            'password' => ['required', 'string'],
        ];
    }

    /**
     * Attempt to authenticate the request's credentials.
     *
     * @return void
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function authenticate()
    {
        $this->ensureIsNotRateLimited();

        if (! Auth::attempt($this->only('id', 'password'), $this->boolean('remember'))) {
            RateLimiter::hit($this->throttleKey());

            throw ValidationException::withMessages([
                'id' => trans('auth.failed'),
            ]);
        }

        RateLimiter::clear($this->throttleKey());
    }

    /**
     * Ensure the login request is not rate limited.
     *
     * @return void
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function ensureIsNotRateLimited()
    {
        if (! RateLimiter::tooManyAttempts($this->throttleKey(), 5)) {
            return;
        }

        event(new Lockout($this));

        $seconds = RateLimiter::availableIn($this->throttleKey());

        throw ValidationException::withMessages([
            'id' => trans('auth.throttle', [
                'seconds' => $seconds,
                'minutes' => ceil($seconds / 60),
            ]),
        ]);
    }

    /**
     * Get the rate limiting throttle key for the request.
     *
     * @return string
     */
    public function throttleKey()
    {
        return Str::transliterate(Str::lower($this->input('id')).'|'.$this->ip());
    }
}
```

Note: you need to change the input name on blade as following

```blade
<!-- Email Address Become Id -->
<div>
    <x-input-label for="id" :value="__('Email')" />
    <x-text-input id="id" class="block mt-1 w-full" type="text" name="id" :value="old('id')" required autofocus />
    <x-input-error :messages="$errors->get('id')" class="mt-2" />
</div>
```