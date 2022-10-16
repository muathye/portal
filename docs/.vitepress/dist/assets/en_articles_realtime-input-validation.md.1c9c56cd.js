import{_ as s,c as a,o as n,a as l}from"./app.26270015.js";const d=JSON.parse('{"title":"Realtime input validation","description":"","frontmatter":{"layout":"doc"},"headers":[{"level":2,"title":"Basic Usage","slug":"basic-usage"}],"relativePath":"en/articles/realtime-input-validation.md"}'),o={name:"en/articles/realtime-input-validation.md"},p=l(`<h1 id="realtime-input-validation" tabindex="-1">Realtime input validation <a class="header-anchor" href="#realtime-input-validation" aria-hidden="true">#</a></h1><p><span style="color:gray;">Updated 21 Aug 2022</span></p><p>Sometimes we need to make a powerful validation like Laravel validation but it works in the backend and we want it to be in font-end specially on the <code>input</code> itself.</p><p>I created a package that makes input validation easy yet like Laravel validation.</p><p>Install the package by using composer:</p><div class="language-bat"><button class="copy"></button><span class="lang">bat</span><pre><code><span class="line"><span style="color:#A6ACCD;">composer require yemeni-open-source/blade-realtime-input</span></span>
<span class="line"></span></code></pre></div><h2 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h2><p>The <code>&lt;input&gt;</code> tag:</p><div class="language-blade"><button class="copy"></button><span class="lang">blade</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-realtime-input::strings</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">username</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rules</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">required|min:5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"></span></code></pre></div><p>The <code>&lt;select&gt;</code> tag:</p><div class="language-blade"><button class="copy"></button><span class="lang">blade</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-realtime-input::options</span><span style="color:#89DDFF;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">rules</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">in:usd,yer</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn btn-default custom-select</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">currency</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">currency</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">option</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">usd</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">USD</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">option</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">option</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">yer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">selected</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">YER</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">option</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">option</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sar</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">SAR</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">option</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">x-realtime-input::options</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>You can add array names like following:</p><div class="language-blade"><button class="copy"></button><span class="lang">blade</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">x-realtime-input::strings</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">username[]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">rules</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">required|min:5</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">form-control</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    /&gt;</span></span>
<span class="line"></span></code></pre></div><p>If you find the package helpful , give it a <a href="https://github.com/Yemeni-Open-Source/blade-realtime-input" target="_blank" rel="noreferrer">star</a> on github that encourage open source community to make it better.</p>`,14),e=[p];function t(c,r,D,F,i,y){return n(),a("div",null,e)}const g=s(o,[["render",t]]);export{d as __pageData,g as default};
