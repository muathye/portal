import{_ as s}from"./chunks/chatgpt-prompt-engineering-for-developers-part-1.242329a7.js";import{_ as a,o as n,c as e,S as o}from"./chunks/framework.0c55f2c5.js";const C=JSON.parse(`{"title":"ChatGPT Prompt Engineering for Developers [Part 6/7]","description":"You'll practice two prompting principles and their related tactics in order to write effective prompts for large language models.","frontmatter":{"layout":"doc","title":"ChatGPT Prompt Engineering for Developers [Part 6/7]","description":"You'll practice two prompting principles and their related tactics in order to write effective prompts for large language models.","head":[["meta",{"name":"keywords","content":"chatgpt prompt-engineering developers"}],["meta",{"name":"og:type","content":"article"}],["meta",{"name":"og:url","content":"https://muathye.com/articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-6"}],["meta",{"name":"og:title","content":"ChatGPT Prompt Engineering for Developers [Part 6/7]"}],["meta",{"name":"og:description","content":"You'll practice two prompting principles and their related tactics in order to write effective prompts for large language models."}],["meta",{"name":"og:image","content":"https://muathye.com/articles/2023-05-30/chatgpt-prompt-engineering-for-developers-part-1.webp"}]]},"headers":[],"relativePath":"articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-6.md","filePath":"articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-6.md","lastUpdated":1692868977000}`),l={name:"articles/2023-05-30-chatgpt-prompt-engineering-for-developers-part-6.md"},t=o('<p><img src="'+s+`" alt="An image"></p><p>Photo by <a href="https://unsplash.com/@maria_shalabaieva?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="noreferrer">Mariia Shalabaieva</a> on <a href="https://unsplash.com/s/photos/openai?license=free&amp;utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="noreferrer">Unsplash</a></p><h1 id="chatgpt-prompt-engineering-for-developers-part-6-7" tabindex="-1">ChatGPT Prompt Engineering for Developers [Part 6/7] <a class="header-anchor" href="#chatgpt-prompt-engineering-for-developers-part-6-7" aria-label="Permalink to &quot;ChatGPT Prompt Engineering for Developers [Part 6/7]&quot;">​</a></h1><p>Large Language Models (LLMs) have been a game-changer in the field of artificial intelligence and natural language processing. They have been used in various applications, such as language translation, speech recognition, and chat bots, to name a few. In this article, we&#39;ll dive into the ChatGPT Prompt Engineering for Developers and learn about the best practices for using LLM technology in software applications.</p><nav class="table-of-contents"><ul><li><a href="#expanding">Expanding</a></li><li><a href="#setup">Setup</a></li><li><a href="#customize-the-automated-reply-to-a-customer-email">Customize the automated reply to a customer email</a></li><li><a href="#remind-the-model-to-use-details-from-the-customer-s-email">Remind the model to use details from the customer&#39;s email</a></li><li><a href="#try-experimenting-on-your-own">Try experimenting on your own</a></li></ul></nav><h2 id="expanding" tabindex="-1">Expanding <a class="header-anchor" href="#expanding" aria-label="Permalink to &quot;Expanding&quot;">​</a></h2><p>In this lesson, you will generate customer service emails that are tailored to each customer&#39;s review.</p><h2 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;Setup&quot;">​</a></h2><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> openai</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> os</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> dotenv </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> load_dotenv</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> find_dotenv</span></span>
<span class="line"><span style="color:#A6ACCD;">_ </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">load_dotenv</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">find_dotenv</span><span style="color:#89DDFF;">())</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># read local .env file</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">openai</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">api_key</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> os</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getenv</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">OPENAI_API_KEY</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span></code></pre></div><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">prompt</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">gpt-3.5-turbo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">temperature</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># Andrew mentioned that the prompt/ completion paradigm is preferable for this class</span></span>
<span class="line"><span style="color:#A6ACCD;">    messages </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">role</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">content</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> prompt</span><span style="color:#89DDFF;">}]</span></span>
<span class="line"><span style="color:#A6ACCD;">    response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> openai</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">ChatCompletion</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#A6ACCD;font-style:italic;">model</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">model</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#A6ACCD;font-style:italic;">messages</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">messages</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#A6ACCD;font-style:italic;">temperature</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">temperature</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#676E95;font-style:italic;"># this is the degree of randomness of the model&#39;s output</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> response</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">choices</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">].</span><span style="color:#F07178;">message</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">content</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span></code></pre></div><h2 id="customize-the-automated-reply-to-a-customer-email" tabindex="-1">Customize the automated reply to a customer email <a class="header-anchor" href="#customize-the-automated-reply-to-a-customer-email" aria-label="Permalink to &quot;Customize the automated reply to a customer email&quot;">​</a></h2><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># given the sentiment from the lesson on &quot;inferring&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># and the original customer message, customize the email</span></span>
<span class="line"><span style="color:#A6ACCD;">sentiment </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">negative</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># review for a blender</span></span>
<span class="line"><span style="color:#A6ACCD;">review </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">So, they still had the 17 piece system on seasonal </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">sale for around $49 in the month of November, about </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">half off, but for some reason (call it price gouging) </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">around the second week of December the prices all went </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">up to about anywhere from between $70-$89 for the same </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">system. And the 11 piece system went up around $10 or </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">so in price also from the earlier sale price of $29. </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">So it looks okay, but if you look at the base, the part </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">where the blade locks into place doesn’t look as good </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">as in previous editions from a few years ago, but I </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">plan to be very gentle with it (example, I crush </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">very hard items like beans, ice, rice, etc. in the \\ </span></span>
<span class="line"><span style="color:#C3E88D;">blender first then pulverize them in the serving size </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">I want in the blender then switch to the whipping </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">blade for a finer flour, and use the cross cutting blade </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">first when making smoothies, then use the flat blade </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">if I need them finer/less pulpy). Special tip when making </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">smoothies, finely cut and freeze the fruits and </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">vegetables (if using spinach-lightly stew soften the \\ </span></span>
<span class="line"><span style="color:#C3E88D;">spinach then freeze until ready for use-and if making </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">sorbet, use a small to medium sized food processor) \\ </span></span>
<span class="line"><span style="color:#C3E88D;">that you plan to use that way you can avoid adding so </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">much ice if at all-when making your smoothie. </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">After about a year, the motor was making a funny noise. </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">I called customer service but the warranty expired </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">already, so I had to buy another one. FYI: The overall </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">quality has gone done in these types of products, so </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">they are kind of counting on brand recognition and </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">consumer loyalty to maintain sales. Got it in about </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">two days.</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span></code></pre></div><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">You are a customer service AI assistant.</span></span>
<span class="line"><span style="color:#C3E88D;">Your task is to send an email reply to a valued customer.</span></span>
<span class="line"><span style="color:#C3E88D;">Given the customer email delimited by \`\`\`, </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">Generate a reply to thank the customer for their review.</span></span>
<span class="line"><span style="color:#C3E88D;">If the sentiment is positive or neutral, thank them for </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">their review.</span></span>
<span class="line"><span style="color:#C3E88D;">If the sentiment is negative, apologize and suggest that </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">they can reach out to customer service. </span></span>
<span class="line"><span style="color:#C3E88D;">Make sure to use specific details from the review.</span></span>
<span class="line"><span style="color:#C3E88D;">Write in a concise and professional tone.</span></span>
<span class="line"><span style="color:#C3E88D;">Sign the email as \`AI customer agent\`.</span></span>
<span class="line"><span style="color:#C3E88D;">Customer review: \`\`\`</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">review</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">\`\`\`</span></span>
<span class="line"><span style="color:#C3E88D;">Review sentiment: </span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">sentiment</span><span style="color:#F78C6C;">}</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">)</span></span></code></pre></div><h2 id="remind-the-model-to-use-details-from-the-customer-s-email" tabindex="-1">Remind the model to use details from the customer&#39;s email <a class="header-anchor" href="#remind-the-model-to-use-details-from-the-customer-s-email" aria-label="Permalink to &quot;Remind the model to use details from the customer&#39;s email&quot;">​</a></h2><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">You are a customer service AI assistant.</span></span>
<span class="line"><span style="color:#C3E88D;">Your task is to send an email reply to a valued customer.</span></span>
<span class="line"><span style="color:#C3E88D;">Given the customer email delimited by \`\`\`, </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">Generate a reply to thank the customer for their review.</span></span>
<span class="line"><span style="color:#C3E88D;">If the sentiment is positive or neutral, thank them for </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">their review.</span></span>
<span class="line"><span style="color:#C3E88D;">If the sentiment is negative, apologize and suggest that </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">they can reach out to customer service. </span></span>
<span class="line"><span style="color:#C3E88D;">Make sure to use specific details from the review.</span></span>
<span class="line"><span style="color:#C3E88D;">Write in a concise and professional tone.</span></span>
<span class="line"><span style="color:#C3E88D;">Sign the email as \`AI customer agent\`.</span></span>
<span class="line"><span style="color:#C3E88D;">Customer review: \`\`\`</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">review</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">\`\`\`</span></span>
<span class="line"><span style="color:#C3E88D;">Review sentiment: </span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">sentiment</span><span style="color:#F78C6C;">}</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">temperature</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0.7</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">)</span></span></code></pre></div><h2 id="try-experimenting-on-your-own" tabindex="-1">Try experimenting on your own <a class="header-anchor" href="#try-experimenting-on-your-own" aria-label="Permalink to &quot;Try experimenting on your own&quot;">​</a></h2><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># write your own tries</span></span></code></pre></div>`,17),p=[t];function r(c,i,y,D,F,m){return n(),e("div",null,p)}const d=a(l,[["render",r]]);export{C as __pageData,d as default};
