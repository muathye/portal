---
layout: doc
title: ChatGPT Prompt Engineering for Developers [Part 6/7]
description: You'll practice two prompting principles and their related tactics in order to write effective prompts for large language models.
head:
  - - meta
    - name: keywords
      content: chatgpt prompt-engineering developers
  - - meta
    - name: og:type
      content: article
  - - meta
    - name: og:url
      content: https://muathye.com/articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-6
  - - meta
    - name: og:title
      content: ChatGPT Prompt Engineering for Developers [Part 6/7]
  - - meta
    - name: og:description
      content: You'll practice two prompting principles and their related tactics in order to write effective prompts for large language models.
  - - meta
    - name: og:image
      content: https://muathye.com/articles/2023-05-30/chatgpt-prompt-engineering-for-developers-part-1.webp
--- 

![An image](/articles/2023-05-30/chatgpt-prompt-engineering-for-developers-part-1.webp)

Photo by [Mariia Shalabaieva](https://unsplash.com/@maria_shalabaieva?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/openai?license=free&utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

# ChatGPT Prompt Engineering for Developers [Part 6/7]

Large Language Models (LLMs) have been a game-changer in the field of artificial intelligence and natural language processing. They have been used in various applications, such as language translation, speech recognition, and chat bots, to name a few. In this article, we'll dive into the ChatGPT Prompt Engineering for Developers and learn about the best practices for using LLM technology in software applications.

[[toc]]

## Expanding

In this lesson, you will generate customer service emails that are tailored to each customer's review.

## Setup

```python
import openai
import os

from dotenv import load_dotenv, find_dotenv
_ = load_dotenv(find_dotenv()) # read local .env file

openai.api_key  = os.getenv('OPENAI_API_KEY')
```

```python
def get_completion(prompt, model="gpt-3.5-turbo",temperature=0): # Andrew mentioned that the prompt/ completion paradigm is preferable for this class
    messages = [{"role": "user", "content": prompt}]
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=temperature, # this is the degree of randomness of the model's output
    )
    return response.choices[0].message["content"]
```

## Customize the automated reply to a customer email

```python
# given the sentiment from the lesson on "inferring",
# and the original customer message, customize the email
sentiment = "negative"

# review for a blender
review = f"""
So, they still had the 17 piece system on seasonal \
sale for around $49 in the month of November, about \
half off, but for some reason (call it price gouging) \
around the second week of December the prices all went \
up to about anywhere from between $70-$89 for the same \
system. And the 11 piece system went up around $10 or \
so in price also from the earlier sale price of $29. \
So it looks okay, but if you look at the base, the part \
where the blade locks into place doesn’t look as good \
as in previous editions from a few years ago, but I \
plan to be very gentle with it (example, I crush \
very hard items like beans, ice, rice, etc. in the \ 
blender first then pulverize them in the serving size \
I want in the blender then switch to the whipping \
blade for a finer flour, and use the cross cutting blade \
first when making smoothies, then use the flat blade \
if I need them finer/less pulpy). Special tip when making \
smoothies, finely cut and freeze the fruits and \
vegetables (if using spinach-lightly stew soften the \ 
spinach then freeze until ready for use-and if making \
sorbet, use a small to medium sized food processor) \ 
that you plan to use that way you can avoid adding so \
much ice if at all-when making your smoothie. \
After about a year, the motor was making a funny noise. \
I called customer service but the warranty expired \
already, so I had to buy another one. FYI: The overall \
quality has gone done in these types of products, so \
they are kind of counting on brand recognition and \
consumer loyalty to maintain sales. Got it in about \
two days.
"""
```

```python
prompt = f"""
You are a customer service AI assistant.
Your task is to send an email reply to a valued customer.
Given the customer email delimited by ```, \
Generate a reply to thank the customer for their review.
If the sentiment is positive or neutral, thank them for \
their review.
If the sentiment is negative, apologize and suggest that \
they can reach out to customer service. 
Make sure to use specific details from the review.
Write in a concise and professional tone.
Sign the email as `AI customer agent`.
Customer review: ```{review}```
Review sentiment: {sentiment}
"""
response = get_completion(prompt)
print(response)
```

> output:

```txt
Dear Valued Customer,

Thank you for taking the time to share your review with us. We appreciate your feedback and apologize for any inconvenience you may have experienced.

We are sorry to hear about the price increase you noticed in December. We strive to provide competitive pricing for our products, and we understand your frustration. If you have any further concerns regarding pricing, we recommend reaching out to our customer service team who will be happy to assist you.

We also appreciate your feedback regarding the base of the system. We continuously work to improve the quality of our products, and your comments will be taken into consideration for future enhancements.

Regarding the motor issue you encountered, we apologize for any inconvenience caused. Our customer service team is available to assist you with any technical difficulties you may encounter, even if the warranty has expired. Please do not hesitate to reach out to them for further assistance.

Thank you once again for your review. We value your loyalty and appreciate your support. If you have any further questions or concerns, please feel free to contact our customer service team.

Best regards,

AI customer agent
```

## Remind the model to use details from the customer's email

```python
prompt = f"""
You are a customer service AI assistant.
Your task is to send an email reply to a valued customer.
Given the customer email delimited by ```, \
Generate a reply to thank the customer for their review.
If the sentiment is positive or neutral, thank them for \
their review.
If the sentiment is negative, apologize and suggest that \
they can reach out to customer service. 
Make sure to use specific details from the review.
Write in a concise and professional tone.
Sign the email as `AI customer agent`.
Customer review: ```{review}```
Review sentiment: {sentiment}
"""
response = get_completion(prompt, temperature=0.7)
print(response)
```

> output:

```txt
Dear Valued Customer,

Thank you for taking the time to share your review with us. We appreciate your feedback and are sorry to hear about your experience with the pricing changes and the decrease in quality.

We apologize for any inconvenience caused by the sudden increase in prices for the 17 piece system and the 11 piece system. We understand that this may have been frustrating for you, and we appreciate your understanding. We will take note of this issue and address it internally to ensure a better customer experience in the future.

Regarding the quality of the base and the motor noise, we apologize for any disappointment caused. Our aim is to provide products of the highest quality, and we are sorry to hear that you encountered these issues. If you would like further assistance or have any other concerns, we encourage you to reach out to our customer service team. They will be more than happy to assist you in finding a solution.

Thank you for your loyalty and support as a customer. We value your feedback as it helps us improve our products and services. If there is anything else we can assist you with, please do not hesitate to let us know.

Best regards,

AI customer agent
```

## Try experimenting on your own

```python
# write your own tries
```
