import{_ as s,c as n,o as a,a as e}from"./app.a61e2ebf.js";const l="/articles/2023-05-30/chatgpt-prompt-engineering-for-developers-part-1.jpg",A=JSON.parse(`{"title":"ChatGPT Prompt Engineering for Developers","description":"You'll practice two prompting principles and their related tactics in order to write effective prompts for large language models.","frontmatter":{"layout":"doc","title":"ChatGPT Prompt Engineering for Developers","description":"You'll practice two prompting principles and their related tactics in order to write effective prompts for large language models.","head":[["meta",{"name":"keywords","content":"chatgpt prompt-engineering developers"}],["meta",{"name":"og:type","content":"article"}],["meta",{"name":"og:url","content":"https://muathye.com/snippets/2023-05-30-chatgpt-prompt-engineering-for-developers-part-1"}],["meta",{"name":"og:title","content":"ChatGPT Prompt Engineering for Developers"}],["meta",{"name":"og:description","content":"You'll practice two prompting principles and their related tactics in order to write effective prompts for large language models."}],["meta",{"name":"og:image","content":"https://muathye.com/snippets/2023-05-30/chatgpt-prompt-engineering-for-developers-part-1.png"}]]},"headers":[{"level":2,"title":"Setup","slug":"setup"},{"level":3,"title":"Load the API key and relevant Python libraries","slug":"load-the-api-key-and-relevant-python-libraries"},{"level":3,"title":"Helper function","slug":"helper-function"},{"level":2,"title":"Guidelines for Prompting","slug":"guidelines-for-prompting"},{"level":3,"title":"Principle 1: Write clear and specific instructions","slug":"principle-1-write-clear-and-specific-instructions"},{"level":3,"title":"Principle 2: Give the model time to \u201Cthink\u201D","slug":"principle-2-give-the-model-time-to-\u201Cthink\u201D"},{"level":2,"title":"Model Limitations: Hallucinations","slug":"model-limitations-hallucinations"},{"level":2,"title":"Setup on local environment to use the OpenAI API","slug":"setup-on-local-environment-to-use-the-openai-api"}],"relativePath":"articles/2022-05-30-chatgpt-prompt-engineering-for-developers-part-1.md"}`),o={name:"articles/2022-05-30-chatgpt-prompt-engineering-for-developers-part-1.md"},p=e('<p><img src="'+l+`" alt="An image"></p><p>Photo by <a href="https://unsplash.com/@maria_shalabaieva?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="noreferrer">Mariia Shalabaieva</a> on <a href="https://unsplash.com/s/photos/openai?license=free&amp;utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="noreferrer">Unsplash</a></p><h1 id="chatgpt-prompt-engineering-for-developers-part-1" tabindex="-1">ChatGPT Prompt Engineering for Developers (Part: 1) <a class="header-anchor" href="#chatgpt-prompt-engineering-for-developers-part-1" aria-hidden="true">#</a></h1><p>Large Language Models (LLMs) have been a game-changer in the field of artificial intelligence and natural language processing. They have been used in various applications, such as language translation, speech recognition, and chat bots, to name a few. In this article, we&#39;ll dive into the ChatGPT Prompt Engineering for Developers and learn about the best practices for using LLM technology in software applications.</p><h2 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-hidden="true">#</a></h2><p>You will need knowledge on <a href="https://www.python.org/" target="_blank" rel="noreferrer">Python</a>, <a href="https://jupyter.org/" target="_blank" rel="noreferrer">Jupyter Notebook</a> and a hosted service for your Jupyter Notebooks environment which will be <a href="https://colab.google/" target="_blank" rel="noreferrer">Colab</a>. Google Colab is a hosted Jupyter Notebook service that requires no setup to use and provides free access to computing resources, including GPUs and TPUs.</p><h3 id="load-the-api-key-and-relevant-python-libraries" tabindex="-1">Load the API key and relevant Python libraries <a class="header-anchor" href="#load-the-api-key-and-relevant-python-libraries" aria-hidden="true">#</a></h3><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> openai</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> os</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> dotenv </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> load_dotenv</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> find_dotenv</span></span>
<span class="line"><span style="color:#A6ACCD;">_ </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">load_dotenv</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">find_dotenv</span><span style="color:#89DDFF;">())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">openai</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">api_key</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> os</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getenv</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">OPENAI_API_KEY</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="helper-function" tabindex="-1">Helper function <a class="header-anchor" href="#helper-function" aria-hidden="true">#</a></h3><p>Throughout this article, we will use OpenAI&#39;s <code>gpt-3.5-turbo</code> model and the <a href="https://platform.openai.com/docs/guides/chat" target="_blank" rel="noreferrer">chat completions endpoint</a>.</p><p>This helper function will make it easier to use prompts and look at the generated outputs:</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">prompt</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">gpt-3.5-turbo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    messages </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">role</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">content</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> prompt</span><span style="color:#89DDFF;">}]</span></span>
<span class="line"><span style="color:#A6ACCD;">    response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> openai</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">ChatCompletion</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#A6ACCD;">model</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">model</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#A6ACCD;">messages</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">messages</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#A6ACCD;">temperature</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#676E95;"># this is the degree of randomness of the model&#39;s output</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> response</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">choices</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">].</span><span style="color:#F07178;">message</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">content</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Contact me to integrate <code>ChatGPT</code> with <code>Telegram</code> or <code>WhatsApp</code> for your business.</p></div><h2 id="guidelines-for-prompting" tabindex="-1">Guidelines for Prompting <a class="header-anchor" href="#guidelines-for-prompting" aria-hidden="true">#</a></h2><p>In this step, you&#39;ll practice two prompting principles and their related tactics in order to write effective prompts for large language models.</p><p><strong>Prompting Principles</strong>:</p><ul><li>Principle 1: Write clear and specific instructions</li><li>Principle 2: Give the model time to \u201Cthink\u201D</li></ul><p>You can use any of following <strong>tactics</strong> to help you get perfect answers:</p><h3 id="principle-1-write-clear-and-specific-instructions" tabindex="-1">Principle 1: Write clear and specific instructions <a class="header-anchor" href="#principle-1-write-clear-and-specific-instructions" aria-hidden="true">#</a></h3><h4 id="tactic-1-use-delimiters-to-clearly-indicate-distinct-parts-of-the-input" tabindex="-1">Tactic 1: Use delimiters to clearly indicate distinct parts of the input <a class="header-anchor" href="#tactic-1-use-delimiters-to-clearly-indicate-distinct-parts-of-the-input" aria-hidden="true">#</a></h4><p>Delimiters can be anything like: \`\`\`, &quot;&quot;&quot;, &lt; &gt;, <code>&lt;tag&gt; &lt;/tag&gt;</code>, <code>:</code></p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#A6ACCD;">text </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">You should express what you want a model to do by \\ </span></span>
<span class="line"><span style="color:#C3E88D;">providing instructions that are as clear and \\ </span></span>
<span class="line"><span style="color:#C3E88D;">specific as you can possibly make them. \\ </span></span>
<span class="line"><span style="color:#C3E88D;">This will guide the model towards the desired output, \\ </span></span>
<span class="line"><span style="color:#C3E88D;">and reduce the chances of receiving irrelevant \\ </span></span>
<span class="line"><span style="color:#C3E88D;">or incorrect responses. Don&#39;t confuse writing a \\ </span></span>
<span class="line"><span style="color:#C3E88D;">clear prompt with writing a short prompt. \\ </span></span>
<span class="line"><span style="color:#C3E88D;">In many cases, longer prompts provide more clarity \\ </span></span>
<span class="line"><span style="color:#C3E88D;">and context for the model, which can lead to \\ </span></span>
<span class="line"><span style="color:#C3E88D;">more detailed and relevant outputs.</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">Summarize the text delimited by triple backticks \\ </span></span>
<span class="line"><span style="color:#C3E88D;">into a single sentence.</span></span>
<span class="line"><span style="color:#C3E88D;">\`\`\`</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">text</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">\`\`\`</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><blockquote><p>The output :</p></blockquote><div class="language-txt"><button class="copy"></button><span class="lang">txt</span><pre><code><span class="line"><span style="color:#A6ACCD;">Clear and specific instructions should be provided to guide a model towards the desired output, and longer prompts can provide more clarity and context for the model, leading to more detailed and relevant outputs.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="tactic-2-ask-for-a-structured-output" tabindex="-1">Tactic 2: Ask for a structured output <a class="header-anchor" href="#tactic-2-ask-for-a-structured-output" aria-hidden="true">#</a></h4><ul><li>JSON, HTML</li></ul><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#A6ACCD;">prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">Generate a list of three made-up book titles along \\ </span></span>
<span class="line"><span style="color:#C3E88D;">with their authors and genres. </span></span>
<span class="line"><span style="color:#C3E88D;">Provide them in JSON format with the following keys: </span></span>
<span class="line"><span style="color:#C3E88D;">book_id, title, author, genre.</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><blockquote><p>The output :</p></blockquote><div class="language-txt"><button class="copy"></button><span class="lang">txt</span><pre><code><span class="line"><span style="color:#A6ACCD;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;book_id&quot;: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;title&quot;: &quot;The Lost City of Zorath&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;author&quot;: &quot;Aria Blackwood&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;genre&quot;: &quot;Fantasy&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;book_id&quot;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;title&quot;: &quot;The Last Survivors&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;author&quot;: &quot;Ethan Stone&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;genre&quot;: &quot;Science Fiction&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;book_id&quot;: 3,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;title&quot;: &quot;The Secret Life of Bees&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;author&quot;: &quot;Lila Rose&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;genre&quot;: &quot;Romance&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="tactic-3-ask-the-model-to-check-whether-conditions-are-satisfied" tabindex="-1">Tactic 3: Ask the model to check whether conditions are satisfied <a class="header-anchor" href="#tactic-3-ask-the-model-to-check-whether-conditions-are-satisfied" aria-hidden="true">#</a></h4><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#A6ACCD;">text_1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">Making a cup of tea is easy! First, you need to get some \\ </span></span>
<span class="line"><span style="color:#C3E88D;">water boiling. While that&#39;s happening, \\ </span></span>
<span class="line"><span style="color:#C3E88D;">grab a cup and put a tea bag in it. Once the water is \\ </span></span>
<span class="line"><span style="color:#C3E88D;">hot enough, just pour it over the tea bag. \\ </span></span>
<span class="line"><span style="color:#C3E88D;">Let it sit for a bit so the tea can steep. After a \\ </span></span>
<span class="line"><span style="color:#C3E88D;">few minutes, take out the tea bag. If you \\ </span></span>
<span class="line"><span style="color:#C3E88D;">like, you can add some sugar or milk to taste. \\ </span></span>
<span class="line"><span style="color:#C3E88D;">And that&#39;s it! You&#39;ve got yourself a delicious \\ </span></span>
<span class="line"><span style="color:#C3E88D;">cup of tea to enjoy.</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">You will be provided with text delimited by triple quotes. </span></span>
<span class="line"><span style="color:#C3E88D;">If it contains a sequence of instructions, \\ </span></span>
<span class="line"><span style="color:#C3E88D;">re-write those instructions in the following format:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Step 1 - ...</span></span>
<span class="line"><span style="color:#C3E88D;">Step 2 - \u2026</span></span>
<span class="line"><span style="color:#C3E88D;">\u2026</span></span>
<span class="line"><span style="color:#C3E88D;">Step N - \u2026</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">If the text does not contain a sequence of instructions, \\ </span></span>
<span class="line"><span style="color:#C3E88D;">then simply write </span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">No steps provided.</span><span style="color:#A6ACCD;">\\&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\\&quot;\\&quot;\\&quot;</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">text_1</span><span style="color:#F78C6C;">}</span><span style="color:#A6ACCD;">\\&quot;\\&quot;\\&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Completion for Text 1:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><blockquote><p>The output :</p></blockquote><div class="language-txt"><button class="copy"></button><span class="lang">txt</span><pre><code><span class="line"><span style="color:#A6ACCD;">Completion for Text 1:</span></span>
<span class="line"><span style="color:#A6ACCD;">Step 1 - Get some water boiling.</span></span>
<span class="line"><span style="color:#A6ACCD;">Step 2 - Grab a cup and put a tea bag in it.</span></span>
<span class="line"><span style="color:#A6ACCD;">Step 3 - Once the water is hot enough, pour it over the tea bag.</span></span>
<span class="line"><span style="color:#A6ACCD;">Step 4 - Let it sit for a bit so the tea can steep.</span></span>
<span class="line"><span style="color:#A6ACCD;">Step 5 - After a few minutes, take out the tea bag.</span></span>
<span class="line"><span style="color:#A6ACCD;">Step 6 - Add some sugar or milk to taste.</span></span>
<span class="line"><span style="color:#A6ACCD;">Step 7 - Enjoy your delicious cup of tea!</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#A6ACCD;">text_2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">The sun is shining brightly today, and the birds are </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">singing. It&#39;s a beautiful day to go for a \\ </span></span>
<span class="line"><span style="color:#C3E88D;">walk in the park. The flowers are blooming, and the \\ </span></span>
<span class="line"><span style="color:#C3E88D;">trees are swaying gently in the breeze. People \\ </span></span>
<span class="line"><span style="color:#C3E88D;">are out and about, enjoying the lovely weather. \\ </span></span>
<span class="line"><span style="color:#C3E88D;">Some are having picnics, while others are playing \\ </span></span>
<span class="line"><span style="color:#C3E88D;">games or simply relaxing on the grass. It&#39;s a \\ </span></span>
<span class="line"><span style="color:#C3E88D;">perfect day to spend time outdoors and appreciate the \\ </span></span>
<span class="line"><span style="color:#C3E88D;">beauty of nature.</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">You will be provided with text delimited by triple quotes. </span></span>
<span class="line"><span style="color:#C3E88D;">If it contains a sequence of instructions, \\ </span></span>
<span class="line"><span style="color:#C3E88D;">re-write those instructions in the following format:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Step 1 - ...</span></span>
<span class="line"><span style="color:#C3E88D;">Step 2 - \u2026</span></span>
<span class="line"><span style="color:#C3E88D;">\u2026</span></span>
<span class="line"><span style="color:#C3E88D;">Step N - \u2026</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">If the text does not contain a sequence of instructions, \\ </span></span>
<span class="line"><span style="color:#C3E88D;">then simply write </span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">No steps provided.</span><span style="color:#A6ACCD;">\\&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\\&quot;\\&quot;\\&quot;</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">text_2</span><span style="color:#F78C6C;">}</span><span style="color:#A6ACCD;">\\&quot;\\&quot;\\&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Completion for Text 2:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><blockquote><p>The output :</p></blockquote><div class="language-txt"><button class="copy"></button><span class="lang">txt</span><pre><code><span class="line"><span style="color:#A6ACCD;">Completion for Text 2:</span></span>
<span class="line"><span style="color:#A6ACCD;">No steps provided.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="tactic-4-few-shot-prompting" tabindex="-1">Tactic 4: &quot;Few-shot&quot; prompting <a class="header-anchor" href="#tactic-4-few-shot-prompting" aria-hidden="true">#</a></h4><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#A6ACCD;">prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">Your task is to answer in a consistent style.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">&lt;child&gt;: Teach me about patience.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">&lt;grandparent&gt;: The river that carves the deepest \\ </span></span>
<span class="line"><span style="color:#C3E88D;">valley flows from a modest spring; the \\ </span></span>
<span class="line"><span style="color:#C3E88D;">grandest symphony originates from a single note; \\ </span></span>
<span class="line"><span style="color:#C3E88D;">the most intricate tapestry begins with a solitary thread.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">&lt;child&gt;: Teach me about resilience.</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><p>The output :</p><div class="language-txt"><button class="copy"></button><span class="lang">txt</span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;grandparent&gt;: Resilience is like a tree that bends with the wind but never breaks. It&#39;s the ability to bounce back from adversity and keep moving forward, even when things get tough. Just like a tree needs strong roots to withstand the storm, we need to cultivate inner strength and perseverance to overcome life&#39;s challenges.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="principle-2-give-the-model-time-to-\u201Cthink\u201D" tabindex="-1">Principle 2: Give the model time to \u201Cthink\u201D <a class="header-anchor" href="#principle-2-give-the-model-time-to-\u201Cthink\u201D" aria-hidden="true">#</a></h3><h4 id="tactic-1-specify-the-steps-required-to-complete-a-task" tabindex="-1">Tactic 1: Specify the steps required to complete a task <a class="header-anchor" href="#tactic-1-specify-the-steps-required-to-complete-a-task" aria-hidden="true">#</a></h4><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#A6ACCD;">text </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">In a charming village, siblings Jack and Jill set out on \\ </span></span>
<span class="line"><span style="color:#C3E88D;">a quest to fetch water from a hilltop \\ </span></span>
<span class="line"><span style="color:#C3E88D;">well. As they climbed, singing joyfully, misfortune \\ </span></span>
<span class="line"><span style="color:#C3E88D;">struck\u2014Jack tripped on a stone and tumbled \\ </span></span>
<span class="line"><span style="color:#C3E88D;">down the hill, with Jill following suit. \\ </span></span>
<span class="line"><span style="color:#C3E88D;">Though slightly battered, the pair returned home to \\ </span></span>
<span class="line"><span style="color:#C3E88D;">comforting embraces. Despite the mishap, \\ </span></span>
<span class="line"><span style="color:#C3E88D;">their adventurous spirits remained undimmed, and they \\ </span></span>
<span class="line"><span style="color:#C3E88D;">continued exploring with delight.</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#676E95;"># example 1</span></span>
<span class="line"><span style="color:#A6ACCD;">prompt_1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">Perform the following actions: </span></span>
<span class="line"><span style="color:#C3E88D;">1 - Summarize the following text delimited by triple </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">backticks with 1 sentence.</span></span>
<span class="line"><span style="color:#C3E88D;">2 - Translate the summary into French.</span></span>
<span class="line"><span style="color:#C3E88D;">3 - List each name in the French summary.</span></span>
<span class="line"><span style="color:#C3E88D;">4 - Output a json object that contains the following </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">keys: french_summary, num_names.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Separate your answers with line breaks.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Text:</span></span>
<span class="line"><span style="color:#C3E88D;">\`\`\`</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">text</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">\`\`\`</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt_1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Completion for prompt 1:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><blockquote><p>The output :</p></blockquote><div class="language-txt"><button class="copy"></button><span class="lang">txt</span><pre><code><span class="line"><span style="color:#A6ACCD;">Completion for prompt 1:</span></span>
<span class="line"><span style="color:#A6ACCD;">Two siblings, Jack and Jill, go on a quest to fetch water from a well on a hilltop, but misfortune strikes and they both tumble down the hill, returning home slightly battered but with their adventurous spirits undimmed.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Deux fr\xE8res et s\u0153urs, Jack et Jill, partent en qu\xEAte d&#39;eau d&#39;un puits sur une colline, mais un malheur frappe et ils tombent tous les deux de la colline, rentrant chez eux l\xE9g\xE8rement meurtris mais avec leurs esprits aventureux intacts. </span></span>
<span class="line"><span style="color:#A6ACCD;">Noms: Jack, Jill.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;french_summary&quot;: &quot;Deux fr\xE8res et s\u0153urs, Jack et Jill, partent en qu\xEAte d&#39;eau d&#39;un puits sur une colline, mais un malheur frappe et ils tombent tous les deux de la colline, rentrant chez eux l\xE9g\xE8rement meurtris mais avec leurs esprits aventureux intacts.&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;num_names&quot;: 2</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Ask for output in a specified format</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#A6ACCD;">prompt_2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">Your task is to perform the following actions: </span></span>
<span class="line"><span style="color:#C3E88D;">1 - Summarize the following text delimited by </span></span>
<span class="line"><span style="color:#C3E88D;">  &lt;&gt; with 1 sentence.</span></span>
<span class="line"><span style="color:#C3E88D;">2 - Translate the summary into French.</span></span>
<span class="line"><span style="color:#C3E88D;">3 - List each name in the French summary.</span></span>
<span class="line"><span style="color:#C3E88D;">4 - Output a json object that contains the </span></span>
<span class="line"><span style="color:#C3E88D;">  following keys: french_summary, num_names.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Use the following format:</span></span>
<span class="line"><span style="color:#C3E88D;">Text: &lt;text to summarize&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">Summary: &lt;summary&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">Translation: &lt;summary translation&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">Names: &lt;list of names in Italian summary&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">Output JSON: &lt;json with summary and num_names&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Text: &lt;</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">text</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt_2</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;">Completion for prompt 2:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><blockquote><p>The output :</p></blockquote><div class="language-txt"><button class="copy"></button><span class="lang">txt</span><pre><code><span class="line"><span style="color:#A6ACCD;">Completion for prompt 2:</span></span>
<span class="line"><span style="color:#A6ACCD;">Summary: Jack and Jill go on a quest to fetch water, but misfortune strikes and they tumble down the hill, returning home slightly battered but with their adventurous spirits undimmed. </span></span>
<span class="line"><span style="color:#A6ACCD;">Translation: Jack et Jill partent en qu\xEAte d&#39;eau, mais la malchance frappe et ils d\xE9gringolent la colline, rentrant chez eux l\xE9g\xE8rement meurtris mais avec leurs esprits aventureux intacts.</span></span>
<span class="line"><span style="color:#A6ACCD;">Names: Jack, Jill</span></span>
<span class="line"><span style="color:#A6ACCD;">Output JSON: {&quot;french_summary&quot;: &quot;Jack et Jill partent en qu\xEAte d&#39;eau, mais la malchance frappe et ils d\xE9gringolent la colline, rentrant chez eux l\xE9g\xE8rement meurtris mais avec leurs esprits aventureux intacts.&quot;, &quot;num_names&quot;: 2}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="tactic-2-instruct-the-model-to-work-out-its-own-solution-before-rushing-to-a-conclusion" tabindex="-1">Tactic 2: Instruct the model to work out its own solution before rushing to a conclusion <a class="header-anchor" href="#tactic-2-instruct-the-model-to-work-out-its-own-solution-before-rushing-to-a-conclusion" aria-hidden="true">#</a></h4><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#A6ACCD;">Determine </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> the student</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">s solution is correct or not.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Question</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">I</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">m building a solar power installation and I need </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;"> help working out the financials. </span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> Land costs $</span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> square foot</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> I can buy solar panels </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> $</span><span style="color:#F78C6C;">250</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> square foot</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> I negotiated a contract </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> maintenance that will cost </span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">me a flat $100k per year</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">and</span><span style="color:#A6ACCD;"> an additional $</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> square </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#A6ACCD;">foot</span></span>
<span class="line"><span style="color:#A6ACCD;">What </span><span style="color:#89DDFF;">is</span><span style="color:#A6ACCD;"> the total cost </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> the first year of operations </span></span>
<span class="line"><span style="color:#89DDFF;">as</span><span style="color:#A6ACCD;"> a function of the number of square feet</span><span style="color:#89DDFF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Student</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">s Solution:</span></span>
<span class="line"><span style="color:#A6ACCD;">Let x be the size of the installation </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> square feet</span><span style="color:#89DDFF;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">Costs</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;"> Land</span><span style="color:#A6ACCD;"> cost</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> 100x</span></span>
<span class="line"><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;"> Solar</span><span style="color:#A6ACCD;"> panel cost</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> 250x</span></span>
<span class="line"><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;"> Maintenance</span><span style="color:#A6ACCD;"> cost</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">000</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> 100x</span></span>
<span class="line"><span style="color:#A6ACCD;">Total cost</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> 100x </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> 250x </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">000</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> 100x = 450x </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">000</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">response = get_completion(prompt)</span></span>
<span class="line"><span style="color:#C3E88D;">print(response)</span></span>
<span class="line"></span></code></pre></div><blockquote><p>The output :</p></blockquote><div class="language-txt"><button class="copy"></button><span class="lang">txt</span><pre><code><span class="line"><span style="color:#A6ACCD;">The student&#39;s solution is correct.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">Note</p><p>Note that the student&#39;s solution is actually not correct.</p></div><p>We can fix this by instructing the model to work out its own solution first.</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#A6ACCD;">    prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">    Your task is to determine if the student&#39;s solution </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">    is correct or not.</span></span>
<span class="line"><span style="color:#C3E88D;">    To solve the problem do the following:</span></span>
<span class="line"><span style="color:#C3E88D;">    - First, work out your own solution to the problem. </span></span>
<span class="line"><span style="color:#C3E88D;">    - Then compare your solution to the student&#39;s solution \\ </span></span>
<span class="line"><span style="color:#C3E88D;">    and evaluate if the student&#39;s solution is correct or not. </span></span>
<span class="line"><span style="color:#C3E88D;">    Don&#39;t decide if the student&#39;s solution is correct until </span></span>
<span class="line"><span style="color:#C3E88D;">    you have done the problem yourself.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">    Use the following format:</span></span>
<span class="line"><span style="color:#C3E88D;">    Question:</span></span>
<span class="line"><span style="color:#C3E88D;">    \`\`\`</span></span>
<span class="line"><span style="color:#C3E88D;">    question here</span></span>
<span class="line"><span style="color:#C3E88D;">    \`\`\`</span></span>
<span class="line"><span style="color:#C3E88D;">    Student&#39;s solution:</span></span>
<span class="line"><span style="color:#C3E88D;">    \`\`\`</span></span>
<span class="line"><span style="color:#C3E88D;">    student&#39;s solution here</span></span>
<span class="line"><span style="color:#C3E88D;">    \`\`\`</span></span>
<span class="line"><span style="color:#C3E88D;">    Actual solution:</span></span>
<span class="line"><span style="color:#C3E88D;">    \`\`\`</span></span>
<span class="line"><span style="color:#C3E88D;">    steps to work out the solution and your solution here</span></span>
<span class="line"><span style="color:#C3E88D;">    \`\`\`</span></span>
<span class="line"><span style="color:#C3E88D;">    Is the student&#39;s solution the same as actual solution </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">    just calculated:</span></span>
<span class="line"><span style="color:#C3E88D;">    \`\`\`</span></span>
<span class="line"><span style="color:#C3E88D;">    yes or no</span></span>
<span class="line"><span style="color:#C3E88D;">    \`\`\`</span></span>
<span class="line"><span style="color:#C3E88D;">    Student grade:</span></span>
<span class="line"><span style="color:#C3E88D;">    \`\`\`</span></span>
<span class="line"><span style="color:#C3E88D;">    correct or incorrect</span></span>
<span class="line"><span style="color:#C3E88D;">    \`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">    Question:</span></span>
<span class="line"><span style="color:#C3E88D;">    \`\`\`</span></span>
<span class="line"><span style="color:#C3E88D;">    I&#39;m building a solar power installation and I need help </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">    working out the financials. </span></span>
<span class="line"><span style="color:#C3E88D;">    - Land costs $100 / square foot</span></span>
<span class="line"><span style="color:#C3E88D;">    - I can buy solar panels for $250 / square foot</span></span>
<span class="line"><span style="color:#C3E88D;">    - I negotiated a contract for maintenance that will cost </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">    me a flat $100k per year, and an additional $10 / square </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">    foot</span></span>
<span class="line"><span style="color:#C3E88D;">    What is the total cost for the first year of operations </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">    as a function of the number of square feet.</span></span>
<span class="line"><span style="color:#C3E88D;">    \`\`\` </span></span>
<span class="line"><span style="color:#C3E88D;">    Student&#39;s solution:</span></span>
<span class="line"><span style="color:#C3E88D;">    \`\`\`</span></span>
<span class="line"><span style="color:#C3E88D;">    Let x be the size of the installation in square feet.</span></span>
<span class="line"><span style="color:#C3E88D;">    Costs:</span></span>
<span class="line"><span style="color:#C3E88D;">    1. Land cost: 100x</span></span>
<span class="line"><span style="color:#C3E88D;">    2. Solar panel cost: 250x</span></span>
<span class="line"><span style="color:#C3E88D;">    3. Maintenance cost: 100,000 + 100x</span></span>
<span class="line"><span style="color:#C3E88D;">    Total cost: 100x + 250x + 100,000 + 100x = 450x + 100,000</span></span>
<span class="line"><span style="color:#C3E88D;">    \`\`\`</span></span>
<span class="line"><span style="color:#C3E88D;">    Actual solution:</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><blockquote><p>The output :</p></blockquote><div class="language-txt"><button class="copy"></button><span class="lang">txt</span><pre><code><span class="line"><span style="color:#A6ACCD;">Let x be the size of the installation in square feet.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Costs:</span></span>
<span class="line"><span style="color:#A6ACCD;">1. Land cost: 100x</span></span>
<span class="line"><span style="color:#A6ACCD;">2. Solar panel cost: 250x</span></span>
<span class="line"><span style="color:#A6ACCD;">3. Maintenance cost: 100,000 + 10x</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Total cost: 100x + 250x + 100,000 + 10x = 360x + 100,000</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Is the student&#39;s solution the same as actual solution just calculated:</span></span>
<span class="line"><span style="color:#A6ACCD;">No</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Student grade:</span></span>
<span class="line"><span style="color:#A6ACCD;">Incorrect</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="model-limitations-hallucinations" tabindex="-1">Model Limitations: Hallucinations <a class="header-anchor" href="#model-limitations-hallucinations" aria-hidden="true">#</a></h2><p><strong>Boie is a real company, the product name is not real.</strong></p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#A6ACCD;">prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">Tell me about AeroGlide UltraSlim Smart Toothbrush by Boie</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><blockquote><p>The output :</p></blockquote><div class="language-txt"><button class="copy"></button><span class="lang">txt</span><pre><code><span class="line"><span style="color:#A6ACCD;">The AeroGlide UltraSlim Smart Toothbrush by Boie is a high-tech toothbrush that uses advanced sonic technology to provide a deep and thorough clean. It features a slim and sleek design that makes it easy to hold and maneuver, and it comes with a range of smart features that help you optimize your brushing routine.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">One of the key features of the AeroGlide UltraSlim Smart Toothbrush is its advanced sonic technology, which uses high-frequency vibrations to break up plaque and bacteria on your teeth and gums. This technology is highly effective at removing even the toughest stains and buildup, leaving your teeth feeling clean and refreshed.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">In addition to its sonic technology, the AeroGlide UltraSlim Smart Toothbrush also comes with a range of smart features that help you optimize your brushing routine. These include a built-in timer that ensures you brush for the recommended two minutes, as well as a pressure sensor that alerts you if you&#39;re brushing too hard.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Overall, the AeroGlide UltraSlim Smart Toothbrush by Boie is a highly advanced and effective toothbrush that is perfect for anyone looking to take their oral hygiene to the next level. With its advanced sonic technology and smart features, it provides a deep and thorough clean that leaves your teeth feeling fresh and healthy.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="setup-on-local-environment-to-use-the-openai-api" tabindex="-1">Setup on local environment to use the OpenAI API <a class="header-anchor" href="#setup-on-local-environment-to-use-the-openai-api" aria-hidden="true">#</a></h2><p>To install the OpenAI Python library:</p><div class="language-sh"><button class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">pip install openai</span></span>
<span class="line"></span></code></pre></div><p>The library needs to be configured with your account&#39;s secret key, which is available on the website.</p><p>You can either set it as the <code>OPENAI_API_KEY</code> environment variable before using the library:</p><div class="language-sh"><button class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">export OPENAI_API_KEY=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sk-...</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><p>Or, set <code>openai.api_key</code> to its value:</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> openai</span></span>
<span class="line"><span style="color:#A6ACCD;">openai</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">api_key</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sk-...</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">A note about the backslash</p><ul><li>In the article, we are using a backslash \\ to make the text fit on the screen without inserting newline &#39;\\n&#39; characters.</li><li>GPT-3 isn&#39;t really affected whether you insert newline characters or not. But when working with LLMs in general, you may consider whether newline characters in your prompt may affect the model&#39;s performance.</li></ul></div>`,72),t=[p];function c(r,i,y,u,D,C){return a(),n("div",null,t)}const d=s(o,[["render",c]]);export{A as __pageData,d as default};
