import{_ as n,p as s,q as a,Z as t}from"./framework-6ecfbe9e.js";const o={},p=t(`<h2 id="goroutine" tabindex="-1"><a class="header-anchor" href="#goroutine" aria-hidden="true">#</a> goroutine</h2><ul><li>goroutine 是 Go 语言中的轻量级线程实现，由 Go 运行时（runtime）管理</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    z <span class="token operator">:=</span> x <span class="token operator">+</span> y 
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">go</span> <span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 并发执行</span>
</code></pre></div><p>需要注意的是，如果这个函数有返回值，那么这个返回值会被丢弃。</p><h2 id="并发" tabindex="-1"><a class="header-anchor" href="#并发" aria-hidden="true">#</a> 并发</h2><blockquote><p>通过 go 关键字来开启 goroutine。</p></blockquote><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
        <span class="token string">&quot;fmt&quot;</span>
        <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">say</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
                time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Millisecond<span class="token punctuation">)</span>
                fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">go</span> <span class="token function">say</span><span class="token punctuation">(</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span>
        <span class="token function">say</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,7),e=[p];function c(u,l){return s(),a("div",null,e)}const k=n(o,[["render",c],["__file","goroutine.html.vue"]]);export{k as default};
