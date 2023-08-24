import{_ as s,a as t,b as o}from"./chunks/facebook.9107dbc3.js";import{_ as e,o as a,c as p,S as n}from"./chunks/framework.0c55f2c5.js";const l="/snippets/2023-08-03/disable-composer-https-on-project.png",u=JSON.parse('{"title":"Disable composer https on a project.","description":"This is helpfull when you got blocked on https of composer.","frontmatter":{"layout":"doc","title":"Disable composer https on a project.","description":"This is helpfull when you got blocked on https of composer.","head":[["meta",{"name":"keywords","content":"composer disable-tls secure-http"}],["meta",{"name":"og:type","content":"article"}],["meta",{"name":"og:url","content":"https://muathye.com/snippets/2023-08-03-disable-composer-https-on-project"}],["meta",{"name":"og:title","content":"Disable composer https on a project."}],["meta",{"name":"og:description","content":"This is helpfull when you got blocked on https of composer."}],["meta",{"name":"og:image","content":"https://muathye.com/snippets/2023-08-03/disable-composer-https-on-project.png"}]]},"headers":[],"relativePath":"snippets/2023-08-03-disable-composer-https-on-project.md","filePath":"snippets/2023-08-03-disable-composer-https-on-project.md","lastUpdated":1692861106000}'),c={name:"snippets/2023-08-03-disable-composer-https-on-project.md"},r=n('<p><img src="'+l+`" alt="An image"></p><p><a href="https://ray.so/#code=ewogICAgIm5hbWUiOiAibGFyYXZlbC9sYXJhdmVsIiwKICAgIC8vIC4uLgogICAgImNvbmZpZyI6IHsKICAgICAgICAvLyAuLi4KICAgICAgICAiZGlzYWJsZS10bHMiOiB0cnVlLAogICAgICAgICJzZWN1cmUtaHR0cCI6IGZhbHNlCiAgICB9LAogICAgLy8gLi4uCn0K&amp;title=composer.json&amp;theme=breeze" target="_blank" rel="noreferrer">ray.so</a></p><h1 id="disable-composer-https-on-a-project" tabindex="-1">Disable composer https on a project <a class="header-anchor" href="#disable-composer-https-on-a-project" aria-label="Permalink to &quot;Disable composer https on a project&quot;">​</a></h1><p>If your network does not work well with https, you can use following snippet:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">laravel/laravel</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">config</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">disable-tls</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">secure-http</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><div style="display:flex;justify-content:end;"><a href="https://twitter.com/intent/tweet?url=https://muathye.com/snippets/2023-08-03-disable-composer-https-on-project&amp;text=Drop All Tables Of A Database" target="_blank"><img style="height:32px;padding:0 5px;" title="Share on twitter" src="`+s+'"></a><a href="https://api.whatsapp.com/send?text=https://muathye.com/snippets/2023-08-03-disable-composer-https-on-project" target="_blank"><img style="height:32px;padding:0 5px;" title="Share on whatsapp" src="'+t+'"></a><a href="https://www.facebook.com/sharer/sharer.php?u=https://muathye.com/snippets/2023-08-03-disable-composer-https-on-project" target="_blank"><img style="height:32px;padding:0 5px;" title="Share on facebook" src="'+o+'"></a></div>',6),i=[r];function h(m,y,D,d,C,g){return a(),p("div",null,i)}const b=e(c,[["render",h]]);export{u as __pageData,b as default};
