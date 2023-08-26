import{_ as s}from"./chunks/chatgpt-prompt-engineering-for-developers-part-1.242329a7.js";import{_ as a,o as n,c as e,S as t}from"./chunks/framework.0c55f2c5.js";const m=JSON.parse(`{"title":"ChatGPT Prompt Engineering for Developers [Part 2/7]","description":"You'll practice two prompting principles and their related tactics in order to write effective prompts for large language models.","frontmatter":{"layout":"doc","title":"ChatGPT Prompt Engineering for Developers [Part 2/7]","description":"You'll practice two prompting principles and their related tactics in order to write effective prompts for large language models.","head":[["meta",{"name":"keywords","content":"chatgpt prompt-engineering developers"}],["meta",{"name":"og:type","content":"article"}],["meta",{"name":"og:url","content":"https://muathye.com/articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-1"}],["meta",{"name":"og:title","content":"ChatGPT Prompt Engineering for Developers [Part 2/7]"}],["meta",{"name":"og:description","content":"You'll practice two prompting principles and their related tactics in order to write effective prompts for large language models."}],["meta",{"name":"og:image","content":"https://muathye.com/articles/2023-05-30/chatgpt-prompt-engineering-for-developers-part-1.webp"}]]},"headers":[],"relativePath":"articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-2.md","filePath":"articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-2.md","lastUpdated":1693025462000}`),l={name:"articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-2.md"},o=t('<p><img src="'+s+`" alt="An image"></p><p>Photo by <a href="https://unsplash.com/@maria_shalabaieva?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="noreferrer">Mariia Shalabaieva</a> on <a href="https://unsplash.com/s/photos/openai?license=free&amp;utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="noreferrer">Unsplash</a></p><h1 id="chatgpt-prompt-engineering-for-developers-part-2-7" tabindex="-1">ChatGPT Prompt Engineering for Developers [Part 2/7] <a class="header-anchor" href="#chatgpt-prompt-engineering-for-developers-part-2-7" aria-label="Permalink to &quot;ChatGPT Prompt Engineering for Developers [Part 2/7]&quot;">​</a></h1><p>Large Language Models (LLMs) have been a game-changer in the field of artificial intelligence and natural language processing. They have been used in various applications, such as language translation, speech recognition, and chat bots, to name a few. In this article, we&#39;ll dive into the ChatGPT Prompt Engineering for Developers and learn about the best practices for using LLM technology in software applications.</p><nav class="table-of-contents"><ul><li><a href="#iterative-prompt-development">Iterative Prompt Development</a></li><li><a href="#setup">Setup</a></li><li><a href="#generate-a-marketing-product-description-from-a-product-fact-sheet">Generate a marketing product description from a product fact sheet</a></li><li><a href="#issue-1-the-text-is-too-long">Issue 1: The text is too long</a></li><li><a href="#issue-2-text-focuses-on-the-wrong-details">Issue 2. Text focuses on the wrong details</a></li><li><a href="#issue-3-description-needs-a-table-of-dimensions">Issue 3. Description needs a table of dimensions</a></li><li><a href="#load-python-libraries-to-view-html">Load Python libraries to view HTML</a></li><li><a href="#try-experimenting-on-your-own">Try experimenting on your own</a></li></ul></nav><h2 id="iterative-prompt-development" tabindex="-1">Iterative Prompt Development <a class="header-anchor" href="#iterative-prompt-development" aria-label="Permalink to &quot;Iterative Prompt Development&quot;">​</a></h2><p>In this lesson, you&#39;ll iteratively analyze and refine your prompts to generate marketing copy from a product fact sheet.</p><h2 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;Setup&quot;">​</a></h2><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> openai</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> os</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> dotenv </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> load_dotenv</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> find_dotenv</span></span>
<span class="line"><span style="color:#A6ACCD;">_ </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">load_dotenv</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">find_dotenv</span><span style="color:#89DDFF;">())</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># read local .env file</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">openai</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">api_key</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> os</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getenv</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">OPENAI_API_KEY</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span></code></pre></div><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">prompt</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">gpt-3.5-turbo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    messages </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">role</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">content</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> prompt</span><span style="color:#89DDFF;">}]</span></span>
<span class="line"><span style="color:#A6ACCD;">    response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> openai</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">ChatCompletion</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#A6ACCD;font-style:italic;">model</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">model</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#A6ACCD;font-style:italic;">messages</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">messages</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#A6ACCD;font-style:italic;">temperature</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#676E95;font-style:italic;"># this is the degree of randomness of the model&#39;s output</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> response</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">choices</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">].</span><span style="color:#F07178;">message</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">content</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span></code></pre></div><h2 id="generate-a-marketing-product-description-from-a-product-fact-sheet" tabindex="-1">Generate a marketing product description from a product fact sheet <a class="header-anchor" href="#generate-a-marketing-product-description-from-a-product-fact-sheet" aria-label="Permalink to &quot;Generate a marketing product description from a product fact sheet&quot;">​</a></h2><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">fact_sheet_chair </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">OVERVIEW</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">- Part of a beautiful family of mid-century inspired office furniture,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">including filing cabinets, desks, bookcases, meeting tables, and more.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">- Several options of shell color and base finishes.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">- Available with plastic back and front upholstery (SWC-100)</span></span>
<span class="line"><span style="color:#C3E88D;">or full upholstery (SWC-110) in 10 fabric and 6 leather options.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">- Base finish options are: stainless steel, matte black,</span></span>
<span class="line"><span style="color:#C3E88D;">gloss white, or chrome.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">- Chair is available with or without armrests.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">- Suitable for home or business settings.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">- Qualified for contract use.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">CONSTRUCTION</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">- 5-wheel plastic coated aluminum base.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">- Pneumatic chair adjust for easy raise/lower action.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">DIMENSIONS</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">- WIDTH 53 CM | 20.87”</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">- DEPTH 51 CM | 20.08”</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">- HEIGHT 80 CM | 31.50”</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">- SEAT HEIGHT 44 CM | 17.32”</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">- SEAT DEPTH 41 CM | 16.14”</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">OPTIONS</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">- Soft or hard-floor caster options.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">- Two choices of seat foam densities:</span></span>
<span class="line"><span style="color:#C3E88D;"> medium (1.8 lb/ft3) or high (2.8 lb/ft3)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">- Armless or 8 position PU armrests</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">MATERIALS</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">SHELL BASE GLIDER</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">- Cast Aluminum with modified nylon PA6/PA66 coating.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">- Shell thickness: 10 mm.</span></span>
<span class="line"><span style="color:#C3E88D;">SEAT</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">- HD36 foam</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">COUNTRY OF ORIGIN</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">- Italy</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;&quot;&quot;</span></span></code></pre></div><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">Your task is to help a marketing team create a</span></span>
<span class="line"><span style="color:#C3E88D;">description for a retail website of a product based</span></span>
<span class="line"><span style="color:#C3E88D;">on a technical fact sheet.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Write a product description based on the information</span></span>
<span class="line"><span style="color:#C3E88D;">provided in the technical specifications delimited by</span></span>
<span class="line"><span style="color:#C3E88D;">triple backticks.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Technical specifications: \`\`\`</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">fact_sheet_chair</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">\`\`\`</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">)</span></span></code></pre></div><blockquote><p>output:</p></blockquote><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Introducing our stunning mid-century inspired office chair, the perfect addition to any home or business setting. This chair is part of a beautiful family of office furniture, including filing cabinets, desks, bookcases, meeting tables, and more, all designed with a timeless mid-century aesthetic.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">One of the standout features of this chair is the variety of customization options available. You can choose from several shell colors and base finishes to perfectly match your existing decor. The chair is available with either plastic back and front upholstery or full upholstery in a range of 10 fabric and 6 leather options, allowing you to create a look that is uniquely yours.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">The chair is also available with or without armrests, giving you the flexibility to choose the option that best suits your needs. The base finish options include stainless steel, matte black, gloss white, or chrome, ensuring that you can find the perfect match for your space.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">In terms of construction, this chair is built to last. It features a 5-wheel plastic coated aluminum base, providing stability and mobility. The pneumatic chair adjust allows for easy raise and lower action, ensuring optimal comfort throughout the day.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">When it comes to dimensions, this chair is designed with both style and comfort in mind. With a width of 53 cm (20.87&quot;), depth of 51 cm (20.08&quot;), and height of 80 cm (31.50&quot;), it offers ample space without overwhelming your space. The seat height is 44 cm (17.32&quot;) and the seat depth is 41 cm (16.14&quot;), providing a comfortable seating experience for extended periods.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">We understand that every space is unique, which is why we offer a range of options to further customize your chair. You can choose between soft or hard-floor caster options, ensuring that your chair glides smoothly on any surface. Additionally, you have the choice between two seat foam densities: medium (1.8 lb/ft3) or high (2.8 lb/ft3), allowing you to select the level of support that suits your preferences. The chair is also available with armless design or 8 position PU armrests, providing additional comfort and versatility.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">When it comes to materials, this chair is crafted with the utmost attention to quality. The shell base glider is made of cast aluminum with a modified nylon PA6/PA66 coating, ensuring durability and longevity. The shell thickness is 10 mm, providing a sturdy and reliable structure. The seat is made of HD36 foam, offering a comfortable and supportive seating experience.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Finally, this chair is proudly made in Italy, known for its exceptional craftsmanship and attention to detail. With its timeless design and superior construction, this chair is not only a stylish addition to any space but also a reliable and functional piece of furniture.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Upgrade your office or home with our mid-century inspired office chair and experience the perfect blend of style, comfort, and functionality.</span></span></code></pre></div><h2 id="issue-1-the-text-is-too-long" tabindex="-1">Issue 1: The text is too long <a class="header-anchor" href="#issue-1-the-text-is-too-long" aria-label="Permalink to &quot;Issue 1: The text is too long&quot;">​</a></h2><ul><li>Limit the number of words/sentences/characters.</li></ul><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">Your task is to help a marketing team create a</span></span>
<span class="line"><span style="color:#C3E88D;">description for a retail website of a product based</span></span>
<span class="line"><span style="color:#C3E88D;">on a technical fact sheet.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Write a product description based on the information</span></span>
<span class="line"><span style="color:#C3E88D;">provided in the technical specifications delimited by</span></span>
<span class="line"><span style="color:#C3E88D;">triple backticks.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Use at most 50 words.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Technical specifications: \`\`\`</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">fact_sheet_chair</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">\`\`\`</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">)</span></span></code></pre></div><blockquote><p>The output :</p></blockquote><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Introducing our mid-century inspired office chair, part of a stunning furniture collection. With various color and finish options, choose between plastic or full upholstery in fabric or leather. The chair features a durable aluminum base with 5 wheels and pneumatic height adjustment. Perfect for home or business use. Made in Italy.</span></span></code></pre></div><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">)</span></span></code></pre></div><blockquote><p>The output :</p></blockquote><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">333</span></span></code></pre></div><h2 id="issue-2-text-focuses-on-the-wrong-details" tabindex="-1">Issue 2. Text focuses on the wrong details <a class="header-anchor" href="#issue-2-text-focuses-on-the-wrong-details" aria-label="Permalink to &quot;Issue 2. Text focuses on the wrong details&quot;">​</a></h2><ul><li>Ask it to focus on the aspects that are relevant to the intended audience.</li></ul><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">Your task is to help a marketing team create a</span></span>
<span class="line"><span style="color:#C3E88D;">description for a retail website of a product based</span></span>
<span class="line"><span style="color:#C3E88D;">on a technical fact sheet.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Write a product description based on the information</span></span>
<span class="line"><span style="color:#C3E88D;">provided in the technical specifications delimited by</span></span>
<span class="line"><span style="color:#C3E88D;">triple backticks.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">The description is intended for furniture retailers,</span></span>
<span class="line"><span style="color:#C3E88D;">so should be technical in nature and focus on the</span></span>
<span class="line"><span style="color:#C3E88D;">materials the product is constructed from.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Use at most 50 words.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Technical specifications: \`\`\`</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">fact_sheet_chair</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">\`\`\`</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">)</span></span></code></pre></div><blockquote><p>output:</p></blockquote><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Introducing our mid-century inspired office chair, part of a beautiful furniture collection. With various shell colors and base finishes, it offers versatility for any setting. Choose between plastic or full upholstery in a range of fabric and leather options. The chair features a durable aluminum base with 5-wheel design and pneumatic chair adjustment. Made in Italy.</span></span></code></pre></div><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">Your task is to help a marketing team create a</span></span>
<span class="line"><span style="color:#C3E88D;">description for a retail website of a product based</span></span>
<span class="line"><span style="color:#C3E88D;">on a technical fact sheet.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Write a product description based on the information</span></span>
<span class="line"><span style="color:#C3E88D;">provided in the technical specifications delimited by</span></span>
<span class="line"><span style="color:#C3E88D;">triple backticks.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">The description is intended for furniture retailers,</span></span>
<span class="line"><span style="color:#C3E88D;">so should be technical in nature and focus on the</span></span>
<span class="line"><span style="color:#C3E88D;">materials the product is constructed from.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">At the end of the description, include every 7-character</span></span>
<span class="line"><span style="color:#C3E88D;">Product ID in the technical specification.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Use at most 50 words.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Technical specifications: \`\`\`</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">fact_sheet_chair</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">\`\`\`</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">)</span></span></code></pre></div><blockquote><p>output:</p></blockquote><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Introducing our mid-century inspired office chair, part of a beautiful family of furniture. With various shell colors and base finishes, this chair offers versatility and style. Choose between plastic or full upholstery in a range of fabric and leather options. The chair features a 5-wheel plastic coated aluminum base and a pneumatic chair adjust for easy height adjustment. Available with or without armrests, this chair is suitable for both home and business settings. Made with high-quality materials, including a cast aluminum shell and HD36 foam seat, this chair is built to last. Product ID: SWC-100, SWC-110.</span></span></code></pre></div><h2 id="issue-3-description-needs-a-table-of-dimensions" tabindex="-1">Issue 3. Description needs a table of dimensions <a class="header-anchor" href="#issue-3-description-needs-a-table-of-dimensions" aria-label="Permalink to &quot;Issue 3. Description needs a table of dimensions&quot;">​</a></h2><ul><li>Ask it to extract information and organize it in a table.</li></ul><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">Your task is to help a marketing team create a</span></span>
<span class="line"><span style="color:#C3E88D;">description for a retail website of a product based</span></span>
<span class="line"><span style="color:#C3E88D;">on a technical fact sheet.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Write a product description based on the information</span></span>
<span class="line"><span style="color:#C3E88D;">provided in the technical specifications delimited by</span></span>
<span class="line"><span style="color:#C3E88D;">triple backticks.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">The description is intended for furniture retailers,</span></span>
<span class="line"><span style="color:#C3E88D;">so should be technical in nature and focus on the</span></span>
<span class="line"><span style="color:#C3E88D;">materials the product is constructed from.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">At the end of the description, include every 7-character</span></span>
<span class="line"><span style="color:#C3E88D;">Product ID in the technical specification.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">After the description, include a table that gives the</span></span>
<span class="line"><span style="color:#C3E88D;">product&#39;s dimensions. The table should have two columns.</span></span>
<span class="line"><span style="color:#C3E88D;">In the first column include the name of the dimension.</span></span>
<span class="line"><span style="color:#C3E88D;">In the second column include the measurements in inches only.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Give the table the title &#39;Product Dimensions&#39;.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Format everything as HTML that can be used in a website.</span></span>
<span class="line"><span style="color:#C3E88D;">Place the description in a &lt;div&gt; element.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Technical specifications: \`\`\`</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">fact_sheet_chair</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">\`\`\`</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">)</span></span></code></pre></div><blockquote><p>output:</p></blockquote><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;h2&gt;Product Description&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Introducing our latest addition to our mid-century inspired office furniture collection - the SWC Chair. This chair is part of a beautiful family of furniture that includes filing cabinets, desks, bookcases, meeting tables, and more. With its sleek design and customizable options, the SWC Chair is the perfect choice for any home or business setting.</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    The SWC Chair offers several options for customization. You can choose from a variety of shell colors and base finishes to match your existing decor. The chair is available with plastic back and front upholstery or full upholstery in a range of fabric and leather options. The base finish options include stainless steel, matte black, gloss white, or chrome. You can also choose whether to have armrests or not, depending on your preference.</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    The construction of the SWC Chair is top-notch. It features a 5-wheel plastic coated aluminum base, ensuring stability and durability. The chair also has a pneumatic adjuster, allowing for easy raise and lower action. This makes it convenient for users to find their desired height and maintain proper posture throughout the day.</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    The SWC Chair is designed with comfort in mind. The seat is made with HD36 foam, providing a plush and supportive cushioning experience. You can also choose between soft or hard-floor caster options, depending on the type of flooring in your space. Additionally, there are two choices of seat foam densities available: medium (1.8 lb/ft3) or high (2.8 lb/ft3). This allows you to customize the level of firmness to suit your preferences.</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    The SWC Chair is not only stylish and comfortable, but it is also built to last. The shell base glider is made of cast aluminum with a modified nylon PA6/PA66 coating, ensuring strength and durability. The shell thickness is 10 mm, providing stability and support. With its high-quality materials and construction, the SWC Chair is qualified for contract use, making it suitable for commercial settings as well.</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Made in Italy, the SWC Chair is a testament to Italian craftsmanship and design. It combines style, functionality, and durability to create a chair that is both aesthetically pleasing and practical.</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;h2&gt;Product Dimensions&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;table&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;th&gt;Dimension&lt;/th&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;th&gt;Measurement (inches)&lt;/th&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;td&gt;Width&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;td&gt;20.87&quot;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;td&gt;Depth&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;td&gt;20.08&quot;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;td&gt;Height&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;td&gt;31.50&quot;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;td&gt;Seat Height&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;td&gt;17.32&quot;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;td&gt;Seat Depth&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;td&gt;16.14&quot;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/table&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Product IDs: SWC-100, SWC-110</span></span></code></pre></div><h2 id="load-python-libraries-to-view-html" tabindex="-1">Load Python libraries to view HTML <a class="header-anchor" href="#load-python-libraries-to-view-html" aria-label="Permalink to &quot;Load Python libraries to view HTML&quot;">​</a></h2><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> IPython</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">display </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> display</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> HTML</span></span></code></pre></div><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">display</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">HTML</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">))</span></span></code></pre></div><blockquote><p>output:</p></blockquote><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Product Description</span></span>
<span class="line"><span style="color:#A6ACCD;">Introducing our latest addition to our mid-century inspired office furniture collection - the SWC Chair. This chair is part of a beautiful family of furniture that includes filing cabinets, desks, bookcases, meeting tables, and more. With its sleek design and customizable options, the SWC Chair is the perfect choice for any home or business setting.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">The SWC Chair offers several options for customization. You can choose from a variety of shell colors and base finishes to match your existing decor. The chair is available with plastic back and front upholstery or full upholstery in a range of fabric and leather options. The base finish options include stainless steel, matte black, gloss white, or chrome. You can also choose whether to have armrests or not, depending on your preference.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">The construction of the SWC Chair is top-notch. It features a 5-wheel plastic coated aluminum base, ensuring stability and durability. The chair also has a pneumatic adjuster, allowing for easy raise and lower action. This makes it convenient for users to find their desired height and maintain proper posture throughout the day.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">The SWC Chair is designed with comfort in mind. The seat is made with HD36 foam, providing a plush and supportive cushioning experience. You can also choose between soft or hard-floor caster options, depending on the type of flooring in your space. Additionally, there are two choices of seat foam densities available: medium (1.8 lb/ft3) or high (2.8 lb/ft3). This allows you to customize the level of firmness to suit your preferences.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">The SWC Chair is not only stylish and comfortable, but it is also built to last. The shell base glider is made of cast aluminum with a modified nylon PA6/PA66 coating, ensuring strength and durability. The shell thickness is 10 mm, providing stability and support. With its high-quality materials and construction, the SWC Chair is qualified for contract use, making it suitable for commercial settings as well.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Made in Italy, the SWC Chair is a testament to Italian craftsmanship and design. It combines style, functionality, and durability to create a chair that is both aesthetically pleasing and practical.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Product Dimensions</span></span>
<span class="line"><span style="color:#A6ACCD;">Dimension	Measurement (inches)</span></span>
<span class="line"><span style="color:#A6ACCD;">Width	20.87&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Depth	20.08&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Height	31.50&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Seat Height	17.32&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Seat Depth	16.14&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Product IDs: SWC-100, SWC-110</span></span></code></pre></div><h2 id="try-experimenting-on-your-own" tabindex="-1">Try experimenting on your own <a class="header-anchor" href="#try-experimenting-on-your-own" aria-label="Permalink to &quot;Try experimenting on your own&quot;">​</a></h2><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># write your own tries</span></span></code></pre></div>`,43),p=[o];function i(c,r,h,y,d,u){return n(),e("div",null,p)}const f=a(l,[["render",i]]);export{m as __pageData,f as default};
