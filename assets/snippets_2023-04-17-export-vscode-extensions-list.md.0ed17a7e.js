import{_ as e,c as s,o as n,a as t}from"./app.a61e2ebf.js";const o="/snippets/2023-04-17/export-vscode-extensions-list.png",_=JSON.parse('{"title":"Export VSCode Extensions List","description":"A command line to export the list of vscode extensions name.","frontmatter":{"layout":"doc","title":"Export VSCode Extensions List","description":"A command line to export the list of vscode extensions name.","head":[["meta",{"name":"keywords","content":"vscode extension export"}],["meta",{"name":"og:type","content":"article"}],["meta",{"name":"og:url","content":"https://muathye.com/snippets/2023-04-17-export-vscode-extensions-list"}],["meta",{"name":"og:title","content":"Export VSCode Extensions List"}],["meta",{"name":"og:description","content":"A command line to export the list of vscode extensions name."}],["meta",{"name":"og:image","content":"https://muathye.com/snippets/2023-04-17/export-vscode-extensions-list.png"}]]},"headers":[],"relativePath":"snippets/2023-04-17-export-vscode-extensions-list.md"}'),a={name:"snippets/2023-04-17-export-vscode-extensions-list.md"},p=t('<p><img src="'+o+`" alt="An image"></p><p><a href="https://ray.so/#code=IyBJbiB2c29kZSB5b3UgY2FuIGV4cG9ydCB0aGUgZXh0ZW5zaW9uIGxpc3QgdG8gZmlsZQoKIyBmb3IgdGhlIGJsdWUgdnNjb2RlCmNvZGUgLS1saXN0LWV4dGVuc2lvbnMgPiBleHRlbnNpb25zLnR4dAoKIyBmb3IgdGhlIGdyZWVuIHZzY29kZQpjb2RlLWluc2lkZXJzIC0tbGlzdC1leHRlbnNpb25zID4gZXh0ZW5zaW9ucy50eHQ&amp;darkMode=true&amp;background=true&amp;title=export-vscode-extensions-list.bat&amp;language=powershell&amp;padding=64" target="_blank" rel="noreferrer">ray.so</a></p><h1 id="export-vscode-extensions-list" tabindex="-1">Export VSCode Extensions List <a class="header-anchor" href="#export-vscode-extensions-list" aria-hidden="true">#</a></h1><p>A command line to export the list of vscode extensions name.</p><div class="language-sh"><button class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#676E95;"># In vsode you can export the extension list to file</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># for the blue vscode</span></span>
<span class="line"><span style="color:#A6ACCD;">code --list-extensions </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> extensions.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># for the green vscode</span></span>
<span class="line"><span style="color:#A6ACCD;">code-insiders --list-extensions </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> extensions.txt</span></span>
<span class="line"></span></code></pre></div>`,5),i=[p];function l(c,r,d,m,x,g){return n(),s("div",null,i)}const u=e(a,[["render",l]]);export{_ as __pageData,u as default};