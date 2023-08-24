---
layout: doc
title: ChatGPT Prompt Engineering for Developers [Part 5/7]
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
      content: https://muathye.com/articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-5
  - - meta
    - name: og:title
      content: ChatGPT Prompt Engineering for Developers [Part 5/7]
  - - meta
    - name: og:description
      content: You'll practice two prompting principles and their related tactics in order to write effective prompts for large language models.
  - - meta
    - name: og:image
      content: https://muathye.com/articles/2023-05-30/chatgpt-prompt-engineering-for-developers-part-1.webp
--- 

![An image](/articles/2023-05-30/chatgpt-prompt-engineering-for-developers-part-1.webp)

Photo by [Mariia Shalabaieva](https://unsplash.com/@maria_shalabaieva?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/openai?license=free&utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

# ChatGPT Prompt Engineering for Developers [Part 5/7]

Large Language Models (LLMs) have been a game-changer in the field of artificial intelligence and natural language processing. They have been used in various applications, such as language translation, speech recognition, and chat bots, to name a few. In this article, we'll dive into the ChatGPT Prompt Engineering for Developers and learn about the best practices for using LLM technology in software applications.

[[toc]]

## Transforming

In this notebook, we will explore how to use Large Language Models for text transformation tasks such as language translation, spelling and grammar checking, tone adjustment, and format conversion.

## Setup

```python
import openai
import os

from dotenv import load_dotenv, find_dotenv
_ = load_dotenv(find_dotenv()) # read local .env file

openai.api_key  = os.getenv('OPENAI_API_KEY')
```

```python
def get_completion(prompt, model="gpt-3.5-turbo", temperature=0): 
    messages = [{"role": "user", "content": prompt}]
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=temperature, 
    )
    return response.choices[0].message["content"]
```

## Translation

ChatGPT is trained with sources in many languages. This gives the model the ability to do translation. Here are some examples of how to use this capability.

```python
prompt = f"""
Translate the following English text to Spanish: \ 
```Hi, I would like to order a blender```
"""
response = get_completion(prompt)
print(response)
```

> output:

```txt
Hola, me gustaría ordenar una licuadora.
```

```python
prompt = f"""
Tell me which language this is: 
```Combien coûte le lampadaire?```
"""
response = get_completion(prompt)
print(response)
```

> output:

```txt
This language is French.
```

```python
prompt = f"""
Translate the following  text to French and Spanish
and English pirate: \
```I want to order a basketball```
"""
response = get_completion(prompt)
print(response)
```

> output:

```txt
French: ```Je veux commander un ballon de basket```
Spanish: ```Quiero ordenar una pelota de baloncesto```
English: ```I want to order a basketball```
```

```python
prompt = f"""
Translate the following text to Spanish in both the \
formal and informal forms: 
'Would you like to order a pillow?'
"""
response = get_completion(prompt)
print(response)
```

> output:

```txt
Formal: ¿Le gustaría ordenar una almohada?
Informal: ¿Te gustaría ordenar una almohada?
```

### Universal Translator

Imagine you are in charge of IT at a large multinational e-commerce company. Users are messaging you with IT issues in all their native languages. Your staff is from all over the world and speaks only their native languages. You need a universal translator!

```python
user_messages = [
  "La performance du système est plus lente que d'habitude.",  # System performance is slower than normal         
  "Mi monitor tiene píxeles que no se iluminan.",              # My monitor has pixels that are not lighting
  "Il mio mouse non funziona",                                 # My mouse is not working
  "Mój klawisz Ctrl jest zepsuty",                             # My keyboard has a broken control key
  "我的屏幕在闪烁"                                               # My screen is flashing
] 
```

```python
for issue in user_messages:
    prompt = f"Tell me what language this is: ```{issue}```"
    lang = get_completion(prompt)
    print(f"Original message ({lang}): {issue}")

    prompt = f"""
    Translate the following  text to English \
    and Korean: ```{issue}```
    """
    response = get_completion(prompt)
    print(response, "\n")
```

> output:

```txt
Original message (The language is French.): La performance du système est plus lente que d'habitude.
The performance of the system is slower than usual.

시스템의 성능이 평소보다 느립니다. 

Original message (The language is Spanish.): Mi monitor tiene píxeles que no se iluminan.
English: "My monitor has pixels that do not light up."

Korean: "내 모니터에는 밝아지지 않는 픽셀이 있습니다." 

Original message (The language is Italian.): Il mio mouse non funziona
English: "My mouse is not working."
Korean: "내 마우스가 작동하지 않습니다." 

Original message (The language is Polish.): Mój klawisz Ctrl jest zepsuty
English: "My Ctrl key is broken"
Korean: "내 Ctrl 키가 고장 났어요" 

Original message (The language is Chinese.): 我的屏幕在闪烁
English: My screen is flickering.
Korean: 내 화면이 깜박거립니다.
```

## Try it yourself

Try some translations on your own!

```python
# write your own tries
```

## Tone Transformation

Writing can vary based on the intended audience. ChatGPT can produce different tones.

```python
prompt = f"""
Translate the following from slang to a business letter: 
'Dude, This is Joe, check out this spec on this standing lamp.'
"""
response = get_completion(prompt)
print(response)
```

> output:

```txt
Dear Sir/Madam,

I hope this letter finds you well. My name is Joe, and I am writing to bring your attention to a specification document regarding a standing lamp. 

I kindly request that you take a moment to review the attached document, as it provides detailed information about the features and specifications of the aforementioned standing lamp. 

Thank you for your time and consideration. I look forward to discussing this further with you.

Yours sincerely,
Joe
```

## Format Conversion

ChatGPT can translate between formats. The prompt should describe the input and output formats.

```python
data_json = { "resturant employees" :[ 
    {"name":"Shyam", "email":"shyamjaiswal@gmail.com"},
    {"name":"Bob", "email":"bob32@gmail.com"},
    {"name":"Jai", "email":"jai87@gmail.com"}
]}

prompt = f"""
Translate the following python dictionary from JSON to an HTML \
table with column headers and title: {data_json}
"""
response = get_completion(prompt)
print(response)
```

> output:

```html
<!DOCTYPE html>
<html>
<head>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
</head>
<body>

<h2>Restaurant Employees</h2>

<table>
  <tr>
    <th>Name</th>
    <th>Email</th>
  </tr>
  <tr>
    <td>Shyam</td>
    <td>shyamjaiswal@gmail.com</td>
  </tr>
  <tr>
    <td>Bob</td>
    <td>bob32@gmail.com</td>
  </tr>
  <tr>
    <td>Jai</td>
    <td>jai87@gmail.com</td>
  </tr>
</table>

</body>
</html>
```

```python
from IPython.display import display, Markdown, Latex, HTML, JSON
display(HTML(response))
```

> output

::: tip note
The following output is a rendered HTML but I make it in markdown table syntax to simulate the output from Python.
:::

> | Name  | Email                  |
> |-------|------------------------|
> | Shyam | shyamjaiswal@gmail.com |
> | Bob   | bob32@gmail.com        |
> | Jai   | jai87@gmail.com        |

## Spellcheck/Grammar check

Here are some examples of common grammar and spelling problems and the LLM's response. 

To signal to the LLM that you want it to proofread your text, you instruct the model to 'proofread' or 'proofread and correct'.

```python
text = [ 
  "The girl with the black and white puppies have a ball.",  # The girl has a ball.
  "Yolanda has her notebook.", # ok
  "Its going to be a long day. Does the car need it’s oil changed?",  # Homonyms
  "Their goes my freedom. There going to bring they’re suitcases.",  # Homonyms
  "Your going to need you’re notebook.",  # Homonyms
  "That medicine effects my ability to sleep. Have you heard of the butterfly affect?", # Homonyms
  "This phrase is to cherck chatGPT for speling abilitty"  # spelling
]
for t in text:
    prompt = f"""Proofread and correct the following text
    and rewrite the corrected version. If you don't find
    and errors, just say "No errors found". Don't use 
    any punctuation around the text:
    ```{t}```"""
    response = get_completion(prompt)
    print(response)
```

> output:

```txt
The girl with the black and white puppies has a ball.
No errors found.
No errors found.
There goes my freedom. They're going to bring their suitcases.
You're going to need your notebook.
That medicine affects my ability to sleep. Have you heard of the butterfly effect?
This phrase is to check chatGPT for spelling ability.
```

```python
text = f"""
Got this for my daughter for her birthday cuz she keeps taking \
mine from my room.  Yes, adults also like pandas too.  She takes \
it everywhere with her, and it's super soft and cute.  One of the \
ears is a bit lower than the other, and I don't think that was \
designed to be asymmetrical. It's a bit small for what I paid for it \
though. I think there might be other options that are bigger for \
the same price.  It arrived a day earlier than expected, so I got \
to play with it myself before I gave it to my daughter.
"""
prompt = f"proofread and correct this review: ```{text}```"
response = get_completion(prompt)
print(response)
```

> output:

```txt
Got this for my daughter for her birthday because she keeps taking mine from my room. Yes, adults also like pandas too. She takes it everywhere with her, and it's super soft and cute. However, one of the ears is a bit lower than the other, and I don't think that was designed to be asymmetrical. Additionally, it's a bit small for what I paid for it. I believe there might be other options that are bigger for the same price. On the positive side, it arrived a day earlier than expected, so I got to play with it myself before I gave it to my daughter.
```

```python
from redlines import Redlines

diff = Redlines(text,response)
display(Markdown(diff.output_markdown))
```

> output:

::: tip note
The following output is a rendered Markdown but I rewrite it in markdown syntax to simulate the output from Python.
:::

> Got this for my daughter for her birthday <span style="color: red;">~~cuz~~ because</span> she keeps taking mine from my <span style="color: red;">~~room.~~ room.</span> Yes, adults also like pandas <span style="color: red;">~~too.~~ too.</span> She takes it everywhere with her, and it's super soft and <span style="color: red;">~~cute. One~~cute. However, one</span> of the ears is a bit lower than the other, and I don't think that was designed to be asymmetrical. <span style="color: red;">~~It's~~ Additionally, it's</span> a bit small for what I paid for <span style="color: red;">~~it though.~~ it.</span> I <span style="color: red;">~~think~~ believe</span> there might be other options that are bigger for the same <span style="color: red;">~~price. It~~ price. On the positive side, it</span> arrived a day earlier than expected, so I got to play with it myself before I gave it to my <span style="color: red;">~~daughter.~~ daughter.</span>

```python
prompt = f"""
proofread and correct this review. Make it more compelling. 
Ensure it follows APA style guide and targets an advanced reader. 
Output in markdown format.
Text: ```{text}```
"""
response = get_completion(prompt)
display(Markdown(response))
```

> output:

::: tip note
The following output is a rendered Markdown but I rewrite it in markdown syntax to simulate the output from Python.
:::

> **Review of the Panda Plush Toy: A Perfect Gift for All Ages**
>
> I purchased this delightful panda plush toy as a birthday gift for my daughter, who has a penchant for sneaking into my room and "borrowing" my belongings. > However, it turns out that adults can also find joy in the company of these adorable creatures.
>
> The moment my daughter laid eyes on this panda, she instantly fell in love. Its irresistibly soft and cuddly texture makes it the perfect companion for her > daily adventures. However, I did notice a minor flaw in its design - one of the ears is slightly lower than the other, which seems unintentional. > Nevertheless, this asymmetry does not detract from its overall charm.
>
> While the quality of the plush toy is exceptional, I must admit that I expected it to be slightly larger given its price. It would be worthwhile to explore > other options that offer a larger size for the same cost.
>
> On a positive note, the delivery of the panda plush toy exceeded my expectations. It arrived a day earlier than anticipated, allowing me to indulge in some > playtime with it before presenting it to my daughter. This unexpected bonus added to the excitement and anticipation surrounding her birthday celebration.
>
> In conclusion, the panda plush toy is a delightful and endearing gift suitable for individuals of all ages. Its softness and cuteness make it an instant > favorite, despite the minor design flaw and size discrepancy. With its prompt delivery and universal appeal, this panda plush toy is sure to bring joy and > comfort to anyone lucky enough to own it.

## Try it yourself
Try changing the instructions to form your own review.

```python
# write your own tries
```

Thanks to the following sites:

https://writingprompts.com/bad-grammar-examples/
