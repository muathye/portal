---
layout: doc
title: ChatGPT Prompt Engineering for Developers [Part 2/7] Iterative Prompt Development
date: 2023-05-30
author: Muath Alsowadi
gravatar: 19684bc9c928dffa64f9c23efb31ba86
twitter: '@muathye'
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
      content: https://muathye.com/articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-1
  - - meta
    - name: og:title
      content: ChatGPT Prompt Engineering for Developers [Part 2/7]
  - - meta
    - name: og:description
      content: You'll practice two prompting principles and their related tactics in order to write effective prompts for large language models.
  - - meta
    - name: og:image
      content: https://muathye.com/articles/2023-05-30/chatgpt-prompt-engineering-for-developers-part-1.webp
--- 

![An image](/articles/2023-05-30/chatgpt-prompt-engineering-for-developers-part-1.webp)

Photo by [Mariia Shalabaieva](https://unsplash.com/@maria_shalabaieva?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/openai?license=free&utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

# ChatGPT Prompt Engineering for Developers [Part 2/7]

Large Language Models (LLMs) have been a game-changer in the field of artificial intelligence and natural language processing. They have been used in various applications, such as language translation, speech recognition, and chat bots, to name a few. In this article, we'll dive into the ChatGPT Prompt Engineering for Developers and learn about the best practices for using LLM technology in software applications.

[[toc]]

## Iterative Prompt Development

In this lesson, you'll iteratively analyze and refine your prompts to generate marketing copy from a product fact sheet.

## Setup

```python
import openai
import os

from dotenv import load_dotenv, find_dotenv
_ = load_dotenv(find_dotenv()) # read local .env file

openai.api_key  = os.getenv('OPENAI_API_KEY')
```

```python
def get_completion(prompt, model="gpt-3.5-turbo"):
    messages = [{"role": "user", "content": prompt}]
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=0, # this is the degree of randomness of the model's output
    )
    return response.choices[0].message["content"]
```

## Generate a marketing product description from a product fact sheet

```python
fact_sheet_chair = """
OVERVIEW

- Part of a beautiful family of mid-century inspired office furniture,

including filing cabinets, desks, bookcases, meeting tables, and more.

- Several options of shell color and base finishes.

- Available with plastic back and front upholstery (SWC-100)
or full upholstery (SWC-110) in 10 fabric and 6 leather options.

- Base finish options are: stainless steel, matte black,
gloss white, or chrome.

- Chair is available with or without armrests.

- Suitable for home or business settings.

- Qualified for contract use.

CONSTRUCTION

- 5-wheel plastic coated aluminum base.

- Pneumatic chair adjust for easy raise/lower action.

DIMENSIONS

- WIDTH 53 CM | 20.87”

- DEPTH 51 CM | 20.08”

- HEIGHT 80 CM | 31.50”

- SEAT HEIGHT 44 CM | 17.32”

- SEAT DEPTH 41 CM | 16.14”

OPTIONS

- Soft or hard-floor caster options.

- Two choices of seat foam densities:
 medium (1.8 lb/ft3) or high (2.8 lb/ft3)

- Armless or 8 position PU armrests

MATERIALS

SHELL BASE GLIDER

- Cast Aluminum with modified nylon PA6/PA66 coating.

- Shell thickness: 10 mm.
SEAT

- HD36 foam

COUNTRY OF ORIGIN

- Italy
"""
```

```python
prompt = f"""
Your task is to help a marketing team create a
description for a retail website of a product based
on a technical fact sheet.

Write a product description based on the information
provided in the technical specifications delimited by
triple backticks.

Technical specifications: ```{fact_sheet_chair}```
"""

response = get_completion(prompt)
print(response)
```

> output:

```txt
Introducing our stunning mid-century inspired office chair, the perfect addition to any home or business setting. This chair is part of a beautiful family of office furniture, including filing cabinets, desks, bookcases, meeting tables, and more, all designed with a timeless mid-century aesthetic.

One of the standout features of this chair is the variety of customization options available. You can choose from several shell colors and base finishes to perfectly match your existing decor. The chair is available with either plastic back and front upholstery or full upholstery in a range of 10 fabric and 6 leather options, allowing you to create a look that is uniquely yours.

The chair is also available with or without armrests, giving you the flexibility to choose the option that best suits your needs. The base finish options include stainless steel, matte black, gloss white, or chrome, ensuring that you can find the perfect match for your space.

In terms of construction, this chair is built to last. It features a 5-wheel plastic coated aluminum base, providing stability and mobility. The pneumatic chair adjust allows for easy raise and lower action, ensuring optimal comfort throughout the day.

When it comes to dimensions, this chair is designed with both style and comfort in mind. With a width of 53 cm (20.87"), depth of 51 cm (20.08"), and height of 80 cm (31.50"), it offers ample space without overwhelming your space. The seat height is 44 cm (17.32") and the seat depth is 41 cm (16.14"), providing a comfortable seating experience for extended periods.

We understand that every space is unique, which is why we offer a range of options to further customize your chair. You can choose between soft or hard-floor caster options, ensuring that your chair glides smoothly on any surface. Additionally, you have the choice between two seat foam densities: medium (1.8 lb/ft3) or high (2.8 lb/ft3), allowing you to select the level of support that suits your preferences. The chair is also available with armless design or 8 position PU armrests, providing additional comfort and versatility.

When it comes to materials, this chair is crafted with the utmost attention to quality. The shell base glider is made of cast aluminum with a modified nylon PA6/PA66 coating, ensuring durability and longevity. The shell thickness is 10 mm, providing a sturdy and reliable structure. The seat is made of HD36 foam, offering a comfortable and supportive seating experience.

Finally, this chair is proudly made in Italy, known for its exceptional craftsmanship and attention to detail. With its timeless design and superior construction, this chair is not only a stylish addition to any space but also a reliable and functional piece of furniture.

Upgrade your office or home with our mid-century inspired office chair and experience the perfect blend of style, comfort, and functionality.
```

## Issue 1: The text is too long

- Limit the number of words/sentences/characters.

```python
prompt = f"""
Your task is to help a marketing team create a
description for a retail website of a product based
on a technical fact sheet.

Write a product description based on the information
provided in the technical specifications delimited by
triple backticks.

Use at most 50 words.

Technical specifications: ```{fact_sheet_chair}```
"""

response = get_completion(prompt)
print(response)
```

> The output :

```txt
Introducing our mid-century inspired office chair, part of a stunning furniture collection. With various color and finish options, choose between plastic or full upholstery in fabric or leather. The chair features a durable aluminum base with 5 wheels and pneumatic height adjustment. Perfect for home or business use. Made in Italy.
```

```python
len(response)
```

> The output :

```txt
333
```

## Issue 2. Text focuses on the wrong details

- Ask it to focus on the aspects that are relevant to the intended audience.

```python
prompt = f"""
Your task is to help a marketing team create a
description for a retail website of a product based
on a technical fact sheet.

Write a product description based on the information
provided in the technical specifications delimited by
triple backticks.

The description is intended for furniture retailers,
so should be technical in nature and focus on the
materials the product is constructed from.

Use at most 50 words.

Technical specifications: ```{fact_sheet_chair}```
"""

response = get_completion(prompt)
print(response)
```

> output:

```txt
Introducing our mid-century inspired office chair, part of a beautiful furniture collection. With various shell colors and base finishes, it offers versatility for any setting. Choose between plastic or full upholstery in a range of fabric and leather options. The chair features a durable aluminum base with 5-wheel design and pneumatic chair adjustment. Made in Italy.
```

```python
prompt = f"""
Your task is to help a marketing team create a
description for a retail website of a product based
on a technical fact sheet.

Write a product description based on the information
provided in the technical specifications delimited by
triple backticks.

The description is intended for furniture retailers,
so should be technical in nature and focus on the
materials the product is constructed from.

At the end of the description, include every 7-character
Product ID in the technical specification.

Use at most 50 words.

Technical specifications: ```{fact_sheet_chair}```
"""

response = get_completion(prompt)
print(response)
```

> output:

```txt
Introducing our mid-century inspired office chair, part of a beautiful family of furniture. With various shell colors and base finishes, this chair offers versatility and style. Choose between plastic or full upholstery in a range of fabric and leather options. The chair features a 5-wheel plastic coated aluminum base and a pneumatic chair adjust for easy height adjustment. Available with or without armrests, this chair is suitable for both home and business settings. Made with high-quality materials, including a cast aluminum shell and HD36 foam seat, this chair is built to last. Product ID: SWC-100, SWC-110.
```

## Issue 3. Description needs a table of dimensions

- Ask it to extract information and organize it in a table.

```python
prompt = f"""
Your task is to help a marketing team create a
description for a retail website of a product based
on a technical fact sheet.

Write a product description based on the information
provided in the technical specifications delimited by
triple backticks.

The description is intended for furniture retailers,
so should be technical in nature and focus on the
materials the product is constructed from.

At the end of the description, include every 7-character
Product ID in the technical specification.

After the description, include a table that gives the
product's dimensions. The table should have two columns.
In the first column include the name of the dimension.
In the second column include the measurements in inches only.

Give the table the title 'Product Dimensions'.

Format everything as HTML that can be used in a website.
Place the description in a <div> element.

Technical specifications: ```{fact_sheet_chair}```
"""

response = get_completion(prompt)
print(response)
```

> output:

```txt
<div>
  <h2>Product Description</h2>
  <p>
    Introducing our latest addition to our mid-century inspired office furniture collection - the SWC Chair. This chair is part of a beautiful family of furniture that includes filing cabinets, desks, bookcases, meeting tables, and more. With its sleek design and customizable options, the SWC Chair is the perfect choice for any home or business setting.
  </p>
  <p>
    The SWC Chair offers several options for customization. You can choose from a variety of shell colors and base finishes to match your existing decor. The chair is available with plastic back and front upholstery or full upholstery in a range of fabric and leather options. The base finish options include stainless steel, matte black, gloss white, or chrome. You can also choose whether to have armrests or not, depending on your preference.
  </p>
  <p>
    The construction of the SWC Chair is top-notch. It features a 5-wheel plastic coated aluminum base, ensuring stability and durability. The chair also has a pneumatic adjuster, allowing for easy raise and lower action. This makes it convenient for users to find their desired height and maintain proper posture throughout the day.
  </p>
  <p>
    The SWC Chair is designed with comfort in mind. The seat is made with HD36 foam, providing a plush and supportive cushioning experience. You can also choose between soft or hard-floor caster options, depending on the type of flooring in your space. Additionally, there are two choices of seat foam densities available: medium (1.8 lb/ft3) or high (2.8 lb/ft3). This allows you to customize the level of firmness to suit your preferences.
  </p>
  <p>
    The SWC Chair is not only stylish and comfortable, but it is also built to last. The shell base glider is made of cast aluminum with a modified nylon PA6/PA66 coating, ensuring strength and durability. The shell thickness is 10 mm, providing stability and support. With its high-quality materials and construction, the SWC Chair is qualified for contract use, making it suitable for commercial settings as well.
  </p>
  <p>
    Made in Italy, the SWC Chair is a testament to Italian craftsmanship and design. It combines style, functionality, and durability to create a chair that is both aesthetically pleasing and practical.
  </p>
  <h2>Product Dimensions</h2>
  <table>
    <tr>
      <th>Dimension</th>
      <th>Measurement (inches)</th>
    </tr>
    <tr>
      <td>Width</td>
      <td>20.87"</td>
    </tr>
    <tr>
      <td>Depth</td>
      <td>20.08"</td>
    </tr>
    <tr>
      <td>Height</td>
      <td>31.50"</td>
    </tr>
    <tr>
      <td>Seat Height</td>
      <td>17.32"</td>
    </tr>
    <tr>
      <td>Seat Depth</td>
      <td>16.14"</td>
    </tr>
  </table>
</div>

Product IDs: SWC-100, SWC-110
```

## Load Python libraries to view HTML

```python
from IPython.display import display, HTML
```

```python
display(HTML(response))
```

> output:

```txt
Product Description
Introducing our latest addition to our mid-century inspired office furniture collection - the SWC Chair. This chair is part of a beautiful family of furniture that includes filing cabinets, desks, bookcases, meeting tables, and more. With its sleek design and customizable options, the SWC Chair is the perfect choice for any home or business setting.

The SWC Chair offers several options for customization. You can choose from a variety of shell colors and base finishes to match your existing decor. The chair is available with plastic back and front upholstery or full upholstery in a range of fabric and leather options. The base finish options include stainless steel, matte black, gloss white, or chrome. You can also choose whether to have armrests or not, depending on your preference.

The construction of the SWC Chair is top-notch. It features a 5-wheel plastic coated aluminum base, ensuring stability and durability. The chair also has a pneumatic adjuster, allowing for easy raise and lower action. This makes it convenient for users to find their desired height and maintain proper posture throughout the day.

The SWC Chair is designed with comfort in mind. The seat is made with HD36 foam, providing a plush and supportive cushioning experience. You can also choose between soft or hard-floor caster options, depending on the type of flooring in your space. Additionally, there are two choices of seat foam densities available: medium (1.8 lb/ft3) or high (2.8 lb/ft3). This allows you to customize the level of firmness to suit your preferences.

The SWC Chair is not only stylish and comfortable, but it is also built to last. The shell base glider is made of cast aluminum with a modified nylon PA6/PA66 coating, ensuring strength and durability. The shell thickness is 10 mm, providing stability and support. With its high-quality materials and construction, the SWC Chair is qualified for contract use, making it suitable for commercial settings as well.

Made in Italy, the SWC Chair is a testament to Italian craftsmanship and design. It combines style, functionality, and durability to create a chair that is both aesthetically pleasing and practical.

Product Dimensions
Dimension	Measurement (inches)
Width	20.87"
Depth	20.08"
Height	31.50"
Seat Height	17.32"
Seat Depth	16.14"
Product IDs: SWC-100, SWC-110
```

## Try experimenting on your own

```python
# write your own tries
```
