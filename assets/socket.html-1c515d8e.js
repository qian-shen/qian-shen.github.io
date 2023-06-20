import{_ as n,p as s,q as a,Z as t}from"./framework-6ecfbe9e.js";const o={},p=t(`<h2 id="socket" tabindex="-1"><a class="header-anchor" href="#socket" aria-hidden="true">#</a> Socket</h2><h3 id="dial-函数" tabindex="-1"><a class="header-anchor" href="#dial-函数" aria-hidden="true">#</a> Dial() 函数</h3><ul><li>Dial() 函数原型</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Dial</span><span class="token punctuation">(</span>net<span class="token punctuation">,</span> addr <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>Conn<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
</code></pre></div><p>其中<code>net</code>参数是网络协议的名字，<code>addr</code>参数是 IP 地址或域名，而端口号以<code>:</code>的形式跟随在地址或域名的后面，端口号可选。如果连接成功，返回连接对象，否则返回<code>error</code>。</p><ul><li>一些常见协议的调用方法</li></ul><p><strong>TCP 链接</strong></p><div class="language-go" data-ext="go"><pre class="language-go"><code>conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;192.168.0.10:2100&quot;</span><span class="token punctuation">)</span>
</code></pre></div><p><strong>UDP 链接</strong></p><div class="language-go" data-ext="go"><pre class="language-go"><code>conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;udp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;192.168.0.12:975&quot;</span><span class="token punctuation">)</span>
</code></pre></div><p><strong>ICMP 链接（使用协议名称）</strong></p><div class="language-go" data-ext="go"><pre class="language-go"><code>conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;ip4:icmp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;www.baidu.com&quot;</span><span class="token punctuation">)</span>
</code></pre></div><p><strong>ICMP 链接（使用协议编号）</strong></p><div class="language-go" data-ext="go"><pre class="language-go"><code>conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;ip4:1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;10.0.0.3&quot;</span><span class="token punctuation">)</span>
</code></pre></div><blockquote><p>Dial()函数支持如下几种网络协议：&quot;tcp&quot;、&quot;tcp4&quot;（仅限IPv4）、&quot;tcp6&quot;（仅限IPv6）、&quot;udp&quot;、&quot;udp4&quot;（仅限IPv4）、&quot;udp6&quot;（仅限IPv6）、&quot;ip&quot;、&quot;ip4&quot;（仅限IPv4）和&quot;ip6&quot; （仅限IPv6）。</p></blockquote><h2 id="网络编程" tabindex="-1"><a class="header-anchor" href="#网络编程" aria-hidden="true">#</a> 网络编程</h2><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token comment">// Dial() 函数的原型如下：</span>
<span class="token keyword">func</span> <span class="token function">Dial</span><span class="token punctuation">(</span>net<span class="token punctuation">,</span> addr <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>Conn<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token comment">// 其中 net 参数是网络协议的名字，addr 参数是 IP 地址或域名，而端口号以“:”的形式跟随在地址或域名的后面，端口号可选。如果连接成功，返回连接对象，否则返回 error。</span>

<span class="token comment">// tcp 链接</span>
conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;192.168.0.10:2100&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// udp 链接</span>
conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;udp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;192.168.0.12:975&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// ICMP 链接（使用协议名称）</span>
conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;ip4:icmp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;www.baidu.com&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// ICMP 链接（使用协议编号）</span>
conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;ip4:1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;10.0.0.3&quot;</span><span class="token punctuation">)</span>
</code></pre></div>`,17),c=[p];function e(u,l){return s(),a("div",null,c)}const r=n(o,[["render",e],["__file","socket.html.vue"]]);export{r as default};
